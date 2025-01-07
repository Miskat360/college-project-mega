import React from "react";
import Preloader from "../helper/Preloader";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import BottomFooter from "../components/BottomFooter";
import Shipping from "../components/Shipping";
import Checkout from "../components/Checkout";
import ScrollToTop from "react-scroll-to-top";

const CheckoutPage = () => {
  return (
    <>
      {/* ScrollToTop */}
      <ScrollToTop smooth color="#299E60" />

      {/* Preloader */}
      <Preloader />

      {/* Header */}
      <Header category={true} />

      {/* Breadcrumb */}
      <Breadcrumb title={"Checkout"} />

      {/* Checkout */}
      <Checkout />

      {/* Shipping */}
      <Shipping />

      {/* Footer */}
      <Footer />

      {/* BottomFooter */}
      <BottomFooter />
    </>
  );
};

export default CheckoutPage;
