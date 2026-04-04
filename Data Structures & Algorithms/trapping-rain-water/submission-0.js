class Solution {
    trap(height) {
        const n = height.length;
        const left = new Array(n);
        const right = new Array(n);

        let totalWater = 0;

        // Build left max array
        let mostLeft = 0;
        for (let i = 0; i < n; i++) {
            mostLeft = Math.max(mostLeft, height[i]);
            left[i] = mostLeft;
        }

        // Build right max array
        let mostRight = 0;
        for (let i = n - 1; i >= 0; i--) {
            mostRight = Math.max(mostRight, height[i]);
            right[i] = mostRight;
        }

        // Calculate water
        for (let i = 0; i < n; i++) {
            totalWater += Math.min(left[i], right[i]) - height[i];
        }

        return totalWater;
    }
}