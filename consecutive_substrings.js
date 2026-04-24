/**
 * @param {string} str-The input search query.
 * @returns {string[]} An array of all consecutive substrings.
 */
function consecutiveSubstrings(str) {
  const result = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      result.push(str.slice(i, j));
    }
  }
  return result;
}
//Edge case if string is empty , return empty array
if (require.main === module) {
  // Outer loop starting position of the substring
  for (let i = 0; i < str.length; i++) {
    // Inner loop ending position of the substring
    //j starts at i + 1 to ensure we get substrings of length at least 1
    for (let j = i + 1; j <= str.length; j++) {
      // Extract the substring from index i to j (exclusive) and add it to the result array
      result.push(str.slice(i, j));
    }
  }
  return result;
}
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));


module.exports = consecutiveSubstrings;


