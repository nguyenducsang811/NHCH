
import React from 'react';
import { Database, PlusCircle, LayoutDashboard, FileText, CheckCircle, SplitSquareVertical } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Tổng quan', icon: LayoutDashboard },
    { id: 'load', label: 'Nạp câu hỏi', icon: PlusCircle },
    { id: 'manage', label: 'Quản lý kho', icon: Database },
    { id: 'verifier', label: 'Sửa & Xác minh ID', icon: CheckCircle },
    { id: 'lesson-filter', label: 'Lọc từng bài', icon: SplitSquareVertical },
    { id: 'exam', label: 'Xây dựng đề', icon: FileText },
  ];

  return (
    <div className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col h-full">
      <div className="p-6 border-b border-slate-800">
        <h1 className="text-xl font-bold text-blue-400 flex items-center gap-2">
          <Database size={24} />
          <span>MATH BANK</span>
        </h1>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
              activeTab === item.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20'
                : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
            }`}
          >
            <item.icon size={20} />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="p-4 border-t border-slate-800">
        <div className="bg-slate-800 rounded-lg p-3 text-xs text-slate-400">
          Hệ thống Quản lý Ngân hàng câu hỏi v2.0
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
