import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

const ResponsiveBox = ({ isLarge }) => {
    return (
      <div
        className={twMerge(
          "p-4 md:p-6 lg:p-8",         // default responsive padding
          isLarge && "md:p-10 lg:p-12" // override padding on larger screens if `isLarge` is true
        )}
      >
        Responsive Content
      </div>
    );
  };
  ResponsiveBox.propTypes = {
    isLarge: PropTypes.bool, 
   
  };
export default ResponsiveBox