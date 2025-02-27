import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import styles from './ProductFromCart.module.css';

const ProductFromCart = ({
    cardImage,
    title,
    quantity,
    price,
}) => {
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
                <Typography gutterBottom variant='h6' component={'div'}>
                    Цена за единицу товара: <b>{price} $</b>
                </Typography>
                <Typography gutterBottom variant='h6' component={'div'}>
                    Количество: <b>{quantity}</b>
                </Typography>
                <Typography gutterBottom variant='h6' component={'div'}>
                    Сумма:  <b>{(quantity * price).toFixed(2)} $</b>
                </Typography>
            </CardContent>
        </Card>
    )
}

export default ProductFromCart