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
  const baseUrl = `https://newsapi.org/v2/everything?q=${w}&from=2022-11-09&sortBy=popularity&apiKey=${API_KEY}`;

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
/*      <form
        onSubmit={getSearch}
        >
          <input
            value={search}
            onChange={updateSearch}
            />
            <button>Искать</button>
      </form>

      */
  return (
    <div className="App">
      <div>
        {news.map(article => (
          <Article
            title={article.source.name}
            author={article.author !== null ? article.author : 'Anonym'}
            name={article.title}
            published={article.published}
            image={article.urlToImage}
            content={article.content}
            />
        ))}
      </div>
    </div>
  );
}

export default App;
