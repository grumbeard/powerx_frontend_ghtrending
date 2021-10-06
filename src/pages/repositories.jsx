import { RepositoryCard } from 'components/repository-card';
import { useRepositories } from 'hooks/use-repositories';
import { useLanguages } from 'hooks/use-languages';
import { useSpokenLanguages } from 'hooks/use-spoken-languages';
import { useBookmarks } from 'hooks/use-bookmarks';

function filterDuplicates(data) {
  return [...new Set(data)];
}

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
  
  const DATE_RANGE = {
    daily: 'today',
    weekly: 'this week',
    monthly: 'this month'
  };
  
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
  
  return (
    <>
    <header className='py-10 text-center bg-gray-800'>
      <h1>Trending</h1>
      <p>See what the GitHub community is most excited about { DATE_RANGE[period] }</p>
      {bookmarks && (bookmarks.length !== 0) && bookmarks.map(bookmark => 
        <div key={`${bookmark.author}-${bookmark.name}`}>
          <span>{bookmark.id}</span>
          <span>{bookmark.author}</span>
          <span>{bookmark.name}</span>
        </div>
      )}
    </header>
    <div className='md:w-3/5 mx-auto mt-10 flex border border-gray-400 rounded-t-md justify-end items-center bg-gray-800 bg-opacity-50'>
      {/* Spoken Language Selector */}
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
      {/* Period Selector */}
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
      {/* Language Selector */}
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
    <div className='md:w-3/5 mx-auto mb-10 flex flex-col border border-gray-400 rounded-b-md items-stretch'>
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
          <div className='m-10 text-center'>
            <h1>Loading...</h1>
          </div>
        )
      }
    </div>
    </>
  );
};