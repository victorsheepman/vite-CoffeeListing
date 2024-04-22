import { createContext, useState } from 'react';
import { Task } from '../schema';
import { TaskContextType } from '.';




// Creamos el contexto
export const TaskContext = createContext<TaskContextType | undefined>(undefined);

// Hook personalizado para acceder al contexto
export const useTaskContext = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = (text: string) => {
      const newTask: Task = {
        id: Date.now(),
        text,
        completed: false,
      };
      setTasks([...tasks, newTask]);
    };
  
    const toggleTask = (id: number) => {
      setTasks(tasks.map(task => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      }));
    };

    return {
        tasks,
        addTask,
        toggleTask
    }
};
