import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Cuisine from "./Cuisine";
import Home from "./Home";
import Recipe from "./Recipe";
import Searched from "./Searched";



function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:cuisine" element={<Cuisine />} />
        <Route path="/search/:search" element={<Searched />} />
        <Route path="/recipe/:recipe" element={<Recipe />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Pages;
