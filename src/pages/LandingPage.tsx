import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Monitor, RefreshCw, ArrowRight } from 'lucide-react';
import TopNavBar from '../components/TopNavBar';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopNavBar />
      
      <main className="relative flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-24 pb-20 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high ghost-border rounded-full font-mono text-[10px] tracking-widest text-primary uppercase"
            >
              <span className="flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
              v2.0 Now Live
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[36px] font-medium leading-tight text-on-surface font-headline md:text-5xl lg:text-6xl max-w-3xl"
            >
              Instant web preview. <span className="text-primary">Zero install.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-on-surface-variant max-w-xl text-lg leading-relaxed"
            >
              The ultra-fast workspace for developers to render, test, and convert code directly in the browser with hardware-accelerated precision.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="pt-8 flex flex-col sm:flex-row gap-4"
            >
              <Link 
                to="/workspace"
                className="px-8 py-3 bg-primary-container text-on-primary-container font-mono text-sm font-bold rounded-[4px] hover:bg-primary transition-all active:scale-[0.98]"
              >
                Open Workspace
              </Link>
              <button className="px-8 py-3 ghost-border text-on-surface font-mono text-sm font-bold rounded-[4px] hover:bg-surface-container-high transition-all">
                View Demo
              </button>
            </motion.div>
          </div>

          {/* Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary rounded-full blur-[120px]"></div>
          </div>
        </section>

        {/* Feature Cards */}
        <section className="px-6 py-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Preview Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-7 bg-surface-container-low ghost-border rounded-xl p-8 flex flex-col justify-between group hover:bg-surface-container transition-colors"
          >
            <div>
              <div className="w-12 h-12 bg-surface-container-highest rounded-[4px] flex items-center justify-center mb-6">
                <Monitor className="text-primary" />
              </div>
              <h3 className="text-2xl font-headline font-semibold mb-4">Preview</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {['HTML', 'JSX', 'TSX', 'Vue', 'JS', 'CSS', 'SVG'].map(tag => (
                  <span key={tag} className="font-mono text-[11px] px-2 py-1 bg-surface-container-highest text-surface-container-highest rounded-[4px] text-on-surface-variant">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-lg overflow-hidden ghost-border aspect-video bg-surface-container-highest relative">
                <img 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" 
                  src="https://picsum.photos/seed/code/800/450" 
                  alt="Code preview"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent"></div>
              </div>
              <Link 
                to="/workspace"
                className="w-full py-3 bg-primary-container text-on-primary-container font-mono text-sm font-bold rounded-[4px] hover:bg-primary transition-all text-center block"
              >
                Start previewing
              </Link>
            </div>
          </motion.div>

          {/* Convert Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-5 bg-surface-container-low ghost-border rounded-xl p-8 flex flex-col justify-between group hover:bg-surface-container transition-colors"
          >
            <div>
              <div className="w-12 h-12 bg-surface-container-highest rounded-[4px] flex items-center justify-center mb-6">
                <RefreshCw className="text-primary" />
              </div>
              <h3 className="text-2xl font-headline font-semibold mb-4">Convert</h3>
              <div className="grid grid-cols-2 gap-2 mb-8">
                {[
                  ['TSX', 'JSX'], ['SASS', 'CSS'], ['SVG', 'JSX'], ['JSON', 'TS'],
                  ['HTML', 'JSX'], ['JS', 'TS'], ['CJS', 'ESM'], ['Markdown', 'HTML']
                ].map(([from, to]) => (
                  <span key={`${from}-${to}`} className="font-mono text-[10px] px-2 py-1.5 ghost-border text-on-surface-variant rounded-[4px] flex items-center gap-2">
                    {from} <ArrowRight size={12} /> {to}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-surface-container-highest rounded-lg ghost-border flex items-center justify-center">
                <span className="font-mono text-xs text-outline italic">Drop files here...</span>
              </div>
              <Link 
                to="/convert"
                className="w-full py-3 ghost-border border-primary text-primary font-mono text-sm font-bold rounded-[4px] hover:bg-primary/10 transition-all text-center block"
              >
                Start converting
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Metrics Row */}
        <section className="px-6 py-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { val: 'Zero', label: 'install' },
              { val: '12', label: 'formats' },
              { val: 'Native', label: 'browser-engine' },
              { val: 'Open', label: 'source' },
            ].map((metric, i) => (
              <div key={i} className="p-6 bg-surface-container-low ghost-border rounded-xl flex flex-col items-center text-center">
                <span className="text-3xl font-headline font-bold text-on-surface mb-1">{metric.val}</span>
                <span className="font-mono text-[11px] uppercase tracking-widest text-outline">{metric.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-6 py-20 max-w-5xl mx-auto text-center">
          <div className="p-12 bg-surface-container-high rounded-2xl relative overflow-hidden ghost-border">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">Ready to speed up your workflow?</h2>
              <p className="text-on-surface-variant mb-10 max-w-lg mx-auto">Join 10,000+ developers using PreviewIt to build and test web components in record time.</p>
              <Link 
                to="/workspace"
                className="px-10 py-4 bg-primary text-on-primary-container font-mono text-sm font-bold rounded-[4px] hover:brightness-110 shadow-[0_0_20px_rgba(192,193,255,0.2)] inline-block"
              >
                Launch PreviewIt Now
              </Link>
            </div>
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <img 
                className="w-full h-full object-cover" 
                src="https://picsum.photos/seed/abstract/1200/600" 
                alt="Abstract background"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-6 py-12 border-t-[0.5px] border-outline-variant bg-surface">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="font-mono font-bold text-primary text-lg tracking-tighter mb-2">PreviewIt ⚡</div>
            <p className="font-mono text-[11px] text-outline">Built for performance. Optimized for speed.</p>
          </div>
          <div className="flex gap-8 font-mono text-[11px] tracking-wider uppercase text-outline">
            <a className="hover:text-primary transition-colors" href="#">Privacy</a>
            <a className="hover:text-primary transition-colors" href="#">Terms</a>
            <a className="hover:text-primary transition-colors" href="#">GitHub</a>
            <a className="hover:text-primary transition-colors" href="#">Status</a>
          </div>
          <div className="text-outline font-mono text-[11px]">
            © 2024 PREVIEWIT INC.
          </div>
        </div>
      </footer>
    </div>
  );
}
