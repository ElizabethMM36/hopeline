// src/components/SupportLocator.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SupportLocator = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    axios.get("https://ipapi.co/json/")
      .then(res => {
        setLocation(res.data);
      })
      .catch(() => setLocation(null));
  }, []);

  return (
    <div className="support-locator">
      <h3>📍 Support Near You</h3>
      {location ? (
        <>
          <p>You seem to be in <strong>{location.city}, {location.region}</strong></p>
          <ul>
            <li>📞 Local Helpline: 1800-123-4567</li>
            <li>🏥 Rehab Center: SafeSteps Clinic, {location.city}</li>
            <li>💬 24x7 Chat Support: <a href="https://7cups.com" target="_blank">7cups.com</a></li>
          </ul>
        </>
      ) : (
        <p>Detecting your location...</p>
      )}
    </div>
  );
};

export default SupportLocator;
