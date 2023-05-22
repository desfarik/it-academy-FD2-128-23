let currentPage = 1;
    const rows = 10;
    getData(currentPage);

    async function getData(page) {
        const response = await fetch(`https://randomuser.me/api/?page=${page}&results=10&nat=ir&&seed=tegeran`);
        const data = await response.json();
        await renderList(data.results);
        console.log(page);
    }

    function renderList(array) {
        const target = document.querySelector('.main');
        let html = '';
        array.forEach(elem => {
            html += `
        <div class="data-container">
            <div class="data-block personal-info">
                <img src="${elem.picture.medium}" />
                <div class="">
                    <p class="title-name-surname important-text">${elem.name.first} ${elem.name.last}</p>
                    <p class="age-gender other-text">${elem.registered.age} سال, ${elem.gender}</p>
                </div>
            </div>
            <div class="data-block">
                <a class="email important-text" href="mailto:${elem.email}">${elem.email}</a>
            </div>
            <div class="data-block adress">
              <p class="adress important-text">${elem.location.street.number} ${elem.location.street.name}</p>
              <p class="adress other-text">${elem.location.city}, ${elem.location.country}, ${elem.location.postcode}</p>
            </div>
            <div class="data-block">
                <a class="phone important-text" href="tel:${elem.phone}">${elem.phone}</a>
            </div>
        </div>
            `});
        target.innerHTML = html;
        renderPagination(array);
    }

    function renderPagination(array) {
        const target = document.querySelector('.page-container');
        target.textContent = currentPage;
    }

    function prevPage() {
      if (currentPage > 1) {
        currentPage = currentPage - 1;
        getData(currentPage);
      }
    }

    function startPage() {
      currentPage = 1;
      getData(currentPage);
    }

    function endPage() {
      currentPage = 10000; // последняя страница, 10001 дублирует страницу 1, а потом все замирает
      getData(currentPage);
    }

    function nextPage() {
      if (currentPage < 10000) {
        currentPage = currentPage + 1;
        getData(currentPage);
      }
    }