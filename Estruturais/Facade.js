// 

// Subsistema complexo - SubsistemaA
class SubsystemA {
  operationA() {
    console.log("SubsystemA: Operação A");
  }
  operationB() {
    console.log("SubsystemB: Operação B");
  }
}

// Subsistema complexo - SubsistemaB
class SubsystemB {
  operationA() {
    console.log("SubsystemA: Operação A");
  }
  operationB() {
    console.log("SubsystemB: Operação B");
  }
}

class Facade {
  constructor() {
    this.subsystemA = new SubsystemA();
    this.subsystemB = new SubsystemB();
  }

  operation() {
    this.subsystemA.operationA();
    this.subsystemA.operationB();
    this.subsystemB.operationA();
    this.subsystemB.operationB();
  }
}

const facade = new Facade();
facade.operation();