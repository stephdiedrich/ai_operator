import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center px-6 py-20 overflow-hidden bg-zinc-950 border-b border-white/5">
      
      {/* Liquid Background - Slower, more subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <motion.div 
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-gradient-to-b from-zinc-800 to-transparent rounded-full blur-[150px]" 
        />
        <motion.div 
          animate={{ 
            x: [-50, 50, -50],
            y: [-50, 50, -50],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[10%] right-[10%] w-[60vw] h-[60vw] bg-zinc-800/30 rounded-full blur-[120px]" 
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center text-center">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
             <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
             <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400">System Architecture v2.0</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-8xl font-light tracking-tighter text-white mb-6 leading-[0.85] select-none"
        >
          AI Operator
          <span className="block text-zinc-600 text-4xl md:text-7xl mt-2 tracking-tight font-extralight">Framework</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-base md:text-lg text-zinc-500 font-light tracking-wide mb-20 max-w-xl leading-relaxed"
        >
          Getting the most out of your agent army.
        </motion.p>

        {/* Balanced Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-4xl"
        >
          <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-white/10 via-white/5 to-transparent">
            <div className="bg-black/80 backdrop-blur-2xl rounded-2xl border border-white/5 overflow-hidden shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/5">
                
                {/* Left Panel */}
                <div className="p-10 flex flex-col items-center md:items-start text-center md:text-left group transition-colors hover:bg-white/[0.02]">
                  <div className="flex items-center gap-2 mb-6">
                     <span className="w-1.5 h-1.5 bg-zinc-600 rounded-sm"></span>
                     <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Input Strategy</span>
                  </div>
                  <h3 className="text-2xl font-light text-white mb-2 group-hover:text-emerald-400 transition-colors">Parallel Reading</h3>
                  <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider mb-4">Fast • Cheap • Infinite Context</p>
                  <p className="text-sm text-zinc-400 font-light leading-relaxed max-w-xs">
                    Stuff the model with massive context via caching and RAG.
                  </p>
                </div>

                {/* Right Panel */}
                <div className="p-10 flex flex-col items-center md:items-start text-center md:text-left group transition-colors hover:bg-white/[0.02]">
                   <div className="flex items-center gap-2 mb-6">
                     <span className="w-1.5 h-1.5 bg-zinc-600 rounded-sm"></span>
                     <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Output Strategy</span>
                  </div>
                  <h3 className="text-2xl font-light text-zinc-300 mb-2 group-hover:text-amber-400 transition-colors">Linear Writing</h3>
                  <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider mb-4">Slow • Expensive • Bottleneck</p>
                   <p className="text-sm text-zinc-400 font-light leading-relaxed max-w-xs">
                    Avoid generation. Use tools and routers for deterministic action.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </motion.div>

         {/* Scroll Indicator */}
         <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
         >
           <ArrowDown className="text-zinc-800" size={20} />
         </motion.div>

      </div>
    </section>
  );
};

export default Hero;