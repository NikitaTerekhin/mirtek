import {createStore} from 'vuex';
import auth from "../store/modules/auth";
import customers from "./modules/customers";

export default createStore({
    modules: {
        auth,
        customers,
    }
})