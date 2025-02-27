import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styles from "./ProductsList.module.css"
import Button from '../../../components/ui/Button/Button';
import ProductCard from '../../../components/ui/ProductCard/ProductCard';
import Pagination from '../../../components/ui/Pagination/Pagination';

const ProductList = () => {
    const limit = 9;
    const skip = 0;

    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(9)


    useEffect(() => {
        const url = category
            ? `https://dummyjson.com/products/category/${category}`
            : `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
        axios
            .get(url)
            .then(
                response =>
                    setProducts(response.data.products),
            )
            .catch(
                error =>
                    console.error("Произошла ошибка при загрузке товаров:", error)
            );
    }, [category]);

    // const handelPagination = () => {
    //     console.log("test");

    // }

    const lastProductIndex = currentPage * productsPerPage;
    console.log(lastProductIndex)
    ;
    
    const firstProductIndex = lastProductIndex - productsPerPage;
    console.log(firstProductIndex);
    
    const currentProducts = products.slice(firstProductIndex, lastProductIndex)
    console.log(currentProducts);
    
    const totalProducts = products.length;
    console.log(totalProducts);
    

    const pageNumber = Math.ceil(totalProducts / productsPerPage);
    console.log(pageNumber);

    const handelPagination = (e) =>{
        const test = e.target.value;
        console.log(test);
        

    }
    


    return (
        <div className={styles.wrapper}>
            <div className={styles.nameCategory}>
                Наименование категории: <b>{category ? category : 'не выбрана'}</b>
            </div>
            <div className={styles.wrapperContent}>
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        cardImage={product.thumbnail}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                    />
                ))}
            </div>
            <Pagination
                onClick={handelPagination}
                count={pageNumber}
                productsPerPage={productsPerPage}
                totalProducts={totalProducts}
            >

            </Pagination>

        </div>
    )
}

export default ProductList