export interface Task {
  id: string;
  title: string;
  done: boolean;
  executionDate: Date;
  created_at: Date;
}
export interface TaskProps {
  task: Task;
}
