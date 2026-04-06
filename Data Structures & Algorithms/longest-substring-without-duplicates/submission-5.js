class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
 const map = new Map();
  let maxLen = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    // If character seen and is inside current window
    if (map.has(s[right]) && map.get(s[right]) >= left) {
      left = map.get(s[right]) + 1;  // shrink window
    }

    map.set(s[right], right);  // update position
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
    }
}
