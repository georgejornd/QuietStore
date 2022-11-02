export interface InitialProductProps {
    title: string
    description: string
    price: number
    currency: "USD" | "RUB"
    discount?: number
    rating?: number
    border?: boolean
}

export interface ProductVariantProps extends InitialProductProps {
    discountedPrice: number
}

export type ProductViewVariant = "grid" | "list"