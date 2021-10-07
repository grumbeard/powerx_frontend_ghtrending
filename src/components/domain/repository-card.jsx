import { HeartFillIcon, HeartIcon, MarkGithubIcon, RepoForkedIcon, StarIcon } from "@primer/octicons-react";
import { Link } from "react-router-dom";
import { Card } from "../presentation/card";
import { PropTypes } from 'prop-types';
import { IconCounter } from "components/presentation/icon-counter";

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
        <Link to={`/${author}/${name}`} className='md:col-span-5 rounded-md hover:bg-gray-800 hover:bg-opacity-25'>
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
            <div className='inline-flex mr-2'>
              <IconCounter
                icon={<StarIcon size={16} />}
                value={stars || 0}
              />
              <IconCounter
                icon={<RepoForkedIcon size={16} />}
                value={forks || 0}
              />
            </div>
            <span className="mr-2">Built by:</span>
            <img src={avatar} alt='author avatar' className="w-10 h-10 rounded-full inline-block" />
          </section>
        </Link>
        <div className='md:col-span-1 flex items-center md:justify-end'>
          {isBookmarked
            ? <span
                onClick={handleRemoveBookmark}
                className='mx-2 p-2 hover:bg-gray-700 hover:bg-opacity-25 hover:cursor-pointer rounded-full flex place-content-center'
              >
                <HeartFillIcon size={32} />
              </span>
            : <span
                onClick={handleAddBookmark}
                className='mx-2 p-2 hover:bg-gray-700 hover:bg-opacity-25 hover:cursor-pointer rounded-full flex place-content-center'
              >
                <HeartIcon size={32} />
              </span>
          }
          <Link to={{ pathname: url }} target='_blank'>
            <span
              className='mx-2 p-2 hover:bg-gray-700 hover:bg-opacity-25 rounded-full flex place-content-center'
            >
              <MarkGithubIcon size={32} />
            </span>
          </Link>
        </div>
      </div>
    </Card>
  );
};

RepositoryCard.propTypes = {
    repository: PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]),
      author: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      language: PropTypes.string,
      langColor: PropTypes.string,
      description: PropTypes.string,
      url: PropTypes.string.isRequired,
      stars: PropTypes.number,
      forks: PropTypes.number,
      avatar: PropTypes.string.isRequired
    }).isRequired,
    isBookmarked: PropTypes.bool.isRequired,
    addBookmark: PropTypes.func.isRequired,
    removeBookmark: PropTypes.func.isRequired
}