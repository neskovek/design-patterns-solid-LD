/*
class Ave {
    voar() {
      console.log("Voando...");
    }
  }
  
class Pato extends Ave {
    voar() {
      console.log("O pato está voando!");
    }
  }
  
class Pinguim extends Ave {
    voar() {
      throw new Error("Pinguins não voam!");
    }
  }
  
function fazerAveVoar(ave) {
    ave.voar();
  }
  
const pato = new Pato();
fazerAveVoar(pato); // ✅ "O pato está voando!"
  
const pinguim = new Pinguim();
fazerAveVoar(pinguim); // ❌ Erro: "Pinguins não voam!"
*/

//-----

class Ave {
    comer() {
      console.log("Comendo...");
    }
  }
  
  class AveQueVoa extends Ave {
    voar() {
      console.log("Voando...");
    }
  }
  
  class Pato extends AveQueVoa {
    voar() {
      console.log("O pato está voando!");
    }
  }
  
  class Pinguim extends Ave {
    nadar() {
      console.log("O pinguim está nadando!");
    }
  }
  
  function fazerAveVoar(ave) {
    if (ave instanceof AveQueVoa) {
      ave.voar();
    } else {
      console.log("Essa ave não voa.");
    }
  }
  
  const pato = new Pato();
  fazerAveVoar(pato); // ✅ "O pato está voando!"
  
  const pinguim = new Pinguim();
  fazerAveVoar(pinguim); // ✅ "Essa ave não voa."


  