import React from "react";

const SubHeading = ({ children, className }) => {
  return (
    <h3 className={` text-xl font-sans text-gray-500 ${className}`}>
      {children}
    </h3>
  );
};

export default SubHeading;
