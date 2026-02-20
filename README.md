Weather App – MERN Stack Project--

This is a full-stack weather application built using the MERN stack.
It allows users to search for any city and get real-time weather information.
The app fetches live data from the OpenWeather API, stores search history in MongoDB, and displays everything in a clean glass-style UI.

1. What This Project Does:-

-Users can search weather by entering a city name
-Displays real-time temperature and weather condition
-Shows additional details like:
1.Feels like temperature
2.Min / Max temperature
3.Humidity
4.Wind speed
5.Pressure
6.Visibility
7.Sunrise and Sunset time
8.Weather icons are shown based on API response
9.Every search is stored in MongoDB
10.Recent searches appear as small weather cards
11.Clicking on a previous search displays that weather again
12.API key is secured using environment variables (not exposed in frontend)
13.This project mainly focuses on API integration, backend data handling, and UI design.

2. Tech Stack:-

Frontend-

React.js
Axios
Custom CSS (Glassmorphism design)

Backend-

Node.js
Express.js
Axios (for external API calls)

Database-

MongoDB
Mongoose

API Provider-

OpenWeatherMap

3. How It Works:-

-User enters a city name in the search bar.
-React sends a request to the Express backend.
-Backend calls the OpenWeather API.
-Weather data is transformed into a clean response object.
-The search is saved in MongoDB.
-The frontend receives the formatted weather data.
-UI updates instantly and shows a weather card.
-Recent searches are fetched from the database and displayed below.

4. Project Structure:-

Weather-App
│
├── backend
│ ├── config
│ │ └── db.js
│ ├── models
│ │ └── History.js
│ ├── routes
│ │ └── weatherRoutes.js
│ ├── server.js
│ └── .env
│
├── frontend
│ ├── src
│ │ ├── components
│ │ │ ├── Search.js
│ │ │ ├── WeatherCard.js
│ │ │ ├── History.js
│ │ │ └── Loader.js
│ │ ├── App.js
│ │ └── App.css
│ └── package.json
│
└── README.md

5. Running the Project Locally:-

Step 1 - Clone the repository
git clone <your-repo-link>
cd weather-app

Step 2 - Setup Backend
cd backend
npm install
Create a .env file inside backend:
PORT=5000
MONGO_URI=your_mongodb_connection_string
OPENWEATHER_API_KEY=your_api_key
Start backend:
npm run dev
Backend runs on:
http://localhost:5000

Step 3 - Setup Frontend
cd frontend
npm install
npm start
Open:
http://localhost:3000

6. Features Implemented:-

-Real-time weather search
-Detailed weather metrics
-Weather icons
-MongoDB search history
-Clickable recent search cards
-Glass-style responsive UI
-Secure environment variable handling
-Defensive UI rendering (handles missing data safely)

7. Possible Improvements:-

-5-day or hourly forecast
-Auto-detect user location
-Remove duplicate searches
-Favorite cities
-Weather-based dynamic backgrounds
-Charts for temperature trends
-Authentication system
-Deployment setup

8. Why I Built This

-This project was built to understand:
1.Consuming third-party APIs in a full-stack app
2.Structuring backend routes for clean responses
3.Managing MongoDB schemas and updates
4.Handling state properly in React
5.Designing reusable UI components
6.Securing sensitive keys using environment variables
7.Connecting frontend and backend in a scalable way