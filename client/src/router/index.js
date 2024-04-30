import AdminPage from "../Pages/AdminPage/AdminPage";
import Basket from "../Pages/BasketPage/Basket";
import Catalog from "../Pages/CatalogPage/Catalog";
import Home from "../Pages/HomePage/Home";
import ItemPage from "../Pages/ItemPage/ItemPage";
import Auth from "../Pages/AuthPage/Auth";
import { ADMIN_ROUTE, BASKET_ROUTE, CATALOG_ROUTE, HOME_ROUTE, ITEM_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/pagelink";


export const adminRoutes = [
    {
        path: ADMIN_ROUTE,
        element: AdminPage
    },
]

export const authRoutes = [
    {
        path: BASKET_ROUTE,
        element: Basket
    },
]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        element: Home
    },
    {
        path: CATALOG_ROUTE,
        element: Catalog
    },
    {
        path: LOGIN_ROUTE,
        element: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        element: Auth
    },
    {
        path: CATALOG_ROUTE + ITEM_ROUTE + '/:id',
        element: ItemPage
    }
]