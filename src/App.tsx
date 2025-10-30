import { TopHeader } from "./components/layout/TopHeader";
import { NavigationHeader } from "./components/layout/NavigationHeader";
import { Roadmap } from "./components/layout/Roadmap";
import { ProductDetailsSection } from "./components/productdetails/ProductDetailsSection";
import RelatedItems from "./components/sections/RelatedItems";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <TopHeader />
      <NavigationHeader />
      <Roadmap />
      <ProductDetailsSection />
      <RelatedItems />
      <Footer/>
    </>
  );
}

export default App;
