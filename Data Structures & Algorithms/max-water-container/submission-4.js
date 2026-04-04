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
            max = Math.max((j - i) * Math.min(heights[i], heights[j]), max);
            if (heights[j] > heights[i]) {
                i++;
            } else {
                j--;
            }
        }

        return max
    }
}
