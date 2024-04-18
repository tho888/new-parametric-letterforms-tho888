// system setup
var systemBackgroundColor = "#aaa";
var systemLineColor = "#fff";
var systemBoxColor = "#555";

// colour setup
const darkGrey = "#241F1D";
const salmon = "#F2755E";

function drawLetter(letterData) {

  push();

  // declaring colours
  fill(darkGrey);
  stroke(darkGrey);
  strokeWeight(10);
  strokeCap(SQUARE);

  // horizontal line parameters
  let hLine1XPos = 0 + letterData["hLine1XPos"];
  let hLine1YPos = 100 + letterData["hLine1YPos"];
  let hLine2XPos = 0 + letterData["hLine2XPos"];
  let hLine2YPos = 100 + letterData["hLine2YPos"];
  let hLine3XPos = 0 + letterData["hLine3XPos"];
  let hLine3YPos = 100 + letterData["hLine3YPos"];
  let hLine3Length = 0 + letterData["hLine3Length"];

  // vertical line parameters
  let vLine1XPos = 0 + letterData["vLine1XPos"];
  let vLine1YPos = 100 + letterData["vLine1YPos"];
  let vLine1Length = 0 + letterData["vLine1Length"];
  let vLine2XPos = 0 + letterData["vLine2XPos"];
  let vLine2YPos = 100 + letterData["vLine2YPos"];
  let vLine2Length = 0 + letterData["vLine2Length"];
  let vLine3XPos = 0 + letterData["vLine3XPos"];
  let vLine3YPos = 100 + letterData["vLine3YPos"];
  let vLine3Length = 0 + letterData["vLine3Length"];

  // diagonal line parameters
  let dLine1XPos = 0 + letterData["dLine1XPos"];
  let dLine1YPos = 100 + letterData["dLine1YPos"];
  let dLine1Length = 0 + letterData["dLine1Length"];
  let dLine2XPos = 0 + letterData["dLine2XPos"];
  let dLine2YPos = 100 + letterData["dLine2YPos"];
  let dLine2Length = 0 + letterData["dLine2Length"];

  
  // draw horizontal lines
  customLine();
  line(hLine2XPos, hLine2YPos, 100 + hLine2XPos, hLine2YPos);
  line(hLine3XPos, hLine3YPos, hLine3Length + hLine3XPos, hLine3YPos);

  // draw vertical lines
  line(vLine1XPos, vLine1YPos, vLine1XPos, vLine1Length + vLine1YPos);
  line(vLine2XPos, vLine2YPos, vLine2XPos, vLine2Length + vLine2YPos);
  line(vLine3XPos, vLine3YPos, vLine3XPos, vLine3Length + vLine3YPos);

  // draw diagonal lines
  line(dLine1XPos, dLine1YPos, dLine1Length + dLine1XPos, dLine1Length + dLine1YPos);
  line(dLine2XPos, dLine2YPos, dLine2XPos - dLine2Length, dLine2Length + dLine2YPos);
  pop();

  // custom line function to draw dotted line

  function customLine() {
    point(hLine1XPos, hLine1YPos);
    point(hLine1XPos + 20, hLine1YPos);
    point(hLine1XPos + 40, hLine1YPos);
    point(hLine1XPos + 60, hLine1YPos);
    point(hLine1XPos + 80, hLine1YPos);
    point(hLine1XPos + 100, hLine1YPos);


  }

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["hLine1XPos"]    = map(percent, 0, 100, oldObj["hLine1XPos"], newObj["hLine1XPos"]);
  new_letter["hLine1YPos"] = map(percent, 0, 100, oldObj["hLine1YPos"], newObj["hLine1YPos"]);
  new_letter["hLine2XPos"] = map(percent, 0, 100, oldObj["hLine2XPos"], newObj["hLine2XPos"]);
  new_letter["hLine2YPos"] = map(percent, 0, 100, oldObj["hLine2YPos"], newObj["hLine2YPos"]);
  new_letter["hLine3XPos"] = map(percent, 0, 100, oldObj["hLine3XPos"], newObj["hLine3XPos"]);
  new_letter["hLine3YPos"] = map(percent, 0, 100, oldObj["hLine3YPos"], newObj["hLine3YPos"]);
  new_letter["hLine3Length"] = map(percent, 0, 100, oldObj["hLine3Length"], newObj["hLine3Length"]);
  new_letter["vLine1XPos"] = map(percent, 0, 100, oldObj["vLine1XPos"], newObj["vLine1XPos"]);
  new_letter["vLine1YPos"] = map(percent, 0, 100, oldObj["vLine1YPos"], newObj["vLine1YPos"]);
  new_letter["vLine1Length"] = map(percent, 0, 100, oldObj["vLine1Length"], newObj["vLine1Length"]);
  new_letter["vLine2XPos"] = map(percent, 0, 100, oldObj["vLine2XPos"], newObj["vLine2XPos"]);
  new_letter["vLine2YPos"] = map(percent, 0, 100, oldObj["vLine2YPos"], newObj["vLine2YPos"]);
  new_letter["vLine2Length"] = map(percent, 0, 100, oldObj["vLine2Length"], newObj["vLine2Length"]);
  new_letter["vLine3XPos"] = map(percent, 0, 100, oldObj["vLine3XPos"], newObj["vLine3XPos"]);
  new_letter["vLine3YPos"] = map(percent, 0, 100, oldObj["vLine3YPos"], newObj["vLine3YPos"]);
  new_letter["vLine3Length"] = map(percent, 0, 100, oldObj["vLine3Length"], newObj["vLine3Length"]);
  new_letter["dLine1XPos"] = map(percent, 0, 100, oldObj["dLine1XPos"], newObj["dLine1XPos"]);
  new_letter["dLine1YPos"] = map(percent, 0, 100, oldObj["dLine1YPos"], newObj["dLine1YPos"]);
  new_letter["dLine1Length"] = map(percent, 0, 100, oldObj["dLine1Length"], newObj["dLine1Length"]);
  new_letter["dLine2XPos"] = map(percent, 0, 100, oldObj["dLine2XPos"], newObj["dLine2XPos"]);
  new_letter["dLine2YPos"] = map(percent, 0, 100, oldObj["dLine2YPos"], newObj["dLine2YPos"]);
  new_letter["dLine2Length"] = map(percent, 0, 100, oldObj["dLine2Length"], newObj["dLine2Length"]);

  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
