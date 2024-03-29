import React, { useState } from "react";
import Counter from "./Counter";
import Box from "./Box";

const App = () => {
  const faqs = [
    {
      id: 1,
      question: "What is Lorem Ipsum?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 2,
      question: "Why do we use it?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      id: 3,
      question: "Where does it come from?",
      answer:
        "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    {
      id: 4,
      question: "What is the purpose of Lorem Ipsum?",
      answer:
        "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
      id: 5,
      question: "Is Lorem Ipsum always used?",
      answer: "No, Lorem Ipsum comes in many forms and variations.",
    },
  ];

  return (
    <div>
      {faqs.map((faq) => (
        <Box key={faq.id} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default App;
