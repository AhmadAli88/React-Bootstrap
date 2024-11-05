import { twMerge } from "tailwind-merge";
import styles from "./Button.module.css";
import PropTypes from "prop-types";

const Conditional = ({ isPrimary }) => {
  return (
    <button
      className={twMerge(
        "px-4 py-2 rounded",                    // Tailwind classes
        isPrimary ? "bg-blue-500 text-white" : "bg-gray-300 text-black",
        styles.Myfontsize                       // CSS module class
      )}
    >
      Custom Button
    </button>
  );
};
Conditional.propTypes = {
    isPrimary: PropTypes.bool, 
   
  };
export default Conditional;
