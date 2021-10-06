import { HeartFillIcon, HeartIcon, MarkGithubIcon, RepoForkedIcon, StarIcon } from "@primer/octicons-react";
import { Link } from "react-router-dom";
import { Button } from "./button";
import { Card } from "./card";

export const RepositoryCard = (props) => {
  const {
    repository,
    isBookmarked,
    addBookmark,
    removeBookmark
  } = props;
  
  const {
    id,
    author,
    name,
    language,
    langColor,
    description,
    url,
    stars,
    forks,
    avatar
  } = repository;
  
  const handleAddBookmark = () => addBookmark({id, author, name});
  const handleRemoveBookmark = () => removeBookmark({id, author, name});
  
  return (
    <Card
      className="m-2 py-5 px-10"
    >
      <div className='grid md:grid-cols-6'>
        <div className='col-span-5'>
          <section className="my-2">
            <h1>{author} / {name}</h1>
          </section>
          <section className="my-2">
            <p>{description}</p>
          </section>
          <section className="my-2">
            <span
              className="mr-2 p-2 rounded-full"
              style={
                langColor
              ? { backgroundColor: langColor }
              : { backgroundColor: 'black' }
              }
            >
              {language || 'No specific language'}
            </span>
            <span className="mr-2"><StarIcon size={16} /> {stars}</span>
            <span className="mr-2"><RepoForkedIcon size={16} /> {forks}</span>
            <span className="mr-2">Built by:</span>
            <img src={avatar} alt='author avatar' className="w-10 h-10 rounded-full inline-block" />
          </section>
        </div>
        <div className='col-span-1 flex flex-col items-center justify-between'>
          <div className='flex'>
            {isBookmarked
              ? <span onClick={handleRemoveBookmark} className='mx-2 p-2 hover:bg-gray-700 rounded-full flex place-content-center'>
                  <HeartFillIcon size={24} />
                </span>
              : <span onClick={handleAddBookmark} className='mx-2 p-2 hover:bg-gray-700 rounded-full flex place-content-center'>
                  <HeartIcon size={24} />
                </span>
            }
            <Link to={{ pathname: url }} target='_blank'>
              <span className='mx-2 p-2 hover:bg-gray-700 rounded-full flex place-content-center'><MarkGithubIcon size={24} /></span>
            </Link>
          </div>
          <Link to={`/${author}/${name}`}>
            <Button className='my-2 p-2 capitalize hover:bg-gray-700' color='white-outline'>details</Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}