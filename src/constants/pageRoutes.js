const product = "/product/:id";

const productRoutes = {
    product: product,
};

const cart = "/cart";

const cartRoutes = {
    cart: cart,
};

const home = "/";
const category ="/category/:category?"

const commanRoutes = {
    home: home,
    category: category,
};

export const pageRouts = {
    commanRoutes,
    cartRoutes,
    productRoutes,
};

