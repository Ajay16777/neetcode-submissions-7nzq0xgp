class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();

        for (let i = 0; i < nums.length; i++) {
            let x; 
            if (target => nums[i]) {
                x = target - nums[i];
            } else {
                x - nums[i]-target;
            }

            if (map.has(x)) {
                return [i, map.get(x)];
            }
            map.set(nums[i], i);
        }

        return [];
    }
}
