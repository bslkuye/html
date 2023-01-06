import { category } from "./index.js";

const NewsList = ($news) => {
  if(document.querySelector('.news-list-container')){
    document.querySelector('.news-list-container').remove();
  }
  $news.insertAdjacentHTML(
    'beforeend',
    `
    <div class="news-list-container">
      <article class="news-list">
      <div class="scroll-observer">
        <img src="img/ball-triangle.svg" alt="Loading..." />
      </div>
    </div>
    `
  );

  let page = 1;
  let url = `https://newsapi.org/v2/top-headlines?country=kr&category=${category.name === 'all' ? '' : category.name}&page=${page}&pageSize=5&apiKey=${category.apiKey}`
  const appendNews = async () => {
    try {
      url = `https://newsapi.org/v2/top-headlines?country=kr&category=${category.name === 'all' ? '' : category.name}&page=${page}&pageSize=5&apiKey=${category.apiKey}`
      page++;
      const response = await axios.get(url)
        .then((response) => {
          let newsArticle = response.data.articles;
            for (let i = 0; i < 5; i++) {
            $news.querySelector('.scroll-observer').insertAdjacentHTML(
              'beforebegin',
              `
              <section class="news-item">
                <div class="thumbnail">
                  <a href="${newsArticle[i].url}" target="_blank" rel="noopener noreferrer">
                    <img
                      src="${newsArticle[i].urlToImage}"
                      alt="thumbnail" />
                  </a>
                </div>
                <div class="contents">
                  <h2>
                    <a href="${newsArticle[i].url}" target="_blank" rel="noopener noreferrer">
                      ${newsArticle[i].title}
                    </a>
                  </h2>
                  <p>
                    ${newsArticle[i].description}
                  </p>
                </div>
              </section>
              `
            )
          }
          
        })
    } catch (err) {
      console.log('error - ', err);
    }
  }

  const scrollObserver = document.querySelector(".scroll-observer");
  const option = {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    thredhold: 0,
  }

  const observer = new IntersectionObserver(appendNews, option);
  observer.observe(scrollObserver);
  
}
export default NewsList;