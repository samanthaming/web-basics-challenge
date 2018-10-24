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


/** Title Case a Word
 *
 * Implement a function that takes a word
 *  and return the same word in title case
 *
 * titleCase('hello')
 * Output: 'Hello'
 *
 * titleCase('GREAT')
 * Output: 'Great'
 *
 * titleCase('aWESOME')
 * Output: 'Awesome'
 *
 */

// ✅  Solution: github.com/samanthaming/algorithm-challenge

function titleCase(word) {
  return (
    word.charAt(0).toUpperCase() // Uppercase the first letter
    + word.slice(1).toLowerCase() // Lowercase the rest of the letters
  );
}

// ============================
// Using Bracket Notation
// ============================

function titleCase(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

/** RESOURCE
 *
 * charAt vs []
 * https://stackoverflow.com/questions/5943726/string-charatx-or-stringx
 *
 */
