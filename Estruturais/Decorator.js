// Permite adicionar comportamentos a um objeto de forma dinãmica, sem alterar sua estrutura básica. Ele envolve o objeto original com um objeto decorador, que adiciona as funcionalidades extras.

// Componente base
class Component {
  operation() {
    console.log("Component: Executando operação");
  }
}

// Decorador base
class Decorator extends Component {
  constructor(component) {
    super();
    this.component = component;
  }

  operation() {
    this.component.operation();
  }
}

// Decorador concreto
class ConcreteDecoratorA extends Decorator {
  operation() {
    super.operation();
    this.addExtraBehavior();
  }

  addExtraBehavior() {
    console.log("ConcreteDecoratorA: Adicionando comportamento extra");
  }
}

// Decorador concreto
class ConcreteDecoratorB extends Decorator {
  operation() {
    super.operation();
    this.addExtraBehavior();
  }

  addExtraBehavior() {
    console.log("ConcreteDecoratorB: Adicionando comportamento extra");
  }
}

const component = new Component();
const decoratorA = new ConcreteDecoratorA(component);
const decoratorB = new ConcreteDecoratorA(decoratorA);

decoratorB.operation();