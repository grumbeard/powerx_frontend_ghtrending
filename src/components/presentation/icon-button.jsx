import cn from "classnames";
import { Link } from "react-router-dom";

export const IconButton = ({onClick, icon, link, color='gray', ...props}) => {
  const classByColor = {
    gray: "hover:bg-gray-700 text-white"
  }
  
  const className = cn(
    'mx-2 p-2 hover:bg-opacity-25 hover:cursor-pointer rounded-full flex place-content-center',
    classByColor[color],
    props.className
  );
  
  let linkedIcon;
  if (link) {
    linkedIcon = (typeof link === 'string')
      ? <Link to={link}>{icon}</Link>
      : <Link to={link} target='_blank'>{icon}</Link>;
  }
  
  return (
    <span
      {...props}
      onClick={onClick}
      className={className}
    >
      {link
        ? linkedIcon
        : icon
      }
    </span>
  );
};