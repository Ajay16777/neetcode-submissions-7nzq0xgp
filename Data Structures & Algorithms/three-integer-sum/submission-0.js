class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const set = new Set();
        const res = [];

        for (let i = 0; i < nums.length; i++) {
            for (let j = i+1; j < nums.length; j++) {
                for (let k = j+1; k < nums.length; k++) {
                     if (nums[i] + nums[j]+ nums[k] === 0) {
                        const triplets = [nums[i], nums[j], nums[k]];
                        triplets.sort((a, b) => a - b);
                        const key = triplets.join(',')

                        if (!set.has(key)) {
                            set.add(key);
                            res.push(triplets)
                        }
                     }
                }            
            }
        }
        

        return res;
    }
}
