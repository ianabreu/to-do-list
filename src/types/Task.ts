export interface Task {
  id: string;
  title: string;
  done: boolean;
  executionDate: string;
  created_at: string;
}
export interface TaskProps {
  task: Task;
}
