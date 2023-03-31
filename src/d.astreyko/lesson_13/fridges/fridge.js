const itemContainer = document.querySelector('.content');

generateItems(ALL_ITEMS);

function generateItems(items) {

  const html = items.map(fridge => {
    return `
    <div class="fridge-item">
            <img class="item-img"
                 src="${fridge.img}">
            <div>
                <div class="item-title">${fridge.title}</div>
                <div class="item-description" title="${fridge.description}">
                    ${fridge.description}
                </div>
            </div>
            <div class="item-price">${fridge.price}</div>
            <button class="add-to-order" onclick="addToOrder(${fridge.id})">заказать</button>
        </div>
    `;
  })
    .join('');

  itemContainer.innerHTML = html;
}

function addToOrder(fridgeId) {
  const fridge = ALL_ITEMS.find(fridge => fridge.id === fridgeId);
  console.log(fridge);
}

function changeFilter() {
  const checkBoxes = [...document.querySelectorAll('input[type="checkbox"]')];
  const brandFilters = checkBoxes
    .filter(checkbox => checkbox.checked)
    .map(checkBox => checkBox.value);

  if (brandFilters.length > 0) {
    const items = ALL_ITEMS.filter(fridge => brandFilters.includes(fridge.brand));
    generateItems(items);
  } else {
    generateItems(ALL_ITEMS);
  }
}

function onSortingChange(selectElement) {
  const sorting = selectElement.value;
  if (sorting === 'all') {
    generateItems(ALL_ITEMS);
    return;
  }
  if (sorting.endsWith('asc')) {
    const items = ALL_ITEMS.slice()
      .sort((item1, item2) => {
        return item1.price - item2.price;
      });
    generateItems(items);
    return;
  }
  if (sorting.endsWith('desc')) {
    const items = ALL_ITEMS.slice()
      .sort((item1, item2) => {
        return item2.price - item1.price;
      });
    generateItems(items);
    return;
  }
}

function searchItems(event) {
  const searchInput = document.querySelector('#searchInput');
  const phrase = searchInput.value.toLowerCase();
  const items = ALL_ITEMS.filter(fridge => {
    return fridge.title.toLowerCase().includes(phrase) || fridge.description.toLowerCase().includes(phrase);
  });
  generateItems(items);
}
