import Link from 'next/link';
import React, { useEffect } from 'react';
import { Article } from '@/app/types';
import styles from './NewsCard.module.css';
import { formatDate } from '@/app/utils/dateUtils';


interface NewsCardProps {
    article: Article;
}

const NewsCard:React.FC<NewsCardProps> = ({article}) => {

  return (
    <Link 
      href={{
        pathname: '/news-page',
        query: {
          id: article.id,
        },
      }}
    >
      <div className={styles.card}>
        <img src={article.fields.thumbnail}/>
        <div className={styles.info}>
          <p>{formatDate(article.webPublicationDate)}</p>
          <h3>{article.webTitle}</h3>
        </div>
      </div>
    </Link>
  )
}

export default NewsCard