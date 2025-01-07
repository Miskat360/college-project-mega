import React from "react";
import Preloader from "../helper/Preloader";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Feature from "../components/Feature";
import Promotional from "../components/Promotional";
import FlashSales from "../components/FlashSales";
import ProductList from "../components/ProductList";
import Offer from "../components/Offer";
import Recommended from "../components/Recommended";
import HotDeals from "../components/HotDeals";
import TopVendors from "../components/TopVendors";
import BestSells from "../components/BestSells";
import Delivery from "../components/Delivery";
import Organic from "../components/Organic";
import ShortProduct from "../components/ShortProduct";
import Brand from "../components/Brand";
import NewArrivalOne from "../components/NewArrivalOne";
import Shipping from "../components/Shipping";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import BottomFooter from "../components/BottomFooter";
import ScrollToTop from "react-scroll-to-top";
import UsersApi from "../api/UsersApi";
const HomePage = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* ScrollToTop */}
      <ScrollToTop smooth color="#299E60" />

      {/* Header */}
      <Header />

      <div>
        <UsersApi />
      </div>
      {/* Banner */}
      <Banner />

      {/* Feature */}
      <Feature />

      {/* Promotional */}
      <Promotional />

      {/* FlashSales */}
      <FlashSales />

      {/* ProductList */}
      <ProductList />

      {/* Offer */}
      <Offer />

      {/* Recommended */}
      <Recommended />

      {/* HotDeals */}
      <HotDeals />

      {/* TopVendors */}
      <TopVendors />

      {/* BestSells */}
      <BestSells />

      {/* Delivery */}
      <Delivery />

      {/* Organic */}
      <Organic />

      {/* ShortProduct */}
      <ShortProduct />

      {/* Brand */}
      <Brand />

      {/* NewArrivalOne */}
      <NewArrivalOne />

      {/* Shipping */}
      <Shipping />

      {/* Newsletter */}
      <Newsletter />

      {/* Footer */}
      <Footer />

      {/* BottomFooter */}
      <BottomFooter />
    </>
  );
};

export default HomePage;
