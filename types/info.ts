export type Products = {
    id: number,
    name: string,
    price: number,
    categoryId: number,
    rate: number,
    content: string,
    review: number,
    imageUrl: string,
}

export interface Product {
    products: Products[];
}

export type OpenSearch = {
    searchOpen: boolean
}