# MuseApp

![Banner](https://raw.githubusercontent.com/CFKeef/MuseApp/main/assets/images/Musebanner.png)

## Inspiration

A love for music is something we all have in common. Our mission was to create a social network based on our love for music.

## What it does

Muse's integrated UI shares with users what people nearby are listening to!

### Spread "Mechanism" that is responsible for sharing your fine tastes
![Graph](https://raw.githubusercontent.com/CFKeef/MuseApp/main/assets/images/spreadGraph.png)

## How we built it

React makes it easy to keep with UI in sync with the application state. Redux in unison React makes it much easier to develop a complicated app without having to rely on context or complicated inheritance by passing props.

## UI

### Login Screen
![Login](https://raw.githubusercontent.com/CFKeef/MuseApp/main/assets/images/Login.PNG)

### Dashboard
![Dashboard](https://raw.githubusercontent.com/CFKeef/MuseApp/main/assets/images/dash.PNG)

### Dashboard with message shown
![Dashboard with message shown](https://raw.githubusercontent.com/CFKeef/MuseApp/main/assets/images/dashNotif.PNG)

### Event Page
![Event Page](https://raw.githubusercontent.com/CFKeef/MuseApp/main/assets/images/ARtists.PNG)

## Challenges we ran into

Our largest issue was finding a machine learning algorithm that would rate user compatibility based on music taste. Spotify's API houses features on every song, from danceability, to instrumentality, to tempo. The challenge was to create an accurate regression model that could compare the metrics of two users. The Spotify API gives developers, and subsequently their apps, access to what the user is currently listening to. Playlists and albums may have contrasting tracks that may potentially create too much noise in the dataset and therefore create a misleading model, however accurate. We decided to push adding this feature until we find an optimal way to compare track metrics and return a match rating. We also wanted users to feel safe, so it was a small worry about the privacy issues and potential data breaches as well.

## Accomplishments that we're proud of

The team is incredibly proud of building a beautiful UI in such a short time. We had to teach ourselves React to be able to contribute to the frontend in a meaningful way.

## What we learned

Some of us come from a data science background, working on a web application was a first for some of us. This project was a foot into the exciting world of web development.

## What's next for Muse

To build on the social aspect of the project, we wish to add a direct messaging feature and integrate a match making feature, along with a well-studied ai and more neat features. 
