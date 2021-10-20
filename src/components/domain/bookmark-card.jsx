import cn from 'classnames';
import { Link } from 'react-router-dom';
import { Card } from 'components/presentation/card';
import { IconButton } from 'components/presentation/icon-button';
import { HeartFillIcon } from '@primer/octicons-react';
import { PropTypes } from 'prop-types';

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
      <IconButton
        onClick={() => handleRemove(bookmark)}
        icon={<HeartFillIcon size={16} />}
        className='absolute right-2 top-2 hover:bg-opacity-50'
      />
    </Card>
  );
};

BookmarkCard.propTypes = {
  bookmark: PropTypes.shape({
    author: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  handleRemove: PropTypes.func.isRequired,
};