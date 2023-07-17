// Separa uma abstração de sua implementação, permitindo que ambas possam variar (serem modificadas) independentemente.


// implementação específica
class Implementor {
  operarionImpl() {
    console.log("Implementor: Executando a operação específica.");
  }
}

// Abstração que se baseia na implementação
class Abstraction {
  constructor(impl) {
    this.impl = impl;
  }

  operation() {
    console.log("Abstraction: Executando a operação abstrata.");
    this.impl.operarionImpl();
  }
}

const implementor = new Implementor();
const abstraction = new Abstraction(implementor);

abstraction.operation();