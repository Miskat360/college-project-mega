import React from "react";
import Preloader from "../../helper/Preloader";
import ScrollToTop from "react-scroll-to-top";
import Header from "../../components/Header";

const UserDashboard = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* ScrollToTop */}
      <ScrollToTop smooth color="#299E60" />

      {/* Header */}
      <Header />
      <div>Welcome to your dashboard.</div>
    </>
  );
};

export default UserDashboard;
