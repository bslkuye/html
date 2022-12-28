// do something!
const NewsList = $nav => {
  var url = 'https://newsapi.org/v2/everything?' +
    'category=business&' +
    'from=2022-12-28&' +
    'country=kr&' +
    'apiKey=001988791d624df985ed30fd4d87df09';

  var req = new Request(url);

  fetch(req)
    .then(function (response) {
      console.log(response.json());
    })

    console.log('loh')
  console.log(fetch());
}

export default NewsList;

//001988791d624df985ed30fd4d87df09 key

//GET https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=