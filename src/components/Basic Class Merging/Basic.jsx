
import { twMerge } from 'tailwind-merge';
import PropTypes from 'prop-types';

const Button = ({ isLarge }) => {
    return (
      <button
        className={twMerge(
          "px-4 py-2 bg-blue-500 text-white",     // default classes
          isLarge ? "px-8 py-4" : "px-4 py-2"     // conditional classes
        )}
      >
        Click Me
      </button>
    );
  };
  
  Button.propTypes = {
    isLarge: PropTypes.bool,  // isLarge should be a boolean
  };
export default Button

