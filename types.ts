export interface WorkflowPhase {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  goal: string;
  pivot: string;
  icon: string;
}

export interface MechanicDetail {
  id: string;
  phaseId: string;
  title: string;
  subtitle: string;
  points: {
    headline: string;
    description: string;
  }[];
}
