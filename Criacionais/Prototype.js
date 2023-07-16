// Para quando é necessário criar novos objetos duplicando um objeto existente, em vez de criar um objeto do zero.
// É útil quando a criação direta de um objeto é custosa ou complexa


// Clonagem rasa
class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }

  clone() {
    return new Produto(this.nome, this.preco);
  }
}

const produtoOriginal = new Produto("Celular", 1000);
const produtoClone = produtoOriginal.clone();

produtoClone.nome = "tablet"

console.log(produtoOriginal);
console.log(produtoClone);

// Clonagem profunda
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  let clone = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }

  return clone;
}

// Exemplo de uso da clonagem profunda
const original = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
  },
};

const cloned = deepClone(original);

console.log(original);
console.log(cloned);

original.address.street = "456 Elm St";

console.log(original);
console.log(cloned);
