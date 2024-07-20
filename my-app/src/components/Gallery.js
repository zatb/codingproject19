import React, { useState, useEffect } from 'react';
import Tour from './Tour';

const API_URL = 'https://course-api.com/react-tours-project';

function Gallery() {

  // Store the fetched data in a state variable via useState.
  const [tours, setTours] = useState([]);

  // Handle and display loading and error states effectively.
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');


  // Fetch tour data from the API (https://course-api.com/react-tours-project) upon component mount using useEffect.
  useEffect(() => {
    fetchTours();
  }, []);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Failed to fetch tours');
      }
      const data = await response.json();
      setTours(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const removeTour = (id) => {
    setTours(tours.filter(tour => tour.id !== id));
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <section>
      {tours.map((tour) => (
        <Tour key={tour.id} {...tour} removeTour={removeTour} />
      ))}
    </section>
  );
}

export default Gallery;