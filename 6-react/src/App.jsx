import Hhz from "./Hhz";

const App = () => {
  const headingStyle = {
    color: "black",
    backgroundColor: "pink",
    fontFamily: "Impact",
    padding: "10px",
  };
  return (
    <div className=" border border-gray-600 m-5 p-5">
      <h1 className=" font-serif font-bold text-3xl underline mb-5">
        Hello React
      </h1>
      <p className="mb-5">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem vero
        voluptas necessitatibus architecto nostrum sapiente eum recusandae ex
        corrupti sint animi nisi expedita, eius omnis nesciunt quisquam cumque
        voluptatum! Eligendi.
      </p>
      <button className=" bg-gray-600 text-white px-4 py-1">Click Me</button>
    </div>
  );
};

export default App;
