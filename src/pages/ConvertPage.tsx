import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UploadCloud, CheckCircle, Shield, Zap, History, ArrowRight, Repeat } from 'lucide-react';
import TopNavBar from '../components/TopNavBar';
import { cn } from '../lib/utils';

export default function ConvertPage() {
  const navigate = useNavigate();
  const [sourceFormat, setSourceFormat] = useState('TSX');
  const [targetFormat, setTargetFormat] = useState('JSX');

  const formats = ['TSX', 'JSX', 'HTML', 'VUE', 'SVELTE', 'JS (ES6)', 'SOLID'];

  const handleConvert = () => {
    navigate('/convert/result');
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <TopNavBar />
      
      <main className="pt-24 pb-12 px-6 min-h-screen max-w-4xl mx-auto flex flex-col">
        {/* Title Section */}
        <section className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-on-surface tracking-tighter mb-4">Code Converter</h1>
          <p className="text-on-surface-variant max-w-xl mx-auto text-sm leading-relaxed">
            Transform between frameworks and modern JavaScript syntaxes with micro-precise engine execution. 
            Maintain architectural integrity across your codebase.
          </p>
        </section>

        {/* Conversion Config Card */}
        <div className="bg-surface-container-low rounded-xl border-[0.5px] border-outline-variant shadow-2xl overflow-hidden mb-8">
          <div className="p-8 space-y-8">
            {/* Source Format */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-outline">Source Format</span>
                <span className="font-mono text-[11px] text-primary/60 px-2 py-0.5 bg-primary/10 rounded">Auto-Detect</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {formats.slice(0, 5).map(f => (
                  <button 
                    key={f}
                    onClick={() => setSourceFormat(f)}
                    className={cn(
                      "px-4 py-2 rounded mono text-xs transition-all",
                      sourceFormat === f 
                        ? "bg-surface-container-highest border-[0.5px] border-primary text-primary" 
                        : "bg-surface-container-low border-[0.5px] border-outline-variant text-on-surface-variant hover:bg-surface-container-high"
                    )}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* Middle Interaction Row */}
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-x-0 h-[0.5px] bg-outline-variant"></div>
              <div className="relative flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-full shadow-[0_0_20px_rgba(192,193,255,0.3)] ring-4 ring-surface-container-low">
                  <Repeat className="text-on-primary-container text-2xl font-bold" />
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-surface-container-highest border-[0.5px] border-outline-variant rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-on-surface">Babel CDN · instant</span>
                </div>
              </div>
            </div>

            {/* Target Format */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-outline">Target Format</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['TSX', 'JSX', 'JS (ES6)', 'SOLID'].map(f => (
                  <button 
                    key={f}
                    onClick={() => setTargetFormat(f)}
                    className={cn(
                      "px-4 py-2 rounded mono text-xs transition-all",
                      targetFormat === f 
                        ? "bg-surface-container-highest border-[0.5px] border-primary text-primary" 
                        : "bg-surface-container-low border-[0.5px] border-outline-variant text-on-surface-variant hover:bg-surface-container-high"
                    )}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Upload Zone */}
        <div 
          onClick={handleConvert}
          className="relative group cursor-pointer"
        >
          <div className="absolute inset-0 bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative border-2 border-dashed border-outline-variant hover:border-primary/50 transition-all duration-300 rounded-xl p-16 flex flex-col items-center justify-center bg-surface-container-low/50">
            <div className="w-16 h-16 rounded-2xl bg-surface-container-highest flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <UploadCloud className="text-primary text-3xl" />
            </div>
            <h3 className="text-xl font-bold text-on-surface mb-2">Drop your {sourceFormat} file here</h3>
            <p className="font-mono text-[11px] text-outline uppercase tracking-widest mb-8">or click to browse local files</p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 opacity-60">
                <CheckCircle size={14} />
                <span className="font-mono text-[10px]">MAX 10MB</span>
              </div>
              <div className="flex items-center gap-2 opacity-60">
                <CheckCircle size={14} />
                <span className="font-mono text-[10px]">MULTI-FILE BATCH</span>
              </div>
            </div>
          </div>
        </div>

        {/* Meta Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 rounded-lg border-[0.5px] border-outline-variant bg-surface-container">
            <Shield className="text-primary mb-2" size={20} />
            <p className="font-mono text-[10px] text-on-surface-variant leading-relaxed">Code is processed locally in-browser whenever possible for maximum privacy.</p>
          </div>
          <div className="p-4 rounded-lg border-[0.5px] border-outline-variant bg-surface-container">
            <Zap className="text-primary mb-2" size={20} />
            <p className="font-mono text-[10px] text-on-surface-variant leading-relaxed">Direct conversion pipe with zero latency using the latest AST parsing engines.</p>
          </div>
          <div className="p-4 rounded-lg border-[0.5px] border-outline-variant bg-surface-container">
            <History className="text-primary mb-2" size={20} />
            <p className="font-mono text-[10px] text-on-surface-variant leading-relaxed">Access your last 10 conversions in the "Saved" tab across sessions.</p>
          </div>
        </div>
      </main>

      {/* Background Decorative Texture */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-primary/5 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-primary/3 blur-[100px]"></div>
      </div>
    </div>
  );
}
