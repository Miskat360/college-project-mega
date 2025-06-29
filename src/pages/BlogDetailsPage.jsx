import React from "react";
import Preloader from "../helper/Preloader";
import Breadcrumb from "../components/Breadcrumb";
import BottomFooter from "../components/BottomFooter";
import BlogDetails from "../components/BlogDetails";
import ScrollToTop from "react-scroll-to-top";
import Header from "../components/Header";
import Shipping from "../components/Shipping";
import Footer from "../components/Footer";
const BlogDetailsPage = () => {
  return (
    <>
      {/* ScrollToTop */}
      <ScrollToTop smooth color="#FA6400" />

      {/* Preloader */}
      <Preloader />

      {/* HeaderTwo */}
      <Header />

      {/* Breadcrumb */}
      <Breadcrumb title={"Blog Details"} />

      {/* BlogDetails */}
      <BlogDetails />

      {/* ShippingOne */}
      <Shipping />

      {/* FooterTwo */}
      <Footer />

      {/* BottomFooter */}
      <BottomFooter />
    </>
  );
};

export default BlogDetailsPage;
