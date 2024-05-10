import React, { useContext } from "react";
import { GeneralContext } from "../context/GeneralProvider";
import Container from "./Container";
import { Button } from "flowbite-react";

const Footer = () => {
  const { handleDrawer } = useContext(GeneralContext);
  // console.log(handleDrawer);
  return (
    <footer className=" mt-auto mb-3">
      <Container>
        <div className=" flex gap-3 justify-end items-center">
          <Button onClick={handleDrawer} color="light">
            Manage Product
          </Button>
          <Button>Print</Button>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
