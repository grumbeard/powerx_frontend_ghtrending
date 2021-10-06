import cn from "classnames";
import { PropTypes } from 'prop-types';

export const SectionCard = ({ title, children, ...props }) => {
  const className = cn(
    'container my-10 mx-auto',
    props.className
  );
  
  const bodyClassName = cn(
    'py-5 px-10 border border-gray-700',
    `${title ? 'rounded-b-md' : 'rounded-md'}`
  );
  
  return (
    <section {...props} className={className}>
      {title && (
        <div className='py-5 px-10 border border-gray-700 rounded-t-md bg-gray-800 bg-opacity-50 text-left text-lg uppercase'>{title}</div>
      )}
      <div className={bodyClassName}>
        <div className='w-full p-2'>
          {children}
        </div>
      </div>
    </section>
  );
};

SectionCard.propTypes = {
  title: PropTypes.string
};