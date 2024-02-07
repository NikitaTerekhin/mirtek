import {createStore} from 'vuex';
import auth from "./modules/auth";
import chart from "./modules/chart";
import customers from "./modules/customers";
import products from "./modules/products";
import transactions from "./modules/transactions";

export default createStore({
    modules: {
        auth,
        chart,
        customers,
        products,
        transactions,
    }
})