import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Question, QuestionType, LevelCode, SubjectCode } from '../types';
import { 
  Search, Trash2, CheckSquare, XSquare, 
  Dices, LayoutGrid, ArrowDownToLine, 
  RotateCcw, Code, 
  FileText, Database, Square, X, PlusCircle, Trash, Copy, AlertTriangle, ExternalLink,
  Hash, ChevronRight, CheckSquare as CheckIcon, Eraser, Plus, ListFilter, Save,
  PlusSquare, Play, CheckCircle, Filter, ChevronUp, ChevronDown, Copy as CopyIcon, Loader2,
  ScanSearch, ShieldCheck, Zap, Wand2, Target, FileUp, Upload
} from 'lucide-react';
import { LEVEL_MAP, GRADE_MAP, SUBJECT_MAP, CURRICULUM_DATA, GRADE_TO_CODE } from '../constants';
import { parseLatex, validateQuestionWithFilters, ID_REGEX, parseId } from '../utils';

// --- QUICK LOAD MODAL ---
const QuickLoadModal = ({ onClose, onLoaded }: { onClose: () => void, onLoaded: (qs: Question[]) => void }) => {
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleProcess = () => {
    if (!input.trim()) return;
    const parsed = parseLatex(input);
    if (parsed.length > 0) {
      onLoaded(parsed);
      alert(`Đã nạp thành công ${parsed.length} câu hỏi vào kho!`);
      onClose();
    } else {
      alert("Không tìm thấy mã câu hỏi hợp lệ trong văn bản.");
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setIsProcessing(true);
    let allParsedQuestions: Question[] = [];
    let filesProcessed = 0;

    const readFile = (file: File): Promise<string> => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (event) => resolve(event.target?.result as string);
        reader.readAsText(file);
      });
    };

    try {
      for (let i = 0; i < files.length; i++) {
        const text = await readFile(files[i]);
        const parsed = parseLatex(text);
        allParsedQuestions = [...allParsedQuestions, ...parsed];
        filesProcessed++;
      }

      if (allParsedQuestions.length > 0) {
        onLoaded(allParsedQuestions);
        alert(`Đã nạp thành công ${allParsedQuestions.length} câu hỏi từ ${filesProcessed} tệp!`);
        onClose();
      } else {
        alert("Không tìm thấy mã câu hỏi hợp lệ trong các tệp đã chọn.");
      }
    } catch (error) {
      alert("Có lỗi xảy ra trong quá trình đọc file.");
      console.error(error);
    } finally {
      setIsProcessing(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  return (
    <div className="fixed inset-0 z-[1100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div className="bg-[#1e293b] border border-slate-700 w-full max-w-2xl rounded-[32px] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="p-6 border-b border-slate-700 flex justify-between items-center bg-slate-800/50">
          <h3 className="text-sm font-black uppercase text-white tracking-widest flex items-center gap-2">
            <FileUp size={20} className="text-blue-400" /> Nạp câu hỏi nhanh (LaTeX)
          </h3>
          <button onClick={onClose} className="text-slate-500 hover:text-white p-2 hover:bg-slate-700 rounded-full transition-all"><X size={20}/></button>
        </div>
        <div className="p-6 space-y-4 flex-1 flex flex-col min-h-0">
          <p className="text-xs text-slate-400 italic">Dán mã LaTeX trực tiếp hoặc chọn nhiều tệp tin từ máy tính:</p>
          <textarea 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 w-full bg-slate-900/50 border border-slate-700 rounded-2xl p-4 font-mono text-sm text-blue-200 outline-none focus:border-blue-500/50 transition-all resize-none custom-scrollbar min-h-[300px]"
            placeholder="\begin{ex}... \end{ex}"
          />
          <div className="flex gap-4">
             <input type="file" accept="*" multiple className="hidden" ref={fileInputRef} onChange={handleFileUpload} />
             <button 
                disabled={isProcessing}
                onClick={() => fileInputRef.current?.click()} 
                className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all border border-slate-700 disabled:opacity-50"
             >
               {isProcessing ? <Loader2 size={18} className="animate-spin" /> : <Upload size={18} />} 
               Chọn tệp tin
             </button>
             <button 
                disabled={isProcessing || !input.trim()}
                onClick={handleProcess} 
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-xl shadow-blue-900/20 transition-all active:scale-95 disabled:opacity-50"
             >
               <FileUp size={18} /> Nạp dữ liệu văn bản
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- DUPLICATE SETTINGS MODAL ---
const DuplicateSettingsModal = ({ onClose, onStart }: { onClose: () => void, onStart: (threshold: number) => void }) => {
  return (
    <div className="fixed inset-0 z-[1100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-[#1e293b] border border-slate-700 w-full max-w-md rounded-[32px] shadow-2xl overflow-hidden animate-in zoom-in duration-200">
        <div className="p-6 border-b border-slate-700 flex justify-between items-center">
          <h3 className="text-sm font-black uppercase text-white tracking-widest flex items-center gap-2">
            <Eraser size={20} className="text-amber-400" /> Thiết lập lọc trùng
          </h3>
          <button onClick={onClose} className="text-slate-500 hover:text-white"><X size={20}/></button>
        </div>
        <div className="p-6 space-y-4">
          <p className="text-xs text-slate-400 italic">Chọn mức độ nhạy để hệ thống quét các nội dung tương tự nhau trong kho dữ liệu:</p>
          <button onClick={() => onStart(1.0)} className="w-full p-4 bg-slate-900/50 hover:bg-emerald-500/10 border border-slate-700 hover:border-emerald-500/50 rounded-2xl flex items-center gap-4 transition-all group">
            <div className="p-3 bg-emerald-500/20 rounded-xl text-emerald-400 group-hover:scale-110 transition-transform"><ShieldCheck size={24}/></div>
            <div className="text-left">
              <div className="text-sm font-black text-white">Mức 1: Tuyệt đối (100%)</div>
              <div className="text-[10px] text-slate-500">Chỉ tìm các câu giống hệt từng ký tự</div>
            </div>
          </button>
          <button onClick={() => onStart(0.99)} className="w-full p-4 bg-slate-900/50 hover:bg-amber-500/10 border border-slate-700 hover:border-amber-500/50 rounded-2xl flex items-center gap-4 transition-all group">
            <div className="p-3 bg-amber-500/20 rounded-xl text-amber-400 group-hover:scale-110 transition-transform"><ScanSearch size={24}/></div>
            <div className="text-left">
              <div className="text-sm font-black text-white">Mức 2: Rất cao (99%)</div>
              <div className="text-[10px] text-slate-500">Bỏ qua sai khác nhỏ về dấu câu, khoảng trắng</div>
            </div>
          </button>
          <button onClick={() => onStart(0.97)} className="w-full p-4 bg-slate-900/50 hover:bg-rose-500/10 border border-slate-700 hover:border-rose-500/50 rounded-2xl flex items-center gap-4 transition-all group">
            <div className="p-3 bg-rose-500/20 rounded-xl text-rose-400 group-hover:scale-110 transition-transform"><Zap size={24}/></div>
            <div className="text-left">
              <div className="text-sm font-black text-white">Mức 3: Cao (97%)</div>
              <div className="text-[10px] text-slate-500">Tìm các câu có cấu trúc/số liệu tương đồng</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

// --- MATRIX ROW ---
const MatrixRow = ({ data, allQuestions, onUpdate, onRemove }: any) => {
  const chapters = useMemo(() => (data.grade !== 'ALL' && data.subject !== 'ALL') ? (CURRICULUM_DATA[data.grade]?.[data.subject as SubjectCode] || []) : [], [data.grade, data.subject]);
  const currentChapter = useMemo(() => chapters.find(c => c.code === data.chapter), [chapters, data.chapter]);
  const lessons = useMemo(() => currentChapter?.lessons || [], [currentChapter]);
  const currentLesson = useMemo(() => lessons.find(l => l.code === data.lesson), [lessons, data.lesson]);
  const forms = useMemo(() => currentLesson?.types || [], [currentLesson]);

  const availablePool = useMemo(() => {
    return allQuestions.filter((q: Question) => {
      const qGrade = q.meta.grade === '0' ? '10' : q.meta.grade === '1' ? '11' : q.meta.grade === '2' ? '12' : q.meta.grade;
      if (data.grade !== 'ALL' && qGrade !== data.grade) return false;
      if (data.subject !== 'ALL' && q.meta.subject !== data.subject) return false;
      if (data.chapter !== 'ALL' && q.meta.chapter !== data.chapter) return false;
      if (data.lesson !== 'ALL' && q.meta.lesson !== data.lesson) return false;
      if (data.form !== 'ALL' && q.meta.form !== data.form) return false;
      if (data.level !== 'ALL' && q.level !== data.level) return false;
      if (data.type !== 'ALL' && q.type !== data.type) return false;
      return true;
    });
  }, [allQuestions, data]);

  const selectStyle = "w-full h-10 bg-slate-900/80 border border-slate-700/50 rounded-xl px-2 text-[11px] font-bold outline-none text-white focus:border-indigo-500/50 transition-all appearance-none cursor-pointer";
  
  return (
    <tr className="border-b border-slate-800/30 hover:bg-white/5 transition-colors">
      <td className="p-2">
        <select value={data.grade} onChange={e => onUpdate(data.id, { grade: e.target.value, subject: 'ALL', chapter: 'ALL', lesson: 'ALL', form: 'ALL' })} className={selectStyle}>
          <option value="ALL">Lớp</option>
          {Object.entries(GRADE_MAP).map(([k, v]) => <option key={k} value={k === '0' ? '10' : k === '1' ? '11' : k === '2' ? '12' : k}>{v}</option>)}
        </select>
      </td>
      <td className="p-2">
        <select value={data.subject} onChange={e => onUpdate(data.id, { subject: e.target.value, chapter: 'ALL', lesson: 'ALL', form: 'ALL' })} className={selectStyle}>
          <option value="ALL">Môn</option>
          {data.grade !== 'ALL' && Object.keys(CURRICULUM_DATA[data.grade] || {}).filter(k => k !== 'code').map(s => <option key={s} value={s}>{SUBJECT_MAP[s as SubjectCode] || s}</option>)}
        </select>
      </td>
      <td className="p-2 min-w-[180px]">
        <select value={data.chapter} onChange={e => onUpdate(data.id, { chapter: e.target.value, lesson: 'ALL', form: 'ALL' })} className={selectStyle}>
          <option value="ALL">Chương</option>
          {chapters.map(c => <option key={c.code} value={c.code}>{c.title}</option>)}
        </select>
      </td>
      <td className="p-2 min-w-[180px]">
        <select value={data.lesson} onChange={e => onUpdate(data.id, { lesson: e.target.value, form: 'ALL' })} className={selectStyle}>
          <option value="ALL">Bài</option>
          {lessons.map(l => <option key={l.code} value={l.code}>{l.title}</option>)}
        </select>
      </td>
      <td className="p-2">
        <select value={data.form} onChange={e => onUpdate(data.id, { form: e.target.value })} className={selectStyle}>
          <option value="ALL">Dạng</option>
          {forms.map(f => <option key={f.code} value={f.code}>{f.code} - {f.title}</option>)}
        </select>
      </td>
      <td className="p-2">
        <select value={data.level} onChange={e => onUpdate(data.id, { level: e.target.value })} className={selectStyle}>
          <option value="ALL">Mức</option>
          {Object.entries(LEVEL_MAP).map(([k, v]) => <option key={k} value={k}>{k}</option>)}
        </select>
      </td>
      <td className="p-2">
        <select value={data.type} onChange={e => onUpdate(data.id, { type: e.target.value })} className={selectStyle}>
          <option value="ALL">Loại</option>
          <option value="C">Trắc nghiệm</option>
          <option value="F">Đúng/Sai</option>
          <option value="T">Tự luận</option>
        </select>
      </td>
      <td className="p-2 text-center font-bold text-slate-500 text-[11px]">{availablePool.length}</td>
      <td className="p-2 w-24">
        <input 
          type="number" 
          min="0" 
          max={availablePool.length}
          value={data.neededCount} 
          onChange={e => onUpdate(data.id, { neededCount: Math.min(availablePool.length, Math.max(0, parseInt(e.target.value) || 0)) })} 
          className="w-full h-10 bg-[#0f172a] border border-slate-700 rounded-xl text-center text-[12px] font-black text-blue-400 outline-none focus:border-indigo-500 transition-all"
        />
      </td>
      <td className="p-2 text-center">
        <button onClick={() => onRemove(data.id)} className="p-2 text-rose-500 hover:bg-rose-500/10 rounded-lg transition-all"><Trash2 size={18}/></button>
      </td>
    </tr>
  );
};

// --- RANDOM MODAL ---
const RandomSelectionModal = ({ questions, onClose, onConfirm }: any) => {
  const [activeTab, setActiveTab] = useState<'MATRIX' | 'SMART'>('SMART');
  const [rows, setRows] = useState<any[]>([{ id: '1', grade: 'ALL', subject: 'ALL', chapter: 'ALL', lesson: 'ALL', form: 'ALL', type: 'ALL', level: 'ALL', neededCount: 0 }]);
  
  interface LevelCounts {
    N: number;
    H: number;
    V: number;
    C: number;
  }

  interface SmartPickConfig {
    grade: string;
    subject: string;
    chapter: string;
    lesson: string;
    selectedTypes: { C: boolean; F: boolean; T: boolean };
    targets: { C: number; F: number; T: number };
    useCustomLevels: boolean;
    customLevelTargets: {
      C: LevelCounts;
      F: LevelCounts;
      T: LevelCounts;
    };
  }

  const [smartConfig, setSmartConfig] = useState<SmartPickConfig>(() => {
    const saved = localStorage.getItem('smartPickConfig_v3');
    if (saved) {
      try { 
        const parsed = JSON.parse(saved); 
        return {
          useCustomLevels: false,
          customLevelTargets: {
            C: { N: 6, H: 6, V: 4, C: 4 },
            F: { N: 3, H: 3, V: 2, C: 2 },
            T: { N: 6, H: 6, V: 4, C: 4 }
          },
          ...parsed
        };
      } catch (e) { console.error(e); }
    }
    return { 
      grade: '10', subject: 'D', chapter: '1', lesson: '1', 
      selectedTypes: { C: true, F: true, T: true },
      targets: { C: 20, F: 10, T: 20 },
      useCustomLevels: false,
      customLevelTargets: {
        C: { N: 6, H: 6, V: 4, C: 4 },
        F: { N: 3, H: 3, V: 2, C: 2 },
        T: { N: 6, H: 6, V: 4, C: 4 }
      }
    };
  });

  const bankIndex = useMemo(() => {
    const index: any = {};
    questions.forEach((q: Question) => {
      const g = q.meta.grade === '0' ? '10' : q.meta.grade === '1' ? '11' : q.meta.grade === '2' ? '12' : q.meta.grade;
      const s = q.meta.subject;
      const c = q.meta.chapter;
      const l = q.meta.lesson;

      const key = `${g}-${s}`;
      if (!index[key]) index[key] = { C: 0, F: 0, T: 0, total: 0, chapters: new Set(), lessons: {} };
      
      const chapKey = `${key}-${c}`;
      if (!index[key].lessons[c]) index[key].lessons[c] = new Set();
      
      const lessonKey = `${chapKey}-${l}`;
      if (!index[lessonKey]) index[lessonKey] = { C: 0, F: 0, T: 0, total: 0 };
      
      index[key].chapters.add(c);
      index[key].lessons[c].add(l);
      index[key][q.type as QuestionType]++;
      index[key].total++;
      index[lessonKey][q.type as QuestionType]++;
      index[lessonKey].total++;
    });
    return index;
  }, [questions]);

  const dynamicChapters = useMemo(() => {
    const key = `${smartConfig.grade}-${smartConfig.subject}`;
    const codesInBank = bankIndex[key]?.chapters || new Set<string>();
    const curriculum = CURRICULUM_DATA[smartConfig.grade]?.[smartConfig.subject as SubjectCode] || [];
    const result = [...curriculum];
    codesInBank.forEach(code => {
      if (!result.find(c => c.code === code)) result.push({ code, title: `Chương ${code} (Dữ liệu nạp)`, lessons: [] });
    });
    return result.sort((a, b) => parseInt(a.code) - parseInt(b.code));
  }, [bankIndex, smartConfig.grade, smartConfig.subject]);

  const dynamicLessons = useMemo(() => {
    const key = `${smartConfig.grade}-${smartConfig.subject}`;
    const codesInBank = bankIndex[key]?.lessons[smartConfig.chapter] || new Set<string>();
    const curriculum = dynamicChapters.find(c => c.code === smartConfig.chapter)?.lessons || [];
    const result = [...curriculum];
    codesInBank.forEach(code => {
      if (!result.find(l => l.code === code)) result.push({ code, title: `Bài ${code} (Dữ liệu nạp)`, types: [] });
    });
    return result.sort((a, b) => parseInt(a.code) - parseInt(b.code));
  }, [bankIndex, smartConfig.grade, smartConfig.subject, smartConfig.chapter, dynamicChapters]);

  // Statistics for currently selected Grade, Subject, Chapter, Lesson
  const lessonPool = useMemo(() => {
    const targetGradeCode = GRADE_TO_CODE[smartConfig.grade];
    return questions.filter((q: Question) => 
      q.meta.grade === targetGradeCode &&
      q.meta.subject === smartConfig.subject &&
      q.meta.chapter === smartConfig.chapter &&
      q.meta.lesson === smartConfig.lesson
    );
  }, [questions, smartConfig.grade, smartConfig.subject, smartConfig.chapter, smartConfig.lesson]);

  const availableStats = useMemo(() => {
    const stats = {
      C: { total: 0, N: 0, H: 0, V: 0, C: 0, forms: new Set<string>() },
      F: { total: 0, N: 0, H: 0, V: 0, C: 0, forms: new Set<string>() },
      T: { total: 0, N: 0, H: 0, V: 0, C: 0, forms: new Set<string>() },
      totalForms: new Set<string>()
    };

    lessonPool.forEach((q: Question) => {
      const type = q.type as keyof typeof stats;
      if (stats[type]) {
        stats[type].total++;
        let lv = q.level;
        if (lv === '1') lv = 'N';
        if (lv === '2') lv = 'H';
        if (lv === '3') lv = 'V';
        if (lv === '4') lv = 'C';
        
        if (lv === 'N' || lv === 'H' || lv === 'V' || lv === 'C') {
          stats[type][lv]++;
        }
        if (q.meta.form) {
          stats[type].forms.add(q.meta.form);
          stats.totalForms.add(q.meta.form);
        }
      }
    });

    return stats;
  }, [lessonPool]);

  const updateSmartConfig = (updates: Partial<SmartPickConfig>) => {
    setSmartConfig(prev => {
      const next = { ...prev, ...updates };
      if (updates.grade || updates.subject) {
        const newChapters = CURRICULUM_DATA[next.grade]?.[next.subject as SubjectCode] || [];
        next.chapter = newChapters[0]?.code || '1';
        const newLessons = newChapters[0]?.lessons || [];
        next.lesson = newLessons[0]?.code || '1';
      }
      else if (updates.chapter) {
        const currentChapter = dynamicChapters.find(c => c.code === next.chapter);
        next.lesson = currentChapter?.lessons[0]?.code || '1';
      }
      localStorage.setItem('smartPickConfig_v3', JSON.stringify(next));
      return next;
    });
  };

  const addRow = () => {
    const lastRow = rows[rows.length - 1];
    setRows([...rows, { ...lastRow, id: Math.random().toString(36).substr(2, 9), neededCount: 0 }]);
  };

  const updateRow = (id: string, newData: any) => setRows(rows.map(r => r.id === id ? { ...r, ...newData } : r));
  const removeRow = (id: string) => rows.length > 1 && setRows(rows.filter(r => r.id !== id));

  const handleSmartExecute = () => {
    const activeTypes = (Object.entries(smartConfig.selectedTypes)
      .filter(([_, val]) => val)
      .map(([key]) => key)) as QuestionType[];

    if (activeTypes.length === 0) {
      alert("Vui lòng chọn ít nhất một loại câu hỏi!");
      return;
    }

    const targetGradeCode = GRADE_TO_CODE[smartConfig.grade];
    const finalSelected: Question[] = [];
    const usedUids = new Set<string>();

    activeTypes.forEach(type => {
      let levelTargets: Record<LevelCode, number>;

      if (smartConfig.useCustomLevels) {
        const customLT = smartConfig.customLevelTargets[type] || { N: 0, H: 0, V: 0, C: 0 };
        levelTargets = {
          'N': Math.max(0, customLT.N || 0),
          'H': Math.max(0, customLT.H || 0),
          'V': Math.max(0, customLT.V || 0),
          'C': Math.max(0, customLT.C || 0)
        };
      } else {
        const typeTargetTotal = smartConfig.targets[type] || 0;
        if (typeTargetTotal <= 0) return;
        levelTargets = {
          'N': Math.round(typeTargetTotal * 0.3),
          'H': Math.round(typeTargetTotal * 0.3),
          'V': Math.round(typeTargetTotal * 0.2),
          'C': 0
        };
        levelTargets.C = Math.max(0, typeTargetTotal - (levelTargets.N + levelTargets.H + levelTargets.V));
      }

      const typePool = questions.filter((q: Question) => 
        q.meta.grade === targetGradeCode &&
        q.meta.subject === smartConfig.subject &&
        q.meta.chapter === smartConfig.chapter &&
        q.meta.lesson === smartConfig.lesson &&
        q.type === type
      );

      if (typePool.length === 0) return;

      const levels: LevelCode[] = ['N', 'H', 'V', 'C'];
      
      levels.forEach(lv => {
        const targetForLevel = levelTargets[lv];
        if (targetForLevel <= 0) return;

        const levelPool = typePool.filter(q => {
          let qLv = q.level;
          if (qLv === '1') qLv = 'N';
          if (qLv === '2') qLv = 'H';
          if (qLv === '3') qLv = 'V';
          if (qLv === '4') qLv = 'C';
          return qLv === lv && !usedUids.has(q.uid);
        });

        if (levelPool.length === 0) return;

        // Group levelPool by form (dạng bài) to ensure round-robin distribution (phủ rộng các dạng bài)
        const availableForms = Array.from(new Set(levelPool.map(q => q.meta.form || '1'))).sort();
        
        // Shuffle questions within each form group for randomness
        const formGroups: Record<string, Question[]> = {};
        availableForms.forEach(f => {
          formGroups[f] = levelPool.filter(q => (q.meta.form || '1') === f).sort(() => Math.random() - 0.5);
        });

        let levelPickedCount = 0;
        let formIndex = 0;

        while (levelPickedCount < targetForLevel) {
          let progressInRound = false;
          
          for (let i = 0; i < availableForms.length; i++) {
            const currentForm = availableForms[(formIndex + i) % availableForms.length];
            const group = formGroups[currentForm];
            
            const nextQIndex = group.findIndex(q => !usedUids.has(q.uid));
            if (nextQIndex !== -1) {
              const picked = group.splice(nextQIndex, 1)[0];
              finalSelected.push(picked);
              usedUids.add(picked.uid);
              levelPickedCount++;
              progressInRound = true;
              if (levelPickedCount >= targetForLevel) break;
            }
          }
          
          if (!progressInRound) break; // Exhausted available pool for this level
          formIndex = (formIndex + 1) % availableForms.length;
        }
      });
    });

    if (finalSelected.length === 0) {
      alert("Không tìm thấy câu hỏi nào phù hợp trong kho dữ liệu!");
    } else {
      onConfirm(finalSelected);
    }
  };

  const handleMatrixExecute = () => {
    let globalSelectedUids = new Set<string>();
    let finalQuestions: Question[] = [];

    rows.forEach(row => {
      if (row.neededCount <= 0) return;
      let pool = questions.filter((q: Question) => {
        const qGrade = q.meta.grade === '0' ? '10' : q.meta.grade === '1' ? '11' : q.meta.grade === '2' ? '12' : q.meta.grade;
        return (row.grade === 'ALL' || qGrade === row.grade) && 
               (row.subject === 'ALL' || q.meta.subject === row.subject) && 
               (row.chapter === 'ALL' || q.meta.chapter === row.chapter) && 
               (row.lesson === 'ALL' || q.meta.lesson === row.lesson) && 
               (row.form === 'ALL' || q.meta.form === row.form) && 
               (row.level === 'ALL' || q.level === row.level) && 
               (row.type === 'ALL' || q.type === row.type) && 
               !globalSelectedUids.has(q.uid);
      });
      if (pool.length === 0) return;
      const groups: Record<string, Question[]> = {};
      pool.forEach(q => {
        const key = `${q.meta.lesson}_${q.meta.form}_${q.level}`;
        if (!groups[key]) groups[key] = [];
        groups[key].push(q);
      });
      Object.keys(groups).forEach(k => groups[k] = groups[k].sort(() => Math.random() - 0.5));
      const groupKeys = Object.keys(groups).sort(() => Math.random() - 0.5);
      let count = 0;
      while (count < row.neededCount) {
        let pickedInThisRound = false;
        for (const key of groupKeys) {
          if (groups[key].length > 0) {
            const picked = groups[key].pop()!;
            globalSelectedUids.add(picked.uid);
            finalQuestions.push(picked);
            count++;
            pickedInThisRound = true;
            if (count >= row.neededCount) break;
          }
        }
        if (!pickedInThisRound) break;
      }
    });
    onConfirm(finalQuestions);
  };

  const typeMapInfo = [
    { key: 'C', name: 'Trắc nghiệm', available: availableStats.C },
    { key: 'F', name: 'Đúng / Sai', available: availableStats.F },
    { key: 'T', name: 'Tự luận / Trả lời ngắn', available: availableStats.T }
  ] as const;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/90 backdrop-blur-md p-3 sm:p-4 animate-in fade-in duration-200">
      <div className="bg-[#1e293b] border border-slate-700/80 w-full max-w-5xl rounded-3xl shadow-2xl flex flex-col max-h-[92vh] h-auto overflow-hidden">
        
        {/* Modal Header */}
        <div className="px-5 py-3.5 border-b border-slate-700/80 flex flex-wrap items-center justify-between gap-3 bg-slate-800/80">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-indigo-500/20 rounded-lg text-indigo-400">
                <Dices size={20} />
              </div>
              <h2 className="text-xs sm:text-sm font-black uppercase text-white tracking-wider">
                Bốc câu hỏi tự động
              </h2>
            </div>
            
            <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800">
              <button 
                onClick={() => setActiveTab('SMART')} 
                className={`px-3.5 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all flex items-center gap-1.5 ${activeTab === 'SMART' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'}`}
              >
                <Wand2 size={13}/> Bốc theo bài học
              </button>
              <button 
                onClick={() => setActiveTab('MATRIX')} 
                className={`px-3.5 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all ${activeTab === 'MATRIX' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'}`}
              >
                Ma trận tùy chỉnh
              </button>
            </div>
          </div>

          <button onClick={onClose} className="p-1.5 hover:bg-slate-700 rounded-full transition-all text-slate-400 hover:text-white">
            <X size={22}/>
          </button>
        </div>
        
        {/* Modal Body */}
        <div className="flex-1 overflow-auto p-4 sm:p-5 custom-scrollbar space-y-4">
          {activeTab === 'MATRIX' ? (
            <div className="space-y-4">
              <table className="w-full text-left text-[11px] border-separate border-spacing-y-1.5">
                <thead className="sticky top-0 bg-[#1e293b] z-20">
                  <tr className="text-slate-400 uppercase font-black tracking-wider text-[10px]">
                    <th className="p-2 pb-2">Lớp</th>
                    <th className="p-2 pb-2">Môn</th>
                    <th className="p-2 pb-2">Chương</th>
                    <th className="p-2 pb-2">Bài</th>
                    <th className="p-2 pb-2">Dạng</th>
                    <th className="p-2 pb-2">Mức</th>
                    <th className="p-2 pb-2">Loại</th>
                    <th className="p-2 pb-2 text-center">Có</th>
                    <th className="p-2 pb-2 text-center">Lấy</th>
                    <th className="p-2 pb-2 text-center">Xóa</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map(row => <MatrixRow key={row.id} data={row} allQuestions={questions} onUpdate={updateRow} onRemove={removeRow} />)}
                </tbody>
              </table>
              <button onClick={addRow} className="w-full h-11 border border-dashed border-slate-700 hover:border-indigo-500/50 hover:bg-indigo-500/5 text-slate-400 hover:text-indigo-400 rounded-xl flex items-center justify-center gap-2 font-black uppercase text-[10px] tracking-wider transition-all group">
                <PlusCircle size={18} className="group-hover:scale-110 transition-transform"/> Thêm dòng cấu hình
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              
              {/* Scope Selection: Grade, Subject, Chapter, Lesson */}
              <div className="bg-slate-900/60 p-3.5 rounded-2xl border border-slate-800/90 space-y-2.5">
                <div className="text-[10px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <ListFilter size={14} className="text-indigo-400" /> Chọn phạm vi bài học
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
                  <div className="space-y-1">
                    <label className="text-[9px] font-bold text-slate-400 uppercase ml-1">Khối lớp</label>
                    <select value={smartConfig.grade} onChange={e => updateSmartConfig({grade: e.target.value})} className="w-full h-9 bg-slate-950 border border-slate-700/80 rounded-xl px-2.5 text-white font-bold outline-none focus:border-indigo-500 text-xs shadow-inner">
                      {Object.entries(GRADE_MAP).map(([k, v]) => <option key={k} value={k === '0' ? '10' : k === '1' ? '11' : k === '2' ? '12' : k}>{v}</option>)}
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] font-bold text-slate-400 uppercase ml-1">Phân môn</label>
                    <select value={smartConfig.subject} onChange={e => updateSmartConfig({subject: e.target.value})} className="w-full h-9 bg-slate-950 border border-slate-700/80 rounded-xl px-2.5 text-white font-bold outline-none focus:border-indigo-500 text-xs shadow-inner">
                      {Object.entries(SUBJECT_MAP).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
                    </select>
                  </div>
                  <div className="space-y-1 col-span-2 md:col-span-1">
                    <label className="text-[9px] font-bold text-slate-400 uppercase ml-1">Chương học</label>
                    <select value={smartConfig.chapter} onChange={e => updateSmartConfig({chapter: e.target.value})} className="w-full h-9 bg-slate-950 border border-slate-700/80 rounded-xl px-2.5 text-white font-bold outline-none focus:border-indigo-500 truncate text-xs shadow-inner">
                      {dynamicChapters.map(c => <option key={c.code} value={c.code}>{c.title}</option>)}
                    </select>
                  </div>
                  <div className="space-y-1 col-span-2 md:col-span-1">
                    <label className="text-[9px] font-bold text-slate-400 uppercase ml-1">Bài học</label>
                    <select value={smartConfig.lesson} onChange={e => updateSmartConfig({lesson: e.target.value})} className="w-full h-9 bg-slate-950 border border-slate-700/80 rounded-xl px-2.5 text-white font-bold outline-none focus:border-indigo-500 truncate text-xs shadow-inner">
                      {dynamicLessons.map(l => <option key={l.code} value={l.code}>{l.title}</option>)}
                    </select>
                  </div>
                </div>
              </div>

              {/* Mode Toggle: Auto 3:3:2:2 vs Custom Level Counts */}
              <div className="flex flex-wrap items-center justify-between gap-2.5 bg-slate-900/60 p-3 rounded-2xl border border-slate-800">
                <div className="flex items-center gap-2 text-xs font-black text-slate-200">
                  <Zap size={16} className="text-amber-400" />
                  <span>Chế độ phân bổ Mức độ câu hỏi:</span>
                </div>
                <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800">
                  <button 
                    onClick={() => updateSmartConfig({ useCustomLevels: false })}
                    className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all ${!smartConfig.useCustomLevels ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'}`}
                  >
                    ⚡ Tỉ lệ 3:3:2:2 Tự động
                  </button>
                  <button 
                    onClick={() => updateSmartConfig({ useCustomLevels: true })}
                    className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all ${smartConfig.useCustomLevels ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'}`}
                  >
                    ⚙️ Tùy chỉnh số câu NB - TH - VD - VDC
                  </button>
                </div>
              </div>

              {/* Cards for Question Types (Trắc nghiệm, Đúng/Sai, Tự luận) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {typeMapInfo.map(tInfo => {
                  const typeKey = tInfo.key as QuestionType;
                  const isChecked = smartConfig.selectedTypes[typeKey];
                  const totalInBank = tInfo.available.total;
                  
                  return (
                    <div 
                      key={typeKey} 
                      className={`p-3.5 rounded-2xl border transition-all ${
                        isChecked 
                          ? 'bg-slate-900/80 border-indigo-500/50 shadow-lg' 
                          : 'bg-slate-950/40 border-slate-800/80 opacity-60'
                      }`}
                    >
                      {/* Card Header */}
                      <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800/80">
                        <div className="flex items-center gap-2">
                          <input 
                            type="checkbox" 
                            id={`check-${typeKey}`} 
                            checked={isChecked} 
                            onChange={e => updateSmartConfig({
                              selectedTypes: { ...smartConfig.selectedTypes, [typeKey]: e.target.checked }
                            })} 
                            className="w-4 h-4 rounded accent-indigo-500 cursor-pointer" 
                          />
                          <label htmlFor={`check-${typeKey}`} className="text-xs font-black text-white uppercase tracking-wider cursor-pointer">
                            {tInfo.name}
                          </label>
                        </div>
                        <span className="px-2 py-0.5 bg-slate-950 rounded-md border border-slate-800 text-[9px] font-black text-slate-400">
                          Kho: {totalInBank}
                        </span>
                      </div>

                      {/* Input fields based on useCustomLevels toggle */}
                      {!smartConfig.useCustomLevels ? (
                        <div className="space-y-2">
                          <label className="text-[9px] font-bold text-slate-400 uppercase">Tổng số câu cần bốc</label>
                          <div className="relative">
                            <input 
                              type="number" 
                              disabled={!isChecked}
                              min="0"
                              max={totalInBank}
                              value={smartConfig.targets[typeKey]} 
                              onChange={e => updateSmartConfig({
                                targets: { ...smartConfig.targets, [typeKey]: parseInt(e.target.value) || 0 }
                              })}
                              className="w-full h-11 bg-slate-950 border border-slate-700/80 rounded-xl px-4 text-lg font-black text-indigo-400 outline-none focus:border-indigo-500 text-center shadow-inner"
                            />
                          </div>
                          
                          {/* Calculated 3:3:2:2 Preview */}
                          {isChecked && (
                            <div className="text-[9px] text-slate-400 font-bold bg-slate-950/80 p-2 rounded-lg border border-slate-800/80 text-center space-x-1.5">
                              <span className="text-blue-400">NB: {Math.round((smartConfig.targets[typeKey] || 0) * 0.3)}</span>
                              <span>•</span>
                              <span className="text-emerald-400">TH: {Math.round((smartConfig.targets[typeKey] || 0) * 0.3)}</span>
                              <span>•</span>
                              <span className="text-amber-400">VD: {Math.round((smartConfig.targets[typeKey] || 0) * 0.2)}</span>
                              <span>•</span>
                              <span className="text-rose-400">VDC: {Math.max(0, (smartConfig.targets[typeKey] || 0) - Math.round((smartConfig.targets[typeKey] || 0)*0.3)*2 - Math.round((smartConfig.targets[typeKey] || 0)*0.2))}</span>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <div className="grid grid-cols-2 gap-2">
                            {/* NB */}
                            <div className="bg-slate-950/80 p-2 rounded-xl border border-slate-800 space-y-1">
                              <div className="flex justify-between items-center text-[9px]">
                                <span className="font-black text-blue-400 uppercase">1. NB</span>
                                <span className="text-slate-500 font-semibold">Kho:{tInfo.available.N}</span>
                              </div>
                              <input 
                                type="number" 
                                disabled={!isChecked}
                                min="0"
                                max={tInfo.available.N}
                                value={smartConfig.customLevelTargets[typeKey]?.N ?? 0}
                                onChange={e => updateSmartConfig({
                                  customLevelTargets: {
                                    ...smartConfig.customLevelTargets,
                                    [typeKey]: { ...smartConfig.customLevelTargets[typeKey], N: parseInt(e.target.value) || 0 }
                                  }
                                })}
                                className="w-full h-8 bg-slate-900 border border-slate-700/60 rounded-lg text-center text-xs font-black text-white outline-none focus:border-indigo-500"
                              />
                            </div>

                            {/* TH */}
                            <div className="bg-slate-950/80 p-2 rounded-xl border border-slate-800 space-y-1">
                              <div className="flex justify-between items-center text-[9px]">
                                <span className="font-black text-emerald-400 uppercase">2. TH</span>
                                <span className="text-slate-500 font-semibold">Kho:{tInfo.available.H}</span>
                              </div>
                              <input 
                                type="number" 
                                disabled={!isChecked}
                                min="0"
                                max={tInfo.available.H}
                                value={smartConfig.customLevelTargets[typeKey]?.H ?? 0}
                                onChange={e => updateSmartConfig({
                                  customLevelTargets: {
                                    ...smartConfig.customLevelTargets,
                                    [typeKey]: { ...smartConfig.customLevelTargets[typeKey], H: parseInt(e.target.value) || 0 }
                                  }
                                })}
                                className="w-full h-8 bg-slate-900 border border-slate-700/60 rounded-lg text-center text-xs font-black text-white outline-none focus:border-indigo-500"
                              />
                            </div>

                            {/* VD */}
                            <div className="bg-slate-950/80 p-2 rounded-xl border border-slate-800 space-y-1">
                              <div className="flex justify-between items-center text-[9px]">
                                <span className="font-black text-amber-400 uppercase">3. VD</span>
                                <span className="text-slate-500 font-semibold">Kho:{tInfo.available.V}</span>
                              </div>
                              <input 
                                type="number" 
                                disabled={!isChecked}
                                min="0"
                                max={tInfo.available.V}
                                value={smartConfig.customLevelTargets[typeKey]?.V ?? 0}
                                onChange={e => updateSmartConfig({
                                  customLevelTargets: {
                                    ...smartConfig.customLevelTargets,
                                    [typeKey]: { ...smartConfig.customLevelTargets[typeKey], V: parseInt(e.target.value) || 0 }
                                  }
                                })}
                                className="w-full h-8 bg-slate-900 border border-slate-700/60 rounded-lg text-center text-xs font-black text-white outline-none focus:border-indigo-500"
                              />
                            </div>

                            {/* VDC */}
                            <div className="bg-slate-950/80 p-2 rounded-xl border border-slate-800 space-y-1">
                              <div className="flex justify-between items-center text-[9px]">
                                <span className="font-black text-rose-400 uppercase">4. VDC</span>
                                <span className="text-slate-500 font-semibold">Kho:{tInfo.available.C}</span>
                              </div>
                              <input 
                                type="number" 
                                disabled={!isChecked}
                                min="0"
                                max={tInfo.available.C}
                                value={smartConfig.customLevelTargets[typeKey]?.C ?? 0}
                                onChange={e => updateSmartConfig({
                                  customLevelTargets: {
                                    ...smartConfig.customLevelTargets,
                                    [typeKey]: { ...smartConfig.customLevelTargets[typeKey], C: parseInt(e.target.value) || 0 }
                                  }
                                })}
                                className="w-full h-8 bg-slate-900 border border-slate-700/60 rounded-lg text-center text-xs font-black text-white outline-none focus:border-indigo-500"
                              />
                            </div>
                          </div>

                          {/* Sum label */}
                          {isChecked && (
                            <div className="text-[10px] font-black text-indigo-400 text-right pr-1">
                              Tổng cộng: {(smartConfig.customLevelTargets[typeKey]?.N || 0) + (smartConfig.customLevelTargets[typeKey]?.H || 0) + (smartConfig.customLevelTargets[typeKey]?.V || 0) + (smartConfig.customLevelTargets[typeKey]?.C || 0)} câu
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Form Coverage Guarantee Card */}
              <div className="bg-slate-900/40 p-3 rounded-2xl border border-slate-800 flex items-center justify-between text-[11px] text-slate-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={18} className="text-emerald-400 flex-shrink-0" />
                  <span>
                    Bật thuật toán <strong className="text-white">Phủ đều dạng bài (Form)</strong>: Tự động bốc xoay vòng qua tất cả <strong className="text-indigo-400">{availableStats.totalForms.size} dạng bài</strong> có trong bài học.
                  </span>
                </div>
                <span className="text-[9px] font-bold px-2 py-0.5 bg-emerald-500/10 text-emerald-400 rounded border border-emerald-500/20 whitespace-nowrap">
                  Ưu tiên phủ ≥ 2/3 dạng
                </span>
              </div>

            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3.5 border-t border-slate-700/80 flex justify-between items-center bg-slate-800/80">
          <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-2">
            <CheckCircle size={16} className="text-emerald-500"/>
            <span>Sẵn sàng bốc câu hỏi</span>
          </div>
          <div className="flex gap-3 items-center">
            <button onClick={onClose} className="px-4 py-2 text-[11px] font-black uppercase text-slate-400 hover:text-white tracking-wider transition-all">
              Hủy bỏ
            </button>
            <button 
              onClick={activeTab === 'MATRIX' ? handleMatrixExecute : handleSmartExecute} 
              className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-[11px] font-black uppercase tracking-wider shadow-lg shadow-indigo-900/30 active:scale-95 transition-all flex items-center gap-2"
            >
              <Dices size={18}/>
              {activeTab === 'MATRIX' ? 'Bốc theo ma trận' : 'Bốc ngay'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

interface ManageQuestionsProps {
  questions: Question[];
  onAddToExam: (qs: Question[]) => void;
  onDelete: (uids: string[]) => void;
  setQuestions: React.Dispatch<React.SetStateAction<Question[]>>;
  onTransferToVerifier: (qs: Question[]) => void;
}

const ManageQuestions: React.FC<ManageQuestionsProps> = ({ questions, onAddToExam, onDelete, setQuestions, onTransferToVerifier }) => {
  const [fGrade, setFGrade] = useState<string>('ALL');
  const [fSub, setFSub] = useState<SubjectCode | 'ALL'>('ALL');
  const [fChap, setFChap] = useState<string>('ALL');
  const [fLes, setFLes] = useState<string>('ALL');
  const [fForm, setFForm] = useState<string>('ALL');
  const [fLevel, setFLevel] = useState<LevelCode | 'ALL'>('ALL');
  const [fType, setFType] = useState<QuestionType | 'ALL'>('ALL');
  const [searchTerm, setSearchTerm] = useState('');
  
  const [showFilters, setShowFilters] = useState(false);
  const [activeTab, setActiveTab] = useState<'NGANHANG' | 'IDLOI'>('NGANHANG');
  const [selectedSourceUids, setSelectedSourceUids] = useState<Set<string>>(new Set());
  const [examList, setExamList] = useState<Question[]>([]);
  const [selectedExamUids, setSelectedExamUids] = useState<Set<string>>(new Set());
  const [currentPreviewUid, setCurrentPreviewUid] = useState<string | null>(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editText, setEditText] = useState('');
  const [isRandomModalOpen, setIsRandomModalOpen] = useState(false);
  const [isLoadModalOpen, setIsLoadModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const [isDupModalOpen, setIsDupModalOpen] = useState(false);
  const [isScanning, setIsScanning] = useState(false);

  const chapters = useMemo(() => (fGrade !== 'ALL' && fSub !== 'ALL') ? (CURRICULUM_DATA[fGrade]?.[fSub as SubjectCode] || []) : [], [fGrade, fSub]);
  const lessons = useMemo(() => fChap !== 'ALL' ? (chapters.find(c => c.code === fChap)?.lessons || []) : [], [fChap, chapters]);

  const filteredQuestions = useMemo(() => {
    return questions.filter(q => {
      const qGrade = q.meta.grade === '0' ? '10' : q.meta.grade === '1' ? '11' : q.meta.grade === '2' ? '12' : q.meta.grade;
      if (fGrade !== 'ALL' && qGrade !== fGrade) return false;
      if (fSub !== 'ALL' && q.meta.subject !== fSub) return false;
      if (fChap !== 'ALL' && q.meta.chapter !== fChap) return false;
      if (fLes !== 'ALL' && q.meta.lesson !== fLes) return false;
      if (fForm !== 'ALL' && q.meta.form !== fForm) return false;
      if (fLevel !== 'ALL' && q.level !== fLevel) return false;
      if (fType !== 'ALL' && q.type !== fType) return false;
      if (searchTerm && !q.content.toLowerCase().includes(searchTerm.toLowerCase())) return false;
      return true;
    });
  }, [questions, fGrade, fSub, fChap, fLes, fForm, fLevel, fType, searchTerm]);

  const errorQuestions = useMemo(() => {
    return filteredQuestions.filter(q => {
        const v = validateQuestionWithFilters(q, { grade: 'ALL', subject: 'ALL', chapter: 'ALL', lesson: 'ALL', level: 'ALL' });
        return !q.isValidId || v.isMismatch;
    });
  }, [filteredQuestions]);

  const displayList = activeTab === 'NGANHANG' ? filteredQuestions : errorQuestions;
  const currentPreviewQ = useMemo(() => questions.find(q => q.uid === currentPreviewUid), [questions, currentPreviewUid]);
  
  useEffect(() => { 
    if (currentPreviewQ) setEditText(currentPreviewQ.fullCode); 
    else setEditText('');
  }, [currentPreviewQ]);

  const handleSaveEdit = () => {
    if (!currentPreviewUid) return;
    const parsed = parseLatex(editText);
    if (parsed.length === 0) return;
    setQuestions(prev => prev.map(q => q.uid === currentPreviewUid ? { ...parsed[0], uid: currentPreviewUid } : q));
    setIsEditMode(false);
  };

  const handleCopySelected = () => {
    if (selectedSourceUids.size === 0) return;
    const selected = questions.filter(q => selectedSourceUids.has(q.uid));
    const text = selected.map(q => q.fullCode).join('\n\n');
    navigator.clipboard.writeText(text);
    alert(`Đã copy ${selected.length} câu hỏi vào bộ nhớ tạm!`);
  };

  const handleToggleSelect = (uid: string) => {
    setSelectedSourceUids(prev => {
      const n = new Set(prev);
      if (n.has(uid)) n.delete(uid);
      else n.add(uid);
      return n;
    });
  };

  const handleToggleAllVisible = () => {
    if (selectedSourceUids.size === displayList.length) {
      setSelectedSourceUids(new Set());
    } else {
      setSelectedSourceUids(new Set(displayList.map(q => q.uid)));
    }
  };

  const handleToggleExamSelect = (uid: string) => {
    setSelectedExamUids(prev => {
      const n = new Set(prev);
      if (n.has(uid)) n.delete(uid);
      else n.add(uid);
      return n;
    });
  };

  const handleStartDuplicateScan = async (threshold: number) => {
    setIsDupModalOpen(false);
    setIsScanning(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); 
      const clean = (s: string) => s.toLowerCase().replace(/\\begin\{.*\}|\\end\{.*\}|%\[.*\]|\\choice|\\choiceTF|\\loigiai/g, '').replace(/\s+/g, '');
      const getBigrams = (s: string) => {
        const bigrams = new Set();
        for (let i = 0; i < s.length - 1; i++) bigrams.add(s.substring(i, i + 2));
        return bigrams;
      };
      const dice = (s1: string, s2: string) => {
        const b1 = getBigrams(s1);
        const b2 = getBigrams(s2);
        let intersect = 0;
        b1.forEach(bit => { if (b2.has(bit)) intersect++; });
        return (2 * intersect) / (b1.size + b2.size);
      };

      const duplicates = new Set<string>();
      const processed = displayList.map(q => ({ uid: q.uid, text: clean(q.content) }));

      for (let i = 0; i < processed.length; i++) {
        for (let j = i + 1; j < processed.length; j++) {
          const score = threshold === 1.0 
            ? (processed[i].text === processed[j].text ? 1 : 0)
            : dice(processed[i].text, processed[j].text);
          
          if (score >= threshold) {
            duplicates.add(processed[j].uid);
          }
        }
      }

      setSelectedSourceUids(duplicates);
      alert(`✅ Đã tìm thấy và tích chọn ${duplicates.size} câu trùng lặp với độ chính xác ${(threshold * 100).toFixed(0)}%!`);
    } catch (e) {
      alert("❌ Lỗi trong quá trình quét dữ liệu.");
    } finally {
      setIsScanning(false);
    }
  };

  const stats = useMemo(() => {
    const s = { C: [0,0,0,0,0], F: [0,0,0,0,0], T: [0,0,0,0,0], Sum: [0,0,0,0,0] };
    examList.forEach(q => {
      const lvIdx = ['N', 'H', 'V', 'C'].indexOf(q.level);
      if (lvIdx !== -1) { s[q.type][lvIdx]++; s[q.type][4]++; s.Sum[lvIdx]++; s.Sum[4]++; }
    });
    return s;
  }, [examList]);

  return (
    <div className="flex flex-col h-full gap-4 text-slate-200">
      {isRandomModalOpen && <RandomSelectionModal questions={questions} onClose={() => setIsRandomModalOpen(false)} onConfirm={(selected: any) => { setExamList([...examList, ...selected]); setIsRandomModalOpen(false); }} />}
      {isDupModalOpen && <DuplicateSettingsModal onClose={() => setIsDupModalOpen(false)} onStart={handleStartDuplicateScan} />}
      {isLoadModalOpen && <QuickLoadModal onClose={() => setIsLoadModalOpen(false)} onLoaded={(newQs: any) => setQuestions((prev: any) => [...prev, ...newQs])} />}

      <div className="flex items-center gap-2 p-2 bg-[#1e293b]/60 rounded-2xl border border-slate-800 shadow-xl overflow-x-auto no-scrollbar shrink-0">
        <button 
          onClick={() => setShowFilters(!showFilters)} 
          className={`shrink-0 h-10 px-5 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-lg transition-all ${showFilters ? 'bg-blue-500 text-white' : 'bg-blue-600 hover:bg-blue-500 text-white'}`}
        >
          <Search size={16}/> Lọc
        </button>
        <button 
          onClick={() => setIsLoadModalOpen(true)}
          className="shrink-0 h-10 px-5 bg-blue-700 hover:bg-blue-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 transition-all shadow-lg active:scale-95"
        >
          <FileUp size={16}/> Nạp câu hỏi
        </button>
        <button 
          onClick={() => setIsDupModalOpen(true)}
          disabled={isScanning}
          className={`shrink-0 h-10 px-5 bg-transparent border border-amber-500/40 hover:bg-amber-500/10 text-amber-500 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 transition-all ${isScanning ? 'opacity-50 cursor-wait' : ''}`}
        >
          {isScanning ? <Loader2 size={16} className="animate-spin"/> : <Eraser size={16}/>}
          {isScanning ? 'Đang quét trùng...' : 'Lọc trùng nhanh'}
        </button>
        <div className="h-6 w-[1px] bg-slate-700 mx-1 shrink-0"></div>
        <button onClick={handleToggleAllVisible} className="shrink-0 h-10 px-5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 transition-all border border-slate-700/50">
          <CheckSquare size={16}/> {selectedSourceUids.size === displayList.length ? 'Bỏ chọn hết' : `Chọn hết (${displayList.length})`}
        </button>
        <button onClick={handleCopySelected} className="shrink-0 h-10 px-5 bg-slate-800 hover:bg-slate-700 text-emerald-400 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 transition-all border border-slate-700/50" disabled={selectedSourceUids.size === 0}>
          <CopyIcon size={16}/> Copy đã chọn
        </button>
        <div className="h-6 w-[1px] bg-slate-700 mx-1 shrink-0"></div>
        <button onClick={() => setIsRandomModalOpen(true)} className="shrink-0 h-10 px-5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-indigo-900/20 transition-all active:scale-95">
          <Play size={16}/> Bốc tự động
        </button>
        <button onClick={() => setIsRandomModalOpen(true)} className="shrink-0 h-10 px-5 bg-transparent border border-orange-500/40 hover:bg-orange-500/10 text-orange-500 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 transition-all">
          <LayoutGrid size={16}/> Ma trận đề
        </button>
        <div className="flex-1 min-w-[20px]"></div>
        <button 
          onClick={() => { setExamList([...examList, ...questions.filter(q => selectedSourceUids.has(q.uid))]); setSelectedSourceUids(new Set()); }} 
          className="shrink-0 h-10 px-6 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-xl shadow-blue-900/30 transition-all active:scale-95 disabled:opacity-50"
          disabled={selectedSourceUids.size === 0}
        >
          <ArrowDownToLine size={18}/> Chọn vào đề
        </button>
        <button 
          onClick={() => onDelete(Array.from(selectedSourceUids))} 
          className="flex items-center gap-2 px-4 py-2 bg-rose-600/20 hover:bg-rose-600 text-rose-500 hover:text-white border border-rose-500/20 rounded-lg text-xs font-bold transition-all active:scale-95"
        >
          <Trash2 size={14}/> Xóa đã chọn
        </button>
      </div>

      {showFilters && (
        <div className="p-6 bg-[#1e293b] rounded-2xl border border-slate-700 shadow-2xl animate-in slide-in-from-top-4 duration-300">
           <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
              <div className="space-y-1.5"><label className="text-[10px] font-black text-slate-500 uppercase ml-1 tracking-widest">Lớp</label>
                <select value={fGrade} onChange={e => setFGrade(e.target.value)} className="w-full bg-[#0f172a] border border-slate-700 rounded-lg px-3 py-2.5 text-xs font-bold text-white outline-none focus:border-blue-500 transition-all"><option value="ALL">Tất cả Lớp</option>{Object.entries(GRADE_MAP).map(([k, v]) => <option key={k} value={k === '0' ? '10' : k === '1' ? '11' : k === '2' ? '12' : k}>{v}</option>)}</select>
              </div>
              <div className="space-y-1.5"><label className="text-[10px] font-black text-slate-500 uppercase ml-1 tracking-widest">Phân môn</label>
                <select value={fSub} onChange={e => setFSub(e.target.value as any)} className="w-full bg-[#0f172a] border border-slate-700 rounded-lg px-3 py-2.5 text-xs font-bold text-white outline-none focus:border-blue-500 transition-all"><option value="ALL">Tất cả Phân môn</option>{Object.entries(SUBJECT_MAP).map(([k, v]) => <option key={k} value={k}>{v}</option>)}</select>
              </div>
              <div className="space-y-1.5"><label className="text-[10px] font-black text-slate-500 uppercase ml-1 tracking-widest">Chương</label>
                <select value={fChap} onChange={e => setFChap(e.target.value)} className="w-full bg-[#0f172a] border border-slate-700 rounded-lg px-3 py-2.5 text-xs font-bold text-white outline-none truncate focus:border-blue-500 transition-all"><option value="ALL">Tất cả Chương</option>{chapters.map(c => <option key={c.code} value={c.code}>{c.title}</option>)}</select>
              </div>
              <div className="space-y-1.5"><label className="text-[10px] font-black text-slate-500 uppercase ml-1 tracking-widest">Bài học</label>
                <select value={fLes} onChange={e => setFLes(e.target.value)} className="w-full bg-[#0f172a] border border-slate-700 rounded-lg px-3 py-2.5 text-xs font-bold text-white outline-none focus:border-blue-500 transition-all"><option value="ALL">Tất cả Bài</option>{lessons.map(l => <option key={l.code} value={l.code}>{l.title}</option>)}</select>
              </div>
              <div className="space-y-1.5"><label className="text-[10px] font-black text-slate-500 uppercase ml-1 tracking-widest">Dạng bài</label>
                <select value={fForm} onChange={e => setFForm(e.target.value)} className="w-full bg-[#0f172a] border border-slate-700 rounded-lg px-3 py-2.5 text-xs font-bold text-white outline-none focus:border-blue-500 transition-all"><option value="ALL">Tất cả Dạng</option>{lessons.find(l => l.code === fLes)?.types?.map((t: any) => <option key={t.code} value={t.code}>{t.code} - {t.title}</option>)}</select>
              </div>
           </div>
           <div className="flex flex-wrap gap-5 mt-6 items-end">
              <div className="w-48 space-y-1.5"><label className="text-[10px] font-black text-slate-500 uppercase ml-1 tracking-widest">Mức độ</label>
                <select value={fLevel} onChange={e => setFLevel(e.target.value as any)} className="w-full bg-[#0f172a] border border-slate-700 rounded-lg px-3 py-2.5 text-xs font-bold text-white outline-none focus:border-blue-500 transition-all"><option value="ALL">Tất cả Mức</option>{Object.entries(LEVEL_MAP).map(([k, v]) => <option key={k} value={k}>{v}</option>)}</select>
              </div>
              <div className="w-48 space-y-1.5"><label className="text-[10px] font-black text-slate-500 uppercase ml-1 tracking-widest">Loại câu</label>
                <select value={fType} onChange={e => setFType(e.target.value as any)} className="w-full bg-[#0f172a] border border-slate-700 rounded-lg px-3 py-2.5 text-xs font-bold text-white outline-none focus:border-blue-500 transition-all"><option value="ALL">Tất cả Loại</option><option value="C">Trắc nghiệm (C)</option><option value="F">Đúng/Sai (F)</option><option value="T">Tự luận (T)</option></select>
              </div>
              <div className="flex-1 space-y-1.5"><label className="text-[10px] font-black text-slate-500 uppercase ml-1 tracking-widest">Tìm kiếm nội dung</label>
                <div className="relative"><Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16}/><input type="text" placeholder="Tìm kiếm nội dung..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full bg-[#0f172a] border border-slate-700 rounded-lg pl-10 pr-3 py-2.5 text-xs outline-none focus:border-blue-500/50 text-white" /></div>
              </div>
              <button onClick={() => { setFGrade('ALL'); setFSub('ALL'); setFChap('ALL'); setFLes('ALL'); setFForm('ALL'); setFLevel('ALL'); setFType('ALL'); setSearchTerm(''); }} className="h-[42px] px-6 bg-slate-700 hover:bg-slate-600 text-white rounded-lg flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-all"><RotateCcw size={16}/> Đặt lại</button>
           </div>
        </div>
      )}

      <div className="flex-1 flex gap-4 min-h-0">
        <div className="flex-[7] bg-[#1e293b]/60 rounded-2xl border border-slate-800 flex flex-col overflow-hidden shadow-2xl">
          <div className="p-4 bg-slate-800/30 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Database size={18} className="text-blue-400"/>
              <h3 className="text-[11px] font-black text-white uppercase tracking-widest">DANH SÁCH NGÂN HÀNG ({filteredQuestions.length}) {isScanning && <span className="text-amber-500 animate-pulse">(Đang quét...)</span>}</h3>
            </div>
            <div className="flex bg-slate-950/50 p-1 rounded-xl border border-slate-800 shadow-inner">
               <button onClick={() => setActiveTab('NGANHANG')} className={`px-5 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${activeTab === 'NGANHANG' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}>NGÂN HÀNG</button>
               <button onClick={() => setActiveTab('IDLOI')} className={`px-5 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all flex items-center gap-2 ${activeTab === 'IDLOI' ? 'bg-rose-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}>ID LỖI {errorQuestions.length > 0 && <span className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></span>}</button>
            </div>
          </div>
          <div className="flex-1 overflow-auto custom-scrollbar">
            <table className="w-full text-left border-separate border-spacing-0 table-fixed">
              <thead className="sticky top-0 bg-[#1e293b] z-10 text-[9px] font-black text-slate-500 uppercase tracking-wider border-b border-slate-800">
                <tr>
                  <th className="p-3 w-[45px] text-center bg-[#1e293b]">
                    <button onClick={handleToggleAllVisible} className="hover:scale-110 transition-transform">
                      {selectedSourceUids.size === displayList.length && displayList.length > 0 ? <CheckSquare size={18} className="text-blue-400 mx-auto" /> : <Square size={18} className="text-slate-700 mx-auto" />}
                    </button>
                  </th>
                  <th className="p-3 w-[45px] text-center bg-[#1e293b]">TT</th>
                  <th className="p-3 w-[200px] bg-[#1e293b]">MÃ ID</th>
                  <th className="p-3 bg-[#1e293b]">CODE (TÓM TẮT)</th>
                  <th className="p-3 w-[60px] text-center bg-[#1e293b]">LOẠI</th>
                </tr>
              </thead>
              <tbody>
                {displayList.map((q, idx) => (
                    <tr 
                      key={q.uid} 
                      onClick={() => setCurrentPreviewUid(q.uid)} 
                      className={`border-b border-white/5 hover:bg-blue-600/10 cursor-pointer transition-colors ${
                        currentPreviewUid === q.uid ? 'bg-blue-600/15 border-blue-500/30' : ''
                      } ${selectedSourceUids.has(q.uid) ? 'bg-rose-500/5' : ''}`}
                    >
                      <td className="p-3 text-center">
                        <button onClick={(e) => { e.stopPropagation(); handleToggleSelect(q.uid); }}>
                          {selectedSourceUids.has(q.uid) ? <CheckIcon size={18} className="text-rose-500 mx-auto" /> : <Square size={18} className="text-slate-800 mx-auto" />}
                        </button>
                      </td>
                      <td className="p-3 text-center text-slate-600 font-mono text-[10px]">{idx + 1}</td>
                      <td className="p-3 font-mono text-[10px] font-bold text-blue-400/80 truncate whitespace-nowrap overflow-hidden pr-4">{q.idString}</td>
                      <td className="p-3 text-[11px] text-slate-400 truncate opacity-70 italic">"{q.content}"</td>
                      <td className="p-3 text-center"><span className={`px-2 py-0.5 rounded text-[10px] font-black ${q.type === 'C' ? 'text-emerald-400 bg-emerald-400/10' : q.type === 'F' ? 'text-amber-400 bg-amber-400/10' : 'text-purple-400 bg-purple-400/10'}`}>{q.type}</span></td>
                    </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex-[4] bg-[#1e293b]/60 rounded-2xl border border-slate-800 flex flex-col overflow-hidden shadow-2xl">
          <div className="p-4 bg-slate-800/30 border-b border-slate-800 flex items-center justify-between">
             <div className="flex items-center gap-2 text-orange-400"><Code size={18}/><h3 className="text-[11px] font-black uppercase tracking-widest">CHI TIẾT / EDIT</h3></div>
             <div className="flex gap-2">
                <button onClick={() => setIsEditMode(!isEditMode)} className={`px-5 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${isEditMode ? 'bg-orange-600 text-white shadow-lg' : 'bg-slate-800 text-slate-400 border border-slate-700'}`}>SỬA / EDIT</button>
                {isEditMode && <button onClick={handleSaveEdit} className="px-5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-[9px] font-black uppercase tracking-widest shadow-lg">LƯU LẠI</button>}
             </div>
          </div>
          <div className="flex-1 bg-[#0f172a]/40 p-5 relative">
            <textarea 
               readOnly={!isEditMode} 
               value={editText} 
               onChange={e => setEditText(e.target.value)} 
               className={`w-full h-full bg-transparent font-mono text-[13px] text-blue-100 leading-relaxed outline-none resize-none custom-scrollbar ${isEditMode ? 'text-white' : 'opacity-60'}`} 
               spellCheck={false} 
               placeholder="Nội dung LaTeX..." 
            />
            {!currentPreviewUid && <div className="absolute inset-0 flex flex-col items-center justify-center opacity-10 pointer-events-none"><FileText size={80}/><p className="text-[10px] font-black uppercase mt-4">Chọn câu hỏi để xem</p></div>}
          </div>
        </div>
      </div>

      <div className="flex gap-4 h-[260px] shrink-0">
        <div className="flex-[7] bg-[#1e293b]/60 rounded-2xl border border-slate-700 flex flex-col overflow-hidden shadow-xl">
           <div className="px-4 py-3 bg-slate-800/30 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2 text-indigo-400"><FileText size={16}/><span className="text-[11px] font-black uppercase tracking-widest text-slate-300">DANH SÁCH ĐỀ ĐANG SOẠN ({examList.length})</span></div>
              <div className="flex gap-2">
                 <button onClick={() => setSelectedExamUids(new Set(examList.map(q => q.uid)))} className="px-4 py-1.5 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-[10px] font-black border border-slate-600 flex items-center gap-2 transition-all"><CheckSquare size={14}/> Chọn hết</button>
                 <button onClick={() => { navigator.clipboard.writeText(examList.map(q=>q.fullCode).join('\n\n')); alert('Đã copy đề!'); }} className="px-4 py-1.5 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-[10px] font-black border border-slate-600 flex items-center gap-2 transition-all"><CopyIcon size={14}/> Copy Tất cả</button>
                 <button onClick={() => { setExamList(prev => prev.filter(q => !selectedExamUids.has(q.uid))); setSelectedExamUids(new Set()); }} className="px-4 py-1.5 bg-rose-900/40 hover:bg-rose-600 text-rose-400 hover:text-white rounded-lg text-[10px] font-black border border-rose-500/20 transition-all flex items-center gap-2"><Trash size={14}/> Xóa câu chọn</button>
              </div>
           </div>
           <div className="flex-1 overflow-auto custom-scrollbar bg-slate-900/20">
             <table className="w-full text-left text-[11px] table-fixed border-separate border-spacing-0">
                <thead className="bg-slate-900 sticky top-0 z-10 shadow-sm">
                  <tr className="text-slate-600 text-[9px] font-black uppercase border-b border-slate-800">
                    <th className="p-3 w-[45px] text-center bg-slate-900">S</th>
                    <th className="p-3 w-[200px] bg-slate-900">MÃ ID</th>
                    <th className="p-3 w-[80px] text-center bg-slate-900">MỨC ĐỘ</th>
                    <th className="p-3 bg-slate-900">NỘI DUNG</th>
                  </tr>
                </thead>
                <tbody>
                  {examList.map(q => (
                    <tr key={q.uid} className="border-b border-slate-800/30 hover:bg-white/5 transition-colors">
                      <td className="p-3 text-center">
                        <button onClick={() => handleToggleExamSelect(q.uid)}>{selectedExamUids.has(q.uid) ? <CheckIcon size={18} className="text-blue-500 mx-auto" /> : <Square size={18} className="text-slate-800 mx-auto" />}</button>
                      </td>
                      <td className="p-3 font-mono text-[10px] text-indigo-400 font-bold whitespace-nowrap overflow-hidden pr-4">{q.idString}</td>
                      <td className="p-3 text-center font-bold text-slate-500 uppercase">{q.level}</td>
                      <td className="p-3 truncate opacity-60 italic">{q.content}</td>
                    </tr>
                  ))}
                </tbody>
             </table>
           </div>
        </div>
        <div className="flex-[3] bg-[#1e293b]/60 rounded-2xl border border-slate-700 flex flex-col overflow-hidden shadow-xl">
           <div className="px-4 py-3 bg-slate-800/30 border-b border-slate-800"><span className="text-[11px] font-black uppercase tracking-widest text-slate-300">THỐNG KÊ ĐỀ</span></div>
           <div className="flex-1 p-3 bg-[#0f172a]/50">
             <table className="w-full h-full text-[10px] border-collapse font-mono">
               <thead className="bg-slate-900/80 text-slate-600 text-[8px] font-black uppercase">
                 <tr><th className="p-1.5 border border-slate-800"></th><th className="p-1.5 border border-slate-800 text-emerald-500">TN</th><th className="p-1.5 border border-slate-800 text-amber-500">DS</th><th className="p-1.5 border border-slate-800 text-purple-500">TL</th><th className="p-1.5 border border-slate-800 text-blue-500">Σ</th></tr>
               </thead>
               <tbody>
                 {[0,1,2,3].map((lv, i) => (<tr key={i}><td className="p-1.5 border border-slate-800 text-center text-slate-600 font-black">M{i+1}</td><td className="p-1.5 border border-slate-800 text-center">{stats.C[i]}</td><td className="p-1.5 border border-slate-800 text-center">{stats.F[i]}</td><td className="p-1.5 border border-slate-800 text-center">{stats.T[i]}</td><td className="p-1.5 border border-slate-800 text-center text-blue-400/70 font-bold">{stats.Sum[i]}</td></tr>))}
                 <tr className="bg-blue-600/10 font-bold text-blue-400"><td className="p-1.5 border border-slate-800 text-center font-black">Σ</td><td className="p-1.5 border border-slate-800 text-center">{stats.C[4]}</td><td className="p-1.5 border border-slate-800 text-center">{stats.F[4]}</td><td className="p-1.5 border border-slate-800 text-center">{stats.T[4]}</td><td className="p-1.5 border border-slate-800 text-center text-cyan-400">{stats.Sum[4]}</td></tr>
               </tbody>
             </table>
           </div>
        </div>
      </div>

      <div className="flex justify-between items-center px-6 py-4 bg-[#1e293b]/90 border border-slate-800 rounded-2xl shadow-inner shrink-0">
         <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">HỆ THỐNG QUẢN TRỊ NGÂN HÀNG V2.5</span>
         <div className="flex gap-8 items-center">
           <span className="text-slate-400 font-black text-[11px] uppercase tracking-widest">TỔNG KHO: <span className="text-blue-500 text-sm">{questions.length}</span></span>
           <span className="text-slate-400 font-black text-[11px] uppercase tracking-widest">PHÙ HỢP: <span className="text-emerald-500 text-sm">{displayList.length}</span></span>
         </div>
      </div>
    </div>
  );
};

export default ManageQuestions;
