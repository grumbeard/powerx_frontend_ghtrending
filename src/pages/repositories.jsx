import { RepositoryCard } from 'components/repository-card';
import { useRepositories } from 'hooks/use-repositories';
import { useLanguages } from 'hooks/use-languages';
import { useSpokenLanguages } from 'hooks/use-spoken-languages';

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
  
  return (
    <>
    <header className='py-10 text-center bg-gray-800'>
      <h1>Trending</h1>
      <p>See what the GitHub community is most excited about { DATE_RANGE[period] }</p>
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
                <RepositoryCard key={repo.url} repository={repo} />
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