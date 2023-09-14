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
  const [cost, setCost] = useState(0);

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setCards(data));
  }, []);

  const handleSelectButton = (card) => {
    let count = card.price;
    const newTitle = [...course, card];

    if (course.find((item) => item.id === card.id)) {
      return toast.error("Try to take same course", {
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
      setCourse(newTitle);
    }

    course.forEach((item) => {
      count += item.price;
    });
    console.log(cost);
    setCost(count);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-center font-bold my-10">
        Course Registration
      </h1>

      <div className="flex flex-col lg:flex-row justify-center  gap-6">
        <Cards cards={cards} handleSelectButton={handleSelectButton}></Cards>

        <Carts course={course}></Carts>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
