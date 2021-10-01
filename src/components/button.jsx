import classNames from "classnames";

const classByColor = {
  gray: "bg-gray-100 text-gray-800",
  green: "bg-green-100 text-green-800"
}


export const Button = ({color, ...props}) => {
  const className = classNames(
    "inline-flex items-center px-2.5 py-0.5 rounded-sm font-medium",
    color && classByColor[color],
    props.className
  );
  return(
    <div role="button" {...props} className={className} />
  );
};