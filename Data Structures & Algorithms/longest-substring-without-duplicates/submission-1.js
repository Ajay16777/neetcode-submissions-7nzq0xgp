class Solution {
    lengthOfLongestSubstring(s) {
        let start = 0;
        let end = 0;
        const set = new Set();
        let max = 0;

        while (end < s.length) {

            // ❗ handle duplicates
            while (set.has(s[end])) {
                set.delete(s[start]);
                start++;
            }

            // ✅ add current char
            set.add(s[end]);

            // ✅ update max length
            max = Math.max(max, end - start + 1);

            end++;
        }

        return max;
    }
}