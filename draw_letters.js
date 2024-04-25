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
  strokeWeight(7); 
  strokeCap(ROUND); // 'ROUND' or 'PROJECT' works best

  // horizontal line parameters
  let hLine1YPos = letterData["hLine1YPos"];
  let hLine1Length = letterData["hLine1Length"];
  let hLine2YPos = letterData["hLine2YPos"];
  let hLine2Length = letterData["hLine2Length"];
  let hLine2Shift = letterData["hLine2Shift"];
  let hLine3YPos = letterData["hLine3YPos"];
  let hLine3Length = letterData["hLine3Length"];

  // vertical line parameters
  let vLine1XPos = letterData["vLine1XPos"];
  let vLine1Length = letterData["vLine1Length"];
  let vLine2XPos = letterData["vLine2XPos"];
  let vLine2Length = letterData["vLine2Length"];
  let vLine2Shift = letterData["vLine2Shift"];
  let vLine3Length = letterData["vLine3Length"];

  // diagonal line parameters
  let dLine1XPos = letterData["dLine1XPos"];
  let dLine1YPos = letterData["dLine1YPos"];
  let dLine1Length = letterData["dLine1Length"];
  let dLine2XPos = letterData["dLine2XPos"];
  let dLine2YPos = letterData["dLine2YPos"];
  let dLine2Length = letterData["dLine2Length"];

  // draw diagonal lines
  stroke(darkCyan);
  line(dLine1XPos, dLine1YPos, dLine1Length + dLine1XPos, dLine1Length + dLine1YPos);
  line(dLine2XPos, dLine2YPos, dLine2XPos - dLine2Length, dLine2Length + dLine2YPos);

  // draw horizonal lines
  stroke(salmon);
  line(0, hLine1YPos, hLine1Length, hLine1YPos);
  line(hLine2Shift, hLine2YPos, hLine2Length + hLine2Shift, hLine2YPos);
  line(0, hLine3YPos, hLine3Length, hLine3YPos);

  // draw vertical lines
  stroke(darkGrey);
  line(vLine1XPos, 0, vLine1XPos, vLine1Length);
  line(vLine2XPos, vLine2Shift, vLine2XPos, vLine2Length + vLine2Shift);
  line(50, 50, 50, vLine3Length);


  pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["hLine1YPos"] = map(percent, 0, 100, oldObj["hLine1YPos"], newObj["hLine1YPos"]);
  new_letter["hLine1Length"] = map(percent, 0, 100, oldObj["hLine1Length"], newObj["hLine1Length"]);
  new_letter["hLine2YPos"] = map(percent, 0, 100, oldObj["hLine2YPos"], newObj["hLine2YPos"]);
  new_letter["hLine2Length"] = map(percent, 0, 100, oldObj["hLine2Length"], newObj["hLine2Length"]);
  new_letter["hLine2Shift"] = map(percent, 0, 100, oldObj["hLine2Shift"], newObj["hLine2Shift"]);
  new_letter["hLine3YPos"] = map(percent, 0, 100, oldObj["hLine3YPos"], newObj["hLine3YPos"]);
  new_letter["hLine3Length"] = map(percent, 0, 100, oldObj["hLine3Length"], newObj["hLine3Length"]);
  new_letter["vLine1XPos"] = map(percent, 0, 100, oldObj["vLine1XPos"], newObj["vLine1XPos"]);
  new_letter["vLine1Length"] = map(percent, 0, 100, oldObj["vLine1Length"], newObj["vLine1Length"]);
  new_letter["vLine2XPos"] = map(percent, 0, 100, oldObj["vLine2XPos"], newObj["vLine2XPos"]);
  new_letter["vLine2Length"] = map(percent, 0, 100, oldObj["vLine2Length"], newObj["vLine2Length"]);
  new_letter["vLine2Shift"] = map(percent, 0, 100, oldObj["vLine2Shift"], newObj["vLine2Shift"]);
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
  "WAVEFORM",
  "BRAZENLY",
  "HEXAPODS"
  
  // AEIOU QWRTYPSDFGHJKLZXCVBNM
  // AEIOU WRYPSDFGHJKLZXVBNM
  // AEIOU WPSDFGHJKLXVM
  // AEIOU WFGJKLVM
]