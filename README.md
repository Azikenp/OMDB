# 🎬 Movie Search App

A React-based movie search application that uses the OMDb API to fetch and display movie results with pagination. Built with **React, TypeScript, Axios, and Tailwind CSS**.

## 🚀 Features

- **Search Movies**: Users can search for movies by name.
- **Movie Details**: Clicking a movie navigates to its detailed page.
- **Error Handling**: Handles API errors.
- **Loader**: Displays a loading indicator while fetching data.

---

## 🛠️ Tech Stack

- **React** (with TypeScript)
- **React Router** (for navigation)
- **Axios** (for API requests)
- **Tailwind CSS** (for styling)
- **OMDb API** (for fetching movie data)

---



## 🔧 Installation

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/Azikenp/OMDB.git
```

### 2️⃣ Install Dependencies

```sh
npm install 
```

### 3️⃣ Set Up API Key

Create a `.env` file in the root directory and add:

```sh
VITE_API_KEY=your_omdb_api_key
```

Replace `your_omdb_api_key` with your **OMDb API key**.

### 4️⃣ Run the Project

```sh
npm run dev  
```

The app will be available at `http://localhost:3000/`.

---

## 🔍 API Integration

### `OmdbApi.ts`

Handles all API calls using **Axios**.

```ts
import axios from "axios";


const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

const movieUrl = `${BASE_URL}?apikey=${API_KEY}`;


export const searchMovies = async (query: string) => {
  try {
    const response = await axios.get(
      `${movieUrl}&s=${encodeURIComponent(query)}`
    );

    if (!response.data.Search) {
      throw new Error("No movies found");
    }

    return response.data.Search; 
  } catch (error) {
    handleError(error);
  }
};
```

---

## 📜 Usage

### 🔎 Searching for Movies

1. Enter a movie name in the search box.
2. Click the **Search** button.
3. The app displays **10 movies** with a poster, title, and year.

### 📜 Viewing Movie Details

1. Click on a movie card to navigate to `/movie/:id`.
2. The **MovieDetail.tsx** page fetches full movie details from OMDb API.

---

## 📌 Components Breakdown

### 📌 `SearchComponent.tsx`

- **Handles user input** and calls `searchMovies()`.
- **Displays search results**.

### 📌 `MovieList.tsx`

- **Displays movie posters and titles**.
- **Links to the detailed movie page**.

### 📌 `MovieDetail.tsx`

- **Fetches and displays full movie details** based on `id`.

### 📌 `Loader.tsx`

- **Displays a loading animation** while fetching data.

---


## 🤝 Contributing

1. Fork the repo.
2. Create a new branch: `git checkout -b feature-branch`
3. Commit your changes: `git commit -m "Added a new feature"`
4. Push to the branch: `git push origin feature-branch`
5. Open a **Pull Request**

---


