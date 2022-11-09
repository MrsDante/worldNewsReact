import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Article from './Components/Article';

function App() {
  const API_KEY = '49ecb8b9377149e7baf0b1fd1990fc07';
const w = 'Apple'
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('Apple');
  const baseUrl = `https://newsapi.org/v2/everything?q=${query}&from=2022-11-09&sortBy=popularity&apiKey=${API_KEY}`;

  useEffect(() => {
    getNews();
  }, [query]);

  const getNews = async () => {
    const response = await fetch(baseUrl);
    const data = await response.json();
    console.log(data.articles)
    setNews(data.articles);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className="App">
      <form
        onSubmit={getSearch}>
        <input
          value={search}
          onChange={updateSearch} />
        <button>Искать</button>
      </form>
      <div>
        {news.map((article, i) => (
          <Article
            key={i}
            title={article.source.name}
            author={article.author !== null ? article.author : 'Anonym'}
            name={article.title}
            published={article.publishedAt}
            image={article.urlToImage}
            content={article.content}
            source={article.url}
            />
        ))}
      </div>
    </div>
  );
}

export default App;
