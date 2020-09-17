const messages = [
  "Hola",
  "Lindo",
  "Feo",
  "Lluvia",
  "Sol",
  "Viaje",
  "Comida"
]

const randomMsg = () => {
  const message = messages[Math.floor(Math.random()*messages.length)]
    console.log(message);
}

module.exports = { randomMsg };