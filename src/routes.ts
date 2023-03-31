import Admin from "./pages/Admin";
import ProductPage from "./pages/ProductPage";
import Shop from "./pages/Shop";
import { ROUTE } from "./utils/consts";

export const routes = [
  {
    path: ROUTE.SHOP,
    Component: Shop,
  },
  {
    path: ROUTE.ADMIN,
    Component: Admin,
  },
  {
    path: ROUTE.PRODUCT + '/:id',
    Component: ProductPage,
  },
];
