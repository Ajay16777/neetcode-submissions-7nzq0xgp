class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // New an res arr same size as nums
        const res = new Array(nums.length).fill(1);
        console.log(res);
        // nums = [1, 2, 4, 6]
        // const res = [1, 1, 1, 1]
        // we need to store all left indexs product in res array
        for (let i = 1; i < res.length; i++) {
            res[i] = res[i-1] * nums[i-1];
        }

        // res = [1, 1, 2, 8]

        let sufix = 1;
        // need to loop over right to left
        for (let i = nums.length - 1; i >= 0; i--) {
            res[i] = res[i] * sufix
            sufix = nums[i] * sufix;
        }

        return res    }
}
