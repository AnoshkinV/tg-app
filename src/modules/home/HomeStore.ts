import { makeAutoObservable } from "mobx";

class HomeStore {
    
    count = 0;

    constructor() {
        makeAutoObservable(this);
    }

    incrementCount() {
        this.count++
    }


}

export const homeStore = new HomeStore();