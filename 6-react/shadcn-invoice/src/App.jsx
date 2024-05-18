import CheckoutForm from "./components/CheckoutForm";
import CheckoutList from "./components/CheckoutList";

const App = () => {
  return (
    <section className=" p-5">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl scroll-mb-10 mb-5">
        Invoice App
      </h1>

      <CheckoutForm />
      <CheckoutList />
    </section>
  );
};

export default App;
