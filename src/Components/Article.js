import React from 'react';
import styles from "./Article.module.css";

const Article = ({ title, author, name }) => {
  return (
    <div className={styles.container}>
      <p>Издание: {title}</p>
      <p>Автор статьи: {author}</p>
      <p>Название статьи: {name}</p>
    </div>
  )
}

export default Article