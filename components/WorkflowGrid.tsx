import React from 'react';
import { motion } from 'framer-motion';
import { WORKFLOW_PHASES } from '../constants';
import { Icon } from './Icons';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const WorkflowGrid: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl font-bold text-white mb-2">The 4-Phase Workflow</h2>
          <p className="text-slate-400">A cyclical process to maximize intelligence and minimize cost.</p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {WORKFLOW_PHASES.map((phase) => (
            <motion.div 
              key={phase.id}
              variants={item}
              className="relative group"
            >
              <div className={`absolute inset-0 ${phase.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
              <div className="h-full p-8 bg-slate-800 border border-slate-700 rounded-2xl hover:border-slate-500 transition-all duration-300 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl ${phase.color} bg-opacity-20 flex items-center justify-center text-white`}>
                    <Icon name={phase.icon} className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                    <span className="text-xs font-mono uppercase tracking-widest opacity-60 text-slate-300">{phase.subtitle}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase block mb-1">Goal</span>
                    <p className="text-slate-300 leading-relaxed">{phase.goal}</p>
                  </div>
                  
                  <div className="pl-4 border-l-2 border-slate-600">
                    <span className={`text-xs font-bold uppercase block mb-1 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400`}>The Pivot</span>
                    <p className="text-white font-medium">{phase.pivot}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WorkflowGrid;