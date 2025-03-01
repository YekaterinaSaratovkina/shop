import ProductCardUI from '../../../components/ui/ProductCardUI/ProductCardUI';
import { CART } from '../../../constants/constans'

const ProductCard = ({
    cardImage,
    title,
    description,
    price,
    id,
}) => {
    const getCart = () => {
        const cart = localStorage.getItem(CART);

        return cart ? JSON.parse(cart) : [];
    }

    const handelAddToCart = () => {
        const cart = getCart();

        const product = {
            id,
            price,
            title,
            cardImage,
            quantity: 1,
        }

        const foundedItem = cart.find((item) => item.id === product.id);

        if (foundedItem) {
            foundedItem.quantity += 1;
        } else {
            cart.push(product);
        }

        localStorage.setItem(CART, JSON.stringify(cart));
    }
    return (
        <ProductCardUI
            cardImage={cardImage}
            title={title}
            description={description}
            price={price}
            handelAddToCart={handelAddToCart}
        />
    )
}

export default ProductCard