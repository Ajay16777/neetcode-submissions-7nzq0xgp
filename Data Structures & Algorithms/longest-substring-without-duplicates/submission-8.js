class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
    const set = new Set();
    let maxLength = 0;
    let i = 0;


    for (let r = 0; r < s.length; r++) {
        while (set.has(s[r])) {
            set.delete(s[i]);
            i++;
        }

        set.add(s[r]);
        maxLength = Math.max(maxLength, r - i + 1);
    }

    return maxLength;
    }
}
