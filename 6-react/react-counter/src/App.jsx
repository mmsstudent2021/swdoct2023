import React, { useState } from "react";
import Counter from "./Counter";
import Box from "./Box";

const App = () => {
  const [faqs, setFaq] = useState([
    {
      id: 1,
      question: "What is Lorem Ipsum?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      hide: true,
    },
    {
      id: 2,
      question: "Why do we use it?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      hide: true,
    },
    {
      id: 3,
      question: "Where does it come from?",
      answer:
        "Contrary to popular belief, Lorem Ipsum is not simply random text.",
      hide: true,
    },
    {
      id: 4,
      question: "What is the purpose of Lorem Ipsum?",
      answer:
        "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
      hide: true,
    },
    {
      id: 5,
      question: "Is Lorem Ipsum always used?",
      answer: "No, Lorem Ipsum comes in many forms and variations.",
      hide: true,
    },
  ]);

  const clickBox = (id) => {
    // console.log("click box", id);
    setFaq(
      faqs.map((faq) => {
        if (id === faq.id) {
          faq.hide = !faq.hide;
          return faq;
        } else {
          faq.hide = true;
          return faq;
        }
      })
    );
    // setFaq(faqs.map((faq) => faq))
  };

  return (
    <div>
      {faqs.map((faq) => (
        <Box
          key={faq.id}
          question={faq.question}
          answer={faq.answer}
          hide={faq.hide}
          id={faq.id}
          clickBox={clickBox}
        />
      ))}
    </div>
  );
};

export default App;
