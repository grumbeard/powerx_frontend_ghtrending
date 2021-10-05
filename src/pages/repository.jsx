import { useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useRepository } from 'hooks/use-repositories';
<<<<<<< HEAD
import { EyeIcon, RepoForkedIcon, RocketIcon, StarIcon } from '@primer/octicons-react';
import { Badge } from 'components/badge';
import { Button } from 'components/button';
import { Bar } from 'components/bar';
import { Card, InfoCard, SectionCard } from 'components/card';
import { IssueCard } from 'components/issue-card';
import { EntityCard } from 'components/entity-card';
import { styleTextWithComments } from 'lib/style-text-with-comments';
=======
import { EyeIcon, RepoForkedIcon, LogoGithubIcon, MentionIcon, StarIcon, LinkIcon, PeopleIcon } from '@primer/octicons-react';
import { Badge } from 'components/badge';
import { Button } from 'components/button';
import { Bar } from 'components/bar';
import { InfoCard, SectionCard } from 'components/card';
import { IssueCard } from 'components/issue-card';
import { EntityCard } from 'components/entity-card';
>>>>>>> 5d1d89fea417f40bf6276d9ca798a713e1fcaa05

const createBarChart = (dict) => {
  const total = Object.values(dict).reduce((a,b) => Number(a) + Number(b));
  return Object.keys(dict).map(key => 
    <Bar key={key} label={key} value={Number(dict[key])} total={total} />
  );
};

