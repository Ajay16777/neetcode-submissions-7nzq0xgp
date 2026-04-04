class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();

        // Step 1: Count frequency
        for (let num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }

        // Step 2: Create buckets (index = frequency)
        const buckets = new Array(nums.length + 1).fill(null).map(() => []);
    
        for (let [num, freq] of map) {
            buckets[freq].push(num);
        }
        // Step 3: Traverse buckets from high frequency to low
        const result = [];

        for (let i = buckets.length - 1; i > 0 && result.length < k; i--) {
            if (buckets[i].length > 0) {
                result.push(...buckets[i]);
            }
        }

        return result.slice(0, k);
    }
}
