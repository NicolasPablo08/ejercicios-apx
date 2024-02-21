const jugadorUno = {
    nombre: "Marce",
    habilidades: {
      ataque: 70,
      velocidad: 30,
      vida: 60,
      magia: 120,
    },
    articulos: ["espada", "escudo", "varita"],
  };
  
  const jugadorDos = {
    nombre: "Flor",
    habilidades: {
      ataque: 73,
      velocidad: 30,
      vida: 80,
      magia: 100,
    },
    articulos: ["escudo", "varita", "capa", "pocion"],
  };
  
  var contadorPuntosJug1 = 0;
  var contadorPuntosJug2 = 0;
  var ganador;
  
  
  if (jugadorUno.habilidades.ataque > jugadorDos.habilidades.ataque) {
    contadorPuntosJug1 = contadorPuntosJug1 + 1;
  }else if (jugadorUno.habilidades.ataque < jugadorDos.habilidades.ataque) {
    contadorPuntosJug2++;
  } else {
  contadorPuntosJug1++;
  contadorPuntosJug2++;
  };

  if (jugadorUno.habilidades.velocidad > jugadorDos.habilidades.velocidad) {
    contadorPuntosJug1++;
  } else if (jugadorUno.habilidades.velocidad < jugadorDos.habilidades.velocidad) {
    contadorPuntosJug2++;
  } else {
    contadorPuntosJug1++;
    contadorPuntosJug2++;
  };

  if (jugadorUno.habilidades.vida > jugadorDos.habilidades.vida) {
    contadorPuntosJug1++;
  } else if (jugadorUno.habilidades.vida < jugadorDos.habilidades.vida) {
    contadorPuntosJug2++;
  } else {
    contadorPuntosJug1++;
    contadorPuntosJug2++;
  };

  if (jugadorUno.habilidades.magia > jugadorDos.habilidades.magia) {
    contadorPuntosJug1++;
  } else if (jugadorUno.habilidades.magia < jugadorDos.habilidades.magia) {
    contadorPuntosJug2++;
  } else {
    contadorPuntosJug1++;
    contadorPuntosJug2++;
  };

  if (jugadorUno.articulos.length > jugadorDos.articulos.length) {
    contadorPuntosJug1++;
  } else if (jugadorUno.articulos.length < jugadorDos.articulos.length) {
    contadorPuntosJug2++;
  }; 

  const resultado = {
    jugador1: contadorPuntosJug1,
    jugador2: contadorPuntosJug2,
    ganador: contadorPuntosJug1 > contadorPuntosJug2 ? "Ganador Jugador1" : "Ganador Jugador2"
  };
  
  console.log(resultado);
  