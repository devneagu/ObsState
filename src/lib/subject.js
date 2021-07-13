class Subject {
  constructor() {
    this.observers = [];
  }
  addObserver(observer) {
    this.observers.push(observer);
  }
  removeObserver(observer) {
    const removeIndex = this.observers.findIndex((el) => observer === el);
    if (removeIndex !== -1) {
      this.observers = this.observers.slice(removeIndex, 1);
    }
  }
  notify(data) {
    if (this.observers.length) {
      this.observers.forEach((observer) => observer.update(data));
    }
  }
}

export default Subject;
