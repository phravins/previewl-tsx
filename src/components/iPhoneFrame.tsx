import { PlusCircle } from 'lucide-react';

interface iPhoneFrameProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  logs: { time: string; action: string }[];
}

export default function IPhoneFrame({ count, onIncrement, onDecrement, logs }: iPhoneFrameProps) {
  return (
    <div className="relative z-10 w-[320px] h-[650px] bg-surface-container-lowest border-[0.5px] border-outline-variant rounded-[54px] p-3 flex flex-col shadow-2xl">
      {/* Titanium Bezel Effect */}
      <div className="absolute inset-0 border-[4px] border-surface-container-high rounded-[54px] pointer-events-none"></div>
      
      {/* Internal Screen */}
      <div className="flex-1 bg-surface rounded-[44px] overflow-hidden relative flex flex-col">
        {/* Dynamic Island */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-20 flex items-center justify-center">
          <div className="w-2 h-2 bg-neutral-900 rounded-full mr-12"></div>
        </div>

        {/* App Content (React Counter) */}
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
          <div className="mb-8">
            <PlusCircle className="text-primary w-12 h-12 mb-4 mx-auto" fill="currentColor" fillOpacity={0.2} />
            <h1 className="font-headline text-2xl font-bold tracking-tight text-on-surface">Counter App</h1>
            <p className="text-on-surface-variant text-xs font-mono uppercase tracking-widest mt-2">Mobile Sandbox</p>
          </div>

          <div className="bg-surface-container-high rounded-3xl p-8 border-[0.5px] border-outline-variant w-full mb-8">
            <div className="font-mono text-6xl font-bold text-primary mb-2">{count}</div>
            <div className="text-on-surface-variant font-mono text-[10px] uppercase tracking-widest">Current Count</div>
          </div>

          <div className="flex gap-4 w-full">
            <button 
              onClick={onIncrement}
              className="flex-1 py-4 bg-primary-container text-on-primary-container rounded-2xl font-bold text-lg active:scale-95 transition-transform hover:brightness-110"
            >
              +
            </button>
            <button 
              onClick={onDecrement}
              className="flex-1 py-4 bg-surface-container-highest text-on-surface rounded-2xl font-bold text-lg border-[0.5px] border-outline-variant active:scale-95 transition-transform hover:bg-surface-container-high"
            >
              -
            </button>
          </div>

          <div className="mt-12 w-full h-[0.5px] bg-outline-variant"></div>

          <div className="mt-6 text-left w-full overflow-hidden">
            <div className="text-[10px] font-mono text-on-surface-variant mb-4 uppercase tracking-tighter">Event Log</div>
            <div className="space-y-2 max-h-[100px] overflow-y-auto custom-scrollbar">
              {logs.map((log, i) => (
                <div key={i} className="flex justify-between font-mono text-[10px]">
                  <span className="text-primary opacity-50">{log.time}</span>
                  <span className="text-on-surface">{log.action}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Home Indicator */}
        <div className="h-1.5 w-32 bg-on-surface-variant/20 rounded-full mx-auto mb-2"></div>
      </div>
    </div>
  );
}
