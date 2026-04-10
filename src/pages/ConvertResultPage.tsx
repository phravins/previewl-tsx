import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Copy, Download, History, AlertCircle, X, RefreshCw, FileCode, Code, Network, Info } from 'lucide-react';
import TopNavBar from '../components/TopNavBar';
import SideNavBar from '../components/SideNavBar';
import { cn } from '../lib/utils';

export default function ConvertResultPage() {
  const navigate = useNavigate();
  const [activeFile, setActiveFile] = useState('App.tsx');
  const [showError, setShowError] = useState(true);

  const inputCode = `import { useState } from 'react';
import Layout from './components/Layout';

const App = () => {
  const [data, setData] = useState(null);

  const handleLoad = async () => {
    const response = await fetch('/api/preview');
    setData(response.json());
  };

  return (
    <Layout>
      <div className="preview-container">
        <h1>Preview Dashboard</h1>
        <button onClick={handleLoad}>Sync</button>
        <hr />
        {data && (
          <ul>
            {data.items.map(item => (
              <li key={item.id}>
                {item.name}
                {item.metadata?.?details}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Layout>
  );
};`;

  return (
    <div className="flex h-screen w-full overflow-hidden bg-surface">
      <SideNavBar activeFile={activeFile} onFileSelect={setActiveFile} />
      
      <main className="flex-1 flex flex-col overflow-hidden">
        <TopNavBar />
        
        {/* Conversion Info Header */}
        <div className="bg-surface-container-low px-6 py-4 flex items-center justify-between border-b-[0.5px] border-outline-variant/20">
          <div className="flex items-center gap-6">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">Conversion Target</p>
              <div className="flex items-center gap-2">
                <FileCode className="text-primary" size={18} />
                <span className="font-mono text-sm font-medium">TypeScript to React DOM</span>
              </div>
            </div>
            <div className="h-8 w-[0.5px] bg-outline-variant/30"></div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">Status</p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-error"></span>
                <span className="font-mono text-sm text-error font-medium">Failed</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-surface-container-high border-[0.5px] border-outline-variant/50 font-mono text-[11px] uppercase tracking-widest hover:bg-surface-container-highest transition-colors">
              <History size={16} />
              View History
            </button>
            <button 
              onClick={() => navigate('/convert')}
              className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary-container font-mono text-[11px] uppercase tracking-widest font-bold hover:brightness-110 transition-all"
            >
              <Play size={16} />
              Re-run
            </button>
          </div>
        </div>

        {/* Error Banner */}
        {showError && (
          <div className="bg-error-container text-on-error-container border-b-[0.5px] border-error/20 px-6 py-3 flex items-start gap-4 animate-in fade-in slide-in-from-top-1 duration-300">
            <AlertCircle className="text-error mt-0.5" size={20} />
            <div className="flex-1">
              <h3 className="font-mono text-xs font-bold uppercase tracking-tight">Conversion failed</h3>
              <p className="font-mono text-[13px] mt-1 text-on-error-container/80">SyntaxError: Unexpected token '?' (23:14) in App.tsx. The transpiler encountered a malformed optional chaining expression.</p>
            </div>
            <button 
              onClick={() => setShowError(false)}
              className="text-on-error-container/60 hover:text-on-error-container transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        )}

        {/* Code Split Panels */}
        <div className="flex-1 flex overflow-hidden">
          {/* Input Panel */}
          <div className="w-1/2 flex flex-col border-r-[0.5px] border-outline-variant/30 bg-surface-container-lowest">
            <div className="bg-surface-container px-4 py-2 border-b-[0.5px] border-outline-variant/20 flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-widest text-on-surface-variant">Input: App.tsx</span>
              <RefreshCw className="text-on-surface-variant" size={16} />
            </div>
            <div className="flex-1 overflow-auto font-mono text-[13px] leading-relaxed relative selection:bg-error/20 custom-scrollbar">
              <div className="flex min-w-full">
                {/* Line Numbers */}
                <div className="w-12 bg-surface-container-low/30 text-right pr-3 py-4 text-outline select-none border-r-[0.5px] border-outline-variant/10">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <div key={i} className={cn(i + 1 === 23 ? "text-error font-bold" : "text-surface-container-highest")}>
                      {i + 1}
                    </div>
                  ))}
                </div>
                {/* Code Content */}
                <div className="flex-1 py-4 px-4 relative">
                  <pre className="whitespace-pre">
                    {inputCode.split('\n').map((line, i) => (
                      <div 
                        key={i} 
                        className={cn(
                          "relative",
                          i + 1 === 23 ? "bg-error/10 border-l-[3px] border-error -ml-4 pl-4 text-on-surface" : "opacity-40"
                        )}
                      >
                        {line || ' '}
                      </div>
                    ))}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Output Panel */}
          <div className="w-1/2 flex flex-col bg-surface relative">
            <div className="bg-surface-container px-4 py-2 border-b-[0.5px] border-outline-variant/20 flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-widest text-on-surface-variant">Output: build.js</span>
              <div className="flex gap-2">
                <Copy className="text-outline" size={16} />
                <Download className="text-outline" size={16} />
              </div>
            </div>
            
            <div className="flex-1 overflow-hidden font-mono text-[13px] p-8 blur-[8px] opacity-10 select-none pointer-events-none">
              <pre>
                {`"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Layout_1 = require("./components/Layout");

const App = () => {
  const [data, setData] = (0, react_1.useState)(null);
  const handleLoad = async () => {
    const response = await fetch('/api/preview');
    setData(response.json());
  };`}
              </pre>
            </div>

            {/* Overlay Content */}
            <div className="absolute inset-0 flex items-center justify-center bg-surface/40 backdrop-blur-[2px]">
              <div className="text-center max-w-xs px-6 py-8 bg-surface-container-high border-[0.5px] border-outline-variant/40 rounded-xl shadow-2xl">
                <div className="w-12 h-12 bg-error/10 text-error rounded-full flex items-center justify-center mx-auto mb-4">
                  <X size={28} />
                </div>
                <h2 className="text-on-surface font-headline font-bold text-lg mb-2">Output unavailable</h2>
                <p className="text-on-surface-variant text-xs leading-relaxed mb-6">The compilation process terminated early due to critical syntax errors in the source code.</p>
                <button 
                  onClick={() => navigate('/convert')}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-error-container text-on-error-container font-mono text-xs uppercase tracking-widest font-bold hover:bg-error transition-all rounded-lg"
                >
                  <RefreshCw size={18} />
                  Retry Conversion
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Meta */}
        <footer className="bg-surface-container-lowest border-t-[0.5px] border-outline-variant px-4 py-1.5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 font-mono text-[10px] text-on-surface-variant">
              <Network size={14} />
              <span>main</span>
            </div>
            <div className="flex items-center gap-2 font-mono text-[10px] text-on-surface-variant">
              <Info size={14} />
              <span>Ln 23, Col 14</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 font-mono text-[10px] text-error font-bold">
              <AlertCircle size={14} />
              <span>1 ERROR</span>
            </div>
            <div className="flex items-center gap-1 font-mono text-[10px] text-on-surface-variant">
              <RefreshCw size={14} className="animate-spin-slow" />
              <span>took 42ms</span>
            </div>
            <div className="flex items-center gap-1 font-mono text-[10px] text-on-surface-variant">
              <span>UTF-8</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
