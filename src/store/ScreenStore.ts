import { makeAutoObservable } from "mobx";


export type ScreenType = "home" | "taskbar" | "friends" | "wallet";

export type Route = {
    type: ScreenType;
    [key: string]: any;
    state?: any;
};

class ScreenStore {
    private history: Route[] = [{type: "home"}];
    private onceRoute?: Route;

    isLoading: boolean = true;

    constructor() {
        makeAutoObservable(this, {}, {autoBind: true});

    }

    go(route: Route) {
        this.onceRoute = undefined;
        this.history.push(route);
    }

    goOnce(route: Route) {
        this.onceRoute = route;
    }

    restoreHistory() {
        this.history = [{type: "home"}];
    }

    back() {
        if(this.onceRoute) {
            this.onceRoute = undefined;
            return
        }
        if(this.history.length > 1) {
            this.history.pop();
        }
    }

    setIsLoading(isLoading: boolean) {
        this.isLoading = isLoading;
    }

    get screen(): Route {
        return this.onceRoute || this.history[this.history.length - 1];
    }
}

export const screenStore = new ScreenStore();

