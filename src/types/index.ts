export type CustomerType = {
    id: number,
    name: string,
    email: string,
    description?: string,
    amount: string
}

export type ProductType = {
    id: number,
    name: string,
    description: string,
    amount: string
}

export type TransactionType = {
    id: number,
    name: string,
    date: string,
    amount: string,
    status: string,
}