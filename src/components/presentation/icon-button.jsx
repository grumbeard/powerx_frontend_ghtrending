import cn from "classnames";
import { Link } from "react-router-dom";
import { PropTypes } from 'prop-types';

export const IconButton = ({onClick, icon, link, color='gray', ...props}) => {
  const classByColor = {
    gray: "hover:bg-gray-700 text-white"
  }
  
  const className = cn(
    'mx-2 p-2 hover:bg-opacity-25 cursor-pointer rounded-full flex place-content-center',
    classByColor[color],
    props.className
  );
  
  let wrapperClass = className;
  
  let linkedIcon;
  if (link) {
    const linkClass = className;
    wrapperClass = '';
    linkedIcon = (typeof link === 'string')
      ? <Link to={link} className={linkClass}>{icon}</Link>
      : <Link to={link} target='_blank' className={linkClass}>{icon}</Link>;
  }
  
  return (
    <span
      {...props}
      onClick={onClick}
      className={wrapperClass}
    >
      {link
        ? linkedIcon
        : icon
      }
    </span>
  );
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  icon: PropTypes.element.isRequired,
  link: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      pathname: PropTypes.string.isRequired
    })
  ]),
  color: PropTypes.oneOf(['gray'])
}