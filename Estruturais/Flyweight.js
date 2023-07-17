// Visa minimizar o uso da memória compartilhando o máximo de dados possível entre múltiplos objetos. Útil para quando há um grande número de objetos semelhantes e é necessário economizar recursos.


class SharedState {
  constructor(state) {
    this.state = state;
  }
}

class FlyweightFactory {
  constructor() {
    this.flyweights = {};
  }

  getFlyweight(key) {
    if(!this.flyweights[key]) {
      this.flyweights[key] = new SharedState(key);
    }
    return this.flyweights[key];
  }
}

class Client {
  constructor(factory) {
    this.factory = factory;
    this.flyweights = [];
  }

  operation(key) {
    const flyweight = this.factory.getFlyweight(key);
    this.flyweights.push(flyweight);
  }

  getFlyweights() {
    return this.flyweights;
  }
}

const factory = new FlyweightFactory();
const client = new Client(factory);

client.operation("A");
client.operation("B");
client.operation("A");

const flyweights = client.getFlyweights();
console.log(flyweights.length);
console.log(flyweights[0] === flyweights[2]);
console.log(flyweights[0] === flyweights[1]);