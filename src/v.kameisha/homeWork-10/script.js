let currentPage = 1;
const countOfPages = 5;


renderTable();

async function getData(page) {
  const responce = await fetch(
    `https://randomuser.me/api/?page=${page}&results=10&seed=abc`
  );
  const data = await responce.json();
  return data.results;
}



async function renderTable() {
  await renderUsersList(currentPage);
  renderPagination();
}



async function renderUsersList(page) {
    const usersData = await getData(page);
    const usersContainer = document.querySelector(".users-container");
    usersContainer.innerHTML = "";
    usersData.forEach((user) => {
      const userItem = document.createElement("div");
      userItem.classList.add("user");
      userItem.innerHTML = `
      <img src='${user.picture.medium}' alt='' class='avatar'>
      <div class='first_name'>${user.name.first}</div>
      <div class='last_name'>${user.name.last}</div>
      <div class='age'>${user.dob.age} years</div>
      <div class='email'>${user.email}</div>
      <div class='location'>${user.location.country} ${user.location.city} ${user.location.state} ${user.location.street.name}-${user.location.street.number}</div>
      <div class='phone'>+${user.phone}<br><span>Contact</span></div>
      `;
      usersContainer.append(userItem);
    });
}



function renderPagination() {
    const pagination = document.querySelector(".pagination-list");
    for (let i = 1; i <= countOfPages; i++) {
      let li = document.createElement("li");
      li.classList.add("pagination-item");
      li.setAttribute("data-page", `page${i}`);
      if (i === 1) {
        li.classList.add("active");
      }
      li.textContent = i;
      pagination.append(li);
    }
}
  



const paginationContainer = document.querySelector(".pagination-list");
paginationContainer.addEventListener("click", async (event) => {
if (event.target.tagName !== "LI") {
    return;
}
currentPage = +event.target.closest(".pagination-item").textContent;
await renderUsersList(currentPage);
showActivePage();
});

async function nextPaginatio() {
if (currentPage === countOfPages) {
    return;
}
currentPage++;
await renderUsersList(currentPage);
showActivePage();
}

async function prevPagination() {
if (currentPage === 1) {
    return;
}
currentPage--;
await renderUsersList(currentPage);
showActivePage();
}




function showActivePage() {
let prevPage = document.querySelector(".active");
if (prevPage) {
    prevPage.classList.remove("active");
}
let activePage = document.querySelector(`[data-page = page${currentPage}]`);
activePage.classList.add("active");
}

