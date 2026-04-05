class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const result = [];

        let start = 0;
        let end = k-1;

        while(end < nums.length) {
            let max = nums[start];
            for (let i = start; i <= end; i++) {
                max = Math.max(max, nums[i]);
            }
            result.push(max);
            start++;
            end++;
        }

        return result;
    }
}
