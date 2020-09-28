class Subj {
    subscribers = [];
    next(value){
        this.subscribers.forEach(func => func(value))
    }
    subscribe(next){
        this.subscribers.push(next);
    }
}

class BehaviorSubject {
    subscribers = [];
    init;
    constructor(init) {
        this.init = init;
    }
    next(value) {
        this.subscribers.forEach(func => func(value))
        this.init = value
    }
    subscribe(next){
        this.subscribers.push(next)
        next(this.init)
    }
}