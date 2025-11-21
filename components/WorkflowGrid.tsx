import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WORKFLOW_PHASES, MECHANICS } from '../constants';
import { Icon } from './Icons';
import { Plus, Minus } from 'lucide-react';

const WorkflowGrid: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="w-full py-32 px-6 bg-zinc-950 min-h-screen relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-zinc-900 pb-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight mb-4">The Workflow</h2>
            <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest">Four Phases of Intelligence</p>
          </div>
          <div className="hidden md:block text-right">
            <p className="text-zinc-600 max-w-xs text-sm leading-relaxed">
              Click any phase to explore the underlying mechanics and system design implications.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {WORKFLOW_PHASES.map((phase, index) => {
            const phaseMechanics = MECHANICS.find(m => m.phaseId === phase.id);
            const isActive = activeId === phase.id;

            return (
              <motion.div
                layout
                key={phase.id}
                onClick={() => setActiveId(isActive ? null : phase.id)}
                className={`group relative overflow-hidden rounded-2xl border cursor-pointer transition-all duration-500
                  ${isActive 
                    ? 'bg-zinc-900/60 border-white/10 col-span-1 md:col-span-2 ring-1 ring-white/5 shadow-2xl' 
                    : 'bg-zinc-900/20 border-white/5 hover:bg-zinc-900/40 hover:border-white/10'
                  }
                `}
              >
                <div className="relative p-8 md:p-10 backdrop-blur-sm">
                  {/* Ambient Background Glow for Active State */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={`absolute inset-0 opacity-5 pointer-events-none bg-gradient-to-br ${
                           index === 0 ? 'from-cyan-500/20' : 
                           index === 1 ? 'from-violet-500/20' : 
                           index === 2 ? 'from-emerald-500/20' : 
                           'from-amber-500/20'
                        } to-transparent`}
                      />
                    )}
                  </AnimatePresence>

                  {/* Header */}
                  <div className="flex justify-between items-start mb-6 relative z-10">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs text-zinc-600">0{index + 1}</span>
                      <div className={`p-2 rounded-full transition-colors duration-300 ${isActive ? 'bg-white text-black' : 'bg-zinc-800 text-zinc-500 group-hover:text-zinc-300'}`}>
                        <Icon name={phase.icon} className="w-4 h-4" />
                      </div>
                    </div>
                    <motion.div 
                      animate={{ rotate: isActive ? 180 : 0 }}
                      className="text-zinc-600"
                    >
                      {isActive ? <Minus size={18} /> : <Plus size={18} />}
                    </motion.div>
                  </div>

                  <motion.div layout="position" className="relative z-10">
                    <h3 className={`text-2xl md:text-3xl font-light mb-2 transition-colors duration-300 ${isActive ? 'text-white' : 'text-zinc-200'}`}>
                      {phase.title.split(':')[1]}
                    </h3>
                    <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-8">
                      {phase.subtitle}
                    </p>

                    <div className="max-w-3xl">
                      <p className={`text-sm md:text-base font-light leading-relaxed transition-colors duration-300 ${isActive ? 'text-zinc-300' : 'text-zinc-400'}`}>
                        {phase.goal}
                      </p>
                    </div>
                  </motion.div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isActive && phaseMechanics && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="relative z-10"
                      >
                        <div className="pt-10 mt-10 border-t border-white/5 grid grid-cols-1 lg:grid-cols-12 gap-12">
                          
                          {/* The Pivot Column */}
                          <div className="lg:col-span-4 space-y-2">
                             <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">The Strategic Pivot</span>
                             <p className="text-xl md:text-2xl font-light text-white leading-tight">
                               {phase.pivot}
                             </p>
                          </div>

                          {/* Mechanics Column */}
                          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                            {phaseMechanics.points.map((point, idx) => (
                              <div key={idx} className="group/point">
                                <h4 className="text-sm font-medium text-white mb-3 flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 bg-zinc-700 rounded-full group-hover/point:bg-white transition-colors duration-300" />
                                  {point.headline}
                                </h4>
                                <p className="text-sm text-zinc-400 leading-relaxed font-light">
                                  {point.description}
                                </p>
                              </div>
                            ))}
                          </div>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {/* Collapsed State Pivot Preview */}
                  {!isActive && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="mt-8 pt-6 border-t border-white/5 relative z-10"
                    >
                      <span className="text-[10px] font-bold text-zinc-700 uppercase block mb-2">The Pivot</span>
                      <p className="text-sm text-zinc-500 font-light line-clamp-2 group-hover:text-zinc-400 transition-colors">{phase.pivot}</p>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkflowGrid;