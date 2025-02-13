import React, { useState, useEffect } from 'react';
import { GoogleMap, MarkerF } from '@react-google-maps/api';
import { GOOGLE_MAPS_API_KEY } from '../../../config';

const GoogleMapComponent = ({ address }) => {
  const [location, setLocation] = useState({ lat: -36.8485, lng: 174.7633 }); // Default Value (Auckland)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!address) return;

    const fetchCoordinates = async () => {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${GOOGLE_MAPS_API_KEY}`
        );
        const data = await response.json();

        if (data.status === 'OK') {
          const { lat, lng } = data.results[0].geometry.location;
          setLocation({ lat, lng });
        } else {
          console.error('Geocoding API error:', data.status);
        }
      } catch (error) {
        console.error('Error fetching geolocation:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCoordinates();
  }, [address]);

  return (
    <GoogleMap
      mapContainerStyle={{ width: '200px', height: '150px' }}
      center={location}
      zoom={15}
    >
      <MarkerF
        position={location}
        icon={{ url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png' }}
      />
    </GoogleMap>
  );
};

export default GoogleMapComponent;
