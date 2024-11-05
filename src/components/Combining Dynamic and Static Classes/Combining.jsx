// import PropTypes from 'prop-types';
// import { twMerge } from 'tailwind-merge';

// const DynamicPaddingBox = ({ paddingSize }) => {
//   const isCustomSize = !["0", "1", "2", "3", "4", "5", "6", "8", "10", "12", "16", "20", "24", "32", "40", "48", "56", "64"].includes(paddingSize);

//   return (
//     <div
//       className={twMerge("bg-gray-100", isCustomSize ? "" : `p-${paddingSize}`)}
//       style={isCustomSize ? { padding: paddingSize } : {}}
//     >
//       Content with dynamic padding
//     </div>
//   );
// };

// DynamicPaddingBox.propTypes = {
//   paddingSize: PropTypes.string,
// };

// export default DynamicPaddingBox;


import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

const DynamicPaddingBox = ({ paddingSize }) => {
  return (
    <div className={twMerge("bg-gray-100", `p-${paddingSize}`)}>
      Content with dynamic padding
    </div>
  );
};

DynamicPaddingBox.propTypes = {
  paddingSize: PropTypes.oneOf([
    "0", "1", "2", "3", "4", "5", "6", "8", "10", "12", "16", "20", "24", "32", "40", "48", "56", "72"
  ]).isRequired,  // Ensure the value aligns with Tailwind's padding scale
};

export default DynamicPaddingBox;
