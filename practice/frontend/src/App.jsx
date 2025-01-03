import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(true);  // Add loading state

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
        setLoading(false);  // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching jokes:", error);
        setLoading(false);  // Set loading to false if there is an error
      });
  }); // Empty dependency array to run only once

  return (
    <>
      <h1>muhammad hanzla</h1>
      <p>Jokes: {jokes.length}</p>

      {loading ? (
        <p>Loading jokes...</p>  // Show loading message while fetching
      ) : (
        jokes.map((joke, index) => (
          <div key={joke.id}>
            <p>{joke.joke}</p>
            <p>{joke.punchline}</p>
          </div>
        ))
      )}
    </>
  );
}

export default App;
