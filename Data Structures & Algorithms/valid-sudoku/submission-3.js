class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const row = new Set();
        const column = new Set();
        const box = new Set();

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                const val = board[i][j];

                if (val === '.') continue;
                const rowKey = val + 'row' + j;
                const columnKey = val + 'column' + i;
                const boxKey = val + 'box' + `${Math.floor(i/3)} - ${Math.floor(j/3)}`;
                
                if (row.has(rowKey)) return false;
                if (column.has(columnKey)) return false;
                if (box.has(boxKey)) return false;

                row.add(rowKey);
                column.add(columnKey);
                box.add(boxKey);
            }
        }
        return true;
    }
}
