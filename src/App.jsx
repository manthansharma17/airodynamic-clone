import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Solutions from "./components/sections/Services/Services";
import Model from "./components/sections/model/PlaneButton";
import Insight from "./components/sections/insight/InsightsSection";
import About from "./components/sections/About/StorySection";
import Contact from "./components/sections/InstaLast/last";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/model" element={<Model />} />
        <Route path="/insight" element={<Insight />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
