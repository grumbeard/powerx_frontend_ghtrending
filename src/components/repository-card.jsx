import { RepoForkedIcon, StarIcon } from "@primer/octicons-react";
import { Link } from "react-router-dom";
import { Card } from "./card";

export const RepositoryCard = ({ repository }) => {
  const {
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
  return (
    <Link to={`/${author}/${name}`}>
      <Card
        className="m-2 py-5 px-10"
      >
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
      </Card>
    </Link>
  );
}