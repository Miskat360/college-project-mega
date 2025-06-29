import React from "react";
import Preloader from "../helper/Preloader";
import Breadcrumb from "../components/Breadcrumb";
import BottomFooter from "../components/BottomFooter";
import ScrollToTop from "react-scroll-to-top";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Shipping from "../components/Shipping";
import Blog from "../components/Blog";

const BlogPage = () => {
  return (
    <>
      {/* ScrollToTop */}
      <ScrollToTop smooth color="#FA6400" />

      {/* Preloader */}
      <Preloader />

      {/* Header */}
      <Header />

      {/* Breadcrumb */}
      <Breadcrumb title={"Blog"} />

      {/* Blog */}
      <Blog />

      {/* ShippingOne */}
      <Shipping />

      {/* FooterTwo */}
      <Footer />

      {/* BottomFooter */}
      <BottomFooter />
    </>
  );
};

export default BlogPage;
