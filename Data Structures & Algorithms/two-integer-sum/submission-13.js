class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();

        for (let i = 0; i < nums.length; i++) {
            const x = target - nums[i];

            if (map.has(x)) {
                return [i, map.get(x)];
            }
            map.set(nums[i], i);
        }

        return [];
    }
}
