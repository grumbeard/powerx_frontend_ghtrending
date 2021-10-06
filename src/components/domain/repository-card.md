RepositoryCard is a compound component utilizing `Card` and `Button` and presents a high-level overview of a `repository`.

RepositoryCard has a 'like' button that is toggled between its 'Outline' and 'Solid' variants based on the `isBookmarked` state of the `repository`.


```jsx
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';

const Demo = () => {
  const [bookmarks, setBookmarks] = useState([]);
  
  const isBookmarked = (id) => {
    const index = bookmarks.findIndex(bookmark => bookmark.id === id)
    return index >= 0;
  };
  
  const handleAddBookmark = (repo) => {
    if (!isBookmarked(repo.id)) setBookmarks(prevBookmarks => prevBookmarks.concat([repo]));
  };
  
  const handleRemoveBookmark = (repo) => {
    setBookmarks(prevBookmarks =>
      prevBookmarks.filter(bookmark => bookmark.id !== repo.id)
    );
  };
  
  
  return (
    <BrowserRouter>
      <div className='bg-black text-white p-4'>
        <RepositoryCard
          repository={{
            id: 1,
            author: 'github',
            name: 'Octocat',
            language: 'Ruby',
            langColor: 'rgb(112, 21, 22)',
            description: 'Groundbreaking new cat',
            url: 'https://github.com/octocat',
            stars: 9999,
            forks: 111,
            avatar: 'https://avatars3.githubusercontent.com/u/6811672?v=4'
          }}
          addBookmark={handleAddBookmark}
          removeBookmark={handleRemoveBookmark}
          isBookmarked={isBookmarked(1)}
        />
        
        <RepositoryCard
          repository={{
            id: 2,
            author: 'github',
            name: 'Octocrat',
            language: 'Ruby',
            langColor: 'rgb(112, 21, 22)',
            description: 'Efficiently rule an octopus empire',
            url: 'https://github.com/octocat',
            stars: 8888,
            forks: 222,
            avatar: 'https://avatars3.githubusercontent.com/u/6811672?v=4'
          }}
          addBookmark={handleAddBookmark}
          removeBookmark={handleRemoveBookmark}
          isBookmarked={isBookmarked(2)}
        />

        <RepositoryCard
          repository={{
            id: 3,
            author: 'github',
            name: 'Octocare',
            language: 'Ruby',
            langColor: 'rgb(112, 21, 22)',
            description: 'Aggregate medical advice for ruptured tentacles',
            url: 'https://github.com/octocat',
            stars: 7777,
            forks: 333,
            avatar: 'https://avatars3.githubusercontent.com/u/6811672?v=4'
          }}
          addBookmark={handleAddBookmark}
          removeBookmark={handleRemoveBookmark}
          isBookmarked={isBookmarked(3)}
        />
      </div>
    </BrowserRouter>
  );
}

<Demo />
```