import PageContainer from "../ui-kit/container/page-сontainer";
import Navigation from "../components/navigation/Navigation";
import ViewFilters from "../components/product/filter/ViewFilters";
import ShortFilters from "../components/product/filter/ShortFilters";

const Products = () => {
    return (
        <PageContainer>
            <Navigation />
            <ViewFilters />
            <ShortFilters />
        </PageContainer>
    )
}

export default Products