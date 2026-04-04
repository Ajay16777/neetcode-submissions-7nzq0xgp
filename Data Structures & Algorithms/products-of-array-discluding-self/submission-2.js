class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const res = Array(nums.length).fill(1);
        for (let i = 1; i < nums.length; i++) {
            res[i] = res[i-1] * nums[i-1];
        };

        let sufix = 1;
        for (let i = nums.length-1; i >= 0; i--) {
            res[i] = res[i] * sufix;
            sufix = sufix * nums[i]
        };

        return res;
    }
}
