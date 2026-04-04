class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a-b);
        const res = [];
        for (let i = 0; i < nums.length; i++) {
            let j = i + 1;
            let k = nums.length-1;

            // Skip i duplicate values
            if (i > 0 && nums[i] === nums[i-1]) continue;

            while(j < k) {
                const sum = nums[i] + nums[j] + nums[k];
                if (sum === 0) {
                    const triplets = [nums[i], nums[j], nums[k]];
                    res.push(triplets)
                    j++;
                    k--;

                    while(j < k && nums[j] === nums[j-1]) j++;
                    while(j < k && nums[k] === nums[k+1]) k--;
                } else if (sum > 0) {
                    k--
                } else {
                    j++
                }
            }

        }


        return res;
    }
}
