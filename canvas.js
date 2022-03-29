// index.js

const canvas = document.getElementById("game")
const ctx = canvas.getContext("2d")

//rectangulo
ctx.fillStyle =  "purple"

//fillRect(x, y, width, height)
ctx.fillRect(260, 260, 30, 30)

ctx.fillRect(25,25,100,100)
ctx.clearRect(45, 45, 60, 50)
ctx.strokeRect(300, 50, 50, 50)

ctx.fillStyle = "red"
ctx.fillRect(25,25,100,100)
//paths
ctx.beginPath()
//inicio de posicion
ctx.moveTo(450,150)
//fin de posicion
ctx.lineTo(450,50)
//ejecucion de pintado
ctx.stroke()
ctx.closePath()
