import {createStore} from 'vuex';
import auth from "./modules/auth";
import customers from "./modules/customers";
import products from "./modules/products";

export default createStore({
    modules: {
        auth,
        customers,
        products,
    }
})