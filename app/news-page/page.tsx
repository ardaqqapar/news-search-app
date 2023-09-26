import React from 'react'
import styles from './page.module.css'
import Link from 'next/link';

const NewsPage = async ({
  searchParams
} : {
  searchParams: {
    id: string
  };
}) => {

  const API_KEY = '797b56f0-0812-45df-9ea7-c06ace002d12'

  const URL = `https://content.guardianapis.com/${searchParams.id}?api-key=${API_KEY}&show-fields=all` 

  const response = await fetch(URL)
  const data = await response.json()

  const articleData = data.response.content
  return (
    <div> 
      <h4>{articleData.webTitle}</h4>
      <p>{articleData.webPublicationDate}</p>
      <Link href={articleData.webUrl} target='_blank'>Read on Guardian</Link>
      <img src={articleData.fields.thumbnail} />
      <article>{articleData.fields.bodyText}</article>
    </div>
  )
}

export default NewsPage