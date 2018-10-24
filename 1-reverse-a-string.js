/** Reverse a String
 *
 * Reverse the provided string.
 * Your result must be a string.
 *
 * reverseString("hello")
 * Output: "olleh"
 *
 * reverseString("HoWdy")
 * Output: "ydWoH"
 *
 */

function reverseString(str) {
  return str
    .split('') // split the string into an array of individual letters
    .reverse() // reverse the order of the array
    .join(''); // convert the array back to a string
}

reverseString("hello");
// returns "olleh"

// ✅  Solution: github.com/samanthaming/algorithm-challenge
// ✅  Try this challenge on freeCodeCamp.org

// ============================
// Using Reduce
// ============================

function reverseString2(str) {
  return [...str].reduce((accumulator, current) => {
    return current + accumulator;
  });

  // OR One-Liner
  // return [...str].reduce((accumulator, current) => current + accumulator)
}

reverseString2("hello");
// returns "olleh"

// ============================
// Using for-loop
// ============================

function reverseString3(str) {
  let result = '';

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
}

reverseString3("hello");
// returns "olleh"
