class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let start = 0;
        let end = 0;
        const set = new Set();
        let max = 0;

        while (end < s.length) {
            while(set.has(s[end])) {
                set.delete(s[start]);
                start++;
            }

            set.add(s[end]);

            max = Math.max(max, end - start +1);
            end++

        }

        return max;
    }
}
