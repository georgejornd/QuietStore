import Index from "../pages/Index";
import {Route, Routes} from "react-router-dom";
import NotFound from "../pages/NotFound";
import Products from "../pages/Products";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/products" element={<Products />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default Router