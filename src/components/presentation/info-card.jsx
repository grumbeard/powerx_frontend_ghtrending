import cn from "classnames";
import { PropTypes } from 'prop-types';
import { Card } from './card';

const classByColor = {
  gray: 'bg-gray-500',
  red: 'bg-red-500 text-red-900'
}

export const InfoCard = ({ title, children, color, ...props }) => {
  const className = cn(
    'border-gray-500',
    props.className
  );
  
  const titleSectionClassName = cn(
    'py-2 px-10 bg-opacity-50 text-left text-lg text-center capitalize',
    color ? classByColor[color] : classByColor['gray']
  );
  
  return (
    <Card {...props} className={className} color={color}>
      {title && (
        <div className='w-full'>
          <div className={titleSectionClassName}>
            {title}
          </div>
        </div>
      )}
      <div className='w-full py-2 px-10'>
        { children }
      </div>
    </Card>
  );
};

InfoCard.propTypes = {
  /**
     * Color defaults to 'gray' (see Card component)
     */
  color: PropTypes.oneOf(['gray', 'red']),
  /**
     * If title is not provided, Card component should be used instead
     */
  title: PropTypes.string.isRequired
};