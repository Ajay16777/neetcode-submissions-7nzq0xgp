class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // lets add every thing in a map
        const map = new Map();
        for (const num of nums) {
            map.set(num, true);
        };

        console.log(map)

        let maxSeq = [];

        for (let i = 0; i < nums.length; i++) {
            let value = nums[i];
            const currentSeq = [];
            while(map.has(value+1)) {
                currentSeq.push(value);
                value+=1
            }
            currentSeq.push(value+1);

            if (currentSeq.length > maxSeq.length) maxSeq = currentSeq;
        }

        return maxSeq.length;
    }
}
