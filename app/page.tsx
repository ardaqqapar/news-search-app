'use client'

import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import Form from './components/Form/Form'
import styles from './page.module.css'
import NewsCard from './components/NewsCard/NewsCard'
import { Article } from './types'
import Spinner from './components/Spinner/Spinner'

import { fetchNews, selectNews, selectPage, selectUrl, setPage } from './GlobalRedux/Slices/newsSlice'
import { AppDispatch } from './GlobalRedux/store'
import { useDispatch, useSelector } from 'react-redux'


export default function Home() {

  const dispatch: AppDispatch = useDispatch();
  const news = useSelector(selectNews);
  const page = useSelector(selectPage);
  const url = useSelector(selectUrl);
  const {ref, inView} = useInView()

  const getNewNews = async () => {
    const nextPage = page + 1;
    await dispatch(fetchNews({ page: nextPage, URL: url }));
    dispatch(setPage(nextPage))
  }

  useEffect(()=> {
    if(inView){
      getNewNews()
    }
  }, [inView])

  return (
    <>
      <Form />
      <div className={styles.grid}>
        {news.map((article:Article)=> (
          <NewsCard article={article} key={article.id}/>
        ))}
      </div>
      {page != 0 && <div ref={ref}>
        <Spinner />
      </div>}
    </>
  )
}
