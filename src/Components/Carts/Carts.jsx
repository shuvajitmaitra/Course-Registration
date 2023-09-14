import PropTypes from "prop-types";
const Carts = ({ course, credit, remaining, cost }) => {
  return (
    <div className=" sm:w-1/2 md:w-1/4 mx-auto h-fit bg-white rounded-lg py-6 ">
      <p className="text-lg font-bold mx-8 pb-2 text-[#2F80ED] border-b-2 border-[#1C1B1B33]">
        Total Hour Remaining: {remaining} hr
      </p>

      <h2 className="text-xl font-bold mx-8 py-4 pb-2">Course Name</h2>

      <ul className="mx-8 px-4 text-sm list-decimal text-[#1C1B1B99] pb-2">
        {course.map((course, index) => (
          <li key={index} className="py-1">
            {course.title}
          </li>
        ))}
      </ul>

      <p className="text-lg font-bold mx-8 py-2 border-t-2 border-[#1C1B1B33]">
        Total Credit Hour: {credit}
      </p>
      <p className="text-lg font-bold mx-8 pt-2 border-t-2 border-[#1C1B1B33]">
        Total Price: {cost} USD
      </p>
    </div>
  );
};

Carts.propTypes = {
  course: PropTypes.array.isRequired,
  credit: PropTypes.number.isRequired,
  remaining: PropTypes.number.isRequired,
  cost: PropTypes.number.isRequired,
};

export default Carts;
