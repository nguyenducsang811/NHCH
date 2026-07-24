import React, { useState, useMemo, useRef } from 'react';
import { parseLatex, validateQuestionWithFilters } from '../utils';
import { Question, SubjectCode, LevelCode } from '../types';
import { 
  FileCode, Copy, Download, Trash2, Scissors, 
  BookOpen, Layers, ChevronDown, ChevronUp, RotateCcw,
  Database, FileText, CheckCircle2, AlertTriangle, ExternalLink, Upload,
  Columns, Rows, Check, Filter, SlidersHorizontal
} from 'lucide-react';
import { GRADE_MAP, SUBJECT_MAP, LEVEL_MAP, CURRICULUM_DATA } from '../constants';

interface LessonFilterProps {
  bankQuestions: Question[];
  onTransferToVerifier: (qs: Question[]) => void;
}

interface GroupedLesson {
  groupKey: string;
  lessonTitle: string;
  gradeCode: string;
  gradeName: string;
  subjectCode: string;
  subjectName: string;
  questions: Question[];
}

const LessonFilter: React.FC<LessonFilterProps> = ({ bankQuestions, onTransferToVerifier }) => {
  const [input, setInput] = useState('');
  const [sourceType, setSourceType] = useState<'bank' | 'latex'>('latex');
  const [viewMode, setViewMode] = useState<'vertical' | 'horizontal'>('vertical');
  
  const [fGrade, setFGrade] = useState<string>('ALL');
  const [fSub, setFSub] = useState<SubjectCode | 'ALL'>('ALL');
  const [fChap, setFChap] = useState<string>('ALL');
  const [fLes, setFLes] = useState<string>('ALL');
  const [fForm, setFForm] = useState<string>('ALL');
  const [fLevel, setFLevel] = useState<LevelCode | 'ALL'>('ALL');
  const [fType, setFType] = useState<string>('ALL');

  const [isDragging, setIsDragging] = useState(false);
  const [showSourceEditor, setShowSourceEditor] = useState(false);
  const [isFilterPanelCollapsed, setIsFilterPanelCollapsed] = useState(false);

  // Default empty object => all lessons are collapsed by default
  const [expandedLessons, setExpandedLessons] = useState<Record<string, boolean>>({});
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [copiedUid, setCopiedUid] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const chapters = useMemo(() => (fGrade !== 'ALL' && fSub !== 'ALL') ? (CURRICULUM_DATA[fGrade]?.[fSub as SubjectCode] || []) : [], [fGrade, fSub]);
  const lessons = useMemo(() => fChap !== 'ALL' ? (chapters.find(c => c.code === fChap)?.lessons || []) : [], [fChap, chapters]);

  // Reset downstream filters on parent changes
  React.useEffect(() => {
    setFChap('ALL');
    setFLes('ALL');
    setFForm('ALL');
  }, [fGrade, fSub]);

  React.useEffect(() => {
    setFLes('ALL');
    setFForm('ALL');
  }, [fChap]);

  React.useEffect(() => {
    setFForm('ALL');
  }, [fLes]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      setInput(event.target?.result as string || '');
      showToast('Đã nạp file LaTeX thành công!');
    };
    reader.readAsText(file);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      setInput(event.target?.result as string || '');
      showToast('Đã nạp file LaTeX thành công!');
    };
    reader.readAsText(file);
  };

  const handleClear = () => {
    setInput('');
    setShowSourceEditor(false);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const rawQuestions = useMemo(() => sourceType === 'bank' ? bankQuestions : (input.trim() ? parseLatex(input) : []), [sourceType, bankQuestions, input]);

  const filteredGroupedData = useMemo(() => {
    if (rawQuestions.length === 0) return null;
    const filtered = rawQuestions.filter(q => {
      const qGrade = q.meta.grade === '0' ? '10' : q.meta.grade === '1' ? '11' : q.meta.grade === '2' ? '12' : q.meta.grade;
      if (fGrade !== 'ALL' && qGrade !== fGrade) return false;
      if (fSub !== 'ALL' && q.meta.subject !== fSub) return false;
      if (fChap !== 'ALL' && q.meta.chapter !== fChap) return false;
      if (fLes !== 'ALL' && q.meta.lesson !== fLes) return false;
      if (fForm !== 'ALL' && q.meta.form !== fForm) return false;
      if (fLevel !== 'ALL' && q.level !== fLevel) return false;
      if (fType !== 'ALL' && q.type !== fType) return false;
      return true;
    });

    if (filtered.length === 0) return null;

    const groups: Record<string, GroupedLesson> = {};
    filtered.forEach(q => {
      let lessonTitle = 'Chưa phân loại';
      const qGrade = q.meta.grade === '0' ? '10' : q.meta.grade === '1' ? '11' : q.meta.grade === '2' ? '12' : q.meta.grade;
      const qSub = q.meta.subject || '';

      if (q.meta.valid) {
        const lessonObj = CURRICULUM_DATA[qGrade]?.[qSub as SubjectCode]
          ?.find(c => c.code === q.meta.chapter)
          ?.lessons?.find(l => l.code === q.meta.lesson);
        lessonTitle = lessonObj ? lessonObj.title : `Bài ${q.meta.lesson}`;
      }

      const gradeName = GRADE_MAP[qGrade] || (qGrade ? `Lớp ${qGrade}` : 'Chưa rõ lớp');
      const subjectName = SUBJECT_MAP[qSub as SubjectCode] || qSub || '';
      
      const groupKey = `${qGrade}_${qSub}_${lessonTitle}`;

      if (!groups[groupKey]) {
        groups[groupKey] = {
          groupKey,
          lessonTitle,
          gradeCode: qGrade,
          gradeName,
          subjectCode: qSub,
          subjectName,
          questions: []
        };
      }
      groups[groupKey].questions.push(q);
    });

    return groups;
  }, [rawQuestions, fGrade, fSub, fChap, fLes, fForm, fLevel, fType]);

  const allFilteredQuestions = useMemo(() => {
    if (!filteredGroupedData) return [];
    return Object.values(filteredGroupedData).flatMap(g => g.questions);
  }, [filteredGroupedData]);

  const mismatchedQuestions = useMemo(() => {
    return allFilteredQuestions.filter(q => {
      const v = validateQuestionWithFilters(q, { grade: fGrade, subject: fSub, chapter: fChap, lesson: fLes, level: fLevel });
      return v.isMismatch;
    });
  }, [allFilteredQuestions, fGrade, fSub, fChap, fLes, fLevel]);

  const toggleExpandLesson = (groupKey: string) => {
    setExpandedLessons(prev => ({
      ...prev,
      [groupKey]: !prev[groupKey]
    }));
  };

  const expandAllLessons = () => {
    if (!filteredGroupedData) return;
    const next: Record<string, boolean> = {};
    Object.keys(filteredGroupedData).forEach(k => { next[k] = true; });
    setExpandedLessons(next);
    showToast('Đã mở rộng tất cả các bài!');
  };

  const collapseAllLessons = () => {
    setExpandedLessons({});
    showToast('Đã thu gọn tất cả các bài!');
  };

  const copyTextToClipboard = (text: string, successMessage: string) => {
    navigator.clipboard.writeText(text);
    showToast(successMessage);
  };

  const copySingleQuestion = (q: Question) => {
    navigator.clipboard.writeText(q.fullCode);
    setCopiedUid(q.uid);
    setTimeout(() => setCopiedUid(null), 1500);
    showToast(`Đã copy mã LaTeX câu hỏi: ${q.idString}`);
  };

  const copyLessonLaTeX = (lessonTitle: string, qs: Question[]) => {
    const text = qs.map(q => q.fullCode).join('\n\n');
    copyTextToClipboard(text, `Đã copy toàn bộ ${qs.length} câu LaTeX của "${lessonTitle}"!`);
  };

  const copyLessonIDs = (lessonTitle: string, qs: Question[]) => {
    const text = qs.map(q => q.idString).join('\n');
    copyTextToClipboard(text, `Đã copy ${qs.length} mã ID của "${lessonTitle}"!`);
  };

  const copyAllFilteredLaTeX = () => {
    if (allFilteredQuestions.length === 0) return;
    const text = allFilteredQuestions.map(q => q.fullCode).join('\n\n');
    copyTextToClipboard(text, `Đã copy tất cả ${allFilteredQuestions.length} câu hỏi phù hợp bộ lọc!`);
  };

  return (
    <div className="flex flex-col h-full gap-3 animate-in fade-in duration-500 relative overflow-hidden">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-6 right-6 z-50 bg-emerald-600 text-white font-bold text-xs px-5 py-3 rounded-2xl shadow-2xl border border-emerald-400 flex items-center gap-2.5 animate-in slide-in-from-top-4 duration-300">
          <CheckCircle2 size={18} className="text-emerald-200 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* COMPACT TOP HEADER */}
      <header className="flex flex-wrap items-center justify-between gap-3 bg-slate-800/40 px-4 py-3 rounded-2xl border border-slate-700/80 shadow-md backdrop-blur-md shrink-0">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-amber-500/20 rounded-xl text-amber-400"><Scissors size={20} /></div>
          <div>
            <h2 className="text-base font-black text-white tracking-tight uppercase">Lọc bài học</h2>
            <p className="text-slate-400 text-[10px] font-medium opacity-70 uppercase tracking-widest">Phân tách câu hỏi theo bài học</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="flex bg-slate-900/80 p-1 rounded-xl border border-slate-700">
            <button onClick={() => setSourceType('latex')} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all ${sourceType === 'latex' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-300'}`}><FileText size={13} /> FILE LATEX</button>
            <button onClick={() => setSourceType('bank')} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all ${sourceType === 'bank' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-300'}`}><Database size={13} /> NGÂN HÀNG</button>
          </div>
          <button 
            onClick={() => setIsFilterPanelCollapsed(!isFilterPanelCollapsed)}
            className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl border border-slate-700/80 transition-all text-xs font-bold flex items-center gap-1.5 px-3"
            title={isFilterPanelCollapsed ? "Mở rộng bộ lọc" : "Thu gọn bộ lọc để tăng diện tích xem kết quả"}
          >
            <SlidersHorizontal size={14} />
            <span>{isFilterPanelCollapsed ? 'Mở bộ lọc' : 'Ẩn bộ lọc'}</span>
            {isFilterPanelCollapsed ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
          </button>
        </div>
      </header>

      {/* INPUT / SOURCE PANEL (Collapsible if data loaded or user toggled) */}
      {!isFilterPanelCollapsed && sourceType === 'latex' && (
        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-4 shadow-xl shrink-0 transition-all">
          {!input.trim() ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in duration-300">
              {/* Drag and Drop Zone */}
              <div 
                onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={onDrop}
                className={`border-2 border-dashed rounded-xl p-5 flex flex-col items-center justify-center text-center transition-all ${
                  isDragging ? 'border-blue-500 bg-blue-500/5' : 'border-slate-800 hover:border-slate-700/80 bg-slate-950/20'
                }`}
              >
                <div className="w-10 h-10 bg-slate-800/50 rounded-xl flex items-center justify-center mb-2 shadow-inner">
                  <Upload size={20} className="text-blue-400" />
                </div>
                <h4 className="text-xs font-black text-white mb-0.5">Chọn hoặc Kéo thả file LaTeX</h4>
                <p className="text-slate-500 text-[10px] mb-3 max-w-xs leading-relaxed">Chọn file .tex để phân tách từng bài nhanh nhất</p>
                <input type="file" accept="*" className="hidden" ref={fileInputRef} onChange={handleFileUpload} />
                <button 
                  onClick={() => fileInputRef.current?.click()} 
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold transition-all text-[11px] uppercase tracking-wider active:scale-95 shadow-md"
                >
                  Chọn file từ máy
                </button>
              </div>

              {/* Textarea Paste */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <h4 className="text-[11px] font-black text-blue-400 uppercase tracking-wider">Hoặc dán mã LaTeX trực tiếp</h4>
                </div>
                <textarea 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 min-h-[100px] bg-slate-950/40 border border-slate-800 rounded-xl p-3 font-mono text-xs text-blue-200 outline-none focus:border-blue-500/30 transition-all resize-none custom-scrollbar shadow-inner"
                  placeholder="Dán mã LaTeX tại đây (\begin{ex} ... \end{ex})"
                />
              </div>
            </div>
          ) : (
            <div className="space-y-3 animate-in zoom-in-95 duration-200">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 bg-slate-950/30 p-3 rounded-xl border border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-white uppercase tracking-wider">Đã nạp file LaTeX bên ngoài</h4>
                    <p className="text-slate-400 text-[10px] font-medium">Đã quét <span className="text-emerald-400 font-bold">{rawQuestions.length} câu hỏi</span> sẵn sàng lọc.</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setShowSourceEditor(!showSourceEditor)} 
                    className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-bold transition-all border border-slate-700/50"
                  >
                    {showSourceEditor ? 'Ẩn mã nguồn' : 'Xem/Sửa mã nguồn'}
                  </button>
                  <button 
                    onClick={handleClear} 
                    className="px-3 py-1.5 bg-rose-500/10 hover:bg-rose-500 text-rose-400 hover:text-white rounded-lg text-xs font-bold transition-all border border-rose-500/20"
                  >
                    Xóa dữ liệu
                  </button>
                </div>
              </div>
              
              {showSourceEditor && (
                <div className="space-y-2 animate-in slide-in-from-top-2 duration-250">
                  <textarea 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="w-full h-40 bg-slate-950/50 border border-slate-800 rounded-xl p-3 font-mono text-xs text-blue-200 outline-none focus:border-blue-500/30 transition-all resize-none custom-scrollbar shadow-inner"
                  />
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* FILTER OPTIONS BAR */}
      {!isFilterPanelCollapsed && (
        <div className="bg-slate-800/30 p-3.5 rounded-2xl border border-slate-700/40 backdrop-blur-md shrink-0">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3 items-end">
            {/* Lớp */}
            <div className="space-y-1">
              <label className="text-[9px] font-black text-slate-400 uppercase ml-1 tracking-wider">Lớp</label>
              <select value={fGrade} onChange={(e) => setFGrade(e.target.value)} className="w-full bg-slate-900 border border-slate-700/40 rounded-xl px-2.5 h-[34px] outline-none text-slate-200 text-[11px] font-bold">
                <option value="ALL">Tất cả Lớp</option>
                {Object.entries(GRADE_MAP).map(([k, v]) => {
                  const realKey = k === '0' ? '10' : k === '1' ? '11' : k === '2' ? '12' : k;
                  return <option key={realKey} value={realKey}>{v}</option>;
                })}
              </select>
            </div>

            {/* Phân môn */}
            <div className="space-y-1">
              <label className="text-[9px] font-black text-slate-400 uppercase ml-1 tracking-wider">Phân môn</label>
              <select value={fSub} onChange={(e) => setFSub(e.target.value as any)} className="w-full bg-slate-900 border border-slate-700/40 rounded-xl px-2.5 h-[34px] outline-none text-slate-200 text-[11px] font-bold">
                <option value="ALL">Tất cả Phân môn</option>
                {Object.entries(SUBJECT_MAP).map(([k, v]) => (
                  <option key={k} value={k}>{v}</option>
                ))}
              </select>
            </div>

            {/* Chương */}
            <div className="space-y-1">
              <label className="text-[9px] font-black text-slate-400 uppercase ml-1 tracking-wider">Chương</label>
              <select value={fChap} onChange={(e) => setFChap(e.target.value)} className="w-full bg-slate-900 border border-slate-700/40 rounded-xl px-2.5 h-[34px] outline-none text-slate-200 text-[11px] font-bold truncate">
                <option value="ALL">Tất cả Chương</option>
                {chapters.map(c => (
                  <option key={c.code} value={c.code}>{c.title}</option>
                ))}
              </select>
            </div>

            {/* Bài học */}
            <div className="space-y-1">
              <label className="text-[9px] font-black text-slate-400 uppercase ml-1 tracking-wider">Bài học</label>
              <select value={fLes} onChange={(e) => setFLes(e.target.value)} className="w-full bg-slate-900 border border-slate-700/40 rounded-xl px-2.5 h-[34px] outline-none text-slate-200 text-[11px] font-bold truncate">
                <option value="ALL">Tất cả Bài</option>
                {lessons.map(l => (
                  <option key={l.code} value={l.code}>{l.title}</option>
                ))}
              </select>
            </div>

            {/* Dạng bài */}
            <div className="space-y-1">
              <label className="text-[9px] font-black text-slate-400 uppercase ml-1 tracking-wider">Dạng bài</label>
              <select value={fForm} onChange={(e) => setFForm(e.target.value)} className="w-full bg-slate-900 border border-slate-700/40 rounded-xl px-2.5 h-[34px] outline-none text-slate-200 text-[11px] font-bold truncate">
                <option value="ALL">Tất cả Dạng</option>
                {lessons.find(l => l.code === fLes)?.types?.map((t: any) => (
                  <option key={t.code} value={t.code}>{t.code} - {t.title}</option>
                ))}
              </select>
            </div>

            {/* Mức độ */}
            <div className="space-y-1">
              <label className="text-[9px] font-black text-slate-400 uppercase ml-1 tracking-wider">Mức độ</label>
              <select value={fLevel} onChange={(e) => setFLevel(e.target.value as any)} className="w-full bg-slate-900 border border-slate-700/40 rounded-xl px-2.5 h-[34px] outline-none text-slate-200 text-[11px] font-bold">
                <option value="ALL">Tất cả Mức</option>
                {Object.entries(LEVEL_MAP).map(([k, v]) => (
                  <option key={k} value={k}>{v}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-3">
            <button 
              onClick={() => { 
                setFGrade('ALL'); 
                setFSub('ALL'); 
                setFChap('ALL'); 
                setFLes('ALL');
                setFForm('ALL');
                setFLevel('ALL'); 
                setFType('ALL'); 
              }} 
              className="h-[32px] px-4 bg-slate-700/80 hover:bg-slate-600 text-white rounded-lg transition-all text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 border border-slate-600 active:scale-95 shadow-md"
            >
              <RotateCcw size={13} /> Đặt lại bộ lọc
            </button>
          </div>
        </div>
      )}

      {mismatchedQuestions.length > 0 && (
        <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-between shrink-0">
           <div className="flex items-center gap-2 text-amber-500 text-[11px] font-bold uppercase"><AlertTriangle size={16} /> Phát hiện {mismatchedQuestions.length} câu có ID sai lệch so với bộ lọc</div>
           <button onClick={() => onTransferToVerifier(mismatchedQuestions)} className="px-3.5 py-1.5 bg-amber-500 text-black text-[10px] font-black rounded-lg hover:bg-amber-400 transition-all flex items-center gap-1.5 uppercase tracking-tight"><ExternalLink size={13} /> Chuyển sang Sửa ID</button>
        </div>
      )}

      {/* RESULTS CONTROL BAR & MAIN EXPANDED RESULTS AREA (Occupies ~3/4 of the layout) */}
      <div className="flex-1 flex flex-col gap-3 min-h-0 bg-slate-900/30 p-3 rounded-2xl border border-slate-800/80 shadow-2xl overflow-hidden">
        {filteredGroupedData && (
          <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900/80 p-3 rounded-xl border border-slate-800 backdrop-blur-md shrink-0">
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-xl text-blue-400 text-xs font-black flex items-center gap-2">
                <Layers size={15} />
                <span>{allFilteredQuestions.length} câu / {Object.keys(filteredGroupedData).length} bài học</span>
              </div>
              <button
                onClick={copyAllFilteredLaTeX}
                className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-md active:scale-95"
              >
                <Copy size={14} /> Copy tất cả kết quả (LaTeX)
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {/* Expand All / Collapse All controls for Vertical View */}
              {viewMode === 'vertical' && (
                <div className="flex items-center gap-1 bg-slate-950/60 p-1 rounded-xl border border-slate-800 mr-1">
                  <button
                    onClick={expandAllLessons}
                    className="px-2.5 py-1 text-[11px] font-bold text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-all"
                    title="Mở rộng nội dung tất cả các bài"
                  >
                    Mở tất cả
                  </button>
                  <span className="text-slate-700">|</span>
                  <button
                    onClick={collapseAllLessons}
                    className="px-2.5 py-1 text-[11px] font-bold text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-all"
                    title="Thu gọn tất cả các bài"
                  >
                    Thu gọn tất cả
                  </button>
                </div>
              )}

              {/* View Mode Toggle */}
              <div className="flex items-center gap-1.5 bg-slate-950/80 p-1 rounded-xl border border-slate-800">
                <span className="text-[10px] font-bold text-slate-500 uppercase px-1.5">Cách xem:</span>
                <button 
                  onClick={() => setViewMode('vertical')} 
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    viewMode === 'vertical' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'
                  }`}
                  title="Xếp từng bài từ trên xuống dưới (dễ lướt & copy nhanh)"
                >
                  <Rows size={14} />
                  <span>Xếp Dọc</span>
                </button>
                <button 
                  onClick={() => setViewMode('horizontal')} 
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    viewMode === 'horizontal' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'
                  }`}
                  title="Xếp các cột từ trái sang phải"
                >
                  <Columns size={14} />
                  <span>Cột Ngang</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* MAIN RESULTS CONTAINER - Dynamic flex height with vertical overflow scroll */}
        <div className="flex-1 overflow-y-auto custom-scrollbar pr-1">
          {filteredGroupedData ? (
            viewMode === 'vertical' ? (
              /* VERTICAL TOP-TO-BOTTOM VIEW MODE */
              <div className="flex flex-col gap-3.5 w-full pb-6">
                {Object.values(filteredGroupedData).map((group) => {
                  const isExpanded = !!expandedLessons[group.groupKey];
                  return (
                    <div key={group.groupKey} className="bg-slate-900/70 rounded-2xl border border-slate-800 shadow-xl overflow-hidden transition-all hover:border-slate-700/90">
                      {/* Lesson Header - Clickable to expand/collapse */}
                      <div 
                        onClick={() => toggleExpandLesson(group.groupKey)}
                        className="p-3.5 bg-slate-800/60 hover:bg-slate-800/90 border-b border-slate-700/50 flex flex-wrap items-center justify-between gap-3 cursor-pointer transition-colors group/hdr select-none"
                      >
                        <div className="flex items-center gap-3 flex-wrap">
                          <div className="p-2 bg-blue-500/10 text-blue-400 rounded-xl border border-blue-500/20 group-hover/hdr:scale-105 transition-transform shrink-0">
                            <BookOpen size={18} />
                          </div>
                          
                          {/* Prominent Grade & Subject Badges */}
                          <div className="flex items-center gap-2 shrink-0">
                            <span className="px-2.5 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-lg text-xs font-black tracking-wide shadow-sm">
                              {group.gradeName}
                            </span>
                            {group.subjectName && (
                              <span className="px-2 py-0.5 bg-slate-800 text-slate-300 border border-slate-700/80 rounded-md text-[11px] font-bold">
                                {group.subjectName}
                              </span>
                            )}
                          </div>

                          <h3 className="text-white font-black text-sm md:text-base flex items-center gap-2">
                            <span>{group.lessonTitle}</span>
                            <span className="px-2.5 py-0.5 bg-blue-500/20 text-blue-300 rounded-full text-xs font-bold border border-blue-500/30">
                              {group.questions.length} câu
                            </span>
                          </h3>
                        </div>

                        {/* Lesson Action Buttons */}
                        <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                          <button
                            onClick={() => copyLessonLaTeX(group.lessonTitle, group.questions)}
                            className="px-3 py-1.5 bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-500/30 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 active:scale-95"
                            title="Sao chép mã LaTeX của tất cả câu hỏi bài này"
                          >
                            <Copy size={13} /> Copy LaTeX bài này
                          </button>
                          <button
                            onClick={() => copyLessonIDs(group.lessonTitle, group.questions)}
                            className="px-3 py-1.5 bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white border border-indigo-500/30 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 active:scale-95"
                            title="Sao chép danh sách mã ID"
                          >
                            <FileCode size={13} /> Copy danh sách ID
                          </button>
                          <button
                            onClick={() => toggleExpandLesson(group.groupKey)}
                            className={`p-1.5 rounded-xl transition-all border ${
                              isExpanded 
                                ? 'bg-blue-600 text-white border-blue-500 shadow-lg' 
                                : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
                            }`}
                            title={isExpanded ? "Thu gọn bài này" : "Mở rộng bài này"}
                          >
                            {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                          </button>
                        </div>
                      </div>

                      {/* Lesson Content List (Rendered only when isExpanded is true) */}
                      {isExpanded && (
                        <div className="p-4 bg-slate-950/30 animate-in slide-in-from-top-2 duration-200">
                          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                            {group.questions.map((q) => {
                              const v = validateQuestionWithFilters(q, { grade: fGrade, subject: fSub, chapter: fChap, lesson: fLes, level: fLevel });
                              const isCopied = copiedUid === q.uid;
                              return (
                                <div 
                                  key={q.uid} 
                                  onClick={() => copySingleQuestion(q)}
                                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between gap-2.5 group ${
                                    v.isMismatch 
                                      ? 'bg-amber-500/5 border-amber-500/20 hover:border-amber-500/40' 
                                      : 'bg-slate-950/40 border-slate-800/80 hover:border-blue-500/50 hover:bg-slate-800/40'
                                  }`}
                                  title="Click để copy mã LaTeX của câu hỏi này"
                                >
                                  <div className="flex items-center justify-between gap-2">
                                    <span className={`font-mono text-xs font-black px-2.5 py-1 rounded-lg ${
                                      v.isMismatch ? 'bg-amber-500/10 text-amber-400' : 'bg-blue-500/10 text-blue-400'
                                    }`}>
                                      {q.idString}
                                    </span>
                                    <div className="flex items-center gap-2">
                                      <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                                        {q.type === 'C' ? 'Trắc nghiệm' : q.type === 'F' ? 'Đúng/Sai' : 'Tự luận'}
                                      </span>
                                      <button 
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          copySingleQuestion(q);
                                        }}
                                        className="p-1.5 text-slate-400 hover:text-white hover:bg-blue-600 rounded-lg transition-all"
                                      >
                                        {isCopied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                                      </button>
                                    </div>
                                  </div>
                                  <p className="text-slate-300 text-xs line-clamp-3 font-mono opacity-80 leading-relaxed bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/60 group-hover:border-slate-700/80 transition-colors">
                                    "{q.content}"
                                  </p>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              /* HORIZONTAL LEFT-TO-RIGHT SCROLL VIEW MODE */
              <div className="flex h-full gap-5 min-w-max p-1 overflow-x-auto pb-4 custom-scrollbar">
                {Object.values(filteredGroupedData).map((group) => (
                  <div key={group.groupKey} className="w-[400px] flex flex-col bg-slate-900/60 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden group">
                    <div className="p-3.5 bg-slate-800/60 border-b border-slate-700/50 flex flex-col gap-2">
                       <div className="flex items-center justify-between gap-2">
                          <span className="px-2.5 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-md text-[11px] font-black">
                            {group.gradeName} {group.subjectName ? `- ${group.subjectName}` : ''}
                          </span>
                          <div className="flex gap-1 shrink-0">
                            <button 
                              onClick={() => copyLessonLaTeX(group.lessonTitle, group.questions)} 
                              title="Copy tất cả câu hỏi trong bài này"
                              className="p-1.5 bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white rounded-lg transition-colors active:scale-90"
                            >
                              <Copy size={13} />
                            </button>
                            <button 
                              onClick={() => copyLessonIDs(group.lessonTitle, group.questions)} 
                              title="Copy danh sách mã ID"
                              className="p-1.5 bg-slate-800 hover:bg-indigo-600 text-slate-300 hover:text-white rounded-lg transition-colors active:scale-90"
                            >
                              <FileCode size={13} />
                            </button>
                          </div>
                       </div>
                       <h4 className="text-white font-black text-xs truncate" title={group.lessonTitle}>
                         {group.lessonTitle} ({group.questions.length} câu)
                       </h4>
                    </div>
                    <div className="flex-1 overflow-y-auto custom-scrollbar">
                      <table className="w-full text-left border-collapse table-fixed">
                        <tbody>
                          {group.questions.map((q) => {
                            const v = validateQuestionWithFilters(q, { grade: fGrade, subject: fSub, chapter: fChap, lesson: fLes, level: fLevel });
                            return (
                              <tr 
                                key={q.uid} 
                                onClick={() => copySingleQuestion(q)}
                                title="Click để copy mã LaTeX câu hỏi này"
                                className={`hover:bg-blue-600/10 border-b border-white/5 cursor-pointer transition-colors ${v.isMismatch ? 'bg-amber-500/5' : ''}`}
                              >
                                <td className={`p-3 w-[110px] font-mono text-[10px] font-bold truncate ${v.isMismatch ? 'text-amber-400' : 'text-blue-400/80'}`}>{q.idString}</td>
                                <td className="p-3 truncate text-[11px] opacity-70 text-slate-300">"{q.content}"</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            )
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-slate-800 border-4 border-dashed border-slate-800/30 rounded-[40px] min-w-full py-16">
              <Layers size={70} className="opacity-5" />
              <p className="mt-2 italic text-slate-500 text-xs font-medium">Chưa có dữ liệu phù hợp bộ lọc</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LessonFilter;
