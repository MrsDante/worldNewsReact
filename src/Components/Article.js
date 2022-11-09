import React from 'react';
import styles from "./Article.module.css";

const Article = ({ title, author, name, published, image, content }) => {
  return (
    <div className={styles.container}>
      <p>Издание: {title}</p>
      <p>Автор статьи: {author}</p>
      <p>Название статьи: {name}</p>
      <date>Опубликовано: {published}</date>
      <img src={image} />
      <article>Содержание: {content}</article>
    </div>
  )
}

export default Article