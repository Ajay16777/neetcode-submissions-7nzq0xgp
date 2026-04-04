class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = '';
        for (const str of strs) {
            res += str.length + '#' + str;
        }

        return res;
    }

//    "55#Hello5#World"
    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];
        let i = 0;
    

        while (i < str.length) {
            let j = i;

            while (str[j] !== '#') {
                j++;
            }
            const length = parseInt(str.substring(i, j));
            const word = str.substring(j+1, j+1+length);

            res.push(word);
            i = j+1+length;
        }
        return res;
    }
}
