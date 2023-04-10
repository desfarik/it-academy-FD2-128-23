console.log(students);
const studentTableContainer = document.querySelector('.student-table-container');

function onHeaderClick(event) {
  if (event.target.nodeName === 'TH') {
    const th = event.target;
    const sort = th.dataset.sort;
    const direction = +th.getAttribute('sort-direction') || -1;
    const newDirection = direction * -1;
    studentTableContainer.innerHTML = generateStudentTable(students, sort, newDirection);
    console.log(sort);
  }
}

studentTableContainer.addEventListener('click', onHeaderClick);
studentTableContainer.innerHTML = generateStudentTable(students, 'name', 1);

function toHeader(column) {
  return column[0].toUpperCase() + column.slice(1);
}

function generateStudentTable(students, sortColumn, direction) {
  const columns = ['name', 'secondName', 'town', 'age', 'stage'];

  const header = `<tr>
${columns
    .map(column => {
      const sortAttr = column === sortColumn ? `sort-direction=${direction}` : '';
      return `<th ${sortAttr} data-sort="${column}">${(toHeader(column))}</th>`;
    })
    .join('')}
</tr>`;

  const body = students.slice()
    .sort((s1, s2) => {
      if (typeof s1[sortColumn] === 'number') {
        return (s1[sortColumn] - s2[sortColumn]) * direction;
      }
      return (s1[sortColumn] > s2[sortColumn] ? 1 : -1) * direction;
    })
    .map(student => {
      return `
    <tr>
        <td>${student.name}</td>
        <td>${student.secondName}</td>
        <td>${student.town}</td>
        <td>${student.age}</td>
        <td>${student.stage}</td>
    </tr>
    `;
    })
    .join('');
  return `<table>${header}${body}</table>`;
}
