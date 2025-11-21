import React from 'react';
import Hero from './components/Hero';
import WorkflowGrid from './components/WorkflowGrid';
import FooterCTA from './components/FooterCTA';

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-white selection:text-black overflow-x-hidden font-sans antialiased">
      <Hero />
      <WorkflowGrid />
      <FooterCTA />
    </main>
  );
};

export default App;