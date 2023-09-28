import React from 'react'
import styles from './page.module.css'
import Link from 'next/link';
import Button from '../components/Button/Button';
import { formatDate } from '../utils/dateUtils';

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

  const htmlString = articleData.fields.body
  const startRegex = /<p>/g;
  const endRegex = /<\/p>/g;

  // Use regular expressions to find all start and end positions
  const startIndexMatches = [...htmlString.matchAll(startRegex)];
  const endIndexMatches = [...htmlString.matchAll(endRegex)];

  // Get the first <p> start position
  const firstStartIndex = startIndexMatches[0]?.index;

  // Get the last </p> end position
  const lastEndIndex = endIndexMatches.pop()?.index;

  // Extract the desired portion of the HTML string
  const extractedHtml = htmlString.substring(firstStartIndex, lastEndIndex);

  return (
    <div className={styles.container}> 
      <Button/>
      <h4 className={styles.title}>{articleData.webTitle}</h4>
      <div className={styles.dateAndLink}>
        <p>{formatDate(articleData.webPublicationDate)}</p>
        <Link href={articleData.webUrl} target='_blank'>Read on Guardian</Link>
      </div>
      <div className={styles.imageAndText}>
        <img src={articleData.fields.thumbnail} />
        <div className={styles.article}>
          <div dangerouslySetInnerHTML={{ __html: extractedHtml }} />
        </div>
      </div>
    </div>
  )
}

export default NewsPage