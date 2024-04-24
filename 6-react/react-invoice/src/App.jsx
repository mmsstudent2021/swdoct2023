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

const App = () => {
  const [products, setProduct] = useState([
    {
      id: 1,
      title: "Apple",
      price: 0.99,
      stock: 100,
    },
    {
      id: 2,
      title: "Banana",
      price: 0.49,
      stock: 80,
    },
    {
      id: 3,
      title: "Orange",
      price: 1.29,
      stock: 70,
    },
    {
      id: 4,
      title: "Grapes",
      price: 2.99,
      stock: 50,
    },
    {
      id: 5,
      title: "Strawberry",
      price: 3.49,
      stock: 40,
    },
  ]);

  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <main className=" flex flex-col min-h-screen">
      <Header>
        <Container>
          <MainHeading>Invoice App</MainHeading>
          <SubHeading>MMS Solutions</SubHeading>
        </Container>
      </Header>
      <Container>
        <CheckOutForm products={products} />
        <CheckOutItemList />
      </Container>
      <Footer>
        <Container>
          <div className=" flex gap-3 justify-end items-center">
            <Button onClick={handleDrawer} color="light">
              Manage Product
            </Button>
            <Button>Print</Button>
          </div>
        </Container>
      </Footer>
      <Drawer
        products={products}
        isDrawerOpen={isDrawerOpen}
        handleDrawer={handleDrawer}
      />
    </main>
  );
};

export default App;
