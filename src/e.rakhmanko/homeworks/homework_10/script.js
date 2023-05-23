async function fetchUsers() {
  const response = await fetch(
    "https://randomuser.me/api/?page=1&results=100&seed=abc"
  );
  const data = await response.json();
  return data.results;
}

async function displayPage() {
  const displayedData = await fetchUsers();
  let currentPage = 1;
  let rows = 10;

  function displayList(arrData, rowPerPage, page) {
    const containingEl = document.querySelector(".table");
    const start = rowPerPage * page;
    const end = start + rowPerPage;
    const paginatedData = arrData.slice(start, end);
    containingEl.innerHTML = "";
    page--;

    paginatedData.forEach((user) => {
      const content = document.createElement("div");
      content.classList.add("table-item");
      content.innerHTML = `<div class="user data-item"><img class="avatar" src="${user.picture.large}"alt ="avatar">
      <div class="data">
      <div class="name">${user.name.first} ${user.name.last}</div>
      <div class="age-gender">
      <span>${user.dob.age} yrs,</span>
      <span class="gender">${user.gender}</span>
      </div>
      </div>
      </div>
      <div class="data-item">${user.email}</div>
      <div class="data-item">${user.location.street.name} Street, ${user.location.city}, ${user.location.country}</div>
      <div class="data-item">${user.phone}</div> `;
      containingEl.appendChild(content);
    });
  }

  function displayPagination(arrData, rowPerPage) {
    const paginationEl = document.querySelector(".pagination");
    const pagesCount = Math.ceil(arrData.length / rowPerPage);
    const ulEl = document.createElement("ul");
    ulEl.classList.add("pagination-list");

    for (let i = 0; i < pagesCount; i++) {
      const liEl = displayPaginationBtn(i + 1);
      ulEl.appendChild(liEl);
    }
    paginationEl.appendChild(ulEl);
  }

  function displayPaginationBtn(page) {
    const liEl = document.createElement("li");
    liEl.classList.add("pagination-item");
    liEl.innerText = page;

    if (currentPage == page) liEl.classList.add("pagination-item--active");

    liEl.addEventListener("click", () => {
      currentPage = page;
      displayList(displayedData, rows, currentPage);

      let currentItemLi = document.querySelector("li.pagination-item--active");
      currentItemLi.classList.remove("pagination-item--active");

      liEl.classList.add("pagination-item--active");
    });

    return liEl;
  }

  displayList(displayedData, rows, currentPage);
  displayPagination(displayedData, rows);
}

displayPage();
