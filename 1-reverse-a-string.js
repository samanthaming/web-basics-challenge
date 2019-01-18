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

// ✅  Solution: github.com/samanthaming/web-basics-challenge
// ✅  Try this challenge on freeCodeCamp.org

function reverseString(str) {
  return str
    .split('') // split the string into an array of individual letters
    .reverse() // reverse the order of the array
    .join(''); // convert the array back to a string
}

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

// ============================
// Using sort
// ============================

function reverseString4(str) {
  return str.split('').sort(() => 1).join('');
}
