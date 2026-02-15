# 🌤 Weather App

A full-stack weather application built using the **MERN stack** that provides real-time weather information for any city.

The app fetches live data from the OpenWeather API, stores search history in MongoDB, and presents results in a modern glass-style UI.

---

## 1️⃣ Features

1. 🔍 Search weather by city  
2. 🌡 Current temperature  
3. 🤒 Feels like temperature  
4. 📉 Minimum / Maximum temperature  
5. 💧 Humidity  
6. 🌬 Wind speed  
7. 📊 Pressure  
8. 👁 Visibility  
9. 🌅 Sunrise & Sunset time  
10. 🌤 Weather icons  
11. 🕘 Search history stored in database  
12. 🖱 Click history to re-open weather  
13. 💎 Modern responsive glass UI  
14. ⚡ Fast API response  
15. 🔐 API key secured in backend using environment variables  

---

## 2️⃣ Tech Stack

### 2.1 Frontend
1. React.js  
2. Axios  
3. CSS (Glassmorphism, Grid, Flexbox)

### 2.2 Backend
1. Node.js  
2. Express.js  

### 2.3 Database
1. MongoDB  
2. Mongoose  

### 2.4 API Provider
1. OpenWeatherMap  

---

## 3️⃣ Project Structure

weather-mern/
│
├── backend/
│ ├── config/
│ │ └── db.js
│ ├── models/
│ │ └── History.js
│ ├── routes/
│ │ └── weatherRoutes.js
│ ├── server.js
│ └── .env
│
└── frontend/
├── src/
│ ├── components/
│ │ ├── Search.js
│ │ ├── WeatherCard.js
│ │ ├── History.js
│ │ └── Loader.js
│ ├── App.js
│ └── App.css


---

## 4️⃣ Environment Variables

Create a `.env` file inside the backend folder.

PORT=5000
MONGO_URI=your_mongodb_connection
OPENWEATHER_API_KEY=your_api_key


⚠️ Never expose API keys in the frontend.

---

## 5️⃣ How to Run Locally

### 5.1 Clone Repository
git clone <repo-url>


---

### 5.2 Setup Backend
cd backend
npm install
npm run dev


Backend runs on:
http://localhost:5000


---

### 5.3 Setup Frontend
cd frontend
npm install
npm start


Frontend runs on:
http://localhost:3000


---

## 6️⃣ API Flow

1. User searches a city in React  
2. Frontend sends request to Express backend  
3. Backend fetches weather data from OpenWeather API  
4. Backend transforms and sends structured response  
5. Data is stored in MongoDB  
6. React updates UI and history cards  

---

## 7️⃣ Learning Highlights

This project demonstrates:

1. REST API integration  
2. Backend data transformation  
3. Environment variable security  
4. MongoDB schema design  
5. React state management  
6. Conditional rendering  
7. Defensive UI programming  
8. Reusable component architecture  
9. Async operations with Axios  
10. Full-stack communication  

---

## 8️⃣ Future Improvements

1. 5-day / hourly forecast  
2. Auto-detect user location  
3. Favorite cities  
4. Remove duplicate searches  
5. Charts & analytics  
6. Weather-based dynamic backgrounds  
7. User authentication  
8. Deployment pipeline  

---

## 9️⃣ Author

**Prateek**  
MERN Stack Developer