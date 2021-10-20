import { useRef, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useRepository } from 'hooks/use-repositories';
import { EyeIcon, HeartFillIcon, HeartIcon, RepoForkedIcon, RocketIcon, StarIcon, XIcon } from '@primer/octicons-react';
import { Badge } from 'components/presentation/badge';
import { Button } from 'components/presentation/button';
import { Bar } from 'components/presentation/bar';
import { Card } from 'components/presentation/card';
import { InfoCard } from 'components/presentation/info-card';
import { SectionCard } from 'components/presentation/section-card';
import { IssueCard } from 'components/domain/issue-card';
import { EntityCard } from 'components/domain/entity-card';
import { styleTextWithComments } from 'lib/style-text-with-comments';
import { IconCounter } from 'components/presentation/icon-counter';
import { BookmarksSideBar } from 'components/domain/bookmarks-sidebar';
import { useBookmarks } from 'hooks/use-bookmarks';
import { SideBarToggle } from 'components/presentation/sidebar-toggle';
import { IconButton } from 'components/presentation/icon-button';

const createBarChart = (dict) => {
  const total = Object.values(dict).reduce((a,b) => Number(a) + Number(b));
  return Object.keys(dict).map(key => 
    <Bar key={key} label={key} value={Number(dict[key])} total={total} hoverInfo={`${dict[key]} lines of code`} />
  );
};

export const Repository = () => {
  
  const { name, author } = useParams();
  const [cloneSSH, setCloneSSH] = useState(true);
  const [openIssue, setOpenIssue] = useState(null);
  
  const { data, status } = useRepository(name, author);
  
  const {
    repository: repo,
    owner,
    organization: org,
    contributors,
    subscribers,
    languages,
    issues,
    releases
  } = { ...data };
  
  const {
    bookmarks,
    isBookmarked,
    handleAddBookmark,
    handleRemoveBookmark
  } = useBookmarks();
  
  const handleRemove = () => {
    handleRemoveBookmark({ id: repo.id, name, author});
  };
  const handleAdd = () => {;
    handleAddBookmark({ id: repo.id, name, author });
  };
  
  const sideBarRef = useRef();
  const mainContentRef = useRef();
  
  return (
    <>
      <header className='py-10 text-center bg-gray-800'>
        <h1>{name}</h1>
      </header>
      <main className='grid grid-cols-6 relative'>
        {repo && (
          <>
          {/* Bookmarks Side Bar */}
          { bookmarks &&
            <BookmarksSideBar
              bookmarks={bookmarks}
              sideBarRef={sideBarRef}
              handleRemove={handleRemoveBookmark}
              sideBarClass='w-4/5 lg:w-full col-span-6 lg:col-span-1 bg-black'
            />
          }
          {/* Main Content Area */}
          <section className='col-span-6' ref={mainContentRef}>
            <div className='w-4/5 mx-auto'>
              {/* Repository Summary */}
              <SectionCard>
                  <div className='my-2 grid grid-cols-6'>
                    <div className='col-span-4'>
                      <div className='mt-2 mb-5 flex items-center'>
                        <Link to={{ pathname: repo.html_url}} target='_blank'>
                          <p className='text-4xl underline'>{repo.full_name}</p>
                        </Link>
                        {isBookmarked(repo)
                          ? <IconButton
                              onClick={handleRemove}
                              icon={<HeartFillIcon size={32} />}
                            />
                          : <IconButton
                              onClick={handleAdd}
                              icon={<HeartIcon size={32} />}
                            />
                        }
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
                        {repo.archived && <Badge color='gray' className='mr-2'>archived</Badge>}
                        {repo.allow_forking
                          ? <Badge color='green' className='mr-2'>forkable</Badge>
                          : <Badge color='gray' className='mr-2'>not forkable</Badge>
                        }
                        {(repo.open_issues_count === 0) && <Badge color='green' className='mr-2'>zero open issues</Badge>}
                        {repo.fork && <Badge color='yellow' className='mr-2'>forked project</Badge>}
                        {repo.license && <Badge color='white-outline' className='mr-2'>{repo.license.name}</Badge>}
                      </div>
                    </div>
                    <div className='col-span-2 grid grid-cols-3 justify-end my-2 h-16'>
                      <IconCounter
                        className='border rounded-l-md'
                        icon={<StarIcon size={24} />}
                        value={repo.stargazers_count || 0}
                        valueClass='text-l'
                      />
                      <IconCounter
                        className='border'
                        icon={<RepoForkedIcon size={24} />}
                        value={repo.forks_count || 0}
                        valueClass='text-l'
                      />
                      <IconCounter
                        className='border rounded-r-md'
                        icon={<EyeIcon size={24} />}
                        value={repo.watchers_count || 0}
                        valueClass='text-l'
                      />
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
              {/* Repository Details */}
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
                  {!contributors && (
                      <div className='mx-auto text-xl'>
                        No contributors yet
                      </div>
                    )}
                </div>
              </SectionCard>
              <SectionCard title="how it's made">
                <div className='py-5 px-10 border border-gray-700 rounded-b-md'>
                  {languages && (Object.keys(languages).length !== 0) &&
                    <div className='my-2 flex flex-col'>
                      {createBarChart(languages)}
                    </div>
                  }
                  {(!languages || (Object.keys(languages).length === 0)) && (
                    <div className='mx-auto text-xl'>
                      Language information unavailable
                    </div>
                  )}
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
                      {!repo.parent && !repo.source && (
                        <div className='mx-auto text-xl'>
                          Fork details unavailable
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </SectionCard>
              <SectionCard title='who likes it'>
                  {subscribers && (subscribers.length !== 0) && (
                    <div className='grid grid-cols-2'>
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
                    </div>
                  )}
                  {(!subscribers || subscribers.length === 0) && (
                    <div className='mx-auto text-xl'>
                      No subscribers yet
                    </div>
                  )}
              </SectionCard>
              <SectionCard title="where it's at">
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
                      { releases[0].body
                          ? styleTextWithComments(releases[0].body, { commentClass: 'my-2 text-gray-500', textClass: 'my-2 text-gray-300' })
                          : <p className='my-2 text-gray-500'>-- No details provided --</p>
                      }
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
                {((!releases || (releases.length === 0)) && (!issues || issues.length === 0)) && (
                  <div className='mx-auto text-xl'>
                    No releases or issues to date
                  </div>
                )}
              </SectionCard>
            </div>
          </section>
          {/* Side Bar Toggle */}
          {bookmarks &&
            <SideBarToggle
              isInitiallyExpanded={false}
              sideBarRef={sideBarRef}
              sideBarClassOnToggle='hidden'
              mainContentRef={mainContentRef}
              mainContentClassOnToggle='lg:col-span-5'
              toggleIconExpanded={<XIcon size={24} />}
              toggleIconClosed={<HeartFillIcon size={24} />}
              toggleLabel='list'
              className='absolute left-0 top-0 py-2 pl-4 pr-8 rounded-br-md bg-black'
            />
          }
          </>
        )}
      </main>
      {
        (status !== 'success') && (
          <div className='text-center text-4xl m-10'>
            <p>Loading...</p>
          </div>
        )
      }
    </>
  );
};