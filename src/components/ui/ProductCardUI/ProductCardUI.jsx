import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import Button from '../Button/Button'
import styles from './ProductCardUI.module.css'

const ProductCardUI = ({
    cardImage,
    title,
    description,
    price,
    handelAddToCart,
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

export default ProductCardUI