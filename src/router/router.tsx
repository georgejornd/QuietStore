import Index from "../pages/Index";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NotFound from "../pages/NotFound";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router