const numberOfItems = 56;
const numberPerPage = 8;
let currentPage = 1;

const numberOfPages = Math.ceil(numberOfItems/numberPerPage);

function accomodatePage(clickedPage) {
  if (clickedPage <= 1) { return clickedPage + 1}
  if (clickedPage >= numberOfPages) { return clickedPage -1}
  return clickedPage;
}

function buildPagination(clickedPage) {
  $('.paginator').empty();
  const currPageNum = accomodatePage(clickedPage);
  if (numberOfPages >= 3) {
    $('.paginator').append(`<button class="btn btn-primary decr"><</button>`);
      for (let i=-1; i<2; i++) {
          $('.paginator').append(`<button class="btn btn-primary attached" value="${currPageNum+i}">${currPageNum+i}</button>`)
      }
    $('.paginator').append(`<button class="btn btn-primary incr">></button>`);
  } else {
      for (let i=0; i<numberOfPages; i++) {
          $('.paginator').append(`<button class="btn btn-primary" value="${i+1}">${i+1}</button>`);
      }
  }
}

async function buildPage(currPage) {
  const trimStart = 1;
  const trimEnd = 8;
  let response = await fetch('https://randomuser.me/api/?page=' + `${currPage}` + '&results=8&seed=abc?no-cors'); 
  let result = await response.json();
  $('.patients').empty();
   for (let i = trimStart-1; i<=trimEnd; i++) {
    $('.patients').append( `    <div class="patient">
    <div class="personality">
      <div class="patient-pic"><img src="${result.results[i].picture.medium}" alt=""></div>
      <div class="patient-name">
        <div class="ns">${result.results[i].name.first} ${result.results[i].name.last}</div>
        <div class="gen-age">${result.results[i].dob.age} yrs, ${result.results[i].gender}</div>
      </div>
    </div>
    <div class="patient-status"><button disabled>Consult</button></div>
    <div class="patient-time">&emsp; 0${2+i}:00 PM</div>
    <div class="patient-phone-and-mail">
    <div class="patient-phone">+ ${result.results[i].cell}</div>
    <div class="patient-mail">${result.results[i].email}</div>
    </div>
    <div class="patient-adress">${result.results[i].location.street.name}, ${result.results[i].location.street.number} 
    <br> ${result.results[i].location.city}, ${result.results[i].location.country}</div>
    <div class="patient-doc">Dr. Gorulev</div>
    <div class="patient-actions">:</div>
  </div>` );
  }
}

$(document).ready(function(){
  buildPage(1);
  buildPagination(currentPage);

  $('.paginator').on('click', '.attached', function() {
      let clickedPage = parseInt($(this).val());
      currentPage = clickedPage;
      buildPagination(clickedPage);
      buildPage(clickedPage);
  });

  $('.paginator').on('click', '.decr', function() {
    (currentPage === 1 ) ? true : currentPage -=1;
    buildPagination(currentPage);
    buildPage(currentPage);
});

$('.paginator').on('click', '.incr', function() {
  (currentPage === numberOfPages ) ? true : currentPage +=1;
  buildPagination(currentPage);
  buildPage(currentPage);
});
});
