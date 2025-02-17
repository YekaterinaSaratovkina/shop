import { createBrowserRouter } from "react-router";
import PageLayout from "../layout/PageLayout/PageLayout";
import Home from "../pages/Home/Home"
import Cart from "../pages/Cart/Cart"
import Product from "../pages/Product/Product"
import { pageRouts } from "./pageRoutes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PageLayout />,
        children: [
            {
                path: pageRouts.commanRoutes.home,
                element: <Home />
            },
            {
                path: pageRouts.commanRoutes.category,
                element: <Home />
            },
            {
                path: pageRouts.cartRoutes.cart,
                element: <Cart />,
            },
            {
                path: pageRouts.productRoutes.product,
                element: <Product />
            },
        ]
    }
]);

export default router;