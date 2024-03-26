import { Link } from "react-router-dom";
import NavBar from "../features/navbar/Navbar";
import Footer from "../features/common/Footer";
import LandingPageList from "../features/product/components/LandigPageList";
import CtaSection from "../features/CtaSection";
import ProductList from "../features/product/components/ProductList";

function Home() {
  return (
    <div>
      <NavBar>
        <CtaSection />
        <div className="px-2">
          <LandingPageList />
        </div>
      </NavBar>
      <Footer></Footer>
    </div>
  );
}

export default Home;
