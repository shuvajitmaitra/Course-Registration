import PropTypes from "prop-types";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoBook } from "react-icons/go";
const Card = ({ card }) => {
  const { image, title, price, credit, description } = card;
  return (
    <div className="border-2 border-black p-6 rounded-lg shadow-md bg-white mx-4 lg:mx-0">
      <div className="flex justify-center">
        <img src={image} />
      </div>
      <h1 className="text-lg font-bold py-4">{title}</h1>
      <p className="text-[#1C1B1B99] ">{description}</p>
      <div className="flex justify-evenly items-center py-4 font-semibold">
        <BsCurrencyDollar />
        <p className="text-[#1C1B1B99]">Price: {price}</p>
        <GoBook />
        <p className="text-[#1C1B1B99]"> Credit: {credit}hr</p>
      </div>
      <div className="flex justify-center">
        <button className="w-full py-3 bg-[#2F80ED] rounded-lg">Select</button>
      </div>
    </div>
  );
};
Card.propTypes = {
  card: PropTypes.object.isRequired,
};
export default Card;
