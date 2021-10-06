IssueCard is a compound component utilizing `Card` and `Badge` and displays various details available about an `issue`. It relies on an optional `isOpen` property to create an 'accordion' effect.

A high-level overview of the issue is shown in the 'top' section. The 'bottom' section is hidden by default and displays the issue body.

IssueCard variants are determined by the `state` of the `issue`. Based on the `state` of the `issue`, a status `Badge` is shown and if that `state` is 'open', the IssueCard will have a red border.


```jsx
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';

const Demo = () => {
  const [openIssue, setOpenIssue] = useState(null);
  
  return (
    <BrowserRouter>
      <IssueCard
        isOpen={openIssue === 1}
        onClick={() => setOpenIssue((openIssue === 1) ? null : 1)}
        commentClass='my-2 text-gray-300'
        textClass='my-2 text-gray-500'
        issue={{
          id: 1,
          title: 'Very important bug',
          state: 'open',
          number: 1001,
          user: {
            avatar_url: 'https://avatars3.githubusercontent.com/u/6811672?v=4',
          },
          body: '<!-- Thank you for taking the time to work on a Pull Request for this project! -->\r\n<!-- To ensure your PR is dealt with swiftly please check the following: -->\r\n- [x] My submission is formatted according to the guidelines in the [contributing guide](/CONTRIBUTING.md)\r\n- [x] My addition is ordered alphabetically\r\n- [x] My submission has a useful description\r\n- [x] The description does not have more than 100 characters\r\n- [x] The description does not end with punctuation\r\n- [x] Each table column is padded with one space on either side\r\n- [x] I have searched the repository for any relevant issues or pull requests\r\n- [x] Any category I am creating has the minimum requirement of 3 items\r\n- [x] All changes have been [squashed][squash-link] into a single commit\r\n\r\n[squash-link]: <https://github.com/some-repo-link>\r\n\r\nClose #999\r\nIssue #1001\r\n'
        }}
      />

      <IssueCard
        isOpen={openIssue === 2}
        onClick={() => setOpenIssue((openIssue === 2) ? null : 2)}
        commentClass='my-2 text-gray-300'
        textClass='my-2 text-gray-500'
        issue={{
          id: 2,
          title: 'A minor bug',
          state: 'closed',
          number: 1000,
          user: {
            avatar_url: 'https://avatars3.githubusercontent.com/u/6811672?v=4',
          },
          body: '<!-- Thank you for taking the time to work on a Pull Request for this project! -->\r\n<!-- To ensure your PR is dealt with swiftly please check the following: -->\r\n- [x] My submission is formatted according to the guidelines in the [contributing guide](/CONTRIBUTING.md)\r\n- [x] My addition is ordered alphabetically\r\n- [x] My submission has a useful description\r\n- [x] The description does not have more than 100 characters\r\n- [x] The description does not end with punctuation\r\n- [x] Each table column is padded with one space on either side\r\n- [x] I have searched the repository for any relevant issues or pull requests\r\n- [x] Any category I am creating has the minimum requirement of 3 items\r\n- [x] All changes have been [squashed][squash-link] into a single commit\r\n\r\n[squash-link]: <https://github.com/some-repo-link>\r\n\r\nClose #900\r\nIssue #1000\r\n'
        }}
      />
      <IssueCard
        isOpen={openIssue === 3}
        onClick={() => setOpenIssue((openIssue === 3) ? null : 3)}
        commentClass='my-2 text-gray-300'
        textClass='my-2 text-gray-500'
        issue={{
          id: 3,
          title: 'Somewhat a bug',
          state: 'all',
          number: 100,
          user: {
            avatar_url: 'https://avatars3.githubusercontent.com/u/6811672?v=4',
          },
          body: '<!-- Thank you for taking the time to work on a Pull Request for this project! -->\r\n<!-- To ensure your PR is dealt with swiftly please check the following: -->\r\n- [x] My submission is formatted according to the guidelines in the [contributing guide](/CONTRIBUTING.md)\r\n- [x] My addition is ordered alphabetically\r\n- [x] My submission has a useful description\r\n- [x] The description does not have more than 100 characters\r\n- [x] The description does not end with punctuation\r\n- [x] Each table column is padded with one space on either side\r\n- [x] I have searched the repository for any relevant issues or pull requests\r\n- [x] Any category I am creating has the minimum requirement of 3 items\r\n- [x] All changes have been [squashed][squash-link] into a single commit\r\n\r\n[squash-link]: <https://github.com/some-repo-link>\r\n\r\nClose #9\r\nIssue #100\r\n'
        }}
        />
    </BrowserRouter>
  );
}

<Demo />
```