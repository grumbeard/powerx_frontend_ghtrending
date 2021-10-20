# GitHub Trending

This repository was created as part of a capstone project from the Frontend Module of the PowerX Programme.


## Live Links (Deployed on Netlify)

👉 [App] https://grumbeard-github-trending.netlify.app

👉 [Style Guide] https://grumbeard-github-trending-styleguide.netlify.app

<img width="1390" alt="image" src="https://user-images.githubusercontent.com/51464365/138132153-81c0e1bd-6d80-43b5-8a63-d43ca7f93f4c.png">


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Objectives

Demonstrate techniques learned from Module by creating a Single Page Application utilizing an open-source API from https://github.com/public-apis/public-apis.


### Requirements

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


>### **NOTE**: 
>
>Not all data from Trending-Github is available with accuracy (as of 7 Oct 2021)
>- Route `/github/spoken-languages`: 200 OK
>- Route `/github/languages`: 200 OK
>- Route `/github/repositories`: 200 OK
>  - [optional] Query "period":
>    - `daily` - 200 OK
>    - `weekly` - 200 OK but Inaccurate (shows `daily` data)
>    - `monthly` - 200 OK but Inaccurate (shows `daily` data)
>  - [optional] Query "language": 200 OK
>  - [optional] Query "spokenLanguage": 200 OK
  
When viewing the Details page of any repository, data is pulled from the [GitHub API](https://docs.github.com/en/free-pro-team@latest/rest) which is more comprehensive.


## Features

### 1. View and Filter Trending Repositories
View the repositories trending on GitHub today, with options to filter by Spoken Language and Coding Language
<img width="1150" alt="image" src="https://user-images.githubusercontent.com/51464365/138132517-8fff33c0-f608-4870-97c3-c7d28870eee5.png">

### 2. Bookmark Favourite Repositories
Bookmark favourite repositories (even non-trending repos like this one!) by clicking on the 'heart' icon next to the repository description
<img width="1373" alt="image" src="https://user-images.githubusercontent.com/51464365/138133192-a5dc91d6-0f9b-4575-96b9-7324215eb74e.png">

### 3. Explore Repository Details
Click on a listed repository to go to its details page, where more information is fetched from the GitHub API.
![image](https://user-images.githubusercontent.com/51464365/138133925-4f0fa483-8297-4f05-8cc0-a61376b91afd.png)

The information is organized and geared towards helping the user make sense of how well supported the project is and its current status.

#### SUMMARY
This topmost section of the details page shows a quick overview of the repository
- Description of the repository
- Whether it's forkable
- Whether it's a fork
- Whether there are zero open issues :sparkles:
- What license is applied
- What's the SSH/HTTP url that can be used to clone the repo right away!
- Bookmark this repository

#### WHO MADE IT
This section gives an overview of the people / organizations who created and contributed to this repository
- Owner / Organization's profile details: GitHub page, social media handles, a link to who they follow, bio, etc.
- When they made this repo
- Contributors to this repo (always good to see some code celebrities) - clickthrough to their GitHub profiles
- Hovering over the contributors shows the number of contributions the individual made to the repository

![image](https://user-images.githubusercontent.com/51464365/138135794-281cd111-1d38-499c-aba7-567320aae66b.png)


#### HOW ITS MADE
This section gives an overview of the languages used and a rough history of its source
- Language breakdown with specific no. of lines of code shown on hover
- Details of repository where repo is forked from if applicable
- Details of parent fork's original source repo if any

![image](https://user-images.githubusercontent.com/51464365/138137568-e6347f55-8cc4-432f-9db2-da5e502e4d72.png)
![image](https://user-images.githubusercontent.com/51464365/138136604-7bc7a31e-4012-4433-b5fc-17c8707652c1.png)


#### WHO LIKES IT
There's not much here. A list of max 30 subscribers / watchers of this repo. Clickthrough to their GitHub profiles to check if they're bots!

#### WHERE IT'S AT
This section gives an overview of the latest release (if any) and any issues reported
- Latest release version and date + description
- Issues listed with collapsible issue details section
- Issues that remain open are highlighted and labelled accordingly
- * Attempts made to highlight any comments in the issue details in a lighter color as many repos require issues to be submitted in lengthy templated form annotated with many comments *

![image](https://user-images.githubusercontent.com/51464365/138138311-62e4f337-b689-4046-aeb4-842c68885a37.png)

### 4. Explore Another Repository
Clicking on the 'telescope' icon at the footer opens up a form that allows users to explore any repository (even non-trending ones)
- Enter author and name of repository to view details page
- Invalid characters will be ignored (anything other than alphanumeric characters and the following special characters: '.', '-', '_')

**NOTE**: Unfortunately when attempting to explore a non-existent repository, the page will simply display '...loading' text. Click on the telescope icon again to explore another repository.

![image](https://user-images.githubusercontent.com/51464365/138138750-c52a1c8c-5ec0-454c-adf2-846970f68f38.png)


## Installation

To see it on LocalHost, run

- `npm install` and `npm start`

To see the styleguide on LocalHost, run

- `npm start:styleguide`
