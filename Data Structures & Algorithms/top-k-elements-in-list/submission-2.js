class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        // Create an Map
        for (let num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }
        

        // Create an bucket array
        const bucketArray = new Array(nums.length + 1).fill(null).map(() => []);
        
        for (let [num, freq] of map) {
            bucketArray[freq].push(num)
        }
        const result = [];
        // Trivers through array
        for (let i = bucketArray.length-1; i > 0 && result.length < k; i--) {
            if (bucketArray[i].length > 0) {
                result.push(...bucketArray[i])
            }
        }

        return result.slice(0, k)
    }
}