export const Repository = () => {
  
  const { name: repoName, author: repoAuthor } = useParams();
  const [cloneSSH, setCloneSSH] = useState(true);
  const [openIssue, setOpenIssue] = useState(null);
  
  const { data, status } = useRepository(repoName, repoAuthor);
  
  const {
    repository: repo,
    owner,
    organization: org,
    contributors,
    subscribers,
    languages,
<<<<<<< HEAD
    issues,
    releases
=======
    issues
>>>>>>> 5d1d89fea417f40bf6276d9ca798a713e1fcaa05
  } = { ...data };

  return (
    <>
      <header className='py-10 text-center bg-gray-800'>
        <h1>{repoName}</h1>
      </header>
      {repo && (
        <>
        <SectionCard>
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
        </SectionCard>
        <SectionCard title='who made it'>
          <div className='grid grid-cols-2'>
            <EntityCard className='col-span-1 items-center' title='owner' entity={owner}>
              <div className='py-4'>
                Repository created by {owner.name || repo.owner.login} in {new Date(repo.created_at).getFullYear()}.
              </div>
            </EntityCard>
            {repo.organization && (repo.owner.type !== 'Organization') && (
              <EntityCard className='col-span-1 items-center' title='organization' entity={org} />
            )}
            {contributors && (
              <InfoCard className='col-span-1 items-center' title='contributors'>
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
              </InfoCard>
            )}
          </div>
        </SectionCard>
        <SectionCard title='who likes it'>
            <div className='grid grid-cols-2'>
              {subscribers && (
                <InfoCard className='col-span-1 items-center' title='subscribers'>
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
                </InfoCard>
              )}
            </div>
        </SectionCard>
        <SectionCard title="how it's made">
          <div className='py-5 px-10 border border-gray-700 rounded-b-md'>
            {languages &&
              <div className='my-2 flex flex-col'>
                {createBarChart(languages)}
              </div>
            }
            {repo.fork && (
              <div className='grid grid-cols-2 w-full'>
                {repo.parent && (
                  <InfoCard className='col-span-1 items-center' title='forked from'>
                    <div className='my-2'>
                      <Link to={{ pathname: repo.parent.html_url}} target='_blank'>
                        <p className='text-xl mb-5 underline'>{repo.parent.full_name}</p>
                      </Link>
                    </div>
                    <div className='my-2'>
                      <p>{repo.parent.description}</p>
                      {repo.parent.homepage && (
                        <Link to={{ pathname: repo.parent.homepage}} target='_blank'>
                          <p className='underline'>{repo.parent.homepage}</p>
                        </Link>
                      )}
                    </div>
                    <div className="my-2">
                      <span className="mr-2 p-2 rounded-full bg-black">
                        {repo.parent.language || 'No specific language'}
                      </span>
                      <span className="mr-2"><StarIcon size={16} /> {repo.parent.stargazers_count || 0}</span>
                      <span className="mr-2"><RepoForkedIcon size={16} /> {repo.parent.forks_count || 0}</span>
                      <span className='mr-2'><EyeIcon size={16} /> {repo.parent.watchers_count || 0}</span>
                      <span className="mr-2">Built by:</span>
                      <img src={repo.parent.owner.avatar_url} alt='parent author avatar' className="w-10 h-10 rounded-full inline-block" />
                    </div>
                  </InfoCard>
                )}
                {repo.source && (repo.parent.id !== repo.source.id) && (
                  <InfoCard className='col-span-1 items-center' title='original source'>
                    <div className='my-2'>
                      <Link to={{ pathname: repo.source.html_url}} target='_blank'>
                        <p className='text-xl mb-5 underline'>{repo.source.full_name}</p>
                      </Link>
                    </div>
                    <div className='my-2'>
                      <p>{repo.source.description}</p>
                      {repo.source.homepage && (
                        <Link to={{ pathname: repo.source.homepage}} target='_blank'>
                          <p className='underline'>{repo.source.homepage}</p>
                        </Link>
                      )}
                    </div>
                    <div className="my-2">
                      <span className="mr-2 p-2 rounded-full bg-black">
                        {repo.source.language || 'No specific language'}
                      </span>
                      <span className="mr-2"><StarIcon size={16} /> {repo.source.stargazers_count || 0}</span>
                      <span className="mr-2"><RepoForkedIcon size={16} /> {repo.source.forks_count || 0}</span>
                      <span className='mr-2'><EyeIcon size={16} /> {repo.source.watchers_count || 0}</span>
                      <span className="mr-2">Built by:</span>
                      <img src={repo.source.owner.avatar_url} alt='parent author avatar' className="w-10 h-10 rounded-full inline-block" />
                    </div>
                  </InfoCard>
                )}
              </div>
            )}
          </div>
        </SectionCard>
        <SectionCard title="where it's at">
<<<<<<< HEAD
          {releases && (releases.length !== 0) && (
            <>
            <InfoCard title='releases'>
              <Link to={{ pathname: releases[0].html_url }} target='_blank'>
                <div className='my-2 flex items-center'>
                  <RocketIcon size={24} className='m-4' />
                  <span className='text-xl mr-2'>Latest:</span>
                  <span className='text-xl underline'>{releases[0].name}</span>
                </div>
              </Link>
              <span className='m-4 text-sm'>Published:</span>
              <span className='text-sm'>{new Date(releases[0].published_at).toLocaleDateString()}</span>
            </InfoCard>
            {releases[0].prerelease && <Badge color='gray'>prerelease</Badge>}
            {releases[0].body && (
              <Card>
                {styleTextWithComments(releases[0].body)}
              </Card>
            )}
            </>
          )}
          {issues && (issues.length !== 0) && (
            <InfoCard title='issues'>
              <div className='my-2 flex flex-col'>
                {issues.map(issue =>
                  <IssueCard
                    key={issue.id}
                    issue={issue}
                    isOpen={openIssue === issue.id}
                    onClick={() => setOpenIssue((openIssue === issue.id) ? null : issue.id)}
                  />
                )}
              </div>
            </InfoCard>
          )}
=======
          <div className='py-5 px-10 border border-gray-700 rounded-b-md'>
            <div className='my-2 flex flex-col'>
              {issues && issues.map(issue =>
                <IssueCard
                  key={issue.id}
                  issue={issue}
                  isOpen={openIssue === issue.id}
                  onClick={() => setOpenIssue((openIssue === issue.id) ? null : issue.id)}
                />
              )}
            </div>
          </div>
>>>>>>> 5d1d89fea417f40bf6276d9ca798a713e1fcaa05
        </SectionCard>
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