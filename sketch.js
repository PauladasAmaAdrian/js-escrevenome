let xBolinha = 300;
let yBolinha = 200;
let diamentro = 22;

let velocidadeXBolinha = 5;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background (0);
  circle(xBolinha, yBolinha, diamentro);
  xBolinha = xBolinha + 1
}