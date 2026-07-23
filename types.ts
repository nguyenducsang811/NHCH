
export type GradeCode = '6' | '7' | '8' | '9' | '0' | '1' | '2';
export type SubjectCode = 'D' | 'H' | 'C' | 'X';
export type LevelCode = 'N' | 'H' | 'V' | 'C';
export type EnvType = 'ex' | 'vd' | 'bt';
export type QuestionType = 'C' | 'F' | 'T'; // Trắc nghiệm, Đúng/Sai, Tự luận

export interface QuestionMeta {
  valid: boolean;
  grade: string;
  subject: string;
  chapter: string;
  level: string;
  lesson: string;
  form: string;
  rawId: string;
  qType: QuestionType;
}

export interface Question {
  uid: string;
  env: EnvType;
  type: QuestionType;
  idString: string; // The full %[T][ID] string
  rawId: string; // Just the ID part, e.g., 1H2V3-4
  isValidId: boolean;
  meta: QuestionMeta;
  level: string;
  content: string;
  options: string[];
  correctAnswer: string;
  solution: string;
  fullCode: string;
  contentHash: string;
}

export interface CurriculumLesson {
  code: string;
  title: string;
  types: { code: string; title: string }[];
}

export interface CurriculumChapter {
  code: string;
  title: string;
  lessons: CurriculumLesson[];
}

export interface CurriculumGrade {
  code: string;
  D?: CurriculumChapter[];
  H?: CurriculumChapter[];
  C?: CurriculumChapter[];
  X?: CurriculumChapter[];
}
