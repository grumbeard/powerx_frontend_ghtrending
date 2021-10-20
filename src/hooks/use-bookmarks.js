import { useEffect, useState } from "react";

export const useBookmarks = () => {
  const [bookmarks, setBookmarks] = useState([]);
  
  const isBookmarked = (repo) => {
    const index = bookmarks.findIndex(bookmark =>
      (bookmark.id && repo.id && (bookmark.id === repo.id))
        || ((bookmark.author === repo.author) && (bookmark.name === repo.name))
    );
    return index >= 0;
  };
  
  const handleAddBookmark = (repo) => {
    if (!isBookmarked(repo)) setBookmarks(prevBookmarks => prevBookmarks.concat([repo]));
  };
  
  const handleRemoveBookmark = (repo) => {
    setBookmarks(prevBookmarks =>
      prevBookmarks.filter(bookmark =>
        (bookmark.id && repo.id && (bookmark.id !== repo.id))
          || ((bookmark.author !== repo.author) && (bookmark.name !== repo.name))
      )
    );
  };
  
  useEffect(() => {
    const storedBookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    if (storedBookmarks) setBookmarks(storedBookmarks);
  }, []);
  
  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);
  
  return {
    bookmarks,
    setBookmarks,
    isBookmarked,
    handleAddBookmark,
    handleRemoveBookmark
  };
};