import {useState} from "react";
import {ICheckboxFilter, ICheckboxRatingFilter, IRange} from "../types/product/filter/filter";
import {c_checkboxRatingFilters, c_checkboxFilters, products} from "../consts";
import {ViewSelectVariant} from "../types/product/view-selector";
import Navigation from "../components/navigation/Navigation";
import ViewSelect from "../components/product/filter/ViewSelect";
import SingleFilters from "../components/product/filter/SingleFilters";
import CategoriesList from "../components/product/filter/CategoriesList";
import BlockContainer from "../ui-kit/container/block-container";
import MultipleCheckboxFilter from "../components/product/filter/multiple-filters/multiple-checkbox-filter";
import MultipleCheckboxRatingFilter from "../components/product/filter/multiple-filters/multiple-checkbox-rating-filter";
import Product from "../components/product/Product";
import RangeFilter from "../components/product/filter/range-filters/range-filter";
import Pagination from "../components/pagination/Pagination";
import Button from "../ui-kit/button/button";
import ContentContainer from "../ui-kit/container/content-container";

const Products = () => {
    const [view, setView] = useState<ViewSelectVariant>("list")

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
                <BlockContainer gap={48} fullWidth={true} style={{width: "270px", height: "max-content"}}>
                    <CategoriesList />
                    <MultipleCheckboxFilter title="Checkbox filters" filters={checkboxFilters} setFilter={handleChangeCheckboxFilters} />
                    <MultipleCheckboxRatingFilter title="Checkbox rating filters" filters={checkboxRatingFilters} setFilter={handleChangeCheckboxRatingFilters} />
                    <RangeFilter label="Price" range={rangeFilter} setRange={setRangeFilter} />
                </BlockContainer>

                <div className="product-page-row-products">
                    {products.map(product =>
                        <Product
                            variantView={view}
                            id={product.id}
                            title={product.title}
                            description={product.description}
                            price={product.price}
                            discount={product.discount}
                            currency={product.currency}
                            rating={product.rating}
                            border={true}
                            key={product.id}
                        />
                    )}
                </div>
            </div>

            <ContentContainer>
                <Pagination
                    pagination={{current: 1, count: 4}}
                    button={<Button label="Show more products" color="secondary" size="medium" iconPosition="down" />}
                    details={{label: "Products", count: 144}}
                />
            </ContentContainer>
        </>
    )
}

export default Products