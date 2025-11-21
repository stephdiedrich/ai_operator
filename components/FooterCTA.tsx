import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Terminal, Command } from 'lucide-react';

type Step = 'idle' | 'drafting' | 'reviewing' | 'approved' | 'rejected';

const FooterCTA: React.FC = () => {
  const [step, setStep] = useState<Step>('idle');
  const [emailContent, setEmailContent] = useState("");
  const [feedback, setFeedback] = useState("");

  const startDemo = () => {
    if (step !== 'idle' && step !== 'approved') return;
    setStep('drafting');
    setEmailContent("");
    setFeedback("");
  };

  useEffect(() => {
    if (step === 'drafting') {
      const text = "Refunding is against policy. No exceptions.";
      let i = 0;
      const interval = setInterval(() => {
        setEmailContent(text.substring(0, i + 1));
        i++;
        if (i === text.length) {
          clearInterval(interval);
          setTimeout(() => setStep('reviewing'), 500);
        }
      }, 30);
      return () => clearInterval(interval);
    }

    if (step === 'reviewing') {
      const timer = setTimeout(() => {
        setStep('rejected');
        setFeedback("Tone check: Failed (Aggressive).");
      }, 1200);
      return () => clearTimeout(timer);
    }

    if (step === 'rejected') {
      const timer = setTimeout(() => {
        setEmailContent("");
        setStep('drafting-2' as any);
      }, 1800);
      return () => clearTimeout(timer);
    }
    
    // @ts-ignore
    if (step === 'drafting-2') {
        const text = "Due to policy, we cannot refund this transaction...";
        let i = 0;
        const interval = setInterval(() => {
          setEmailContent(text.substring(0, i + 1));
          i++;
          if (i === text.length) {
            clearInterval(interval);
            setTimeout(() => setStep('reviewing-2' as any), 500);
          }
        }, 20);
        return () => clearInterval(interval);
    }

    // @ts-ignore
    if (step === 'reviewing-2') {
        const timer = setTimeout(() => {
            setStep('approved');
            setFeedback("Tone check: Passed.");
        }, 1200);
        return () => clearTimeout(timer);
    }

  }, [step]);

  return (
    <section className="w-full py-32 px-6 bg-zinc-950 border-t border-white/5">
      
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-light text-white mb-4 tracking-tight">Build your <span className="font-normal italic">Critique Loop</span></h2>
        <p className="text-zinc-500 mb-16 font-mono text-sm">
          Verification improves reliability by 40%
        </p>

        {/* Terminal Interface */}
        <div className="bg-black rounded-lg border border-zinc-800 p-1 shadow-2xl max-w-xl mx-auto mb-12 text-left relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-500 to-transparent opacity-20" />
          
          {/* Terminal Header */}
          <div className="bg-zinc-900/50 px-4 py-3 flex items-center justify-between border-b border-zinc-800/50">
            <div className="flex items-center gap-3">
               <Terminal size={14} className="text-zinc-500" />
               <span className="text-xs font-mono text-zinc-500">./verifier_agent.sh</span>
            </div>
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-zinc-800" />
              <div className="w-2 h-2 rounded-full bg-zinc-800" />
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 h-[200px] font-mono text-xs md:text-sm space-y-4 overflow-hidden">
            
            {/* Output A */}
            <div className="flex gap-3 opacity-100">
              <span className="text-zinc-600 select-none">{'>'}</span>
              <div className="flex-1">
                <span className="text-zinc-500 block mb-1">Agent_01 (Generator)</span>
                <span className="text-zinc-200">
                  {step === 'idle' ? 'Ready for input...' : emailContent}
                  {(step === 'drafting' || step === 'drafting-2' as any) && <span className="animate-pulse inline-block w-2 h-4 bg-zinc-500 ml-1 align-middle" />}
                </span>
              </div>
            </div>

            {/* Output B */}
            <AnimatePresence>
              {(step !== 'idle' && step !== 'drafting' && step !== 'drafting-2' as any) && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-3"
                >
                  <span className="text-zinc-600 select-none">{'>'}</span>
                  <div className="flex-1">
                    <span className="text-zinc-500 block mb-1">Agent_02 (Critic)</span>
                    <div className="flex items-center gap-2">
                       {step === 'rejected' && <span className="text-red-400">⚠ REJECTED:</span>}
                       {step === 'approved' && <span className="text-emerald-400">✓ APPROVED:</span>}
                       {(step === 'reviewing' || step === 'reviewing-2' as any) && <span className="text-amber-400">... ANALYZING</span>}
                       
                       {(step === 'approved' || step === 'rejected') && (
                         <span className="text-zinc-400">{feedback}</span>
                       )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex justify-center">
          <button 
            onClick={startDemo}
            disabled={step !== 'idle' && step !== 'approved'}
            className={`
              group relative px-8 py-4 overflow-hidden rounded-none transition-all duration-300
              ${step === 'idle' || step === 'approved' ? 'cursor-pointer' : 'cursor-wait opacity-50'}
            `}
          >
            <span className="absolute inset-0 w-full h-full bg-white group-hover:bg-zinc-200 transition-colors duration-300" />
            <span className="relative flex items-center gap-3 text-black font-medium tracking-wide text-sm uppercase">
              {step === 'idle' ? 'Initialize Sequence' : step === 'approved' ? 'Reset Sequence' : 'Processing...'}
              <Command size={14} />
            </span>
          </button>
        </div>

        <div className="mt-20 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600 font-mono uppercase tracking-wider">
          <p>AI Operator Framework © 2025</p>
          <p>System Status: Optimal</p>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;