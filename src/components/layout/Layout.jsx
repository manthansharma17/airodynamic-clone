import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import SmoothScroll from "./SmoothScroll";

export default function Layout() {
  return (
    <SmoothScroll>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </SmoothScroll>
  );
}
