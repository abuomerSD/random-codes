const NewsAPI = require('newsapi');

const myAPIKey = '6b202b82be184e51879a522b5f3d0ebc'
const newsapi = new NewsAPI(myAPIKey);

// newsapi.v2.everything({
//     sources: 'bbc-news,the-verge',
// })
//     .then(response => console.log(response));

newsapi.articles({
    source: 'associated-press', // required
    sortBy: 'top' // optional
  }).then(articlesResponse => {
    console.log(articlesResponse);
    /*
      {
        status: "ok",
        source: "associated-press",
        sortBy: "top",
        articles: [...]
      }
     */
  });