import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCcw, CheckCircle2, XCircle, Play, MessageSquare } from 'lucide-react';

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
      const text = "Dear Customer, No, we can't refund you. It's against policy. Bye.";
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
        setFeedback("Too blunt. Uses negative language. Rewrite politely.");
      }, 1500);
      return () => clearTimeout(timer);
    }

    if (step === 'rejected') {
      const timer = setTimeout(() => {
        setEmailContent("");
        setStep('drafting-2' as any); // Internal state hack for demo flow
      }, 2000);
      return () => clearTimeout(timer);
    }
    
    // @ts-ignore
    if (step === 'drafting-2') {
        const text = "Dear Customer, While we cannot process a refund at this time due to our policy, we value your business...";
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
            setFeedback("Tone is professional. Policy explained clearly. APPROVED.");
        }, 1500);
        return () => clearTimeout(timer);
    }

  }, [step]);

  return (
    <section className="w-full py-24 px-6 bg-slate-900 text-center relative overflow-hidden">
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Start Building Your First <span className="text-amber-500">Critique Loop</span></h2>
        <p className="text-slate-400 mb-12 max-w-xl mx-auto">
          Experience the power of verification. Watch two agents collaborate to improve output quality automatically.
        </p>

        {/* Interactive Demo Box */}
        <div className="bg-slate-950 rounded-2xl border border-slate-800 p-6 md:p-8 shadow-2xl max-w-2xl mx-auto mb-16 text-left">
          <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="text-xs font-mono text-slate-500">critique_loop_v1.py</div>
          </div>

          <div className="space-y-6 min-h-[200px]">
            
            {/* Agent A: Drafter */}
            <div className="flex gap-4">
               <div className="w-8 h-8 rounded-full bg-cyan-900 flex items-center justify-center flex-shrink-0 mt-1">
                 <span className="text-xs font-bold text-cyan-400">A</span>
               </div>
               <div className="flex-1">
                 <p className="text-xs text-cyan-400 font-bold mb-1">AGENT A (DRAFTER)</p>
                 <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 min-h-[60px]">
                   <p className="text-slate-300 font-mono text-sm">
                     {step === 'idle' ? <span className="opacity-30">Waiting for prompt...</span> : emailContent}
                     {(step === 'drafting' || step === 'drafting-2' as any) && <span className="animate-pulse">|</span>}
                   </p>
                 </div>
               </div>
            </div>

            {/* Agent B: Verifier */}
            <AnimatePresence>
              {(step === 'reviewing' || step === 'rejected' || step === 'reviewing-2' as any || step === 'approved') && (
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-amber-900 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold text-amber-400">B</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-amber-400 font-bold mb-1">AGENT B (VERIFIER)</p>
                    <div className={`bg-slate-900 p-3 rounded-lg border ${step === 'rejected' ? 'border-red-900/50 bg-red-900/10' : step === 'approved' ? 'border-emerald-900/50 bg-emerald-900/10' : 'border-slate-800'} min-h-[40px] flex items-center`}>
                        {step === 'reviewing' || step === 'reviewing-2' as any ? (
                             <div className="flex items-center gap-2 text-amber-400 text-xs">
                               <RefreshCcw className="w-3 h-3 animate-spin" /> Analyzing sentiment & policy...
                             </div>
                        ) : (
                            <div className="flex items-center gap-2">
                                {step === 'rejected' ? <XCircle className="w-4 h-4 text-red-500" /> : <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                                <p className={`text-sm font-mono ${step === 'rejected' ? 'text-red-400' : 'text-emerald-400'}`}>{feedback}</p>
                            </div>
                        )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          <div className="mt-8 pt-4 border-t border-slate-800 flex justify-center">
            <button 
              onClick={startDemo}
              disabled={step !== 'idle' && step !== 'approved'}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all ${
                step === 'idle' || step === 'approved' 
                ? 'bg-white text-black hover:bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)]' 
                : 'bg-slate-800 text-slate-500 cursor-not-allowed'
              }`}
            >
              {step === 'idle' ? <Play size={16} /> : step === 'approved' ? <RefreshCcw size={16} /> : <MessageSquare size={16} />}
              {step === 'idle' ? 'Run Simulation' : step === 'approved' ? 'Run Again' : 'Agents Working...'}
            </button>
          </div>
        </div>

        <div className="text-slate-600 text-sm">
          <p>© AI Operator Concepts 2025. All systems nominal.</p>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;