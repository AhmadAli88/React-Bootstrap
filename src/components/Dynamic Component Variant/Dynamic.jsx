import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

const Dynamic = ({ variant }) => {
    const variantClasses = {
      primary: "bg-blue-500 text-white",
      secondary: "bg-gray-500 text-white",
      danger: "bg-red-500 text-white",
    };
  
    return (
      <button className={twMerge("px-4 py-2 rounded", variantClasses[variant])}>
        {variant} Button
      </button>
    );
  };
  Dynamic.propTypes = {
    variant: PropTypes.string, 
   
  };

export default Dynamic