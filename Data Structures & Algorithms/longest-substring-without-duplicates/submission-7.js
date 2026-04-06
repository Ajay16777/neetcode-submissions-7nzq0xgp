class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const map = new Map();
        let maxLenght = 0;
        let left = 0;

        // zxyzxyz. left is z and right is also z
        // {z: 0, x: 1, y : 1};
        for (let right = 0; right < s.length; right ++) {
            if (map.has(s[right]) && map.get(s[right]) >=left) {
                left = map.get(s[right]) + 1;
            }


            map.set(s[right], right);
            maxLenght = Math.max(maxLenght, right - left + 1);
        }

        return maxLenght;
    }
}
