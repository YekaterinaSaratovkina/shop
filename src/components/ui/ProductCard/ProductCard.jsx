import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import Button from '../Button/Button'
import styles from './ProductCard.module.css'
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
        <Card className={styles.card}>
            <CardMedia
                className={styles.card_image}
                image={cardImage}
                title={title}
            />
            <CardContent>
                <Typography gutterBottom variant='h5' component={'div'}>
                    {title}
                </Typography>
                <Typography>
                    {description}
                </Typography>

            </CardContent>
            <CardActions>
                <Button size='small' variant='text' onClick={handelAddToCart}>Buy {price}$</Button>
                <Button size='small' >Save</Button>
            </CardActions>
        </Card>
    )
}

export default ProductCard