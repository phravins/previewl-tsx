import { FileCode, FileJson, FileText, Settings, HelpCircle, Plus } from 'lucide-react';
import { cn } from '../lib/utils';

interface SideNavBarProps {
  activeFile: string;
  onFileSelect: (fileName: string) => void;
}

export default function SideNavBar({ activeFile, onFileSelect }: SideNavBarProps) {
  const files = [
    { name: 'App.tsx', icon: FileCode },
    { name: 'styles.css', icon: FileText },
    { name: 'utils.ts', icon: FileJson },
    { name: 'hooks.ts', icon: FileCode },
    { name: 'main.tsx', icon: FileCode },
  ];

  return (
    <aside className="flex flex-col h-full border-r-[0.5px] border-outline-variant bg-surface-container-low w-[220px] shrink-0">
      <div className="p-6">
        <div className="text-primary font-bold font-mono text-[11px] uppercase tracking-[0.2em] mb-1">FILES</div>
        <div className="text-surface-container-highest font-mono text-[10px] uppercase tracking-widest mb-6">Source</div>
        
        <button className="w-full py-2 px-4 bg-surface-container-high border-[0.5px] border-outline-variant text-primary font-mono text-[11px] uppercase tracking-widest rounded-lg mb-8 hover:bg-surface-container-highest transition-all flex items-center justify-center gap-2">
          <Plus size={14} />
          New File
        </button>

        <nav className="space-y-1">
          {files.map((file) => {
            const Icon = file.icon;
            const isActive = activeFile === file.name;
            return (
              <div
                key={file.name}
                onClick={() => onFileSelect(file.name)}
                className={cn(
                  "px-4 py-2 flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest cursor-pointer transition-all",
                  isActive 
                    ? "bg-surface-container-high text-primary border-l-2 border-primary opacity-90" 
                    : "text-surface-container-highest hover:bg-surface-container-lowest"
                )}
              >
                <Icon size={16} />
                <span>{file.name}</span>
              </div>
            );
          })}
        </nav>
      </div>

      <div className="mt-auto border-t-[0.5px] border-outline-variant p-4 space-y-1">
        <div className="text-surface-container-highest px-4 py-2 flex items-center gap-3 hover:bg-surface-container-lowest transition-colors font-mono text-[11px] uppercase tracking-widest cursor-pointer">
          <Settings size={16} />
          <span>Settings</span>
        </div>
        <div className="text-surface-container-highest px-4 py-2 flex items-center gap-3 hover:bg-surface-container-lowest transition-colors font-mono text-[11px] uppercase tracking-widest cursor-pointer">
          <HelpCircle size={16} />
          <span>Support</span>
        </div>
      </div>
    </aside>
  );
}
