import { PropTypes } from "prop-types";
import './paragraph.css'

const Paragraph = ({ children, color, textStyle }) => {
  return (
    <div style={{ color: color, textTransform: textStyle }} className="container">
      {children}
    </div>
  );
};

Paragraph.propTypes = {
  children: PropTypes.object,
  color: PropTypes.string,
  textStyle: PropTypes.string,
};

Paragraph.defaultProps = {
  color: "red",
  textStyle: "uppercase",
};

export default Paragraph;
