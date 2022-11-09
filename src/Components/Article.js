import React from 'react';
import styles from "./Article.module.css";

const Article = ({ title, author, name, published, image, content, source }) => {
  return (
    <a href={source} className={styles.card}>
      <img className={styles.image} src={image} />
      <p>Издание: {title}</p>
      <p>Автор статьи: {author}</p>
      <p>Название статьи: {name}</p>
      <date>Опубликовано: {published}</date>
      <a href={source}>Источник</a>
      <article>Содержание: {content}</article>
    </a>
  )
}

export default Article