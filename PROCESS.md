# Dreadful Tomato

Dreadful Tomato is a new platform to find new movies and TV shows. The main objective is to
help users to find information about their favourite TV shows and movies.

## Initializing project

- Once I clone the project, I installed the packages using:

```sh
npm install && npm install react-scripts
```

## Building Home Page

I start building home page, as I'm used to start my projects with responsive mobile first practices, that's why I implement media queries.

## Manage routing in React

I decided to use React router V-6, because it gives as methods to create routes and links to navigate between pages and the ability to use dynamic params.

## Method to groupBy on requested Array of objects

I decided to use a customHook to request data from the API.

### Challenges:

- I have to resolve a problem allowing CORS to fetch data. For that purpose I have to install [Allow CORS](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en) a Google Chrome extension to handle it.

- Later I have to find a solution to group the data by the key programType: 'movie' and 'series'. I discovered the method

```js
//Creates a new Map object
const map = new Map()
//Sets the value for a key in a Map
map.set()
//Gets the value for a key in a Map
map.get()
```

## Build Movies and Series page

### Header component in Movies and Series Page

- To develop a dynamic Header component I used a react-router customHook "useLocation", to get the current pathname and using a ternary operator with two conditions if either or both is true will render the rest of the elements neccesaries for the Movies and Series Header.

### Show description Movies and Series Cards

- I achieved it using useState reat Hook to store a boolean value, depending of it will render the additional information.

## Filter data by object's key value

- I use filter method to get it
