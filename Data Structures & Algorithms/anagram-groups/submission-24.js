class Solution {

    generateAnagramKey(str) {
        str = str.toLowerCase();
        const freqArray = new Array(26).fill(0);

        for (let i = 0; i < str.length; i++) {
            freqArray[str.charCodeAt(i) - 97]++;
        }

        let key = '';
        for (let j = 0; j < 26; j++) {
            if (freqArray[j] !== 0) {
                key += j + ':' + freqArray[j] + '#';
            }
        }

        return key;
    }


    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        const finalArray = [];
        for (let i =0; i<strs.length; i++) {
            const key = this.generateAnagramKey(strs[i]);
            if (map.has(key)) {
                const currentVal = map.get(key);
                map.set(key, [...currentVal, strs[i]])
            } else {
                map.set(key, [strs[i]])
            }
        }

        for (let [key, value] of map) {
            console.log(map)
            if (value) {
                finalArray.push(value)
            }
        }

    return finalArray;
    }
}
