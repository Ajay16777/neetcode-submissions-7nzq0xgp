class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
      const set = new Set(nums);

      let maxSeq = [];

      for (const num of set) {

        if (!set.has(num-1)) {
            let currentNum = num;
            const currentSeq = [num];


            while(set.has(currentNum+1)) {
                currentNum++
                currentSeq.push(num+1);
            }


            if (currentSeq.length > maxSeq.length) maxSeq = currentSeq;
        }
      }

      return maxSeq.length
    }
}
