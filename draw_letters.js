/* these are optional special variables which will change the system */
var systemBackgroundColor = "#666";
var systemLineColor = "#fff";
var systemBoxColor = "#444";

/* internal constants */
const darkGrey = "#241F1D";
const salmon = "#F2755E";


/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {

  push();

  // colour variables
  fill(darkGrey);
  stroke(darkGrey);
  strokeWeight(20);

  // horizontal line parameters
  let hLine1XPos = 0 + letterData["hLine1XPos"];
  let hLine1YPos = 0 + letterData["hLine1YPos"];
  let hLine2XPos = 0 + letterData["hLine2XPos"];
  let hLine2YPos = 0 + letterData["hLine2YPos"];
  let hLine3XPos = 0 + letterData["hLine3XPos"];
  let hLine3YPos = 0 + letterData["hLine3YPos"];
  let hLine3Length = 0 + letterData["hLine3Length"];

  // vertical line parameters
  let vLine1XPos = 0 + letterData["vLine1XPos"];
  let vLine1YPos = 0 + letterData["vLine1YPos"];
  let vLine1Length = 0 + letterData["vLine1Length"];
  let vLine2XPos = 0 + letterData["vLine2XPos"];
  let vLine2YPos = 0 + letterData["vLine2YPos"];
  let vLine2Length = 0 + letterData["vLine2Length"];
  let vLine3XPos = 0 + letterData["vLine3XPos"];
  let vLine3YPos = 0 + letterData["vLine3YPos"];
  let vLine3Length = 0 + letterData["vLine3Length"];
  
  // draw horizontal lines
  line(hLine1XPos, hLine1YPos, 100 + hLine1XPos, hLine1YPos);
  line(hLine2XPos, hLine2YPos, 100 + hLine2XPos, hLine2YPos);
  line(hLine3XPos, hLine3YPos, hLine3Length + hLine3XPos, hLine3YPos);

  // draw vertical lines
  line(vLine1XPos, vLine1YPos, vLine1XPos, vLine1Length + vLine1YPos);
  line(vLine2XPos, vLine2YPos, vLine2XPos, vLine2Length + vLine2YPos);
  line(vLine3XPos, vLine3YPos, vLine3XPos, vLine3Length + vLine3YPos);

  pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
