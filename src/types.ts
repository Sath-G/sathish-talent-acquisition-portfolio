export interface CapabilityItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  keyHighlights: string[];
  toolkit: string[];
  businessOutcomes: string;
  iconName: string;
}

export interface MetricItem {
  id: string;
  value: string;
  numericTarget?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  description: string;
  category: 'Scale' | 'Financial' | 'Efficiency' | 'Growth' | 'Diversity' | 'Early Careers';
}

export interface SpectrumRole {
  id: string;
  title: string;
  category: string;
  sourcingChannels: string[];
  assessmentFramework: string;
  turnaroundFocus: string;
  businessImpact: string;
}

export interface IntelligencePillar {
  id: string;
  title: string;
  tagline: string;
  description: string;
  metrics: { label: string; value: string }[];
  deliverables: string[];
}

export interface AiPillar {
  id: string;
  title: string;
  tagline: string;
  description: string;
  aiWorkflow: string;
  humanElement: string;
  productivityMultiplier: string;
}

export interface ApproachStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  detailedInsight: string;
  artifactsProduced: string[];
  executionKey: string;
}

export interface CareerStage {
  stageNumber: string;
  title: string;
  timeframe: string;
  focusArea: string;
  summary: string;
  progressionMetrics: {
    scope: string;
    complexity: string;
    leadership: string;
    businessImpact: string;
  };
  keyMilestones: string[];
}
