import React from "react";
import Header from "../components/Header";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className=" flex flex-col min-h-screen">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
