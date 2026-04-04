class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const array1 = [...s];
        const array2 = [...t];
        const map = new Map();
        const map2 = new Map();

        if (array1.length !== array2.length) {
            return false
        }
        for (let i = 0; i < array1.length; i++) {
            if(map.has(array1[i])) {
                const currentCount = map.get(array1[i]);
                map.set(array1[i], currentCount+1);
            } else {
                map.set(array1[i], 1);
            }
        }

        for (let j = 0; j < array2.length; j++) {
            if (!map.has(array2[j])) {
                return false;
            } else if (map2.has(array2[j])) {
                const currentVal= map2.get(array2[j]);
                map2.set(array2[j], currentVal + 1);
            } else {
                map2.set(array2[j], 1);
            }
        }

        for (let [key, value] of map) {
            if (!map2.has(key)) {
                return false;
            } else {
                const mapvalue = map2.get(key);

                if (mapvalue !== value) {
                    return false
                }
            }
        }
        return true;
    }
}
