import { EyeIcon, RepoForkedIcon, LogoGithubIcon, MentionIcon, StarIcon, LinkIcon, PeopleIcon } from '@primer/octicons-react';
import { Badge } from 'components/badge';
import { Button } from 'components/button';
import { Bar } from 'components/bar';
import { useRepository } from 'hooks/use-repositories';
import { useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const createBarChart = (dict) => {
  const total = Object.values(dict).reduce((a,b) => Number(a) + Number(b));
  return Object.keys(dict).map(key => <Bar label={key} value={Number(dict[key])} total={total} />)
};

export const Repository = () => {
  
  const { name: repoName, author: repoAuthor } = useParams();
  const [cloneSSH, setCloneSSH] = useState(true);
  
  const { data, status } = useRepository(repoName, repoAuthor);
  
  const {
    repository: repo,
    owner,
    organization: org,
    contributors,
    subscribers,
    languages
  } = { ...data };

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
                  <Link to={{ pathname: repo.html_url}} target='_blank'>
                    <p className='text-4xl mb-5 underline'>{repo.full_name}</p>
                  </Link>
                </div>
                <div className='my-2'>
                  <p>{repo.description}</p>
                  {repo.homepage && (
                    <Link to={{ pathname: repo.homepage}} target='_blank'>
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
              <div className='grid grid-cols-3 my-2 pb-5 px-5 col-span-1 items-center border border-gray-500 rounded-md'>
                <div className='col-span-3'>
                  <div className='py-2 px-10 bg-gray-500 bg-opacity-50 text-left text-lg text-center capitalize'>owner</div>
                </div>
                <div className='col-span-1'>
                  <img
                    src={repo.owner.avatar_url}
                    alt='author avatar'
                    className="object-contain rounded-full inline-block"
                    title={owner.name || repo.owner.login}
                  />
                </div>
                <div className='col-span-2'>
                  <div className='py-2 px-10'>
                    <div className='underline'>
                      <Link to={{ pathname: repo.owner.html_url}} target='_blank'>
                        <LogoGithubIcon size={16} className='mr-2' />{repo.owner.login}
                      </Link>
                    </div>
                    {owner.blog && (
                      <div>
                        <LinkIcon size={16} className='mr-2' />
                        <Link to={{ pathname: owner.blog}} target='_blank'>
                          {owner.blog}
                        </Link>
                      </div>
                    )}
                    {owner.twitter_username && (
                      <div>
                        <MentionIcon size={16} className='mr-2' />
                        <Link to={{ pathname: owner.twitter_username}} target='_blank'>
                          {owner.twitter_username}
                        </Link>
                      </div>
                    )}
                    {owner && (owner.followers >= 0) && (
                      <div className='underline'>
                        <PeopleIcon size={16} className='mr-2' />
                        <Link to={{ pathname: owner.followers_url}} target='_blank'>
                          {owner.followers}
                        </Link>
                      </div>
                    )}
                    {owner.bio && (
                      <div className='p-2'>
                        <div className='underline capitalize'>bio</div>
                        <div className='text-center'>{owner.bio}</div>
                      </div>
                    )}
                    <div className='py-4'>
                      Repository created by {owner.name || repo.owner.login} in {new Date(repo.created_at).getFullYear()}.
                    </div>
                  </div>
                </div>
              </div>
              {repo.organization && (repo.owner.type !== 'Organization') && (
                <div className='grid grid-cols-3 my-2 pb-5 px-5 col-span-1 items-center border border-gray-500 rounded-md'>
                  <div className='col-span-3'>
                    <div className='py-2 px-10 bg-gray-500 bg-opacity-50 text-left text-lg text-center capitalize'>organization</div>
                  </div>
                  <div className='col-span-1'>
                    <img
                      src={repo.organization.avatar_url}
                      alt='author avatar'
                      className="object-contain rounded-full inline-block"
                      title={org.name || repo.organization.login}  
                    />
                  </div>
                  <div className='col-span-2'>
                    <div className='py-2 px-10'>
                      <span className='underline'>
                        <Link to={{ pathname: repo.organization.html_url}} target='_blank'>
                          @{repo.organization.login}
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              )}
              {contributors && (
                <div className='my-2 p-5 col-span-1 items-center border border-gray-500 rounded-md'>
                  <div className='w-full'>
                    <div className='py-2 px-10 bg-gray-500 bg-opacity-50 text-left text-lg text-center capitalize'>contributors</div>
                  </div>
                  <div className='w-full'>
                    <div className='grid grid-cols-6 py-2 px-10 gap-2'>
                      { contributors.map(contributor => (
                          <span className='col-span-1 mx-auto' key={contributor.id}>
                            <Link to={{ pathname: contributor.html_url}} target='_blank'>
                              <img
                                src={contributor.avatar_url}
                                alt='contributor avatar'
                                className="w-10 h-10 rounded-full inline-block"
                                title={`${contributor.login}: ${contributor.contributions} contributions`}
                              />
                            </Link>
                          </span>
                        ))
                      }
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
            <div className='grid grid-cols-2 w-full'>
              {subscribers && (
                <div className='my-2 p-5 col-span-1 items-center border border-gray-500 rounded-md'>
                  <div className='w-full'>
                    <div className='py-2 px-10 bg-gray-500 bg-opacity-50 text-left text-lg text-center capitalize'>subscribers</div>
                  </div>
                  <div className='w-full'>
                    <div className='grid grid-cols-6 py-2 px-10 gap-2'>
                      { subscribers.map(subscriber => (
                          <span className='col-span-1 mx-auto' key={subscriber.id}>
                            <Link to={{ pathname: subscriber.html_url}} target='_blank'>
                              <img
                                src={subscriber.avatar_url}
                                alt='subscriber avatar'
                                className="w-10 h-10 rounded-full inline-block"
                                title={subscriber.login}
                              />
                            </Link>
                          </span>
                        ))
                      }
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
        <section className='container my-10 mx-auto'>
          <div className='py-5 px-10 border border-gray-700 rounded-t-md bg-gray-800 bg-opacity-50 text-left text-lg uppercase'>how it's made</div>
          <div className='py-5 px-10 border border-gray-700 rounded-b-md'>
            <div className='my-2 flex flex-col'>
              {languages && createBarChart(languages)}
            </div>
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
        (status !== 'success') && (
          <div><h1>Loading...</h1></div>
        )
      }
    </>
  );
};