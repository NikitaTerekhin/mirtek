import {CustomerType} from "../../types";

type State = {
    customers: CustomerType[],
}

export default {
    state(): State {
        return {
            customers: [
                {id: 1, name: 'Neil Sims', email: 'email@example.com', amount: '$367'},
                {id: 2, name: 'Bonnie Green', email: 'email@example.com', amount: '$67'},
                {id: 3, name: 'Micheal Gough', email: 'email@example.com', amount: '$3467'},
                {id: 4, name: 'Thomas Lean', email: 'email@example.com', amount: '$3267'},
                {id: 5, name: 'Lana Byrd', email: 'email@example.com', amount: '$367'},
                {id: 6, name: 'Karen Nelson', email: 'email@example.com', amount: '$1367'},
            ],
        }
    },
    getters: {
        customers(state: State) {
            return state.customers;
        }
    },
}