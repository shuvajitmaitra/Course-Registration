import PropTypes from "prop-types";
const Carts = ({ course, credit }) => {
  //   console.log(course);
  return (
    <div className=" w-1/4 bg-white rounded-lg py-6">
      <p className="text-lg font-bold mx-8 pb-2 border-b-2 border-[#1C1B1B99]">
        Total Hour Remaining 7hr
      </p>

      <h2 className="text-xl font-bold mx-8 py-4 pb-2">Course Name</h2>

      <ul className=" px-8 mx-8 list-decimal text-[#1C1B1B99] pb-2">
        {course.map((course, index) => (
          <li key={index} className="">
            {course.title}
          </li>
        ))}
      </ul>

      <p className="text-lg font-bold mx-8 pt-2 border-t-2 border-[#1C1B1B99]">
        Total Credit Hour: {credit}
      </p>
    </div>
  );
};

Carts.propTypes = {
  course: PropTypes.array.isRequired,
  credit: PropTypes.number.isRequired,
};

export default Carts;
