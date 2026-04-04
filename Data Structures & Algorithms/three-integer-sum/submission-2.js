class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a-b);
        const set = new Set();
        const res = [];
        for (let i = 0; i < nums.length; i++) {
            let j = i + 1;
            let k = nums.length-1;

            while(j < k) {
                const sum = nums[i] + nums[j] + nums[k];
                if (sum === 0) {
                    const triplets = [nums[i], nums[j], nums[k]];
                    const key = triplets.join(',');
                    if (!set.has(key)) {
                        set.add(key);
                        res.push(triplets)
                    }
                    j++;
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
