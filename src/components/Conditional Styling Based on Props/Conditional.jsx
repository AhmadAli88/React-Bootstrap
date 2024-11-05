import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

const Alert = ({ type }) => {
  return (
    <div
      className={twMerge(
        'p-4 border',
        type === 'error' && 'bg-red-100 border-red-500 text-red-700',
        type === 'success' && 'bg-green-100 border-green-500 text-green-700'
      )}
    >
      {type === 'error' ? 'Error!' : 'Success!'}
    </div>
  );
};

Alert.propTypes = {
  type: PropTypes.string, // isLarge should be a boolean
};

export default Alert;
