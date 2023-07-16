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