import { RepositoryCard } from 'components/domain/repository-card';
import { useRepositories } from 'hooks/use-repositories';
import { useLanguages } from 'hooks/use-languages';
import { useSpokenLanguages } from 'hooks/use-spoken-languages';
import { useBookmarks } from 'hooks/use-bookmarks';
import { Card } from 'components/presentation/card';
import { ThreeBarsIcon, XIcon, HeartFillIcon } from '@primer/octicons-react';
import { SideBar } from 'components/presentation/sidebar';
import { SideBarToggle } from 'components/presentation/sidebar-toggle';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

function filterDuplicates(data) {
  return [...new Set(data)];
}

const DATE_RANGE = {
  daily: 'today',
  weekly: 'this week',
  monthly: 'this month'
};

export const Repositories = () => {
  
  const {
    data: repositories,
    status: repositoriesStatus,
    period,
    setPeriod,
    language,
    setLanguage,
    spokenLanguage,
    setSpokenLanguage
  } = useRepositories();
  
  const { bookmarks, setBookmarks } = useBookmarks();
  const {
    data: languages
  } = useLanguages();
  
  const {
    data: spokenLanguages
  } = useSpokenLanguages();
  
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
  
  const sideBarRef = useRef();
  const mainContentRef = useRef();
  
  return (
    <>
    <header className='py-10 text-center bg-gray-800'>
      <h1>Trending</h1>
      <p>See what the GitHub community is most excited about { DATE_RANGE[period] }</p>
    </header>
    <main className='grid grid-cols-6 relative'>
      {/* Bookmarks Side Bar */}
      <SideBar
        ref={sideBarRef}
        className='w-4/5 lg:w-full col-span-6 lg:col-span-1 bg-black'
      >
        {bookmarks && (bookmarks.length !== 0) && bookmarks.map(bookmark => 
          <Card key={`${bookmark.author}-${bookmark.name}`} className='relative'>
            <div>
              <Link to={`/${bookmark.author}/${bookmark.name}`}>
                <span className='line-clamp-1 underline'>{bookmark.name}</span>
              </Link>
            </div>
            <div className='text-sm flex'>
              <span className='mr-2'>by</span>
              <span className='line-clamp-1'>{bookmark.author}</span>
            </div>
            <span onClick={() => handleRemoveBookmark(bookmark)} className='p-2 hover:bg-gray-700 rounded-full flex place-content-center absolute right-2 top-2'>
              <HeartFillIcon size={16} />
            </span>
          </Card>
        )}
        {(!bookmarks || (bookmarks.length === 0)) && (
          <div className='mt-10 text-xl text-center text-gray-500'>
            <span className='mr-2'>Save your favourite repositories by clicking on</span>
            <HeartFillIcon size={16} />
          </div>
        )}
      </SideBar>
      {/* Main Content Area */}
      <section className='col-span-6' ref={mainContentRef}>
        <div className='w-4/5 mx-auto mt-10 flex flex-col lg:flex-row justify-end items-center border border-gray-400 rounded-t-md bg-gray-800 bg-opacity-50'>
          {/* Spoken Language Selector */}
          <div className='flex justify-end items-center'>
            <label htmlFor='spoken-language'>Spoken Language</label>
            <select
              className='appearance-none border-0 bg-transparent w-48 text-sm focus:outline-none focus:ring-0'
              value={spokenLanguage}
              onChange={e => setSpokenLanguage(e.currentTarget.value)}
              name='spoken-language'
              id='spoken-language'
            >
              <option value=''>Any</option>
              {
                spokenLanguages && spokenLanguages.map(lang => (
                  <option value={lang.code} key={lang.language}>{lang.language}</option>
                ))
              }
            </select>
          </div>
          {/* Period Selector */}
          <div className='flex justify-end items-center'>
            <label htmlFor='period'>Date range</label>
            <select
              className='appearance-none border-0 bg-transparent w-36 text-sm focus:outline-none focus:ring-0'
              value={period}
              onChange={e => setPeriod(e.currentTarget.value)}
              name='period'
              id='period'
            >
              {
                Object.keys(DATE_RANGE).map(range => 
                  <option value={range} key={range}>{DATE_RANGE[range]}</option>
                )
              }
            </select>
          </div>
          {/* Language Selector */}
          <div className='flex justify-end items-center'>
            <label htmlFor='language'>Language</label>
            <select
              className='appearance-none border-0 bg-transparent w-48 text-sm focus:outline-none focus:ring-0'
              value={language}
              onChange={e => setLanguage(e.currentTarget.value)}
              name='language'
              id='language'
            >
              <option value=''>Any</option>
              {
                languages && filterDuplicates(languages).map(lang => (
                  <option value={lang} key={lang}>{lang}</option>
                ))
              }
            </select>
          </div>
        </div>
        <div className='w-4/5 mx-auto mb-10 p-5 flex flex-col border border-gray-400 rounded-b-md items-stretch'>
          {/* Results */}
          {
            repositories && (
              repositories.length > 0 
                ? repositories.map(repo => (
                    <RepositoryCard
                      key={repo.url}
                      repository={repo}
                      addBookmark={handleAddBookmark}
                      removeBookmark={handleRemoveBookmark}
                      isBookmarked={isBookmarked(repo)}
                    />
                  ))
                : <div className='m-10 text-center'><h1>No repositories trending for these filters...</h1></div>
            )
          }
          {
            (repositoriesStatus !== 'success') && (
              <div className='text-center text-4xl m-10'>
                <p>Loading...</p>
              </div>
            )
          }
        </div>
      </section>
      {/* Side Bar Toggle */}
      <SideBarToggle
        isInitiallyExpanded={false}
        sideBarRef={sideBarRef}
        sideBarClassOnToggle='hidden'
        mainContentRef={mainContentRef}
        mainContentClassOnToggle='lg:col-span-5'
        toggleIconExpanded={<XIcon size={24} />}
        toggleIconClosed={<ThreeBarsIcon size={24} />}
        toggleLabel='menu'
        className='absolute left-2 top-2'
      />
    </main>
    </>
  );
};