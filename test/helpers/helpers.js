function isSorted(theArray) {
  for (i=0; i<theArray.length-2; i++) {
    if (theArray[i] < theArray[i+1]) {
      return false;
    }
  }
  return true;
}

function indexOfLowest(array) {
  return array.indexOf(Math.min.apply(null, array));
}

module.exports = {
  isSorted: isSorted,
  indexOfLowest: indexOfLowest,
};
