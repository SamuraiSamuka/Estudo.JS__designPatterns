// Converte a interface de uma classe em outra interface esperada pelo cliente, permitindo que classes incompatíveis trabalhem juntas.

// Classe esperada pelo cliente
class ClasseEsperada {
  request() {
    console.log("Classe esperada: Chamando request do alvo.");
  }
}

class ClasseIncompativel {
  specificRequest() {
    console.log("Classe incompatível: Chamando specificRequest.");
  }
}

// Adaptador
class ClasseAdaptadora extends ClasseEsperada {
  constructor(classeIncompativel) {
    super();
    this.classeIncompativel = classeIncompativel;
  }

  request() {
    console.log("Classe adaptadora: Adaptando a chamada de request.");
    this.classeIncompativel.specificRequest();
  }
}

const classeEsperada = new ClasseEsperada();
const classeIncompativel = new ClasseIncompativel();
const classeAdaptadora = new ClasseAdaptadora(classeIncompativel);

classeEsperada.request();
classeIncompativel.specificRequest();
classeAdaptadora.request();