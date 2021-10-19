import cn from 'classnames';
import { Link } from 'react-router-dom';
import { Card } from 'components/presentation/card';
import { HeartFillIcon } from '@primer/octicons-react';

export const BookmarkCard = ({ bookmark, handleRemove, ...props }) => {
  const className = cn(
    'relative',
    props.className
  )
  
  return (
    <Card className={className}>
      <div>
        <Link to={`/${bookmark.author}/${bookmark.name}`}>
          <span className='line-clamp-1 underline'>{bookmark.name}</span>
        </Link>
      </div>
      <div className='text-sm flex'>
        <span className='mr-2'>by</span>
        <span className='line-clamp-1'>{bookmark.author}</span>
      </div>
      <span
        onClick={() => handleRemove(bookmark)}
        className='p-2 hover:bg-gray-700 rounded-full flex place-content-center absolute right-2 top-2'
      >
        <HeartFillIcon size={16} />
      </span>
    </Card>
  );
};
