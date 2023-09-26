'use client'

import { useCallback, useEffect, useState } from 'react'
import Form from './components/Form/Form'
import styles from './page.module.css'
import NewsCard from './components/NewsCard/NewsCard'
import { Article } from './types'



export default function Home() {

  const [news, setNews] = useState<Article[]>()

  return (
    <>
      <Form getSearchResults={(news: Article[]) => setNews(news)}/>
      <div className={styles.grid}>
        {news && news.map((article:Article)=> (
          <NewsCard article={article} key={article.id}/>
        ))}
      </div>
    </>
  )
}
