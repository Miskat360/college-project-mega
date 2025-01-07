import React from "react";
import Preloader from "../helper/Preloader";
import Header from "../components/Header";
import ProductDetails from "../components/ProductDetails";
import NewArrivalTwo from "../components/NewArrivalTwo";
import Shipping from "../components/Shipping";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import BottomFooter from "../components/BottomFooter";
import BreadcrumbTwo from "../components/BreadcrumbTwo";
import ScrollToTop from "react-scroll-to-top";

const ProductDetailsPage = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* ScrollToTop */}
      <ScrollToTop smooth color="#299E60" />

      {/* Header */}
      <Header />

      {/* Breadcrumb */}
      <BreadcrumbTwo title={"Product Details"} />

      {/* ProductDetails */}
      <ProductDetails />

      {/* NewArrivalTwo */}
      <NewArrivalTwo />

      {/* Shipping */}
      <Shipping />

      {/* Newsletter */}
      <Newsletter />

      {/* FooterTwo */}
      <Footer />

      {/* BottomFooter */}
      <BottomFooter />
    </>
  );
};

export default ProductDetailsPage;
