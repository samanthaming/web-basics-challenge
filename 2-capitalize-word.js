/** Capitalize a Word
 *
 * Implement a function that takes a word and
 *  return the same word with the first letter capitalized
 *
 * capitalize('hello')
 * Output: 'Hello'
 *
 * capitalize('GREAT')
 * Output: 'Great'
 *
 * capitalize('aWESOME')
 * Output: 'Awesome'
 *
 */

// ✅  Solution: github.com/samanthaming/web-basics-challenge

function capitalize(word) {
  return (
    word.charAt(0).toUpperCase() // Uppercase the first letter
    + word.slice(1).toLowerCase() // Lowercase the rest of the letters
  );
}

// ============================
// Using Bracket Notation
// ============================

function capitalize2(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

// ============================
// Using Substring
// ============================

function capitalize3(word) {
  return word[0].toUpperCase() + word.substring(1).toLowerCase();
}

// ============================
// Using 2 steps
// ============================

function capitalize4(word) {
  const loweredCase = word.toLowerCase();
  return word[0].toUpperCase() + loweredCase.slice(1);
}

// ============================
// Using Rest parameter
// ============================

function capitalize5([first, ...rest]) {
  return first.toUpperCase() +
    rest.join('').toLowerCase();
}

// ============================
// Using Map
// ============================

function capitalize6(word) {
  return word
    .split('')
    .map((letter, index) => index ? letter.toLowerCase() : letter.toUpperCase())
    .join('')
}
