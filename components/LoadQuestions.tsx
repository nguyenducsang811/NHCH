
import React, { useState, useMemo, useRef } from 'react';
import { 
  FileUp, Trash2, List, FileText, CheckSquare, HelpCircle, 
  Upload, AlertTriangle, ExternalLink, Loader2, Files,
  CheckCircle2, XCircle, Info, X, Save, Eye, Check
} from 'lucide-react';
import { parseLatex, validateQuestionWithFilters, parseId } from '../utils';
import { Question, QuestionType } from '../types';

interface FileProcessResult {
  name: string;
  count: number;
  status: 'success' | 'error' | 'processing';
  message: string;
}

interface LoadQuestionsProps {
  onQuestionsLoaded: (newQuestions: Question[]) => void;
  allQuestions: Question[];
  onTransferToVerifier: (qs: Question[]) => void;
}

const LoadQuestions: React.FC<LoadQuestionsProps> = ({ onQuestionsLoaded, allQuestions, onTransferToVerifier }) => {
  const [input, setInput] = useState('');
  const [lastParsed, setLastParsed] = useState<Question[]>([]);
  const [fileResults, setFileResults] = useState<FileProcessResult[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editText, setEditText] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const processText = (text: string): Question[] => {
    try {
      return parseLatex(text);
    } catch (err) {
      console.error(err);
      return [];
    }
  };

  const handleBatchLoad = async (files: FileList) => {
    setIsProcessing(true);
    let totalNewQuestions: Question[] = [];

    const readFile = (file: File): Promise<string> => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (event) => resolve(event.target?.result as string);
        reader.readAsText(file);
      });
    };

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const resultPlaceholder: FileProcessResult = { 
        name: file.name, 
        count: 0, 
        status: 'processing', 
        message: 'Đang xử lý...' 
      };
      setFileResults(prev => [resultPlaceholder, ...prev]);

      try {
        const text = await readFile(file);
        const parsed = processText(text);
        
        if (parsed.length > 0) {
          totalNewQuestions = [...totalNewQuestions, ...parsed];
          setFileResults(prev => prev.map(r => 
            r.name === file.name ? { ...r, status: 'success', count: parsed.length, message: `Thành công: ${parsed.length} câu` } : r
          ));
        } else {
          setFileResults(prev => prev.map(r => 
            r.name === file.name ? { ...r, status: 'error', message: 'Không tìm thấy câu hỏi' } : r
          ));
        }
      } catch (error) {
        setFileResults(prev => prev.map(r => 
          r.name === file.name ? { ...r, status: 'error', message: 'Lỗi đọc file' } : r
        ));
      }
    }

    if (totalNewQuestions.length > 0) {
      setLastParsed(prev => [...prev, ...totalNewQuestions]);
      onQuestionsLoaded(totalNewQuestions);
    }
    
    setIsProcessing(false);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) handleBatchLoad(e.target.files);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files) handleBatchLoad(e.dataTransfer.files);
  };

  const handleManualInput = () => {
    if (!input.trim()) return;
    const parsed = processText(input);
    if (parsed.length > 0) {
      setLastParsed(prev => [...prev, ...parsed]);
      onQuestionsLoaded(parsed);
      setFileResults(prev => [{ name: 'Văn bản trực tiếp', count: parsed.length, status: 'success', message: `Nạp ${parsed.length} câu` }, ...prev]);
      setInput('');
    } else {
      alert("Không tìm thấy câu hỏi hợp lệ!");
    }
  };

  const mismatchedInBatch = useMemo(() => {
    return lastParsed.filter(q => !q.isValidId);
  }, [lastParsed]);

  const stats = useMemo(() => {
    const data = { C: [0, 0, 0, 0, 0], F: [0, 0, 0, 0, 0], T: [0, 0, 0, 0, 0] };
    allQuestions.forEach(q => {
      const type = q.type as 'C' | 'F' | 'T';
      const levelIdx = ['N', 'H', 'V', 'C'].indexOf(q.level);
      if (levelIdx !== -1) data[type][levelIdx]++;
      data[type][4]++;
    });
    return data;
  }, [allQuestions]);

  const StatColumn = ({ type, title, icon: Icon, color, data }: { type: string, title: string, icon: any, color: string, data: number[] }) => (
    <div className="flex-1 bg-slate-900/40 border border-slate-800 rounded-2xl p-4 flex flex-col">
      <div className={`flex items-center gap-2 mb-4 font-black text-[10px] uppercase tracking-widest ${color}`}>
        <Icon size={16} /> {title} ({type})
      </div>
      <div className="space-y-3 flex-1">
        {['Nhận biết (N)', 'Thông hiểu (H)', 'Vận dụng (V)', 'Vận dụng cao (C)'].map((label, i) => (
          <div key={i} className="flex justify-between items-center">
            <span className="text-slate-500 text-[11px] font-medium">{label}</span>
            <span className="text-white text-[11px] font-bold font-mono">{data[i]}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-3 border-t border-slate-800 flex justify-between items-center">
        <span className="text-white text-[11px] font-black uppercase">Tổng cộng</span>
        <span className={`text-sm font-black font-mono ${color}`}>{data[4]}</span>
      </div>
    </div>
  );

  return (
    <div className="max-w-[1600px] mx-auto p-4 space-y-6 animate-in fade-in duration-500">
      {/* CẢNH BÁO LỖI ID */}
      {mismatchedInBatch.length > 0 && (
        <div className="p-6 bg-amber-500/10 border border-amber-500/30 rounded-[32px] flex items-center justify-between shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="flex items-center gap-4">
             <div className="p-4 bg-amber-500/20 rounded-2xl">
                <AlertTriangle className="text-amber-500" size={32} />
             </div>
             <div>
               <p className="text-amber-200 font-black text-xl uppercase tracking-tight">Phát hiện {mismatchedInBatch.length} lỗi cấu trúc ID!</p>
               <p className="text-amber-500/60 text-sm font-medium">Hệ thống ghi nhận một số câu hỏi có mã ID không hợp lệ. Vui lòng chuẩn hóa trước khi lưu kho.</p>
             </div>
          </div>
          <button 
            onClick={() => onTransferToVerifier(mismatchedInBatch)} 
            className="px-10 py-5 bg-amber-500 hover:bg-amber-400 text-black font-black rounded-[20px] transition-all flex items-center gap-3 uppercase text-xs shadow-xl active:scale-95"
          >
            <ExternalLink size={20} /> Chuẩn hóa ID ngay
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* TOP LEFT: UPLOAD BOX */}
        <div 
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={onDrop}
          className={`bg-slate-900/40 border-2 border-dashed rounded-[40px] p-16 flex flex-col items-center justify-center text-center transition-all min-h-[400px] ${
            isDragging ? 'border-blue-500 bg-blue-500/5' : 'border-slate-800 hover:border-slate-700'
          }`}
        >
          <div className="w-24 h-24 bg-slate-800/80 rounded-[32px] flex items-center justify-center mb-8 shadow-inner">
            <Files size={48} className="text-slate-500" />
          </div>
          <h3 className="text-2xl font-black text-white mb-3">Chọn hoặc Kéo thả tệp tin</h3>
          <p className="text-slate-500 text-sm mb-10 max-w-sm leading-relaxed">Hỗ trợ nạp hàng loạt tệp tin cùng lúc. Hệ thống sẽ quét nội dung LaTeX bên trong để xử lý câu hỏi.</p>
          <input type="file" accept="*" multiple className="hidden" ref={fileInputRef} onChange={handleFileUpload} />
          <button 
            disabled={isProcessing}
            onClick={() => fileInputRef.current?.click()} 
            className="px-12 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-[24px] font-black flex items-center gap-3 transition-all text-sm uppercase tracking-widest shadow-2xl shadow-blue-900/40 active:scale-95 disabled:opacity-50"
          >
            {isProcessing ? <Loader2 size={24} className="animate-spin" /> : <Upload size={24} />} 
            Chọn từ máy tính
          </button>
        </div>

        {/* TOP RIGHT: STATUS LOGS */}
        <div className="bg-slate-900/40 border border-slate-800 rounded-[40px] p-10 flex flex-col">
          <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-5">
             <h3 className="text-xs font-black text-white uppercase tracking-[0.2em] flex items-center gap-3"><List size={18} /> TRẠNG THÁI TỆP TIN</h3>
             <button onClick={() => setFileResults([])} className="p-2.5 hover:bg-slate-800 rounded-xl text-slate-500 transition-colors"><Trash2 size={20}/></button>
          </div>
          <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar min-h-[250px]">
            {fileResults.map((res, i) => (
              <div key={i} className="bg-slate-950/40 p-5 rounded-[24px] border border-slate-800/50 flex items-center justify-between animate-in slide-in-from-right-4 duration-300">
                 <div className="flex items-center gap-5 min-w-0">
                    <div className={`p-3 rounded-2xl shrink-0 ${
                      res.status === 'success' ? 'bg-emerald-500/10 text-emerald-400' : 
                      res.status === 'error' ? 'bg-rose-500/10 text-rose-400' : 
                      'bg-blue-500/10 text-blue-400 animate-pulse'
                    }`}>
                      {res.status === 'success' ? <Check size={20}/> : res.status === 'error' ? <XCircle size={20}/> : <Loader2 size={20} className="animate-spin"/>}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[13px] font-black text-slate-200 truncate">{res.name}</p>
                      <p className={`text-[10px] uppercase font-bold tracking-[0.1em] ${
                        res.status === 'success' ? 'text-emerald-500/60' : 
                        res.status === 'error' ? 'text-rose-500/60' : 
                        'text-blue-500/60'
                      }`}>{res.message}</p>
                    </div>
                 </div>
                 {res.count > 0 && <div className="px-4 py-1.5 bg-slate-900 rounded-xl border border-slate-800 text-[10px] font-mono font-black text-blue-400">+{res.count} Q</div>}
              </div>
            ))}
            {fileResults.length === 0 && (
              <div className="h-full flex flex-col items-center justify-center opacity-10 py-20">
                 <Info size={64} className="mb-4" />
                 <p className="text-[11px] font-black uppercase tracking-widest">Sẵn sàng nạp tệp tin</p>
              </div>
            )}
          </div>
        </div>

        {/* BOTTOM LEFT: MANUAL INPUT */}
        <div className="bg-slate-900/40 border border-slate-800 rounded-[40px] p-10 space-y-6">
           <div className="flex items-center justify-between">
              <h3 className="text-xs font-black text-blue-400 uppercase tracking-[0.2em] flex items-center gap-3"><FileText size={18} /> NẠP VĂN BẢN TRỰC TIẾP</h3>
              {input.length > 0 && <span className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">{input.length} ký tự</span>}
           </div>
           <textarea 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              className="w-full h-64 bg-slate-950/50 border border-slate-800 rounded-[28px] p-6 text-sm font-mono text-blue-200 outline-none focus:border-blue-500/40 transition-all resize-none custom-scrollbar shadow-inner" 
              placeholder="Dán mã LaTeX tại đây (\begin{ex} ... \end{ex})" 
           />
           <button 
              disabled={isProcessing || !input.trim()}
              onClick={handleManualInput} 
              className="w-full bg-slate-800/80 hover:bg-slate-700 py-6 rounded-[24px] font-black text-slate-300 flex items-center justify-center gap-3 transition-all text-xs uppercase tracking-[0.15em] border border-slate-700/50 disabled:opacity-20 active:scale-95"
           >
              <FileUp size={20} /> Nạp dữ liệu nhanh
           </button>
        </div>

        {/* BOTTOM RIGHT: STATS GRID */}
        <div className="bg-slate-900/40 border border-slate-800 rounded-[40px] p-10 flex flex-col">
          <h3 className="text-xs font-black text-white uppercase tracking-[0.2em] mb-8 border-b border-slate-800 pb-5">TỔNG QUAN KHO CÂU HỎI</h3>
          <div className="flex flex-col md:flex-row gap-6 flex-1">
            <StatColumn type="C" title="Trắc nghiệm" icon={HelpCircle} color="text-emerald-400" data={stats.C} />
            <StatColumn type="F" title="Đúng - Sai" icon={CheckSquare} color="text-amber-400" data={stats.F} />
            <StatColumn type="T" title="Tự luận" icon={FileText} color="text-purple-400" data={stats.T} />
          </div>
        </div>
      </div>
      
      {/* QUY TRÌNH HÀNH ĐỘNG CUỐI */}
      <div className="bg-[#1e293b]/40 p-6 rounded-[32px] border border-slate-800 flex justify-between items-center shadow-inner">
         <div className="flex items-center gap-3 text-slate-500 text-[11px] font-black uppercase tracking-widest">
            <Info size={18}/> Dữ liệu sẽ được lưu tạm vào bộ nhớ trình duyệt cho đến khi bạn đóng ứng dụng.
         </div>
         <div className="flex gap-4">
            <button onClick={() => setLastParsed([])} className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">Làm mới danh sách nạp</button>
         </div>
      </div>
    </div>
  );
};

export default LoadQuestions;
