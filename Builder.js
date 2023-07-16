// Ideal para é necessário construir objetos complexos passo a passo, sendo possível criar diferentes representações de um objeto, 
// usando mesmo processo de construção.

class Produto {
  constructor() {
  }
}

class ProdutoBuilder {
  constructor() {
    this.produto = new Produto();
  }

  setNome(nome) {
    this.produto.nome = nome;
    return this;
  }

  setPreco(preco) {
    this.produto.preco = preco;
    return this;
  }

  setDescricao(descricao) {
    this.produto.descricao = descricao;
    return this;
  }

  build() {
    return this.produto;
  }

}

const produto = new ProdutoBuilder()
  .setNome("Detergente")
  .setDescricao("Um produto de limpeza")
  .build();

console.log(produto);