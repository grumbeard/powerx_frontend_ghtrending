import { RepositoryCard } from "components/repository-card";
import { useLanguages } from "hooks/use-languages";
import { useRepositories } from "hooks/use-repositories";

export const Repositories = () => {
  const {
    data: repositories,
    status: repositoriesStatus,
    period,
    setPeriod,
    language,
    setLanguage,
    spokenLang,
    setSpokenLang
  } = useRepositories();
  
  const {
    data: languages,
    status: languagesStatus
  } = useLanguages();
  
  return (
    <>
    <header className='py-10 text-center bg-gray-800'>
      <h1>Trending</h1>
      <p>See what the GitHub community is most excited about today</p>
    </header>
    <div className='md:w-1/2 mx-auto mb-10 flex border border-gray-400 rounded-t-md justify-end'>
      <select
        label='Language'
        value={language}
        onChange={e => setLanguage(e.currentTarget.value)}
        name='language'
        id='language'
      >
        <option value=''>Any</option>
      {
        languages && languages.map(lang => (
          <option value={lang}>{lang}</option>
        ))
      }
      </select>
    </div>
    <div className='md:w-1/2 mx-auto mb-10 flex flex-col border border-gray-400 rounded-b-md items-stretch'>
    {
      repositories && repositories.map(repo => (
      <RepositoryCard key={repo.url} repository={repo} />
      )) 
    }
    {
      (repositoriesStatus !== 'success') && (
        <div className='text-center'>
          <h1>Loading...</h1>
        </div>
      )
    }
    </div>
    </>
  );
};