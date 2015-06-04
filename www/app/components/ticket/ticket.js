export class Ticket {
  constructor() {
    this.systems = [];
  }
  addSystem(system) {
    this.systems.push(system);
  }
  calculate() {
    let quota = 1;
    this.systems.forEach(function(system) {
      quota *= system.calculate();
    });
    return quota;
  }
}

export class System {
  constructor() {
    this.nodes = [];
  }

  addNode(node) {
    this.nodes.push(node);
  }

  calculate() {
    let quota = 1;
    this.nodes.forEach(function(node) {
      quota *= node.quota;
    });
    return quota;
  }
}

export class Node {
  constructor(eventId, oddTypeId, quota) {
    this.eventId = eventId;
    this.oddTypeId = oddTypeId;
    this.quota = quota;
  }
}
