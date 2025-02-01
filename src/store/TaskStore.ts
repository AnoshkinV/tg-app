import { makeAutoObservable } from "mobx";


export type TaskStatus = "notCompleted" | "completed" | "claimed";

export interface ITask {
    id: number,
    title: string,
    status: TaskStatus
}

class TaskStore {
    tasks: ITask[] = [
        { id: 1, title: "Task 1", status: "notCompleted" },
        { id: 2, title: "Task 2", status: "completed" },
        { id: 3, title: "Task 3", status: "claimed" },
      ];

      constructor() {
        makeAutoObservable(this);
      }

      updateTaskStatus(id: number, newStatus: TaskStatus){
        const task = this.tasks.find((t) => t.id === id); {
            if(task) 
                task.status = newStatus;
        
        }
    }   
}

export const taskStore = new TaskStore();
