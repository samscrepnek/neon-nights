import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../App.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import About from "../pages/About";
import Single from "../pages/Single";
import Result from "../pages/Result";
import Favourites from "../pages/Favourites";
import PageNotFound from "../pages/Page-not-found";
import "../scss/styles.scss";

function AppRouter() {
  return (
    <BrowserRouter basename={"/neon-nights"}>
      <div className="site-wrapper">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favourite" element={<Favourites />} />
          <Route path="/single/:id" element={<Single />} />
          <Route path="/result/:id" element={<Result />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default AppRouter;
