BookmarksSideBar is a compound component utilizing **`SideBar`** and **`BookmarkCard`. It displays a list of 'bookmarked' repositories.

A repository can stop being 'bookmarked' when the **`IconButton`** is clicked. Clicking on the **`name`** of the 'bookmarked' repository opens the GitHub repository in a new tab. (see **`BookmarkCard`** for more details)

When no repository is 'bookmarked', a message is displayed explaining how users can 'bookmark' a repository.

### Example of Bookmarks Sidebar Containing Bookmarks
```jsx
import { BrowserRouter } from 'react-router-dom';
import { useState, useRef } from 'react';

const DemoFilled = () => {
  
  const sideBarRef = useRef();
  const mainContentRef = useRef();
  
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
      <div className='w-full h-full text-white'>
        <main className='grid grid-cols-6 relative'>
          {bookmarks &&
            <BookmarksSideBar
              bookmarks={bookmarks}
              sideBarRef={sideBarRef}
              handleRemove={handleRemoveBookmark}
              sideBarClass='w-4/5 lg:w-full col-span-6 lg:col-span-2 bg-black h-80'
              isInitiallyExpanded={true}
            />
          }
          <div
            ref={mainContentRef}
            className='col-span-6 lg:col-span-4 h-80 bg-gray-800 text-center'
          >
            <h1 className='mt-10'>Main Content</h1>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
};

<DemoFilled />
```

### Example of an Empty Bookmarks Sidebar
```jsx
import { useState, useRef } from 'react';

const DemoEmpty = () => {
  
  const sideBarRef = useRef();
  const mainContentRef = useRef();
    
  const [bookmarks, setBookmarks] = useState([]);

  return (
    <div className='w-full h-full text-white'>
      <main className='grid grid-cols-6 relative'>
        {bookmarks &&
          <BookmarksSideBar
            bookmarks={bookmarks}
            sideBarRef={sideBarRef}
            handleRemove={() => {}}
            sideBarClass='w-4/5 lg:w-full col-span-6 lg:col-span-2 bg-black h-80'
            isInitiallyExpanded={true}
          />
        }
        <div
          ref={mainContentRef}
          className='col-span-6 lg:col-span-4 h-80 bg-gray-800 text-center'
        >
          <h1 className='mt-10'>Main Content</h1>
        </div>
      </main>
    </div>
  );
};

<DemoEmpty />
```