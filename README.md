# DispatcherKabha

A React Native Application that provides live top and breaking headlines news for a country depending on the location of the user device.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Technologies](#technologies)
- [Folder structure](#folder-structure)

## Description

Provide a detailed description of the project, including its purpose, features, and any relevant information.

Dispatcher App using [Google News API](https://newsapi.org/) which locates articles and breaking news headlines from news sources and blogs across the web.

You can search articles by Keywords and phrases using the search icon button.
Also the app allow filtering articles by *Dates and timeframes*, *Publishers* and *Languages*
using the filters provided for the user.

The application allows users to save articles which will be added automatically to favorite screen, so they can see the articles anytime *even if there is no internet connection*.

Each user have to go throw authentication processes signup or login, it will generate unique ID and firestore token for each user.

You can navigate to profile screen to edit profile picture or profile settings preferences. 
## Installation

To install the project you need to do the following steps: 
* clone the project to your local machine.
* `npm install` to install all the dependencies.
* `npm run start` to start the metro.
* `npm run ios-device` for build and run on your own device.
* `npm run ios` to build and run on ios simulator.
* `npm run android` to build and run on android emulator.
* `npm run reset` to clean cache and start the metro.


## Technologies
* React Native
* Typescript
* Firestore database
* Firestore authentication
* Redux toolkit
* React Navigation
* Animations
* Local Device Storage

## Folder structure
- `config`: Folder containers the `base url` and the `apiKey`
- `src`: This folder is the main container of all the code inside the application.
  - `assets`: Asset folder stores all images.
  - `components`: Folder contains common component which used through the application screens.
  - `hooks`: Hooks folder containing custom and build-in hooks such as Redux hooks.
  - `routes`: Folder stores all the navigators of the application from *React Navigation* and it's types.
  - `screens`: Folder that contains all application screens and the nested screens.
  - `services`: Folder containers all the files that responsible for handling the cloud and authentication requests as well as the api calls to retrieve data.
  - `store`: Folder containers all the redux async thunk middlewares and the slices as well as the types and the store.
  - `util`: Folder containing `enum`,`colors`,`types`,`consntants` files.
  - `DispatcherApp.tsx`: file which contains the root navigator for the all the application screens.
 - `App.txs`: Main component that starts the whole application.
 - `index.js`: Entry point of the application as per React-Native standards.

## APP


<div align="center">
  <img src="./src/assets/svg/onBoardingScreen.svg" width="350" height="350" title="hover text">
  <img src="./src/assets/svg/FavoriteScreen.svg" width="350" height="350" title="hover text">
  <img src="./src/assets/svg/HomeScreen.png" width="200" height="350" title="hover text">
  <img src="./src/assets/svg/NotificationScreen.png" width="200" height="350" title="hover text">
  <img src="./src/assets/svg/ProfileScreen.png" width="200" height="350" title="hover text">
</div>