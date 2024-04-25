import React from "react";

const MainHeading = ({ children, className }) => {
  return (
    <h1 className={`text-3xl font-bold font-serif ${className}`}>{children}</h1>
  );
};

export default MainHeading;
