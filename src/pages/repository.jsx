import { EyeIcon, RepoForkedIcon, RocketIcon, StarIcon } from '@primer/octicons-react';
import { Badge } from 'components/badge';
import { Button } from 'components/button';
import { useRepository } from 'hooks/use-repositories';
import { useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

export const Repository = () => {
  
  const { name: repoName, author: repoAuthor } = useParams();
  const [cloneSSH, setCloneSSH] = useState(true);
  
  const {
    data: repo,
    status: repoStatus
  } = useRepository(repoName, repoAuthor);

  return (
    <>
      <header className='py-10 text-center bg-gray-800'>
        <h1>{repoName}</h1>
      </header>
      {repo && (
        <>
        <section className='container my-10 mx-auto'>
          <div className='py-5 px-10 border border-gray-700 rounded-b-md'>
            <div className='my-2 flex'>
              <div className='flex-grow'>
                <div className='my-2'>
                  <Link to={repo.html_url}><p className='text-4xl mb-5 underline'>{repo.full_name}</p></Link>
                </div>
                <div className='my-2'>
                  <p>{repo.description}</p>
                  {repo.homepage && (
                    <Link to={repo.homepage}>
                      <p className='underline'>{repo.homepage}</p>
                    </Link>
                  )}
                </div>
                <div className='my-2'>
                  {repo.archived && <Badge color='gray'>archived</Badge>}
                  {repo.allow_forking
                    ? <Badge color='green'>forkable</Badge>
                    : <Badge color='gray'>not forkable</Badge>
                  }
                  {(repo.open_issues_count === 0) && <Badge color='green'>zero open issues</Badge>}
                  {repo.fork && <Badge color='yellow'>forked project</Badge>}
                  {repo.license && <Badge color='white-outline'>{repo.license.name}</Badge>}
                </div>
              </div>
              <div className='grid grid-cols-3 my-2 h-24'>
                <div className='px-4 my-4 w-32 flex items-center justify-around border rounded-l-md'><StarIcon size={32} /> {repo.stargazers_count || 0}</div>
                <div className='px-4 my-4 w-32 flex items-center justify-around border'><RepoForkedIcon size={32} /> {repo.forks_count || 0}</div>
                <div className='px-4 my-4 w-32 flex items-center justify-around border rounded-r-md'><EyeIcon size={32} /> {repo.watchers_count || 0}</div>
              </div>
            </div>
            <div className='my-2 flex items-center'>
              {cloneSSH
                ? <p className='flex-grow m-5 p-2 border border-gray-500 rounded-sm'>SSH: 
                    <code className='bg-gray-500 bg-opacity-50 ml-10 p-2'>git clone {repo.ssh_url}</code>
                  </p> 
                : <p className='flex-grow m-5 p-2 border border-gray-500 rounded-sm'>HTTPS: 
                    <code className='bg-gray-500 bg-opacity-50 ml-10 p-2'>git clone {repo.clone_url}</code>
                  </p>
              }
              <Button
                onClick={() => setCloneSSH(!cloneSSH)}
                color='gray'
                className='transition duration-300 ease-out hover:bg-pink-500 hover:text-white'
              >
                {cloneSSH ? 'SSH' : 'HTTPS'}
              </Button>
            </div>
          </div>
        </section>
        <section className='container my-10 mx-auto'>
          <div className='py-5 px-10 border border-gray-700 rounded-t-md bg-gray-800 bg-opacity-50 text-left text-lg uppercase'>who made it</div>
          <div className='py-5 px-10 border border-gray-700 rounded-b-md'>
            <div className='grid grid-cols-2 w-full'>
              <div className='grid grid-cols-3 my-2 p-5 col-span-1 items-center border border-gray-700 rounded-md'>
                <div className='col-span-1'>
                  <img src={repo.owner.avatar_url} alt='author avatar' className="object-contain rounded-full inline-block" />
                </div>
                <div className='col-span-2 h-full flex flex-col items-stretch'>
                  <div className='py-2 px-10 bg-gray-500 bg-opacity-50 text-left text-lg text-center capitalize'>owner</div>
                  <div className='py-2 px-10'>
                    <span className='underline'><Link to={repo.owner.html_url}>@{repo.owner.login}</Link></span>
                  </div>
                </div>
              </div>
              {repo.organization && (repo.owner.type !== 'Organization') && (
                <div className='grid grid-cols-3 my-2 p-5 col-span-1 items-center border border-gray-700 rounded-md'>
                  <div className='col-span-1'>
                    <img src={repo.organization.avatar_url} alt='author avatar' className="object-contain rounded-full inline-block" />
                  </div>
                  <div className='col-span-2 h-full flex flex-col items-stretch'>
                    <div className='py-2 px-10 bg-gray-500 bg-opacity-50 text-left text-lg text-center capitalize'>organization</div>
                    <div className='py-2 px-10'>
                      <span className='underline'><Link to={repo.organization.html_url}>@{repo.organization.login}</Link></span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
        <section className='container my-10 mx-auto'>
          <div className='py-5 px-10 border border-gray-700 rounded-t-md bg-gray-800 bg-opacity-50 text-left text-lg uppercase'>who likes it</div>
          <div className='py-5 px-10 border border-gray-700 rounded-b-md'>
            <div className='my-2 flex'></div>
          </div>
        </section>
        <section className='container my-10 mx-auto'>
          <div className='py-5 px-10 border border-gray-700 rounded-t-md bg-gray-800 bg-opacity-50 text-left text-lg uppercase'>how it's made</div>
          <div className='py-5 px-10 border border-gray-700 rounded-b-md'>
            <div className='my-2 flex'></div>
          </div>
        </section>
        <section className='container my-10 mx-auto'>
          <div className='py-5 px-10 border border-gray-700 rounded-t-md bg-gray-800 bg-opacity-50 text-left text-lg uppercase'>where it's at</div>
          <div className='py-5 px-10 border border-gray-700 rounded-b-md'>
            <div className='my-2 flex'></div>
          </div>
        </section>
        </>
      )}
      {
        (repoStatus !== 'success') && (
          <div><h1>Loading...</h1></div>
        )
      }
    </>
  );
};