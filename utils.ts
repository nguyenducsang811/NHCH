
import { Question, QuestionMeta, EnvType, QuestionType, SubjectCode, LevelCode } from './types';
import { GRADE_TO_CODE, CURRICULUM_DATA } from './constants';

export const hashContent = (text: string): string => {
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    const char = text.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return hash.toString(16);
};

/**
 * Cấu trúc ID BẮT BUỘC: %[Lớp][Môn][Chương][Mức][Bài]-[Dạng]
 * Lớp: 0,1,2 (10,11,12) hoặc 6,7,8,9
 * Môn: D, H, X
 * Chương, Bài, Dạng: Số nguyên
 */
export const ID_REGEX = /%\[(\d)([A-Z])(\d+)([NHVC])(\d+)-(\d+)\]/;

export const parseId = (idStr: string): QuestionMeta => {
  const match = idStr.match(ID_REGEX);
  if (match) {
    const grade = match[1];
    const subject = match[2];
    const chapter = match[3];
    const level = match[4];
    const lesson = match[5];
    const form = match[6];
    
    return {
      valid: true,
      grade,
      subject,
      chapter,
      level,
      lesson,
      form,
      rawId: match[0],
      qType: 'C' 
    };
  }
  // Thử parse lỏng lẻo để lấy thông tin phục vụ báo lỗi
  const looseMatch = idStr.match(/%\[(\d+)([A-Z])(\d+)(.)(\d+)-(\d+)\]/);
  if (looseMatch) {
      return { 
          valid: false, grade: looseMatch[1], subject: looseMatch[2], 
          chapter: looseMatch[3], level: looseMatch[4], lesson: looseMatch[5], 
          form: looseMatch[6], rawId: looseMatch[0], qType: 'T' 
      };
  }
  return { valid: false, grade: '', subject: '', chapter: '', level: '', lesson: '', form: '', rawId: '', qType: 'T' };
};

export interface FilterState {
  grade?: string;
  subject?: string;
  chapter?: string;
  lesson?: string;
  level?: string;
}

export const validateQuestionWithFilters = (q: Question, filters: FilterState): { isMismatch: boolean; reasons: string[]; fieldStatus: any } => {
  const m = q.meta;
  const reasons: string[] = [];
  const status = { grade: true, subject: true, chapter: true, level: true, lesson: true, form: true };

  // --- 1. KIỂM TRA TÍNH HỢP LỆ NỘI TẠI CỦA ID (SO VỚI HỆ THỐNG CONSTANTS) ---
  const gradeKey = Object.entries(GRADE_TO_CODE).find(([k, v]) => v === m.grade)?.[0];
  
  if (!gradeKey) {
      reasons.push("Mã Lớp không tồn tại (phải là 0,1,2,6,7,8,9)");
      status.grade = false;
  } else {
      const gradeData = CURRICULUM_DATA[gradeKey];
      const subjectData = gradeData[m.subject as SubjectCode];
      
      if (!subjectData) {
          reasons.push(`Môn ${m.subject} không có trong Lớp ${gradeKey}`);
          status.subject = false;
      } else {
          const chapterObj = subjectData.find(c => c.code === m.chapter);
          if (!chapterObj) {
              reasons.push(`Chương ${m.chapter} không tồn tại trong Lớp ${gradeKey} - Môn ${m.subject}`);
              status.chapter = false;
          } else {
              const lessonObj = chapterObj.lessons.find(l => l.code === m.lesson);
              if (!lessonObj) {
                  reasons.push(`Bài ${m.lesson} không thuộc Chương ${m.chapter}`);
                  status.lesson = false;
              }
          }
      }
  }

  if (!['N', 'H', 'V', 'C'].includes(m.level)) {
      reasons.push("Mã Mức độ sai (phải là N,H,V,C)");
      status.level = false;
  }

  // --- 2. KIỂM TRA SO VỚI BỘ LỌC ĐANG CHỌN TRÊN UI (NẾU CÓ) ---
  if (filters.grade && filters.grade !== 'ALL') {
      const targetGradeCode = GRADE_TO_CODE[filters.grade] || filters.grade;
      if (m.grade !== targetGradeCode) {
          reasons.push(`Không khớp Lớp đang lọc (${filters.grade})`);
          status.grade = false;
      }
  }
  if (filters.subject && filters.subject !== 'ALL' && m.subject !== filters.subject) {
      reasons.push(`Không khớp Môn đang lọc (${filters.subject})`);
      status.subject = false;
  }
  if (filters.chapter && filters.chapter !== 'ALL' && m.chapter !== filters.chapter) {
      reasons.push(`Không khớp Chương đang lọc (${filters.chapter})`);
      status.chapter = false;
  }
  if (filters.lesson && filters.lesson !== 'ALL' && m.lesson !== filters.lesson) {
      reasons.push(`Không khớp Bài đang lọc (${filters.lesson})`);
      status.lesson = false;
  }
  if (filters.level && filters.level !== 'ALL' && filters.level !== 'KEEP' && m.level !== filters.level) {
      reasons.push(`Không khớp Mức độ đang lọc (${filters.level})`);
      status.level = false;
  }

  return {
    isMismatch: reasons.length > 0,
    reasons,
    fieldStatus: status
  };
};

export const parseLatex = (text: string): Question[] => {
  const questions: Question[] = [];
  const pattern = /\\begin\{(ex|vd|bt)\}(?:\[.*?\])?(.*?)\\end\{\1\}/gs;
  let match;
  
  while ((match = pattern.exec(text)) !== null) {
    const env = match[1] as EnvType;
    const fullBlock = match[2].trim();
    
    // Tìm mã %[...] ngay sau \begin
    const idMatch = fullBlock.match(/%\[.*?\]/);
    let idString = '';
    let body = fullBlock;
    
    if (idMatch) {
      idString = idMatch[0];
      body = fullBlock.replace(idString, '').trim();
    } else {
      idString = '[?][Chưa_Gán_ID]';
    }
    
    const meta = parseId(idString);
    const cHash = hashContent(body.replace(/\s+/g, ''));

    let qType: QuestionType = 'T'; 
    if (body.includes('\\choiceTF')) qType = 'F';
    else if (body.includes('\\choice')) qType = 'C';

    questions.push({
      uid: Math.random().toString(36).substr(2, 9) + Date.now(),
      env,
      type: qType,
      idString,
      rawId: idString,
      isValidId: meta.valid,
      meta: { ...meta, qType },
      level: meta.level || 'N',
      content: body.split('\\loigiai')[0].trim(),
      options: [],
      correctAnswer: '',
      solution: body.includes('\\loigiai') ? body.split('\\loigiai')[1].trim() : '',
      fullCode: `\\begin{${env}}${idString}\n${body}\n\\end{${env}}`,
      contentHash: cHash
    });
  }
  return questions;
};
