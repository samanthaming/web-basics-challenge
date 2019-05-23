/** How to All Remove Falsy Values in an Array
 *
 * Remove all falsy values from an array.
 * Falsy values in JavaScript are:
 * false, null, 0, "", undefined, and NaN
 *
 * removeFalsy([7, "ate", "", false, 9])
 * Output: [7, "ate", 9]
 *
 */

// ============================
// Using !!
// ============================
function removeFalsy(arr) {
  return arr.filter(a => !!a);
}

// ============================
// Using Boolean
// ============================

function removeFalsy2(arr) {
  return arr.filter(a => Boolean(a));
}

// ============================
// Using Boolean directly
// ============================

function removeFalsy3(arr) {
  return arr.filter(a => Boolean);
}

// ============================
// Using Filter's Auto Coercion
// ============================

function removeFalsy3(arr) {
  return arr.filter(a => a);
}
