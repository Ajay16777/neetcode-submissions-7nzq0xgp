class Solution {
    trap(height) {
        const n = height.length;
        let totalWater = 0;
        let maxLeft = 0;
        let maxRight =0;
        let left = 0;
        let right = n-1;


        while (left < right) {
            if (height[left] > height[right]) {
                totalWater+= Math.max(0, maxRight - height[right])
                maxRight = Math.max(maxRight, height[right])
                right--;
            } else {
                totalWater+= Math.max(0, maxLeft - height[left])
                maxLeft = Math.max(maxLeft, height[left])
                left++
            }  
        }
        // const left = new Array(n);
        // const right = new Array(n);

        // // Build left max array
        // let mostLeft = 0;
        // for (let i = 0; i < n; i++) {
        //     mostLeft = Math.max(mostLeft, height[i]);
        //     left[i] = mostLeft;
        // }

        // // Build right max array
        // let mostRight = 0;
        // for (let i = n - 1; i >= 0; i--) {
        //     mostRight = Math.max(mostRight, height[i]);
        //     right[i] = mostRight;
        // }

        // // Calculate water
        // for (let i = 0; i < n; i++) {
        //     totalWater += Math.min(left[i], right[i]) - height[i];
        // }

        return totalWater;
    }
}