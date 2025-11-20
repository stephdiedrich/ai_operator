import React from 'react';
import { BookOpen, Brain, Zap, ShieldCheck, LayoutDashboard, FileText, Layers, GitMerge } from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, className }) => {
  switch (name) {
    case 'book': return <BookOpen className={className} />;
    case 'brain': return <Brain className={className} />;
    case 'zap': return <Zap className={className} />;
    case 'shield': return <ShieldCheck className={className} />;
    case 'dashboard': return <LayoutDashboard className={className} />;
    case 'file': return <FileText className={className} />;
    case 'layers': return <Layers className={className} />;
    case 'merge': return <GitMerge className={className} />;
    default: return <Brain className={className} />;
  }
};