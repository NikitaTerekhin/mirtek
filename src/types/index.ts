export type CustomerType = {
    id: number,
    name: string,
    email: string,
    amount: number
}

export type ProductType = {
    id: number,
    name: string,
    description: string,
    amount: number
}

export type TransactionType = {
    id: number,
    date: string,
    amount: number,
    status: string,
}