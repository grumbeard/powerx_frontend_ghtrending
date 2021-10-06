EntityCard is a compound component utilizing `InfoCard`. It displays various details available about an `entity` (e.g. repository owner / organization). 

An `avatar_url` for the `entity` is required and it is displayed in the 'left' section. Any other entity details supplied are displayed in the 'right' section.

All constraints for `InfoCard` apply.

EntityCard variants include 'Outline EntityCards' and are determined by an optional `color` property supplied. The default value of `color` is 'gray'.

### Outline EntityCards
```jsx
import { BrowserRouter } from 'react-router-dom';
<BrowserRouter>
  <EntityCard title='owner' entity={{
    name: 'John Doe',
    login: 'john.doe',
    avatar_url: 'https://avatars3.githubusercontent.com/u/6811672?v=4',
    bio: 'I make great apps, all the time, it makes me happy.',
    blog: 'https://github.com/blog',
    html_url: 'https://github.com/octocat',
    twitter_username: 'github',
    followers: 10,
    followers_url: 'https://api.github.com/users/octocat/followers'
  }}>
  </EntityCard>

  <EntityCard color='red' title='organizer' entity={{
    name: 'The Doe',
    login: 'the.doe',
    avatar_url: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
    bio: 'We make great apps, all the time, it makes us happy.',
    blog: 'https://github.com/octo-org',
    html_url: 'https://github.com/octo-org',
    twitter_username: 'github-org',
    followers: 10,
    followers_url: 'https://api.github.com/users/octocat/followers'
  }}>
  </EntityCard>
</BrowserRouter>
```