import PropTypes from "prop-types";
import Card from "../Card/Card";

const Cards = ({ cards, handleSelectButton }) => {
  return (
    <div className="md:w-3/4 mx-auto flex flex-col lg:flex-row pb-10">
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            handleSelectButton={handleSelectButton}
          ></Card>
        ))}
      </div>
    </div>
  );
};
Cards.propTypes = {
  cards: PropTypes.array.isRequired,
  handleSelectButton: PropTypes.func.isRequired,
};
export default Cards;
