import {ProductType} from "../../types";

type State = {
    products: ProductType[],
}

export default {
    state(): State {
        return {
            products: [
                {id: 1, name: 'Restaurant Booking App', description: 'React & Bootstrap Framework', amount: '70'},
                {id: 2, name: 'UI Kit', description: 'React & Bootstrap Framework', amount: '54'},
                {id: 3, name: 'Design System Pro', description: 'Bootstrap Framework', amount: '47'},
                {id: 4, name: 'Dashboard', description: 'Tailwind, React', amount: '43'},
                {id: 5, name: 'Glassmorphism UI', description: 'Vue Js, Tailwind', amount: '38'},
                {id: 6, name: 'Multipurpose Template', description: 'React & Bootstrap Framework', amount: '22'},
            ],
        }
    },
    getters: {
        products(state: State) {
            return state.products;
        }
    },
}