import { Task } from "../schema";

export interface TaskContextType {
    tasks: Task[];
    addTask: (text: string) => void;
    toggleTask: (id: number) => void;
  }
  