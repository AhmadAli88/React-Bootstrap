import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";


const Card = ({ highlight }) => {
    return (
      <div
        className={twMerge(
          "bg-white p-6 shadow-md text-purple-500",            // default classes
          highlight && "bg-yellow-100 shadow-lg" // override classes if highlighted
        )}
      >
        This is a card.
      </div>
    );
  };
  
  Card.propTypes = {
    highlight: PropTypes.bool, // isLarge should be a boolean
  };


export default Card


  