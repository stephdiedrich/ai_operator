import { WorkflowPhase, MechanicDetail } from './types';

export const WORKFLOW_PHASES: WorkflowPhase[] = [
  {
    id: 'read',
    title: 'PHASE 1: READ',
    subtitle: 'Input Strategy',
    color: 'bg-cyan-500',
    goal: 'Stuff the model with massive context as cheaply as possible.',
    pivot: 'If data is static, cache it.',
    icon: 'book',
  },
  {
    id: 'think',
    title: 'PHASE 2: THINK',
    subtitle: 'Processing Strategy',
    color: 'bg-violet-500',
    goal: 'Make smart decisions without overpaying for "PhD-level" writing.',
    pivot: 'Route by difficulty. (Smart models for hard tasks, fast models for easy tasks).',
    icon: 'brain',
  },
  {
    id: 'act',
    title: 'PHASE 3: ACT',
    subtitle: 'Output Strategy',
    color: 'bg-emerald-500',
    goal: 'Execute the task perfectly with minimal fluff.',
    pivot: 'Deterministic Action. Never let an LLM do math; make it use a tool.',
    icon: 'zap',
  },
  {
    id: 'verify',
    title: 'PHASE 4: VERIFY',
    subtitle: 'Safety Strategy',
    color: 'bg-amber-500',
    goal: 'Sleep at night knowing your agents aren\'t destroying your reputation.',
    pivot: 'Critique Loops. Two cheap agents are better than one smart agent.',
    icon: 'shield',
  },
];

export const MECHANICS: MechanicDetail[] = [
  {
    id: 'mech-read',
    phaseId: 'read',
    title: 'The "Freeze" & The "Librarian"',
    subtitle: 'Optimizing Input Costs',
    points: [
      {
        headline: 'Context Caching',
        description: "Don't re-upload your 500-page manual every time. Upload it once and keep it \"hot\" in the server RAM for a ~90% discount.",
      },
      {
        headline: 'RAG (Retrieval Augmented Generation)',
        description: "Don't trust the Context Window blindly. Use a search tool (The Librarian) to find the exact paragraph needed before the AI processes it.",
      },
    ],
  },
  {
    id: 'mech-think',
    phaseId: 'think',
    title: 'Routing & Logic',
    subtitle: 'Optimizing Intelligence',
    points: [
      {
        headline: 'Latency vs. Intelligence',
        description: 'Do not use a PhD (Claude Sonnet) to organize your calendar. Use a "Router" agent to send simple tasks to cheap models (Flash/Mini) and complex tasks to smart models.',
      },
      {
        headline: 'Chain of Thought',
        description: 'Verbosity equals Accuracy. Force the AI to "show its work" and explain logic step-by-step to reduce hallucinations.',
      },
    ],
  },
  {
    id: 'mech-act',
    phaseId: 'act',
    title: 'The Universal Plug',
    subtitle: 'Connecting to Reality',
    points: [
      {
        headline: 'MCP (Model Context Protocol)',
        description: 'The open standard that lets an AI connect to your data (Google Drive, Slack, Postgres) without custom code for every app.',
      },
      {
        headline: 'Tool Calling',
        description: 'The AI is the finger, not the calculator. Use tools for deterministic tasks like math or code execution.',
      },
    ],
  },
  {
    id: 'mech-verify',
    phaseId: 'verify',
    title: 'The Trust Layer',
    subtitle: 'Ensuring Reliability',
    points: [
      {
        headline: 'Evals',
        description: 'You can\'t scale what you can\'t measure. Run 50 automated test cases ("Did it offer a refund? Yes/No") before you launch.',
      },
      {
        headline: 'The Critique Loop',
        description: 'Agent A writes the email. Agent B reads it and checks against policy. If it fails, Agent B sends it back to Agent A.',
      },
    ],
  },
];