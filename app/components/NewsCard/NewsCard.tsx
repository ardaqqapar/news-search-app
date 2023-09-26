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
        <p>{article.webPublicationDate}</p>
        <h3>{article.webTitle}</h3>
        <Link 
          href={{
            pathname: '/news-page',
            query: {
              id: article.id,
            },
          }} 
          target='_blank'>Details</Link>
    </div>
  )
}

export default NewsCard