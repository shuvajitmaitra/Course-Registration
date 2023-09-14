import "./App.css";
import Cards from "./Components/Cards/Cards";
import Carts from "./Components/Carts/Carts";

function App() {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-center font-bold my-10">
        Course Registration
      </h1>
      <div className="flex flex-col lg:flex-row justify-center  gap-6">
        <Cards></Cards>
        <Carts></Carts>
      </div>
    </div>
  );
}

export default App;
