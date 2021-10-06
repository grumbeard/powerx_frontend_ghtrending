import { useEffect, useState } from "react";

export const useBookmarks = () => {
  const [bookmarks, setBookmarks] = useState([]);
  
  useEffect(() => {
    const storedBookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    if (storedBookmarks) setBookmarks(storedBookmarks);
  }, []);
  
  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);
  
  return {
    bookmarks,
    setBookmarks
  };
};