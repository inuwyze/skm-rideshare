import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

const useGeolocation = () => {
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    (async () => {
      console.log('olaa')
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status === 'granted') {
          const location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });
          const { latitude, longitude } = location.coords;
          setCoordinates({ latitude, longitude });
          
          // sendCoordinatesToApi(latitude, longitude);
        } else {
          console.log('Location permission denied');
        }
      } catch (error) {
        console.log('Error:', error);
      }
    })();
  }, []);

  const sendCoordinatesToApi = async (latitude, longitude) => {
    const apiUrl = 'https://example.com/api/endpoint'; // replace with your API endpoint

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ latitude, longitude }),
      });

      if (response.ok) {
        console.log('Coordinates sent to API successfully');
      } else {
        console.log('Failed to send coordinates to API');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return coordinates;
};

export default useGeolocation;
