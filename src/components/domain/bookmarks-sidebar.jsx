/* Bookmarks Side Bar */
import { SideBar } from 'components/presentation/sidebar';
import { BookmarkCard } from './bookmark-card';
import { HeartFillIcon } from '@primer/octicons-react';
import { PropTypes } from 'prop-types';

export const BookmarksSideBar = ({
  bookmarks,
  sideBarRef,
  handleRemove,
  sideBarClass,
  bookmarkCardClass,
  isInitiallyExpanded
}) => {

  return (
    <SideBar
      ref={sideBarRef}
      className={sideBarClass}
      isInitiallyExpanded={isInitiallyExpanded}
    >
    {bookmarks && (bookmarks.length !== 0) && bookmarks.map(bookmark => 
      <BookmarkCard
        key={`${bookmark.author}-${bookmark.name}`}
        handleRemove={handleRemove}
        bookmark={bookmark}
        className={bookmarkCardClass}
      />
    )}
    {(!bookmarks || (bookmarks.length === 0)) && (
      <div className='mt-10 text-xl text-center text-gray-500'>
        <span className='mr-2'>Save your favourite repositories by clicking on</span>
        <HeartFillIcon size={16} />
      </div>
    )}
    </SideBar>
  );
};

BookmarksSideBar.propTypes = {
  bookmarks: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
  })).isRequired,
  sideBarRef: PropTypes.object.isRequired,
  handleRemove: PropTypes.func.isRequired,
  sideBarClass: PropTypes.string,
  bookmarkCardClass: PropTypes.string
};