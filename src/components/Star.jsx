import PropTypes from "prop-types";

const Star = ({ isfilled, handleclick }) => {
  let staricon = isfilled ? "./meme.svg" : "./vite.svg";
  //   true hoga memedata.svg show karna
  // false hoga toh visualViewport.svg show karna
  return (
    <div>
      <img src={staricon} onClick={handleclick} alt="" />
    </div>
  );
};
Star.propTypes = {
  //   staricon: PropTypes.string.isRequired,
  handleclick: PropTypes.func.isRequired,
  isfilled: PropTypes.bool,
};
export default Star;
