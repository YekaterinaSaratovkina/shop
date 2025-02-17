import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import styles from "./ProductsList.module.css"

const ProductList = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url = category
            ? `https://dummyjson.com/products/category/${category}`
            : `https://dummyjson.com/products?limit=10&skip=0`;
        axios
            .get(url)
            .then(response => setProducts(response.data.products))
            .catch(error => console.error("Произошла ошибка при загрузке товаров:", error));
    }, [category]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.nameCategory}>
            Наименование категории: <b>{category ? category : 'не выбрана'}</b>
            </div> 
            <div className={styles.wrapperContent}>          
            {products.map(product => (
                <div className={styles.content} id={product.id}>
                    <img src={product.thumbnail} alt="#" className={styles.img} />
                    <span className={styles.itemTitle}>{product.title}</span>
                    <button className={styles.itemBtn}>Добавить в корзину</button>
                </div>
            ))}
            </div> 
        </div>
    )
}

export default ProductList