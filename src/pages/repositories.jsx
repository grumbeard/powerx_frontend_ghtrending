import { RepositoryCard } from "components/repository-card";
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
  
  return (
    <>
    <header className="py-10 text-center bg-gray-800">
      <h1>Trending</h1>
      <p>See what the GitHub community is most excited about today</p>
    </header>
    <div className="md:w-1/2 mx-auto my-10 flex flex-col border border-gray-400 rounded-md items-stretch">
    {
      repositories && repositories.map(repo => (
      <RepositoryCard key={repo.url} repository={repo} />
      )) 
    }
    {
      (repositoriesStatus !== 'success') && (
        <div className="text-center">
          <h1>Loading...</h1>
        </div>
      )
    }
    </div>
    </>
  );
};