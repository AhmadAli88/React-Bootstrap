import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

const Merging = ({ isPrimary, isDisabled }) => {
    return (
      <button
        className={twMerge(
          "p-2 rounded-md",
          isPrimary ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700",
          isDisabled && "opacity-50 cursor-not-allowed"
        )}
        disabled={isDisabled}
      >
        Button
      </button>
    );
  };
  
  Merging.propTypes = {
    isPrimary: PropTypes.bool, 
    isDisabled: PropTypes.bool,
  };
export default Merging