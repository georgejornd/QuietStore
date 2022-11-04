export interface IProduct {
    id: string
    title: string
    description: string
    price: number
    currency: "USD" | "RUB"
    discount?: number
    rating?: number
}

export interface InitialProductProps extends IProduct{
    border?: boolean
}

export interface ProductVariantProps extends InitialProductProps {
    discountedPrice: number
}

export type ProductViewVariant = "grid" | "list"