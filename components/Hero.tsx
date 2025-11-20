import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Network, Layers } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full py-20 px-6 overflow-hidden bg-slate-900 border-b border-slate-800">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-violet-500 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 mb-6"
        >
          <Cpu size={14} className="text-cyan-400" />
          <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase">Next Gen Architecture</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 mb-4 tracking-tight"
        >
          The AI Operator<br />Framework
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-slate-400 font-light mb-8"
        >
          From Prompting to <span className="text-white font-medium">System Design</span>.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-2xl max-w-2xl mx-auto shadow-2xl"
        >
          <p className="text-lg text-slate-300 mb-4">
            Stop using software. <span className="text-cyan-400 font-semibold">Start orchestrating swarms of agents</span> to manage outcomes.
          </p>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-600 to-transparent my-4" />
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm md:text-base">
            <div className="flex items-center gap-2 text-slate-400">
              <Network size={18} className="text-emerald-400" />
              Reading is <span className="text-emerald-400 font-mono">Parallel</span> (Fast/Cheap)
            </div>
            <div className="hidden md:block w-1 h-1 bg-slate-600 rounded-full"></div>
            <div className="flex items-center gap-2 text-slate-400">
              <Layers size={18} className="text-rose-400" />
              Writing is <span className="text-rose-400 font-mono">Linear</span> (Slow/Expensive)
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;