import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Cards from "./Components/Cards/Cards";
import Carts from "./Components/Carts/Carts";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cards, setCards] = useState([]);
  const [course, setCourse] = useState([]);
  const [credit, setCredit] = useState(0);
  const [remaining, setRemaining] = useState(20);
  const [cost, setCost] = useState(0);

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setCards(data));
  }, []);

  const handleSelectButton = (card) => {
    let count = card.credit;
    let costCount = card.price;
    const newTitle = [...course, card];

    if (course.find((item) => item.id === card.id)) {
      return toast.warn("Try to enroll same course", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      course.forEach((item) => {
        count = count + item.credit;
        costCount = costCount + item.price;
      });
      const remaining = 20 - count;
      if (count > 20) {
        return toast.error("Credit hour limit reach", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        setRemaining(remaining);
        setCourse(newTitle);
        setCredit(count);
        setCost(costCount);
      }
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <h1 className="text-4xl text-center font-bold my-10">
        Course Registration
      </h1>

      <div className="flex flex-col md:flex-row justify-center  gap-6 ">
        <Cards cards={cards} handleSelectButton={handleSelectButton}></Cards>

        <Carts
          course={course}
          credit={credit}
          remaining={remaining}
          cost={cost}
        ></Carts>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
