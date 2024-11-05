import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";

// Custom hook to merge base and additional classes
const useMergedClasses = (baseClasses, additionalClasses) => {
  return twMerge(baseClasses, additionalClasses);
};

// CustomComponent that uses the merged classes
const CustomComponent = ({ isActive }) => {
  const classes = useMergedClasses(
    "text-lg font-semibold",             // base classes
    isActive ? "text-blue-600" : "text-gray-500"  // conditional classes based on isActive
  );

  return <div className={classes}>Custom Component</div>;
};

CustomComponent.propTypes = {
  isActive: PropTypes.bool,
};

export default CustomComponent;
