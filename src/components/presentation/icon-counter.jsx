import cn from "classnames";
import { PropTypes } from 'prop-types';

export const IconCounter = ({icon, iconClass, value, valueClass, ...props}) => {
  const className = cn(
    'p-4 flex justify-center items-center',
    props.className
  );
  
  const iconClassName = cn(
    'mr-2',
    iconClass
  );
  
  return (
    <div className={className}>
      <span className={iconClassName}>{icon}</span>
      <span className={valueClass}>{value}</span>
    </div>
  );
};

IconCounter.propTypes = {
  icon: PropTypes.element.isRequired,
  iconClass: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  valueClass: PropTypes.string
};