import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styles from './Sidebar.module.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get("https://dummyjson.com/products/categories")
      .then(response => setCategories(response.data))
      .catch(error => console.error("Произошла ошибка при загрузке категорий:", error));
  }, []);

  return (
    <aside className={styles.sidebar}>
      <ul>
        {categories.map(category => (
          <li key={category} className={styles.item}>
            <Link to={`/category/${category.slug}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar