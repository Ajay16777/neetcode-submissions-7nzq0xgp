class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i = 0;
        let j = heights.length - 1;
        let max = 0;
        while(i < j) {
            const min = Math.min(heights[i], heights[j]);
            const volume = (min * (j-i))
            if (volume > max) {
                max = volume;
            }
            if (heights[j] > heights[i]) {
                i++;
            } else {
                j--;
            }
        }

        return max
    }
}
