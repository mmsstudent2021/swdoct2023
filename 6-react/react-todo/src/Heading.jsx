import React from "react";

const Heading = (props) => {
  // console.log(props);
  return (
    <h1 id="heading" className="text-4xl  font-bold font-serif mb-5">
      {props.text}
    </h1>
  );
};

export default Heading;
