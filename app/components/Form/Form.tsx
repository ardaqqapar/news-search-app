'use client'
import React from 'react'
import { useState } from 'react'


const Form = ( { getSearchResults } : any ) => {

    const [query, setQuery] = useState('')
    const [sortType, setSortType] = useState('newest')
    const [items, setItems] = useState("10")

    const API_KEY = '797b56f0-0812-45df-9ea7-c06ace002d12'

    const URL = `https://content.guardianapis.com/search?order-by=${sortType}&page-size=${items}&q=${query}&api-key=${API_KEY}&show-fields=all` 

    const handleSubmit = async (e:any) => {
        e.preventDefault()
        const response = await fetch(URL)
        const data = await response.json()

        getSearchResults(data.response.results)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="search">Search: </label>
            <input
                type="text"
                value={query}
                placeholder='Find news...'
                onChange={(e) => setQuery(e.target.value)}
            />
            <select 
                value={sortType}
                onChange={(e)=>setSortType(e.target.value)} 
            >
                <option value="newest">Sort by newest</option>
                <option value="relevance">Sort by relevance</option>
            </select>
            <select 
                value={items}
                onChange={(e)=>setItems(e.target.value)} 
            >
                <option value="10">10</option>
                <option value="20">20</option>
            </select>
            <button type="submit" >
                Find
            </button>
        </form>
    )
}

export default Form