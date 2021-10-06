import cn from "classnames";
import { PropTypes } from 'prop-types';

const classByColor = {
  gray: 'border-gray-700',
  red: 'border-red-900'
};

export const Card = ({ color='gray', children, ...props }) => {
  const className = cn(
    'my-2 p-5 border rounded-md',
    classByColor[color],
    props.className
  );
  
  return (
    <div {...props} className={className}>
      {children}
    </div>
  );
};

Card.propTypes = {
  color: PropTypes.oneOf(['gray', 'red'])
};