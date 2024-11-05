import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

const Applying = ({ isNew, isHighlighted }) => {
    return (
      <span
        className={twMerge(
          "px-2 py-1 rounded",
          isNew ? "bg-blue-500 text-white" : "bg-gray-300 text-black",
          isHighlighted && "ring-2 ring-blue-700"
        )}
      >
        {isNew ? "New" : "Old"}
      </span>
    );
  };
  
  Applying.propTypes = {
    isNew: PropTypes.bool, 
    isHighlighted: PropTypes.bool,
  };
export default Applying