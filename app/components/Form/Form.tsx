'use client'
import { AppDispatch, RootState } from '@/app/GlobalRedux/store';
import styles from './Form.module.css'
import React from 'react'
import { setPage, setUrl } from '@/app/GlobalRedux/Slices/newsSlice'; 
import { setQuery, setSortType, setItems } from '@/app/GlobalRedux/Slices/formSlice'; 
import { fetchNews } from '@/app/GlobalRedux/Slices/newsSlice';
import { useDispatch, useSelector } from 'react-redux';


const Form = () => {

    const dispatch : AppDispatch = useDispatch();
    const { query, sortType, items } = useSelector((state: RootState) => state.form);

    const API_KEY = '797b56f0-0812-45df-9ea7-c06ace002d12'

    const URL = `https://content.guardianapis.com/search?order-by=${sortType}&page-size=${items}&q=${query}&api-key=${API_KEY}&show-fields=all` 

    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault()
        dispatch(setUrl(URL))
        await dispatch(fetchNews({ page: 1, URL })); 
        dispatch(setPage(1))
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.firstRow}>
                <input
                    type="text"
                    value={query}
                    placeholder='Find news...'
                    onChange={(e)=>dispatch(setQuery(e.target.value))}
                />
                <button type="submit">
                    Find
                </button>
            </div>

            <div className={styles.secondRow}>
                
                <select 
                    className={styles.sort}
                    value={sortType}
                    onChange={(e)=>dispatch(setSortType(e.target.value))} 
                >
                    <option value="newest">Sort by newest</option>
                    <option value="relevance">Sort by relevance</option>
                </select>
                <div className={styles.itemCount}>
                    <label>Pick item count</label>
                    <select 
                        className={styles.itemsCountSelect}
                        value={items}
                        onChange={(e)=>dispatch(setItems(e.target.value))} 
                    >
                        <option value="10">10</option>
                        <option value="20">20</option>
                    </select>
                </div>

            </div>
            
        </form>
    )
}

export default Form