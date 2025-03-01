import ProductFromCart from "../../components/ProductFromCart/ProductFromCart";
import Button from "../../components/ui/Button/Button";
import { CART } from "../../constants/constans";
import styles from './Cart.module.css';

const Cart = () => {
    const getCart = () => {
        const cart = localStorage.getItem(CART);

        return cart ? JSON.parse(cart) : console.log("Корзина пуста");
    }
    const cart = getCart();

    let result = cart.map(function (item) {
        return item.price * item.quantity;
    });

    let sum = result.reduce(function (a, b) {
        return a + b;
    }, 0);

    let SUM = sum.toFixed(2);

    const sendCartDetails = async () => {
        const products = cart.map((product) => ({
            id: product.id,
            quantity: product.quantity
        }));

        fetch('https://dummyjson.com/carts/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userId: 1,
                products: products,
            })
        })
            .then(res => res.json())
            .then(console.log);
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                {cart.map(product => (
                    <ProductFromCart
                        key={product.id}
                        id={product.id}
                        cardImage={product.cardImage}
                        title={product.title}
                        price={product.price}
                        quantity={product.quantity}

                    />
                ))}
            </div>

            <div className={styles.result}>
                <h5>Общая стоимость на сумму: <b>{SUM}$</b></h5>
                <Button onClick={sendCartDetails}>КУПИТЬ</Button>
            </div>
        </div>
    )
}

export default Cart