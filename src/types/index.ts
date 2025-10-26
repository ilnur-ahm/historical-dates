export type TimeSegment = {
  id: number;
  startYear: number;
  endYear: number;
  category: string;
  events: Array<{
    year: number;
    description: string;
  }>;
};
