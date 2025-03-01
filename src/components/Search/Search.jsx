import React, { useEffect, useState } from 'react'
import styles from './Search.module.css'
// import useDebounce from '../../hooks/useDebounce/useDebounce';
import { useSearchParams } from 'react-router-dom';

export const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const [search, setSearch] = useState(searchParams.get("query") || "");

    // const debouncedSearch = useDebounce(search, 500);

    useEffect(() => {
        if (search) {
            setSearchParams({ query: search })
        } else {
            setSearchParams({});
        }
    }, [search, setSearchParams]);

    // console.log(searchParams);
    // console.log(debouncedSearch);
    return (
        <div className={styles.wrapper}>
            <input
                className={styles.search}
                type="search"
                placeholder="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    )
}
export default Search
