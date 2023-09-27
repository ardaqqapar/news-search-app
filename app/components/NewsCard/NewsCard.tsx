import Link from 'next/link';
import React from 'react'
import { Article } from '@/app/types';
import styles from './NewsCard.module.css'

interface NewsCardProps {
    article: Article;
}

const NewsCard:React.FC<NewsCardProps> = ({article}) => {
  
  return (
    <div className={styles.card}>
      <img src={article.fields.thumbnail}/>
      <div className={styles.info}>
        <p>{article.webPublicationDate}</p>
        <h3>{article.webTitle}</h3>
        <div className={styles.detailsButton}>
          <Link 
            href={{
              pathname: '/news-page',
              query: {
                id: article.id,
              },
            }}
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NewsCard