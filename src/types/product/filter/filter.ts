interface IInitialFilter {
    id: string
    label: string | number
}

export interface ISelectFilter extends IInitialFilter {}

export interface ICheckboxFilter extends IInitialFilter {
    selected: boolean
}

export interface ICheckboxRatingFilter {
    id: string
    selected: boolean
    rating: number
}

export type IRange = [number, number]