import PropTypes from "prop-types";

const Smallbox = ({ on, handleclick }) => {
  //   console.log(id);
  return (
    <div
      style={{
        backgroundColor: on ? "#222222" : "#cccccc",
        border: on ? "2px solid green" : "2px solid red",
      }}
      className="w-[50px] h-[60px] inline-block border-solid border-2 border-indigo-600"
      onClick={handleclick}
    ></div>
  );
};
Smallbox.propTypes = {
  on: PropTypes.bool.isRequired,
  handleclick: PropTypes.func,
  id: PropTypes.number,
};
export default Smallbox;
