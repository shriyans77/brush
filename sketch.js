function setup() {
  createCanvas(700, 400);
 // R,G & B values.
 background(255,204,0);

 // take a big brush
 strokeWeight(20);
 //dip it in color purple
 stroke('purple');
}
function draw(){
  let posX = mouseX
  let posY = mouseY
  
  // place dot on a screen
  point(posX,posY);
}