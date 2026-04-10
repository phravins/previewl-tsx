import { useState, useEffect } from 'react';
import { Monitor, Tablet, Smartphone, RefreshCw, Share2 } from 'lucide-react';
import SideNavBar from '../components/SideNavBar';
import IPhoneFrame from '../components/iPhoneFrame';
import TopNavBar from '../components/TopNavBar';
import { cn } from '../lib/utils';

export default function WorkspacePage() {
  const [activeFile, setActiveFile] = useState('App.tsx');
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('mobile');
  const [count, setCount] = useState(42);
  const [logs, setLogs] = useState<{ time: string; action: string }[]>([]);

  const addLog = (action: string) => {
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
    setLogs(prev => [{ time, action }, ...prev].slice(0, 10));
  };

  const increment = () => {
    setCount(prev => prev + 1);
    addLog('incremented');
  };

  const decrement = () => {
    setCount(prev => prev - 1);
    addLog('decremented');
  };

  useEffect(() => {
    addLog('app initialized');
  }, []);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-surface">
      <SideNavBar activeFile={activeFile} onFileSelect={setActiveFile} />
      
      <main className="flex-1 flex flex-col min-w-0">
        <TopNavBar />
        
        {/* Toolbar */}
        <header className="flex justify-between items-center w-full px-6 py-3 bg-surface border-b-[0.5px] border-outline-variant shrink-0">
          <div className="flex items-center gap-2 font-mono text-[11px] tracking-tight">
            <span className="text-on-surface-variant">Preview</span>
            <span className="text-outline">/</span>
            <span className="text-primary font-medium">{activeFile}</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex bg-surface-container-low p-1 rounded-lg border-[0.5px] border-outline-variant">
              <button 
                onClick={() => setDevice('desktop')}
                className={cn(
                  "p-1.5 rounded-md transition-colors",
                  device === 'desktop' ? "bg-primary text-on-primary-container shadow-lg" : "text-on-surface-variant hover:text-primary"
                )}
              >
                <Monitor size={18} />
              </button>
              <button 
                onClick={() => setDevice('tablet')}
                className={cn(
                  "p-1.5 rounded-md transition-colors",
                  device === 'tablet' ? "bg-primary text-on-primary-container shadow-lg" : "text-on-surface-variant hover:text-primary"
                )}
              >
                <Tablet size={18} />
              </button>
              <button 
                onClick={() => setDevice('mobile')}
                className={cn(
                  "p-1.5 rounded-md transition-colors",
                  device === 'mobile' ? "bg-primary text-on-primary-container shadow-lg" : "text-on-surface-variant hover:text-primary"
                )}
              >
                <Smartphone size={18} />
              </button>
            </div>
            
            <div className="h-4 w-[1px] bg-outline-variant mx-2"></div>
            
            <button className="p-2 text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-container-high rounded-lg">
              <RefreshCw size={18} />
            </button>
            <button className="px-4 py-1.5 bg-primary-container text-on-primary-container rounded-lg font-mono text-[10px] flex items-center gap-2 font-bold tracking-tight active:scale-[0.98] transition-transform">
              <Share2 size={14} />
              SHARE
            </button>
          </div>
        </header>

        {/* Canvas Area */}
        <div className="flex-1 relative overflow-hidden dot-grid flex items-center justify-center p-12">
          {/* Inactive Tablet Frame (Visual Flank) */}
          <div className="absolute left-[10%] transform -translate-x-1/2 opacity-10 pointer-events-none scale-90 border-[0.5px] border-outline-variant rounded-[32px] w-[600px] h-[800px] bg-surface-container-low hidden lg:block"></div>
          
          <IPhoneFrame 
            count={count} 
            onIncrement={increment} 
            onDecrement={decrement} 
            logs={logs} 
          />

          {/* Inactive Tablet Frame (Visual Flank Right) */}
          <div className="absolute right-[10%] transform translate-x-1/2 opacity-10 pointer-events-none scale-90 border-[0.5px] border-outline-variant rounded-[32px] w-[600px] h-[800px] bg-surface-container-low hidden lg:block"></div>
        </div>

        {/* Status Bar */}
        <footer className="h-8 bg-surface-container-lowest border-t-[0.5px] border-outline-variant flex items-center justify-between px-4 shrink-0">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">Live Syncing</span>
            </div>
            <div className="h-3 w-[0.5px] bg-outline-variant"></div>
            <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">iPhone 15 Pro (iOS 17.2)</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">60 FPS</span>
            <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">Network: 5G</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
