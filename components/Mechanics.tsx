import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MECHANICS } from '../constants';
import { Plus, Minus } from 'lucide-react';

const Mechanics: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>('mech-read');

  return (
    <section className="w-full py-32 px-6 bg-zinc-950 relative">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-3xl font-light text-white tracking-tight mb-4">System Mechanics</h2>
          <p className="text-zinc-500 text-sm font-mono uppercase tracking-widest">Implementation Details</p>
        </div>

        <div className="space-y-px bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-900">
          {MECHANICS.map((mech) => (
            <div key={mech.id} className="bg-zinc-950">
              <button 
                onClick={() => setActiveId(activeId === mech.id ? null : mech.id)}
                className="w-full py-8 px-6 md:px-10 flex items-center justify-between group transition-colors hover:bg-zinc-900/30"
              >
                <div className="flex items-center gap-6 md:gap-12 text-left">
                   <span className={`font-mono text-sm transition-colors duration-300 ${activeId === mech.id ? 'text-white' : 'text-zinc-600'}`}>
                     {mech.id.split('-')[1].toUpperCase()}
                   </span>
                   <div>
                     <h3 className={`text-xl md:text-2xl font-light transition-colors duration-300 ${activeId === mech.id ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-300'}`}>
                       {mech.title}
                     </h3>
                   </div>
                </div>
                <div className={`p-2 rounded-full transition-all duration-300 ${activeId === mech.id ? 'bg-white text-black rotate-90' : 'bg-zinc-900 text-zinc-500'}`}>
                   {activeId === mech.id ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>

              <AnimatePresence>
                {activeId === mech.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="px-6 md:px-10 pb-10 pt-2">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pl-0 md:pl-[90px]">
                        {mech.points.map((point, idx) => (
                          <div key={idx} className="space-y-3">
                            <h4 className="text-sm font-medium text-white uppercase tracking-wide flex items-center gap-2">
                              <span className="w-1 h-1 bg-zinc-500 rounded-full" />
                              {point.headline}
                            </h4>
                            <p className="text-zinc-400 font-light leading-relaxed text-sm">
                              {point.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mechanics;