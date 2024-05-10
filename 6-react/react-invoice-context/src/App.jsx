import { Button } from "flowbite-react";
import React, { useState } from "react";
import Container from "./components/Container";
import MainHeading from "./components/MainHeading";
import SubHeading from "./components/SubHeading";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CheckOutForm from "./components/CheckOutForm";
import CheckOutItemList from "./components/CheckOutItemList";
import Drawer from "./components/Drawer";
import { Toaster } from "react-hot-toast";
import GeneralProvider from "./context/GeneralProvider";
import ProductProvider from "./context/ProductProvider";
import ItemProvider from "./context/ItemProvider";

const App = () => {
  return (
    <GeneralProvider>
      <ProductProvider>
        <ItemProvider>
          <main className=" flex flex-col min-h-screen">
            <Header/>
            <Container>
              <CheckOutForm />
              <CheckOutItemList />
            </Container>
            <Footer />
            <Drawer />
            <Toaster position="bottom-left" reverseOrder={false} />
          </main>
        </ItemProvider>
      </ProductProvider>
    </GeneralProvider>
  );
};

export default App;
