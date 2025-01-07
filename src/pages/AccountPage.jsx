import React from "react";
import Preloader from "../helper/Preloader";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import BottomFooter from "../components/BottomFooter";
import Shipping from "../components/Shipping";
import SignIn from "../components/SingIn";
import ScrollToTop from "react-scroll-to-top";

const AccountPage = () => {
  return (
    <>
      {/* ScrollToTop */}
      <ScrollToTop smooth color="#299E60" />

      {/* Preloader */}
      <Preloader />

      {/* Header */}
      <Header category={true} />

      {/* Breadcrumb */}
      <Breadcrumb title={"Account"} />

      {/* SignIn */}
      <SignIn />

      {/* Shipping */}
      <Shipping />

      {/* Footer */}
      <Footer />

      {/* BottomFooter */}
      <BottomFooter />
    </>
  );
};

export default AccountPage;
