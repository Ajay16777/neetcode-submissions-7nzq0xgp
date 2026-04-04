class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();

        for (const num of nums) {
            map.set(num, map.get(num) + 1 || 1);
        }

        const freq = new Array(nums.length).fill(null);


        for (const [key, value] of map) {
            if (!freq[value]) freq[value] = [];

            freq[value].push(key);
        }

        const result = [];

        for (let i = freq.length-1; i > 0 && result.length < k; i--) {
            if (freq[i]) {
                result.push(...freq[i])
            }
        }

        return result.slice(0, k);
    }
}
