// system setup
var systemBackgroundColor = "#ccc";
var systemLineColor = "#fff";
var systemBoxColor = "#999";

// colour setup
const darkGrey = "#241F1D";
const salmon = "#F2755E";
const darkCyan = "#0D8AA1";

function drawLetter(letterData) {

  push();

  // stroke setup
  strokeWeight(10);
  strokeCap(SQUARE);

  // horizontal line parameters
  let line1YPos = 0 + letterData["line1YPos"];
  let line1Length = 0 + letterData["line1Length"];
  let line2YPos = 0 + letterData["line2YPos"];
  let line2Length = 0 + letterData["line2Length"];
  let line2Shift = 0 + letterData["line2Shift"];
  let line3YPos = 0 + letterData["line3YPos"];
  let line3Length = 0 + letterData["line3Length"];

  // vertical line parameters
  let line4XPos = 0 + letterData["line4XPos"];
  let line4Length = 0 + letterData["line4Length"];
  let line5XPos = 0 + letterData["line5XPos"];
  let line5Length = 0 + letterData["line5Length"];
  let line5Shift = 0 + letterData["line5Shift"];
  let line6Length = 0 + letterData["line6Length"];

  // diagonal line parameters
  let line7XPos = 0 + letterData["line7XPos"];
  let line7YPos = 0 + letterData["line7YPos"];
  let line7Length = 0 + letterData["line7Length"];
  let line8XPos = 0 + letterData["line8XPos"];
  let line8YPos = 0 + letterData["line8YPos"];
  let line8Length = 0 + letterData["line8Length"];

  // draw diagonal lines
  stroke(darkCyan);
  line(line7XPos, line7YPos, line7Length + line7XPos, line7Length + line7YPos);
  line(line8XPos, line8YPos, line8XPos - line8Length, line8Length + line8YPos);

  // draw horizonal lines
  stroke(salmon);
  line(0, line1YPos, line1Length, line1YPos);
  line(line2Shift, line2YPos, line2Length + line2Shift, line2YPos);
  line(0, line3YPos, line3Length, line3YPos);

  // draw vertical lines
  stroke(darkGrey);
  line(line4XPos, 0, line4XPos, line4Length);
  line(line5XPos, line5Shift, line5XPos, line5Length + line5Shift);
  line(50, 50, 50, line6Length);




  pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["line1YPos"] = map(percent, 0, 100, oldObj["line1YPos"], newObj["line1YPos"]);
  new_letter["line1Length"] = map(percent, 0, 100, oldObj["line1Length"], newObj["line1Length"]);
  new_letter["line2YPos"] = map(percent, 0, 100, oldObj["line2YPos"], newObj["line2YPos"]);
  new_letter["line2Length"] = map(percent, 0, 100, oldObj["line2Length"], newObj["line2Length"]);
  new_letter["line2Shift"] = map(percent, 0, 100, oldObj["line2Shift"], newObj["line2Shift"]);
  new_letter["line3YPos"] = map(percent, 0, 100, oldObj["line3YPos"], newObj["line3YPos"]);
  new_letter["line3Length"] = map(percent, 0, 100, oldObj["line3Length"], newObj["line3Length"]);
  new_letter["line4XPos"] = map(percent, 0, 100, oldObj["line4XPos"], newObj["line4XPos"]);
  new_letter["line4Length"] = map(percent, 0, 100, oldObj["line4Length"], newObj["line4Length"]);
  new_letter["line5XPos"] = map(percent, 0, 100, oldObj["line5XPos"], newObj["line5XPos"]);
  new_letter["line5Length"] = map(percent, 0, 100, oldObj["line5Length"], newObj["line5Length"]);
  new_letter["line5Shift"] = map(percent, 0, 100, oldObj["line5Shift"], newObj["line5Shift"]);
  new_letter["line6Length"] = map(percent, 0, 100, oldObj["line6Length"], newObj["line6Length"]);
  new_letter["line7XPos"] = map(percent, 0, 100, oldObj["line7XPos"], newObj["line7XPos"]);
  new_letter["line7YPos"] = map(percent, 0, 100, oldObj["line7YPos"], newObj["line7YPos"]);
  new_letter["line7Length"] = map(percent, 0, 100, oldObj["line7Length"], newObj["line7Length"]);
  new_letter["line8XPos"] = map(percent, 0, 100, oldObj["line8XPos"], newObj["line8XPos"]);
  new_letter["line8YPos"] = map(percent, 0, 100, oldObj["line8YPos"], newObj["line8YPos"]);
  new_letter["line8Length"] = map(percent, 0, 100, oldObj["line8Length"], newObj["line8Length"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]