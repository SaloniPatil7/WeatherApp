# Weather App

A simple weather application built with React that allows users to search for weather information by city name. The app fetches data from an external weather API and displays current weather information, including temperature, humidity, and weather conditions.

## Features

- Search weather information for any city
- Displays temperature, feels like temperature, humidity, min/max temperatures, and weather description
- Handles errors gracefully (e.g., when a city is not found)
- Uses Material-UI for styling

## Tech Stack

- **React.js** for the frontend
- **Material-UI** for UI components
- **OpenWeatherMap API** (or any other weather API) for fetching weather data
- **Vite** for development and bundling

## Environment Variables

The app uses environment variables for storing API URL and API key. You need to create a `.env` file at the root of the project and add the following variables:
VITE_API_URL=https://api.openweathermap.org/data/2.5/weather
VITE_API_KEY=your_api_key_here

# Installation
**1 Clone the repository:** git clone https://github.com/yourusername/weather-app.git  

**2 Navigate into the project folder:** cd weather-app   

**3 Install dependencies:** npm install  

**4 Create a .env file in the root directory and add your API URL and API key:** 
VITE_API_URL=https://api.openweathermap.org/data/2.5/weather  
VITE_API_KEY=your_api_key_here  

**5 Run the development server:** npm run dev  

**6 Open the app in your browser:** http://localhost:3000


# Usage

1. The app displays a search box where you can type a city name.
2. Once you type the city name and click the "Search" button, the app fetches the weather data for that city and displays it on the screen.
3. If there is no such city or the API request fails, the app will show an error message: "No such place exists."

# Contributing
Feel free to fork this repository and submit issues or pull requests. If you find any bugs or want to suggest a feature, please open an issue.

# Acknowledgements
. OpenWeatherMap API for providing weather data  
.Material-UI for the UI components
.Vite for fast development and bundling


# Note 
Replace the API URL and API key with the actual values for the weather API you're using in your .env file.


# deployment
The Project is deployed on Render.
Deployed Link: **https://weather-app-xawo.onrender.com/**
