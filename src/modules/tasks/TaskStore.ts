import { makeAutoObservable } from "mobx";


export type TaskStatus = "notCompleted" | "completed" | "claimed";

export interface ITask {
    id: number,
    title: string,
    description: string,
    status: TaskStatus
}

class TaskStore {
    tasks: ITask[] = [
        { id: 1, title: "Join to Us", description: "some text",  status: "notCompleted" },
        { id: 2, title: "Simple verefication", description: "some text",  status: "completed" },
        { id: 3, title: "Get Prikolchiki", description: "some text",  status: "claimed" },
      ];

      constructor() {
        makeAutoObservable(this);
      }

      updateTaskStatus(id: number, newStatus: TaskStatus){
        const task = this.tasks.find((t) => t.id === id); 
        if(task) 
            task.status = newStatus;
    }   
}

export const taskStore = new TaskStore();
