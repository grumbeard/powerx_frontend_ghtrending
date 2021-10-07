# GitHub Trending
This repository was created as part of a capstone project from the Frontend Module of the PowerX Programme.


## Live Links (Deployed on Netlify)
👉 [App] https://grumbeard-github-trending.netlify.app

👉 [Style Guide] https://grumbeard-github-trending-styleguide.netlify.app


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation
To see it on LocalHost, run

- `npm install` and `npm start`

To see the styleguide on LocalHost, run

- `npm start:styleguide`


## Objectives
Demonstrate techniques learned from Module by creating a Single Page Application utilizing an open-source API from https://github.com/public-apis/public-apis.

** Requirements **

Routes (minimum):
- [X] A Listings page
- [X] A Details page: Shows data from API

Features:
- [X] User should be able to bookmark items (e.g. favourite listing)
- [X] User should be able to see their bookmarked items in the Home Page
- [X] Bookmarked items can be saved in Local Storage

Style Guide:
- [X] React Styleguidist (`react-styleguidist`)

Deployment:
- [X] Netlify


## About this App
This app utilizes the following APIs listed on `public-apis/public-apis`:
- Trending-Github: https://docs.trending-github.com/
- GitHub: https://docs.github.com/en/free-pro-team@latest/rest

As no official GitHub API exists publishing data about 'Trending Repositories on GitHub' typically available at https://github.com/trending, this app obtains that data from [Trending-Github](https://docs.trending-github.com/).

NOTE: Not all data from Trending-Github is available with accuracy (as of 7 Oct 2021)
- Route `/github/spoken-languages`: 200 OK
- Route `/github/languages`: 200 OK
- Route `/github/repositories`: 200 OK
  - [optional] Query "period":
    - `daily` - 200 OK
    - `weekly` - 200 OK but Inaccurate (shows `daily` data)
    - `monthly` - 200 OK but Inaccurate (shows `daily` data)
  - [optional] Query "language": 200 OK
  - [optional] Query "spokenLanguage": 200 OK
  
When viewing the Details page of any repository, data is pulled from the [GitHub API](https://docs.github.com/en/free-pro-team@latest/rest) which is more comprehensive.