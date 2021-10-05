import cn from "classnames"


export const InfoCard = ({ title, children, ...props }) => {
  const className = cn(
    'my-2 p-5 items-center border border-gray-500 rounded-md',
    props.className
  );
  
  return (
    <div {...props} className={className}>
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
    </div>
  );
};

export const SectionCard = ({ title, children, ...props }) => {
  const className = cn(
    'container my-10 mx-auto',
    props.className
  );
  
  return (
    <section className={className}>
      {title && (
        <div className='py-5 px-10 border border-gray-700 rounded-t-md bg-gray-800 bg-opacity-50 text-left text-lg uppercase'>{title}</div>
      )}
      <div className='py-5 px-10 border border-gray-700 rounded-b-md'>
        <div className='w-full'>
          {children}
        </div>
      </div>
    </section>
  );
};