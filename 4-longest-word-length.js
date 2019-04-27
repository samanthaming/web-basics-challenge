/** Find the Length of the Longest Word
 *
 * Return the length of the longest word in a String.
 * Your response should be a number.
 *
 * longestWordLength("Web Basics Challenge")
 * Output: 9
 *
 */

 function longestWordLength(str) {
  const arrLength = str.split(' ').map(s => s.length);
  return Math.max(...arrLength);
}

// ============================
// Using Reduce
// ============================
function longestWordLength2(str) {
  return str.split(' ').reduce((maxNumber, current) => {
    return current.length > maxNumber ? current.length : maxNumber;
  }, 0);
}

// ============================
// Using Reverse
// ============================
function longestLength3(str) {
  return str
    .split(' ')
    .map(s => s.length)
    .reverse()[0];
}
