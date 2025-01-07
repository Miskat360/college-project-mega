import React from "react";
import Preloader from "../helper/Preloader";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import ShopSection from "../components/ShopSection";
import Shipping from "../components/Shipping";
import Footer from "../components/Footer";
import ScrollToTop from "react-scroll-to-top";
import BottomFooter from "../components/BottomFooter";

const ShopPage = () => {
  return (
    <>
      {/* ScrollToTop */}
      <ScrollToTop smooth color="#299E60" />

      {/* Preloader */}
      <Preloader />

      {/* Header */}
      <Header category={true} />

      {/* Breadcrumb */}
      <Breadcrumb title={"Shop"} />

      {/* ShopSection */}
      <ShopSection />

      {/* Shipping */}
      <Shipping />

      {/* Footer */}
      <Footer />

      {/* BottomFooter */}
      <BottomFooter />
    </>
  );
};

export default ShopPage;
