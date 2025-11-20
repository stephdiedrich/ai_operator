import React from 'react';
import Hero from './components/Hero';
import WorkflowGrid from './components/WorkflowGrid';
import Mechanics from './components/Mechanics';
import FooterCTA from './components/FooterCTA';

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-slate-900 text-white selection:bg-cyan-500 selection:text-white overflow-x-hidden font-sans">
      <Hero />
      <WorkflowGrid />
      <Mechanics />
      <FooterCTA />
    </main>
  );
};

export default App;