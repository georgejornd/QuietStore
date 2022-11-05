import Navigation from "../components/navigation/Navigation";
import ViewSelect from "../components/product/filter/ViewSelect";
import SingleFilters from "../components/product/filter/SingleFilters";
import CategoriesList from "../components/product/filter/CategoriesList";
import BlockContainer from "../ui-kit/container/block-container";
import MultipleCheckboxFilter from "../components/product/filter/multiple-filters/multiple-checkbox-filter";
import {useState} from "react";
import {ICheckboxFilter, ICheckboxRatingFilter, IRange} from "../types/product/filter/filter";
import {c_checkboxRatingFilters, c_checkboxFilters, products} from "../consts";
import MultipleCheckboxRatingFilter from "../components/product/filter/multiple-filters/multiple-checkbox-rating-filter";
import Product from "../components/product/Product";
import {ViewSelectVariant} from "../types/product/view-selector";
import RangeFilter from "../components/product/filter/range-filters/range-filter";

const Products = () => {
    const [view, setView] = useState<ViewSelectVariant>("grid")

    const [checkboxFilters, setCheckboxFilters] = useState<ICheckboxFilter[]>(c_checkboxFilters)
    const [checkboxRatingFilters, setCheckboxRatingFilters] = useState<ICheckboxRatingFilter[]>(c_checkboxRatingFilters)

    const [rangeFilter, setRangeFilter] = useState<IRange>([3, 202])

    const handleChangeCheckboxFilters = (id: string) => setCheckboxFilters(prev => prev.map(checkboxFilter => checkboxFilter.id === id ? ({...checkboxFilter, selected: !checkboxFilter.selected}) : checkboxFilter))
    const handleChangeCheckboxRatingFilters = (id: string) => setCheckboxRatingFilters(prev => prev.map(checkboxFilter => checkboxFilter.id === id ? ({...checkboxFilter, selected: !checkboxFilter.selected}) : checkboxFilter))

    return (
        <>
            <Navigation />
            <ViewSelect view={view} setView={setView} lastElement={{label: "Products", count: 139}} />
            <SingleFilters />

            <div className="product-page-row">
                <BlockContainer gap={48} fullWidth={true} style={{width: "270px"}} >
                    <CategoriesList />
                    <MultipleCheckboxFilter title="Checkbox filters" filters={checkboxFilters} setFilter={handleChangeCheckboxFilters} />
                    <MultipleCheckboxRatingFilter title="Checkbox rating filters" filters={checkboxRatingFilters} setFilter={handleChangeCheckboxRatingFilters} />
                    <RangeFilter label="Price" range={rangeFilter} setRange={setRangeFilter} />
                </BlockContainer>

                <div className="product-page-row-products">
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
                </div>
            </div>
        </>
    )
}

export default Products