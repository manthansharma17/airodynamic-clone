import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";

import Home from "./pages/Home";
import Solutions from "./components/sections/Services/Services";
import Model from "./components/sections/WindowAnimation/Plane";
import Insight from "./components/sections/insight/InsightsSection";
import About from "./components/sections/About/StorySection";
import Contact from "./components/layout/Footer";
import NotFound from "./components/sections/model/PlaneButton";

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
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

