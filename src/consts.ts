import {ICheckboxFilter, ICheckboxRatingFilter} from "./types/product/filter/filter";
import {IProduct} from "./types/product/product";

// product page

export const c_checkboxFilters: ICheckboxFilter[] = [
    {id: "1", label: "Checkbox filter 1", selected: false},
    {id: "2", label: "Checkbox filter 2", selected: false},
    {id: "3", label: "Checkbox filter 3", selected: false},
    {id: "4", label: "Checkbox filter 4", selected: true}
]

export const c_checkboxRatingFilters: ICheckboxRatingFilter[] = [
    {id: "1", rating: 5, selected: false},
    {id: "2", rating: 4, selected: false},
    {id: "3", rating: 3, selected: false},
    {id: "4", rating: 2, selected: true},
    {id: "5", rating: 1, selected: true}
]

export const products: IProduct[] = [
    {id: "1", title: "Product 1", description: "Space for a small product description", currency: "USD", price: 30.99, discount: 20, rating: 4.3},
    {id: "2", title: "Product 2", description: "Space for a small product description", currency: "USD", price: 30.99, discount: 0, rating: 5},
    {id: "3", title: "Product 3", description: "Space for a small product description", currency: "USD", price: 30.99, discount: 0, rating: 1.7},
    {id: "4", title: "Product 4", description: "Space for a small product description", currency: "USD", price: 30.99, discount: 0, rating: 2}
]