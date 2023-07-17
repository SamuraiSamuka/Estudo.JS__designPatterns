// Útil para quando é necessário tratar um grupo de objetos de maneira semelhante a um único objeto. Permite montar composições de objetos e tratar objetos individuais e composições de objetos de MANEIRA UNIFORME.

// Componente base
class Component {
  constructor(name) {
    this.name = name;
  }

  operation() {
    console.log(`Component: Executando operação para ${this.name}`)
  }
}

// Folha (Leaf)
class Leaf extends Component {
  constructor(name) {
    super(name);
  }
}

// Composto (Composite)
class Composite extends Component {
  constructor(name) {
    super(name);
    this.children = [];
  }

  add(component) {
    this.children.push(component);
  }

  remove(component) {
    const index = this.children.indexOf(component);
    if (index !== -1) {
      this.children.splice(index, 1);
    }
  }

  operation() {
    console.log(`Composite: Executando operação para ${this.name}`);
    for (const child of this.children) {
      child.operation();
    }
  }
}

const root = new Composite("Root");
const branch1 = new Composite("Branch 1");
const branch2 = new Composite("Branch 2");
const leaf1 = new Leaf("Leaf 1");
const leaf2 = new Leaf("Leaf 2");

root.add(branch1);
root.add(branch2);
branch1.add(leaf1);
branch2.add(leaf2);

root.operation();