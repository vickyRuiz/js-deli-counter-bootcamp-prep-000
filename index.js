var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  return katzDeliLine.indexOf(name) + 1;
}
function nowServing(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!";
  } else {
    return katzDeliLine.shift();
  }
}