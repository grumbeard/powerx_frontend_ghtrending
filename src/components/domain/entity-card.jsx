import { Link } from 'react-router-dom';
import { LogoGithubIcon, MentionIcon, LinkIcon, PeopleIcon } from '@primer/octicons-react';
import { InfoCard } from '../presentation/info-card';
import { PropTypes } from 'prop-types';

export const EntityCard = ({ entity, title, children, color, ...props }) => {

  return(
    <InfoCard title={title} color={color} {...props}>
      <div className='grid grid-cols-3 items-center'>
        <div className='col-span-1 mx-auto'>
          <img
            src={entity.avatar_url}
            alt='author avatar'
            className="object-contain rounded-full inline-block"
            title={entity.name || entity.login}  
          />
        </div>
        <div className='py-2 px-10 col-span-2'>
          <div className='underline'>
            <Link to={{ pathname: entity.html_url}} target='_blank'>
              <LogoGithubIcon size={16} className='mr-2' />{entity.login}
            </Link>
          </div>
          {entity.blog && (
            <div>
              <LinkIcon size={16} className='mr-2' />
              <Link to={{ pathname: entity.blog}} target='_blank'>
                {entity.blog}
              </Link>
            </div>
          )}
          {entity.twitter_username && (
            <div>
              <MentionIcon size={16} className='mr-2' />
              <Link to={{ pathname: entity.twitter_username}} target='_blank'>
                {entity.twitter_username} (Twitter)
              </Link>
            </div>
          )}
          {(entity.followers >= 0) && (
            <div className='underline'>
              <PeopleIcon size={16} className='mr-2' />
              <Link to={{ pathname: entity.followers_url}} target='_blank'>
                {entity.followers}
              </Link>
            </div>
          )}
          {entity.bio && (
            <div className='py-2'>
              <div className='underline capitalize'>bio</div>
              <div className='italic'>{entity.bio}</div>
            </div>
          )}
          {children}
        </div>
      </div>
    </InfoCard>
  );
};

EntityCard.propTypes = {
  entity: PropTypes.shape({
    name: PropTypes.string,
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    bio: PropTypes.string,
    blog: PropTypes.string,
    html_url: PropTypes.string.isRequired,
    twitter_username: PropTypes.string,
    followers: PropTypes.number,
    followers_url: PropTypes.string
  }).isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['gray', 'red'])
};