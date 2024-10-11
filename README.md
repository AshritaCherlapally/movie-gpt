# Project Features

- Create React App
- Configured Tailwind CSS
- Configured Routing
- Header
- Body
- SignIn Form
- Signup Form
- Form Validation
- Google firebase setup for Authentication functionality
- Deployed in Google Firebase(to production)
- Created Signingup a user in Firebase
- Implemented Sign In user Api
- Created Redux store with userSlice
- Header Component in Browse Page
- Update User API
- Unsubscribed to the onAuthStateChanged callback
- Add HardCoded values to the contents file
- TMDB database is used(live data of movies)
- API call made for now playing movies list
- Created few custom hooks for components
- Created Slice and Updated the redux store with data
- Fetch data for Trailer, updated the store with Video Data
- Embedded YT video and make it autoplay and mute
- Used Tailwindcss classes to customize the webpage.
- GPT Search Page
- GPT Search Bar
- Multi - Language Specific Chatgpt Feature page

# Bug Fixes

- Sign up user displayName and profile picture update, since the initial login credentials was null.
- Redirect bug fix:
  - If user is not logged in Re-direct to login page
  - If user is logged in re-direct to browse page
  - If the user is trying to re-direct to login page, website wont allow to do so, since the user is logged in
