/**
 * Checks if two arrays have the same first value
 * @param  {Array} a
 * @param  {Array} b
 * @return {Boolean}
 */
function sameFirst(a, b) {
  return a[0] === b[0];
}

/**
 * Checks if two arrays have the same values
 * @param  {Array} a
 * @param  {Array} b
 * @return {Boolean}
 */
function deepEquals(a, b) {
  for (var i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  for (var j = 0; j < b.length; j++) {
    if (a[j] !== b[j]) {
      return false;
      }
  }
  return true;
}


function arraySum(arr) {
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum;
}
