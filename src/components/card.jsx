import cn from "classnames"

export const Card = ({ children, ...props }) => {
  const className = cn(
    'my-2 p-5 border border-gray-700 rounded-md',
    props.className
  );
  
  return (
    <div {...props} className={className}>
      {children}
    </div>
  );
};

export const InfoCard = ({ title, children, ...props }) => {
  const className = cn(
    'border-gray-500',
    props.className
  );
  
  return (
    <Card {...props} className={className}>
      {title && (
        <div className='w-full'>
          <div className='py-2 px-10 bg-gray-500 bg-opacity-50 text-left text-lg text-center capitalize'>
            {title}
          </div>
        </div>
      )}
      <div className='w-full'>
        { children }
      </div>
    </Card>
  );
};

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
        <div className='w-full'>
          {children}
        </div>
      </div>
    </section>
  );
};