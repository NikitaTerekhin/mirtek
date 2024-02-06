import {TransactionType} from "../../types";

type State = {
    transactions: TransactionType[],
}

export default {
    state(): State {
        return {
            transactions: [
                {id: 1, name: 'Bonnie Green', date: 'Apr 23, 2021', amount: '$2300', status: 'Completed'},
                {id: 2, name: '#00910', date: 'Apr 23, 2021', amount: '-$670', status: 'Completed'},
                {id: 3, name: '#087651', date: 'Apr 18, 2021', amount: '$234', status: 'Cancelled'},
                {id: 4, name: 'Bonnie Green', date: 'Apr 15, 2021', amount: '$5000', status: 'In progress'},
                {id: 5, name: 'Jese Leos', date: 'Apr 15, 2021', amount: '$2300', status: 'In progress'},
                {id: 6, name: 'THEMSBERG LLC', date: 'Apr 11, 2021', amount: '$280', status: 'Completed'},
            ],
        }
    },
    getters: {
        transactions(state: State) {
            return state.transactions;
        }
    },
}