// Útil para garantir que uma classe possua apenas 1 única instância.
// O código abaixo faz uso do conceito de closure do JS.

const Singleton = (() => {
  let instancia;
  
  function createInstancia() {
    const objeto = new Object("Instância única");
    return objeto;
  }

  return {
    getInstancia: function () {
      if(!instancia) {
        instancia = createInstancia();
      }

      return instancia;
    }
  }
})();

const instanciaA = Singleton.getInstancia();
const instanciaB = Singleton.getInstancia();

console.log(instanciaA);
console.log(instanciaA === instanciaB);