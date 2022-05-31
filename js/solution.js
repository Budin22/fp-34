'use strict'

// Написать функцию createTable(), которая выводит таблицу 10 × 10, заполненную числами от 1 до 100.
// P.S. Подумайте о том как лучше обновлять DOM структуру, от этого зависит производительность скрипта.


const createTable = (row,colum) => {
    let beginNum = 0;
    let table = document.createElement('table');

    for( let i = 0; i < row; i++) {
        let tr = document.createElement('tr');
        table.append(tr);

        for( let j = 0; j < colum; j++) {
            let td = document.createElement('td');
            td.innerHTML = `${beginNum += 1}`;
            tr.append(td);
        }
    }
    document.body.append(table);
}

createTable(10,10);