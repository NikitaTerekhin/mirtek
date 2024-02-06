import {createStore} from 'vuex';
import auth from "./modules/auth";
import customers from "./modules/customers";
import products from "./modules/products";
import transactions from "./modules/transactions";

export default createStore({
    modules: {
        auth,
        customers,
        products,
        transactions,
    }
})