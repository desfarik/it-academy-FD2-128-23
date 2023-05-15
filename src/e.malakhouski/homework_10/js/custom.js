let currentPage = 1;
const countOfPages = 10;

renderTable();

async function getData(page) {
  const responce = await fetch(
    `https://randomuser.me/api/?page=${page}&results=8&seed=abc`
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
  const usersContainer = document.querySelector(".users_container");
  usersContainer.innerHTML = "";
  usersData.forEach((user) => {
    const userItem = document.createElement("div");
    userItem.classList.add("user");
    userItem.innerHTML = `
    <img src='${user.picture.medium}' alt='' class='avatar'>
    <div class='first_name'>${user.name.first}</div>
    <div class='last_name'>${user.name.last}</div>
    <div class='age'>${user.dob.age} yrs, ${user.gender}</div>
    <div class='email'>${user.email}</div>
    <div class='location'>${user.location.country} ${user.location.city} ${user.location.state} ${user.location.street.name}-${user.location.street.number}</div>
    <div class='phone'>+${user.phone}<br><span>Contact</span></div>
    `;
    usersContainer.append(userItem);
  });
}

function renderPagination() {
  const pagination = document.querySelector(".pagination_list");
  for (let i = 1; i <= countOfPages; i++) {
    let li = document.createElement("li");
    li.classList.add("pagination_item");
    li.setAttribute("data_page", `page${i}`);
    if (i === 1) {
      li.classList.add("active");
    }
    li.textContent = i;
    pagination.append(li);
  }
}

const paginationContainer = document.querySelector(".pagination_list");
paginationContainer.addEventListener("click", async (event) => {
  if (event.target.tagName !== "LI") {
    return;
  }
  currentPage = +event.target.closest(".pagination_item").textContent;
  await renderUsersList(currentPage);
  showActivePage();
});

async function nextPage() {
  if (currentPage === countOfPages) {
    return;
  }
  currentPage++;
  await renderUsersList(currentPage);
  showActivePage();
}

async function prevPage() {
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
  let activePage = document.querySelector(`[data_page = page${currentPage}]`);
  activePage.classList.add("active");
}
