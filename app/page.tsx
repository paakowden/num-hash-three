import AboutClientPage from "@/components/AboutClientPage";
import CatalogueSwiper from "@/components/CatalogueSwiper";
import CustomerReviewsPage from "@/components/CustomerReviewsPage";
import Media from "@/components/Media";
import Products from "@/components/Products";
import Slideshow from "@/components/Slideshow";

export default function Home() {
  return (
    <>
      <Slideshow />
      <AboutClientPage />
      <Products />
      <CatalogueSwiper />
      <Media />
      <CustomerReviewsPage />
    </>
  );
}
