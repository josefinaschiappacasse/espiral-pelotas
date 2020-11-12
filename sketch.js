

//para este espiral uso como base el codigo dado en clases, cambiando triangle por ellipse y agregando sliders que modifican tamaño y color, asi se permite un juego en el que se pueden observar variados espirales 

let s1, s2, rad, turns, angInc, col, tam, tam2;
let sketch;

function setup() {
  sketch = createCanvas(700, 700);
  sketch.parent("p5");
  
  s1 = createSlider(0, 2, 0.6, 0.0001); // rad
  s2 = createSlider(0, 20, 5, 1); //turns
  s3 = createSlider(0, PI, 0.5, 0.00001);
  s5 = createSlider(10,100);
  s6 = createSlider(10,100);
  colorMode(HSB)
  s4 = createSlider(0, 255);
 

}

function draw() {
  
  translate(width / 2, height / 2);
  background(255);

  rad = s1.value();
  turns = s2.value();
  angInc = s3.value();
  col = s4.value();
  tam = s5.value();
  tam2 = s6.value();
 

  let totalAng = turns * TWO_PI;

  /*r = random(100); // r es un numero random entre 0 - 100
  g = random(100); // g es un numero random entre 0- 100
  b = random(100); // b es un numero random entre 0 - 100*/

  /* stroke("red");
   strokeWeight(1);*/

  // espiral a partir del incremento del ángulo

  /*
  beginShape();
  for(let ang = 0; ang < turns * TWO_PI; ang += angInc){ 
    r += rad;
    // identidad circular
    let x = cos(ang) * r;
    let y = sin(ang) * r;
    vertex(x, y);
  }
  endShape();
  */

  // esperial a partir del incremento del radio

  let ang = 0;
  for (let r = 300; r > 0; r -= rad / turns) {
    // identidad circular
    let x = cos(ang) * r;
    let y = sin(ang) * r;
    let escala = map(r, 0, 200, .1, 1);
    //vertex(x, y);
    escama(x, y, ang, escala);
    ang += angInc;
  }
}


function escama(x, y, ang, sc) {
  push();
  translate(x, y);
  rotate(ang + HALF_PI);
  scale(sc);
  fill(col, 100, 100);
  noStroke();
  ellipse(10, 20, tam2, tam);
  pop();
}
