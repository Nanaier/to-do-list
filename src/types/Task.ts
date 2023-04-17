export type Status = "planned" | "in-progress" | "completed";

export interface Task {
  id: number;
  title: string;
  description: string;
  status: Status;
}
