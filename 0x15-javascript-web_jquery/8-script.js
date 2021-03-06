/*
  Write a Javascript script that fetches and lists all movies title by
  using this URL: https://swapi-api.hbtn.io/api/films/?format=json
*/
const $ul = $('UL#list_movies');

$.ajax({
  type: 'GET',
  url: 'https://swapi-api.hbtn.io/api/films/?format=json',
  success: function (titles) {
    $.each(titles.results, function (i, title) {
      const item = $('<li></li>').text(title.title);
      $ul.append(item);
    });
  }
});
