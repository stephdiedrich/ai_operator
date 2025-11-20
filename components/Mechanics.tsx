import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MECHANICS } from '../constants';
import { ChevronDown } from 'lucide-react';

const MechanicCard: React.FC<{ mechanic: typeof MECHANICS[0]; isActive: boolean; onClick: () => void; colorClass: string }> = ({ 
  mechanic, 
  isActive, 
  onClick,
  colorClass 
}) => {
  return (
    <motion.div 
      layout
      onClick={onClick}
      className={`cursor-pointer overflow-hidden rounded-2xl border transition-colors duration-300 ${isActive ? 'bg-slate-800 border-slate-600' : 'bg-slate-900 border-slate-800 hover:bg-slate-800/50'}`}
    >
      <div className="p-6 flex items-center justify-between">
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
           <span className={`text-sm font-mono font-bold px-2 py-1 rounded ${colorClass.replace('bg-', 'bg-opacity-20 text-')}`}>
             {mechanic.id.split('-')[1].toUpperCase()}
           </span>
           <div>
             <h3 className="text-lg md:text-xl font-bold text-white">{mechanic.title}</h3>
             <p className="text-sm text-slate-400">{mechanic.subtitle}</p>
           </div>
        </div>
        <motion.div
          animate={{ rotate: isActive ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="text-slate-500 w-6 h-6" />
        </motion.div>
      </div>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-8 pt-0 border-t border-slate-700/50 mt-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                {mechanic.points.map((point, idx) => (
                  <div key={idx} className="space-y-2">
                    <h4 className="font-bold text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                      {point.headline}
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed pl-4">
                      {point.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Mechanics: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>('mech-read');

  const getColor = (id: string) => {
    if (id.includes('read')) return 'bg-cyan-500';
    if (id.includes('think')) return 'bg-violet-500';
    if (id.includes('act')) return 'bg-emerald-500';
    return 'bg-amber-500';
  };

  return (
    <section className="w-full py-20 px-6 bg-slate-950 border-y border-slate-800">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">Detailed Mechanics</h2>
          <p className="text-slate-400">How to implement the framework in production.</p>
        </div>

        <div className="space-y-4">
          {MECHANICS.map((mech) => (
            <MechanicCard 
              key={mech.id}
              mechanic={mech}
              isActive={activeId === mech.id}
              onClick={() => setActiveId(activeId === mech.id ? null : mech.id)}
              colorClass={getColor(mech.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mechanics;