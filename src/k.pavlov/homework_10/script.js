let currentPage = 1;
const countOfPages = 10;

async function getData(page) {
    let response = await fetch(`https://randomuser.me/api/?page=${page}&results=8&seed=abc`);
    let json = await response.json();
    return json.results;
}

renderTable();

async function renderTable() {
    await renderUsersList(currentPage);
    renderPagination();
}

async function renderUsersList(page) {
    const usersData = await getData(page);
    const usersContainer = document.querySelector(".users");
    usersContainer.innerHTML = "";
    usersData.forEach((user) => {
        const userItem = document.createElement("div");
        userItem.classList.add("user");
        userItem.innerHTML = `
    <img src='${user.picture.medium}' alt='' class='avatar'>
    <div class='name'>${user.name.first}</div>
    <div class='surname'>${user.name.last}</div>
    <div class='age'>${user.dob.age} yrs, ${user.gender}</div>
    <div class='email'>${user.email}</div>
    <div class='address'>${user.location.country} ${user.location.city} ${user.location.state} ${user.location.street.name}-${user.location.street.number}</div>
    <div class='number'>+${user.phone}<br></div>
    `;
        usersContainer.append(userItem);
    });
}

function renderPagination() {
    const pagination = document.querySelector(".pagination-list");
    for (let pageNum = 1; pageNum <= countOfPages; pageNum++) {
        let li = document.createElement("li");
        li.classList.add("pagination-number");
        li.setAttribute("data_page", `page${pageNum}`);
        if (pageNum === 1) {
            li.classList.add("active");
        }
        li.textContent = pageNum;
        pagination.append(li);
    }
}

const paginationContainer = document.querySelector(".pagination-list");
paginationContainer.addEventListener("click", async (event) => {
    if (event.target.tagName !== "LI") {
        return;
    }
    currentPage = +event.target.closest(".pagination-number").textContent;
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