import PropTypes from "prop-types";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoBook } from "react-icons/go";
const Card = ({ card, handleSelectButton }) => {
  const { image, title, price, credit, description } = card;
  return (
    <div className=" p-6 rounded-lg shadow-md bg-white mx-4 md:mx-0">
      <div className="flex justify-center">
        <img src={image} className="xl:w-full" />
      </div>

      <h1 className="text-base font-bold pt-4">{title}</h1>

      <p className="text-[#1C1B1B99] pt-2">{description}</p>

      <div className="flex justify-between items-center py-2 ">
        <div className="flex items-center gap-2 font-semibold">
          <BsCurrencyDollar />

          <p className="text-[#1C1B1B99]">Price: {price}</p>
        </div>

        <div className="flex items-center gap-2 font-semibold ">
          <GoBook />

          <p className="text-[#1C1B1B99]">Credit: {credit}hr</p>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => handleSelectButton(card)}
          className="w-full text-white text-lg font-semibold py-3 bg-[#2F80ED] hover:bg-[#406eaa] rounded-lg"
        >
          Select
        </button>
      </div>
    </div>
  );
};
Card.propTypes = {
  card: PropTypes.object.isRequired,
  handleSelectButton: PropTypes.func.isRequired,
};
export default Card;
