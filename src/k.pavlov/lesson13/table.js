// function generateTable(n) {
//
// }
//     let table = document.createElement('table');
//     let thead = document.createElement('thead');
//     let tbody = document.createElement('tbody');
//     let trow = document.createElement('tr');
//
//     table.appendChild(thead);
//     table.appendChild(tbody);
//     table.appendChild(trow);

// const container =  document.querySelector('.container');
//
// function generateTable(n) {
//     let table = document.createElement('table');
//     let trow = document.createElement('tr');
//     let td = document.createElement('td');
//
//     container.append(table);
//     container.append(trow);
//     container.append(td);
// }


function insertTable(html) {
    const wrapper = document.querySelector('.table-wrapper')
    wrapper.innerHTML = html
}
function generateTable(n) {
    let html = '';

    for (let i = 0; i < n; i++) {
        let cellsHtml = ''
        for (let j = 0; j < n; j++) {
            cellsHtml += i === j
                ? '<td class="active-cell"></td>'
                : '<td></td>'
        }
        html += `<tr>${cellsHtml}</tr>`
    }
    return `<table>${html}</table>`
}

insertTable(generateTable(5))












