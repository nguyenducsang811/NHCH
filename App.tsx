
import React, { useState, useCallback } from 'react';
import Sidebar from './components/Sidebar';
import IDVerifier from './components/IDVerifier';
import LoadQuestions from './components/LoadQuestions';
import ManageQuestions from './components/ManageQuestions';
import ExamBuilder from './components/ExamBuilder';
import LessonFilter from './components/LessonFilter';
import { Question } from './types';
import { LayoutDashboard, AlertCircle, Database, ChevronRight, AlertTriangle } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedForExam, setSelectedForExam] = useState<Question[]>([]);
  const [pendingVerifyList, setPendingVerifyList] = useState<Question[]>([]);

  const handleQuestionsLoaded = (newQs: Question[]) => {
    setQuestions(prev => [...prev, ...newQs]);
  };

  const handleAddToExam = (qs: Question[]) => {
    setSelectedForExam(prev => {
      const existingUids = new Set(prev.map(q => q.uid));
      const filtered = qs.filter(q => !existingUids.has(q.uid));
      return [...prev, ...filtered];
    });
    setActiveTab('exam');
  };

  const handleTransferToVerifier = (qs: Question[]) => {
    setPendingVerifyList(qs);
    setActiveTab('verifier');
  };

  const handleDeleteQuestions = useCallback((uids: string[]) => {
    if (!uids || uids.length === 0) return;
    
    const toDeleteUids = new Set(uids);
    
    // Cập nhật kho tổng - sử dụng functional update để lấy state mới nhất
    setQuestions(prevQuestions => {
      const newQuestions = prevQuestions.filter(q => !toDeleteUids.has(q.uid));
      return [...newQuestions];
    });

    // Cập nhật danh sách đề đang soạn
    setSelectedForExam(prevSelected => {
      const newSelected = prevSelected.filter(q => !toDeleteUids.has(q.uid));
      return [...newSelected];
    });
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-10 w-full animate-in fade-in duration-700">
            <header className="flex items-center justify-between">
              <div>
                <h2 className="text-4xl font-black text-white tracking-tight">Hệ thống Quản trị Ngân hàng</h2>
                <div className="flex items-center gap-2 text-slate-400 mt-2 font-medium">
                  <LayoutDashboard size={16} /> <span>Tổng quan dữ liệu kho Toán học</span>
                </div>
              </div>
              <div className="flex gap-4">
                <button onClick={() => setActiveTab('load')} className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 shadow-xl shadow-blue-900/30 transition-all active:scale-95">
                  Nạp thêm câu hỏi <ChevronRight size={18} />
                </button>
              </div>
            </header>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: 'Tổng số câu', value: questions.length, color: 'text-blue-400', bg: 'bg-blue-400/5', border: 'border-blue-500/20' },
                { label: 'Trắc nghiệm (C)', value: questions.filter(q => q.type === 'C').length, color: 'text-emerald-400', bg: 'bg-emerald-400/5', border: 'border-emerald-500/20' },
                { label: 'Đúng / Sai (F)', value: questions.filter(q => q.type === 'F').length, color: 'text-amber-400', bg: 'bg-amber-400/5', border: 'border-amber-500/20' },
                { label: 'Tự luận (T)', value: questions.filter(q => q.type === 'T').length, color: 'text-purple-400', bg: 'bg-purple-400/5', border: 'border-purple-500/20' },
              ].map((stat, i) => (
                <div key={i} className={`${stat.bg} p-8 rounded-[32px] border ${stat.border} shadow-2xl relative overflow-hidden group hover:scale-[1.02] transition-transform`}>
                  <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Database size={120} />
                  </div>
                  <p className="text-slate-500 text-xs font-black uppercase tracking-widest">{stat.label}</p>
                  <p className={`text-5xl font-black mt-4 ${stat.color} tracking-tighter`}>{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="bg-slate-800/20 border border-slate-800/50 rounded-[40px] p-12 text-center shadow-2xl backdrop-blur-sm border-dashed">
              <div className="inline-flex p-6 bg-slate-800/50 rounded-3xl mb-6 shadow-inner">
                <AlertCircle className="text-slate-500" size={40} />
              </div>
              <h3 className="text-2xl font-black text-slate-200">Trạng thái: Hoạt động</h3>
              <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
                Hệ thống ngân hàng câu hỏi đã sẵn sàng. Hãy bắt đầu bằng việc nạp file LaTeX hoặc xác minh ID các câu hỏi mới để đảm bảo tính nhất quán của dữ liệu.
              </p>
            </div>
          </div>
        );
      
      case 'verifier':
        return (
          <IDVerifier 
            bankQuestions={questions} 
            setBankQuestions={setQuestions}
            initialQuestions={pendingVerifyList} 
            onClearInitial={() => setPendingVerifyList([])} 
          />
        );
      
      case 'lesson-filter':
        return <LessonFilter bankQuestions={questions} onTransferToVerifier={handleTransferToVerifier} />;
      
      case 'load':
        return <LoadQuestions onQuestionsLoaded={handleQuestionsLoaded} allQuestions={questions} onTransferToVerifier={handleTransferToVerifier} />;
        
      case 'manage':
        return (
          <ManageQuestions 
            questions={questions} 
            onAddToExam={handleAddToExam}
            onDelete={handleDeleteQuestions}
            setQuestions={setQuestions}
            onTransferToVerifier={handleTransferToVerifier}
          />
        );
      
      case 'exam':
        return <ExamBuilder questions={selectedForExam} onRemove={(uid) => setSelectedForExam(prev => prev.filter(q => q.uid !== uid))} />;
        
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-slate-950 text-slate-200 overflow-hidden font-sans">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 overflow-y-auto p-6 md:p-10 bg-[radial-gradient(circle_at_20%_20%,_#1e293b_0%,_#0f172a_50%,_#020617_100%)]">
        <div className="w-full h-full max-w-none">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;
