import React from "react";
import "~/assets/sass/app.scss";

const BasicLayout = ({ children, className, router }) => {
  console.log("main layout");
  return <div className={`min-h-screen ${className}`}>{children}</div>;
};

export default BasicLayout;
