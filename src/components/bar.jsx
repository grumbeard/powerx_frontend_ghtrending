export const Bar = ({ label, value, total, ...props }) => {
  const unit = total / 12;
  const microUnit = unit / 12;
  const barLengthInUnits = Math.floor(value / unit);
  const remainingBarLengthInMicroUnits = Math.floor((value % unit) / microUnit);
  
  return (
    <div className='w-full mb-1'>
      <span className='mr-2'>{label}</span>
      <span className='text-gray-300 text-sm'>- {((value/total) * 100).toFixed(2)}%</span>
      <div className='w-full h-5 bg-gray-700 flex relative' data-tooltip={`${value} lines of code`}>
        {[...Array(barLengthInUnits).keys()]
          .map(key => 
            <span
              key={`${label}-unit-${key}`}
              className='w-1/12 top-0 h-full bg-blue-300'
            />
        )}
        <span className='w-1/12 h-5 bg-gray-700 flex'>
          {[...Array(remainingBarLengthInMicroUnits).keys()]
            .map(key =>
              <span
                key={`${label}-microunit-${key}`}
                className='w-1/12 top-0 h-full bg-blue-300'
              />
          )}
        </span>
      </div>
    </div>
  );
};