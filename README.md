[![Netlify Status](https://api.netlify.com/api/v1/badges/e753d99e-2fd4-471b-8cff-54506a5df9c6/deploy-status)](https://app.netlify.com/sites/youthful-shockley-e4ae63/deploys)

# Geoguesser

## What is it?

Geoguesser is a browser game that drops you in a random location around the world and has you try and guess where you are located. After 5 rounds your score is totalled and added to a leaderboard. Try playing the game here: https://geoguesser.dev

## What about Geoguessr?

We are big fans of the original Geoguessr game and that is what inspired this version.

## Something isn't working as intended

Please feel free to open an issue or submit a pull request

# Development

1. add a `.env` to your root directory with the following enviornment variables set:

```
GOOGLE_SIGN_IN_CLIENTID
GOOGLE_SIGN_IN_SECRET
HEROKU_POSTGRES_HOST
HEROKU_POSTGRES_DATABASE
HEROKU_POSTGRES_USER
HEROKU_POSTGRES_PORT
HEROKU_POSTGRES_PASSWORD
HEROKU_POSTGRES_URI
EXPRESS_SESSION_SECRET
```

2. add a `.env` file to your `client/` directory with the following enviornment variables set:

```
REACT_APP_GOOGLE_MAP_KEY
REACT_APP_PLAYFAB_GAME_ID
REACT_APP_WATER_IO
REACT_APP_PLAYFAB_LEADERBOARD
```
