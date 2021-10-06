import { PropTypes } from 'prop-types';

function getPercentage(num) {
  return Number.isInteger(num)
    ? num
    : num.toFixed(2);
}

export const Bar = ({ label, value, total, hoverInfo, ...props }) => {
  const unit = total / 12;
  const microUnit = unit / 12;
  const barLengthInUnits = Math.floor(value / unit);
  const remainingBarLengthInMicroUnits = Math.ceil((value % unit) / microUnit);
  
  return (
    <div {...props} className='w-full mb-1'>
      {label && 
        <>
        <span className='mr-2'>{label}</span>
        <span className='text-gray-300 text-sm'> --- </span>
        </>
      }
      <span className='text-gray-300 text-sm'>{getPercentage((value/total) * 100)}%</span>
      <div className='w-full h-5 bg-gray-700 flex relative' data-tooltip={hoverInfo}>
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

Bar.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  hoverInfo: PropTypes.string
};