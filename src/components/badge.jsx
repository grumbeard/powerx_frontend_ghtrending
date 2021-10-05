import classNames from "classnames";

const classByColor = {
  gray: "bg-gray-100 text-gray-800",
  green: "bg-green-100 text-green-800",
  yellow: "bg-yellow-100 text-yellow-800",
  red: "bg-red-100 text-red-800",
  'white-outline': "border border-white text-white"
}


export const Badge = ({color, ...props}) => {
  const className = classNames(
    "inline-flex items-center px-2.5 py-0.5 mr-2 rounded-full text-xs font-medium",
    color && classByColor[color],
    props.className
  );
  return(
    <span {...props} className={className} />
  );
};