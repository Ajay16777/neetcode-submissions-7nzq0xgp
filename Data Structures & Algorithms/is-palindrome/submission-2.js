class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const str = s.toLowerCase().replace(/[^a-z0-9]/g, "");
        let rPointer = str.length - 1;

        let valid = true;
        for (let i = 0; i < str.length; i++) {
            if (str[i] !== str[rPointer]) {
                valid = false
            }

            if (!valid) break;
            rPointer += -1
        }

        return valid;
    }
}
