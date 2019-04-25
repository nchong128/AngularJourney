export class CounterService {
  inactiveToActiveCount: number = 0;
  activeToInactiveCount: number = 0;

  constructor() { }

  newActive() {
    this.inactiveToActiveCount ++;
    this.showCounts();
  }

  newInactive() {
    this.activeToInactiveCount ++;
    this.showCounts();
  }

  showCounts() {
    console.log("Inactive -> Active:" + this.inactiveToActiveCount);
    console.log("Active -> Inactive:" + this.activeToInactiveCount);
  }
}
