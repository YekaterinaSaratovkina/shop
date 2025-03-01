import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import styles from "./ProductsList.module.css"
// import Pagination from '../../../components/ui/Pagination/Pagination';
import ProductCard from '../ProductCard/ProductCard';
import { SERVER_URL } from '../../../constants/constans';

const ProductList = () => {
    const limit = 9;
    const skip = 0;
    const { category } = useParams();

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // const [currentPage, setCurrentPage] = useState(1);
    // const [productsPerPage, setProductsPerPage] = useState(9)
    const [productsSerch, setProductsSerch] = useState([]);

    const [searchParams] = useSearchParams();
    const searchInputValue = searchParams.get("query");

    if (searchInputValue) {
        useEffect(() => {
            const fetchSearch = async () => {
                const res = await fetch(`${SERVER_URL}/products/search?q=${searchParams.get("query")}`);
                const data = await res.json();
                console.log(data);
                setProductsSerch(data.products);
            }

            fetchSearch()

        }, [searchInputValue])

        return (
            <div className={styles.wrapper}>
                <div className={styles.wrapperContent}>
                    {productsSerch.map(product => (
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
            </div>
        )
    } else {
        useEffect(() => {
            const url = category
                ? `${SERVER_URL}/products/category/${category}`
                : `${SERVER_URL}/products?limit=${limit}&skip=${skip}`
            axios
                .get(url)
                .then(
                    response =>
                        setProducts(response.data.products),
                )
                .catch(
                    error =>
                        console.error("Произошла ошибка при загрузке товаров:", error)
                ).finally(() => {
                    setIsLoading(false)
                });
        }, [category]);
    }

    // const handelPagination = () => {
    //     console.log("test");

    // }

    // const lastProductIndex = currentPage * productsPerPage;
    // console.log(lastProductIndex)
    //     ;

    // const firstProductIndex = lastProductIndex - productsPerPage;
    // console.log(firstProductIndex);

    // const currentProducts = products.slice(firstProductIndex, lastProductIndex)
    // console.log(currentProducts);

    // const totalProducts = products.length;
    // console.log(totalProducts);


    // const pageNumber = Math.ceil(totalProducts / productsPerPage);
    // console.log(pageNumber);

    // const handelPagination = (e) => {
    //     const test = e.target.value;
    //     console.log(test);


    // }
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
            {/* <Pagination
                onClick={handelPagination}
                // count={pageNumber}
                // productsPerPage={productsPerPage}
                // totalProducts={totalProducts}
            >

            </Pagination> */}

        </div>
    )
}

export default ProductList