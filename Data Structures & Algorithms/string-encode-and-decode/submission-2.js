class Solution {

    getNthNextChar(char, n) {
        return String.fromCharCode(char.charCodeAt(0) + n);
    }

    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const key = 2;
        const outputStr = []

        if (strs.length === 0) {
            return "#EMPTY#";
        }
        for (let i = 0; i < strs.length; i++) {
            const word = strs[i];
            const wordOutPut = [];
            for (let j = 0; j < word.length; j++) {
                wordOutPut[j] = this.getNthNextChar(word[j], key)
            }

            outputStr[i] = wordOutPut.join(''); 
        }

        return outputStr.join('|SPLIT|');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str === "#EMPTY#") return [];
        const strs = str.split('|SPLIT|');
        const key = 2;
        const outputStr = [];

        for (let i = 0; i < strs.length; i++) {
            const word = strs[i];
            const wordOutPut = [];
            for (let j = 0; j < word.length; j++) {
                wordOutPut[j] = this.getNthNextChar(word[j], -key)
            }

            outputStr[i] = wordOutPut.join(''); 
        }

        return outputStr;
    }
}
