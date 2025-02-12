import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { APIProvider, Map } from '@vis.gl/react-google-maps';

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
const GoogleMap = () => {
  <APIProvider
    apiKey={GOOGLE_MAPS_API_KEY}
    onLoad={() => console.log('Maps API has loaded.')}
  >
    <Map
      style={{ height: '100vh', width: '100vw' }}
      defaultZoom={13}
      defaultCenter={{ lat: -33.860664, lng: 151.208138 }}
      onCameraChanged={(ev) =>
        console.log(
          'camera changed:',
          ev.detail.center,
          'zoom:',
          ev.detail.zoom
        )
      }
      gestureHandling={'greedy'}
      disableDefaultUI={true}
    />
  </APIProvider>;
};

const root = createRoot(document.querySelector('#app'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default GoogleMap;
