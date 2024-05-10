import React from "react";
import Container from "./Container";
import MainHeading from "./MainHeading";
import SubHeading from "./SubHeading";

const Header = () => {
  return (
    <header>
      <Container>
        <MainHeading className=" mt-5">Invoice App</MainHeading>
        <SubHeading className=" mb-5">MMS Solutions</SubHeading>
      </Container>
    </header>
  );
};

export default Header;
