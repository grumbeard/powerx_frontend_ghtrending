BookmarkCard is a compound component utilizing **`Card`** and **`IconButton`**. It displays the **`author`** and **`name`** of a 'bookmarked' repository. 

A repository can stop being 'bookmarked' when the **`IconButton`** is clicked. Clicking on the **`name`** of the 'bookmarked' repository opens the GitHub repository in a new tab.


```jsx
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';

const Demo = () => {
  
  const repo1 = {
    author: 'JohnDoe',
    name: 'john.doe_repo'
  };

  const repo2 = {
    author: 'JaneDoe',
    name: 'jane.doe_repo'
  };
    
  const [bookmarks, setBookmarks] = useState([repo1, repo2]);

  const handleRemoveBookmark = (repo) => {
    setBookmarks(prevBookmarks =>
      prevBookmarks.filter(bookmark =>
        (bookmark.id && repo.id && (bookmark.id !== repo.id))
          || ((bookmark.author !== repo.author) && (bookmark.name !== repo.name))
      )
    );
  };

  return (
    <BrowserRouter>
      <div className='bg-black text-white p-4'>
        {bookmarks && bookmarks.map(bookmark => 
          <BookmarkCard
            key={`${bookmark.author}/${bookmark.name}`}
            bookmark={bookmark}
            handleRemove={() => handleRemoveBookmark(bookmark)}
          />
        )}
      </div>
    </BrowserRouter>
  );
};

<Demo />
```