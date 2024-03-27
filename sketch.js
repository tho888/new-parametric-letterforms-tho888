const canvasWidth = 960;
const canvasHeight = 500;

/*
 * my three variable per letter are:
 *
   size: radius of the second circle (in pixels)
   offsetx: x offset (in pixels) of the second circle
            relative to the first one
   offsety: y offset (in pixels) of the second circle
            relative to the first one
 *
 */

const letterA = {
  "size": 50,
  "offsetx": 0,
  "offsety": 0,
  "lerpColorAmt": 0.3,
  "stemRightDescender": 0,
  "stemRightAscender": 55
}

const letterB = {
  "size": 50,
  "offsetx": 0,
  "offsety": 0,
  "lerpColorAmt": 0.4,
  "stemLeftDescender": 0,
  "stemLeftAscender": 150
}

const letterC = {
  "size": 50,
  "offsetx": 0,
  "offsety": 0,
  "lerpColorAmt": 0.5
}

const darkGrey = "#241F1D";
const salmon = "#F2755E";

function setup() {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(salmon);
  strokeWeight(50);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw() {
  // clear screen
  background(darkGrey);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 1.6;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x,        center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

  //line variables
  let stem1 = letterData["stemLeftDescender"];
  let stem2 = letterData["stemLeftAscender"];
  let stem3 = letterData["stemRightDescender"];
  let stem4 = letterData["stemRightAscender"];

  let colorMixVar = letterData["lerpColorAmt"];

  let salmonCopy = color("#F2755E");
  let darkGreyCopy = color("#241F1D");
  let colorMix = lerpColor(salmonCopy, darkGreyCopy, colorMixVar);

  // draw two circles
  push();
  noStroke();
  fill(salmon);
  ellipse(posx, posy, 150, 150);
  fill(colorMix);
  ellipse(pos2x, pos2y, size2, size2);
  pop();

  line(posx - 50, posy + stem1, posx - 50, posy - stem2);
  line(posx + 50, posy + stem3, posx + 50, posy - stem4);

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  } else if (key == '@') {
    saveBlocksImages(true);
  }
}