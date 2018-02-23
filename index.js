var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  return katzDeliLine.indexOf(name) + 1;
}
function nowServing() {
  if (katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!";
  } else {
    return katzDeliLine.shift();
  }
}