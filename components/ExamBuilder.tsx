
import React, { useState } from 'react';
import { Question } from '../types';
import { FileText, Trash2, Copy, Download, Share2 } from 'lucide-react';

interface ExamBuilderProps {
  questions: Question[];
  onRemove: (uid: string) => void;
}

const ExamBuilder: React.FC<ExamBuilderProps> = ({ questions, onRemove }) => {
  const [examName, setExamName] = useState('Đề ôn tập toán học');

  const generateFullLatex = () => {
    return questions.map(q => q.fullCode).join('\n\n');
  };

  const handleCopyAll = () => {
    navigator.clipboard.writeText(generateFullLatex());
    alert("Đã copy toàn bộ mã LaTeX vào clipboard!");
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([generateFullLatex()], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `${examName.replace(/\s+/g, '_')}.tex`;
    document.body.appendChild(element);
    element.click();
  };

  if (questions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-slate-500">
        <div className="p-12 border-2 border-dashed border-slate-800 rounded-3xl text-center max-w-md">
          <FileText size={64} className="mx-auto mb-6 opacity-20" />
          <h3 className="text-xl font-bold text-slate-400">Đề thi còn trống</h3>
          <p className="mt-2 text-sm">
            Quay lại tab "Quản lý kho" và chọn các câu hỏi bạn muốn đưa vào đề thi này.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white">Xây dựng đề thi</h2>
          <p className="text-slate-400 text-sm">Review danh sách câu hỏi và xuất file LaTeX hoàn chỉnh.</p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={handleCopyAll}
            className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-slate-300 border border-slate-700 rounded-xl text-sm font-bold hover:bg-slate-700 transition-all"
          >
            <Copy size={16} />
            Copy mã nguồn
          </button>
          <button 
            onClick={handleDownload}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/20"
          >
            <Download size={16} />
            Tải file .tex
          </button>
        </div>
      </header>

      <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-xl">
        <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Tên đề thi</label>
        <input 
          type="text"
          value={examName}
          onChange={(e) => setExamName(e.target.value)}
          className="w-full bg-slate-900 border border-slate-700 rounded-xl py-3 px-4 text-lg font-bold text-white focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
          Cấu trúc đề ({questions.length} câu)
        </h3>
        {questions.map((q, index) => (
          <div key={q.uid} className="bg-slate-800 rounded-2xl border border-slate-700 shadow-lg overflow-hidden group">
            <div className="flex">
              <div className="w-12 bg-slate-900/50 flex items-center justify-center font-bold text-blue-500 border-r border-slate-700">
                {index + 1}
              </div>
              <div className="flex-1 p-4">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex gap-2">
                    <span className="mono text-[10px] font-bold text-slate-500 bg-slate-900 px-2 py-0.5 rounded">
                      {q.idString}
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      q.type === 'C' ? 'bg-emerald-400/10 text-emerald-400' : 
                      q.type === 'F' ? 'bg-amber-400/10 text-amber-400' : 
                      'bg-purple-400/10 text-purple-400'
                    }`}>
                      {q.type}
                    </span>
                  </div>
                  <button 
                    onClick={() => onRemove(q.uid)}
                    className="text-slate-500 hover:text-rose-500 transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
                <div className="text-sm text-slate-300 whitespace-pre-wrap font-mono bg-slate-900/30 p-3 rounded-lg border border-slate-700/50">
                  {q.content}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExamBuilder;
