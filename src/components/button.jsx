import { PropTypes } from "prop-types";

const showLabel = (label) => {
  console.log("A label desse botão é", label);
};

const Button = ({ label, children }) => {
  return (
    <button onClick={() => showLabel(label)}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  label: PropTypes.string,
};

export default Button;
