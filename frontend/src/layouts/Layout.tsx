import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className=" flex flex-col min-h-screen">
      <Header />
      <Hero />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
