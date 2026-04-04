class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
           const set = new Set(nums);
            let longestSeq = 0;

            for (let num of set) {

                // check if start of sequence
                if (!set.has(num - 1)) {

                    let current = num;
                    let length = 1;

                    while (set.has(current + 1)) {
                        current++;
                        length++;
                    }

                    longestSeq = Math.max(longestSeq, length);
                }
            }

            return longestSeq;
    }
}
