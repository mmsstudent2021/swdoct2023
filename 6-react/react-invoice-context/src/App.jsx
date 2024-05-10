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

  const [items, setItems] = useState([]);

  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const addProduct = (newProduct) => {
    setProduct([...products, newProduct]);
  };

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const updateItemQuantity = (id, amount) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          const quantity = item.quantity + amount;
          const cost = (quantity * item.product.price).toFixed(2);
          return { ...item, quantity, cost };
        }
        return item;
      })
    );
  };

  const handleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <main className=" flex flex-col min-h-screen">
      <Header>
        <Container>
          <MainHeading className=" mt-5">Invoice App</MainHeading>
          <SubHeading className=" mb-5">MMS Solutions</SubHeading>
        </Container>
      </Header>
      <Container>
        <CheckOutForm addItem={addItem} products={products} />
        <CheckOutItemList
          updateItemQuantity={updateItemQuantity}
          removeItem={removeItem}
          items={items}
        />
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
      addProduct={addProduct}
        products={products}
        isDrawerOpen={isDrawerOpen}
        handleDrawer={handleDrawer}
      />
      <Toaster position="bottom-left" reverseOrder={false} />
    </main>
  );
};

export default App;
