class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const genKey = (str) => {
            const frq = new Array(26).fill(0);
            let key = '';

            for (const ch of str) {

                const index = ch.charCodeAt(0) - 97;
                frq[index] ++;
            }

            for (let i = 0; i < 26; i++) {
                if (frq[i] > 0) {
                    key += String.fromCharCode(i + 97) + ':' + frq[i] + '|'
                }
            }

            return key;
        }

        const map = new Map();
        for (const str of strs) {
            const key = genKey(str);

            if (!map.has(key)) {
                map.set(key, [])
            }

            map.get(key).push(str);
        }


        return Array.from(map.values());
    }
}
