'use strict'

{
    // 列の生成
    const createColumn = (col) => {
        // 1～15の数字の配列を作成
        const source = [];
        for (let i = 0; i < 15; i++) {
            source[i] = i + 1 + 15 * col;
        }
        // １～１５の配列からランダムに数字を抜き出して配列に＊５
        const column = [];
        for (let i = 0; i < 5; i++) {
            column[i] = source.splice(Math.floor(Math.random() * source.length),1)[0];
        }  
        // 配列を返す
        return column;
    }


    // 行の生成
    const createColumns = () => {
        // 配列に配列を追加
        // [[1, 2, 3, 4, 5],
        //  [11, 12, 13, 14, 15],
        //  [21, 22, 23, 24, 25],
        //  [31, 32, 33, 34, 35],
        //  [41, 42, 43, 44, 45]]
        const columns = [];
        for (let i = 0; i < 5; i++) {
            columns[i] = createColumn(i);
        }
        // 配列の中央は常に「FREE」
        columns[2][2] = 'FREE';
        // 配列を返す
        return columns;
    }


    // 数字の代入
    const renderBingo = (columns) => {
      for (let row = 0; row < 5; row++) {
        //   trを生成
        const tr = document.createElement('tr');
            for (let col = 0; col < 5; col++) {
                // tdを生成
                const td = document.createElement('td');
                // tdの中身をcolumnsに（列と行を反転）
                td.textContent = columns[col][row];
                // trの子にtdを追加
                tr.appendChild(td);
            }   
            // tobodyにtrを追加
        document.querySelector('tbody').appendChild(tr);  
        }  
    }


    // 行の生成を実行
    const columns = createColumns();
    // 行に数字を入れる
    renderBingo(columns);
    
}