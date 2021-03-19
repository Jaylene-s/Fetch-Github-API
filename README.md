# Fetch: Github API

For this project I created a front-end react app that allows the user to interface with Github. If a user gives your app their Github personal access token, they'll be able to see, create, and delete their repositories. 

## Feature 1: Getting User Data

Initially, the `#options` div is not displayed when the page loads. When the user enters their Github access token and submits the form, three things happen:

1. The form dissapears.
2. The `#options` div is displayed on the DOM.
3. The access token and username is displayed on the DOM.

## Feature 2: Getting Repositories Data

Once the `#options` div is displayed. Clicking on the `Get My Repos` button get all the public repos for the authenticated Github user and diplay them as an unordered list **in order of newest to oldest**. 

## Feature 3: Creating a New Repo

The user is able to create a new repo by filling out the Repo's name and description. When they submit the form, this new repo now exists on Github and the repo's name appears at the top of the web app's unordered list **without having to refresh the page**.

## Feature 4: Deleting a Repo

The user can also delete one of their repos by filling out the last form. **DO NOT TYPE THE NAME OF A REPO YOU WANT TO KEEP**. We wouldn't want to accidentally delete a valuable repo. If the API successfully deletes the repo, the user will see an [`alert`](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert) message that tells them the repo has been deleted. 
