class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const row = new Set();
        const coulum = new Set();
        const box = new Set();

        // We need to track if the value alreday ouccred in Raw
        // already ouccred in coulum and if its already in box

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                const val = board[i][j];
                if (val === '.') continue;

                const r = val + 'row' + i;
                const c = val + 'col' + j;
                const b = `${val}-box-${Math.floor(i/3)}-${Math.floor(j/3)}`
                console.log(b)
                if (row.has(r)) return false;
                if (coulum.has(c)) return false;
                if (box.has(b)) return false;

                row.add(r);
                coulum.add(c);
                box.add(b);
            }
        }

        return true;
    }
}
