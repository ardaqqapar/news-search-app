import React from 'react'
import styles from './page.module.css'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

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

  const startRegex = /<p>/g;
  const endRegex = /<\/p>/g;
  const htmlString = articleData.fields.body

  // Use regular expressions to find all start and end positions
  const startIndexMatches = [...htmlString.matchAll(startRegex)];
  const endIndexMatches = [...htmlString.matchAll(endRegex)];

  // Get the first <p> start position
  const firstStartIndex = startIndexMatches[0]?.index;

  // Get the last </p> end position
  const lastEndIndex = endIndexMatches.pop()?.index;

  //.substring(firstStartIndex, lastEndIndex);
  // Extract the desired portion of the HTML string
  const extractedHtml = htmlString.substring(firstStartIndex, lastEndIndex);;
  return (
    <div className={styles.container}> 
      <Link href='/' className={styles.backButton}>Back</Link>
      <h4 className={styles.title}>{articleData.webTitle}</h4>
      <div className={styles.dateAndLink}>
        <p>{articleData.webPublicationDate}</p>
        <Link href={articleData.webUrl}>Read on Guardian</Link>
      </div>
      <div className={styles.imageAndText}>
        <img src={articleData.fields.thumbnail} />
        {/* <article>{articleData.fields.bodyText}</article> */}
        <div className={styles.article}>
          <div dangerouslySetInnerHTML={{ __html: extractedHtml }} />
        </div>
      </div>
    </div>
  )
}

export default NewsPage