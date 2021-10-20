/* Bookmarks Side Bar */
import { SideBar } from 'components/presentation/sidebar';
import { BookmarkCard } from './bookmark-card';
import { HeartFillIcon } from '@primer/octicons-react';

export const BookmarksSideBar = ({
  bookmarks,
  sideBarRef,
  handleRemove,
  sideBarClass,
  bookmarkCardClass
}) => {

  return (
    <SideBar
    ref={sideBarRef}
    className={sideBarClass}
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