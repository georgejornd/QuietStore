import Navigation from "../components/navigation/Navigation";
import ViewFilters from "../components/product/filter/ViewFilters";
import SingleFilters from "../components/product/filter/SingleFilters";
import FlexRow from "../ui-kit/flex-row/flex-row";
import CategoriesList from "../components/product/filter/CategoriesList";
import BlockContainer from "../ui-kit/container/block-container";
import MultipleCheckboxFilter from "../components/product/filter/multiple-filters/multiple-checkbox-filter";
import {useState} from "react";
import {ICheckboxFilter, ICheckboxRatingFilter} from "../types/product/filter/filter";
import {c_checkboxRatingFilters, c_checkboxFilters, products} from "../consts";
import MultipleCheckboxRatingFilter from "../components/product/filter/multiple-filters/multiple-checkbox-rating-filter";
import Product from "../components/product/Product";

const Products = () => {
    const [checkboxFilters, setCheckboxFilters] = useState<ICheckboxFilter[]>(c_checkboxFilters)
    const [checkboxRatingFilters, setCheckboxRatingFilters] = useState<ICheckboxRatingFilter[]>(c_checkboxRatingFilters)

    const handleChangeCheckboxFilters = (id: string) => setCheckboxFilters(prev => prev.map(checkboxFilter => checkboxFilter.id === id ? ({...checkboxFilter, selected: !checkboxFilter.selected}) : checkboxFilter))
    const handleChangeCheckboxRatingFilters = (id: string) => setCheckboxRatingFilters(prev => prev.map(checkboxFilter => checkboxFilter.id === id ? ({...checkboxFilter, selected: !checkboxFilter.selected}) : checkboxFilter))

    return (
        <>
            <Navigation />
            <ViewFilters />
            <SingleFilters />

            <div className="product-page-row">
                <BlockContainer gap={48} fullWidth={true} style={{width: "270px"}} >
                    <CategoriesList />
                    <MultipleCheckboxFilter title="Checkbox filters" filters={checkboxFilters} setFilter={handleChangeCheckboxFilters} />
                    <MultipleCheckboxRatingFilter title="Checkbox rating filters" filters={checkboxRatingFilters} setFilter={handleChangeCheckboxRatingFilters} />
                </BlockContainer>

                <FlexRow className="product-page-row-products" style={{flexWrap: "wrap", alignItems: "start"}} gap={30}>
                    {products.map(product =>
                        <Product
                            key={product.id}
                            variantView="grid"
                            id={product.id}
                            title={product.title}
                            description={product.description}
                            price={product.price}
                            currency={product.currency}
                            border={true}
                        />
                    )}
                </FlexRow>
            </div>
        </>
    )
}

export default Products