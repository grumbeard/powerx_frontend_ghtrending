export const Bar = ({ label, value, total, ...props }) => {
  const unit = total / 12;
  const microUnit = unit / 12;
  const barLengthInUnits = Math.floor(value / unit);
  const remainingBarLengthInMicroUnits = Math.floor((value % unit) / microUnit);
  
  return (
    <div className='w-full mb-1'>
      <span className='mr-2'>{label}</span>
      <span className='text-gray-300 text-sm'>- {((value/total) * 100).toFixed(2)}%</span>
      <div className='w-full h-5 bg-gray-700 flex'>
        {Array(barLengthInUnits).fill(<span className='w-1/12 top-0 h-full bg-blue-300'></span>)}
        <span className='w-1/12 h-5 bg-gray-700 flex'>
          {Array(remainingBarLengthInMicroUnits).fill(<span className='w-1/12 top-0 h-full bg-blue-300'></span>)}
        </span>
      </div>
    </div>
  );
};