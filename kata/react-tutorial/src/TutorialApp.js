// src/TutorialApp.js
import React, { useState } from 'react';

const tutorials = [
  { title: 'React Tutorial 1', url: 'react-tutorial-1.html' },
  { title: 'React Tutorial 2', url: 'react-tutorial-2.html' },
  { title: 'React Tutorial 3', url: 'react-tutorial-3.html' },
];

const TutorialApp = () => {
  const [selectedUrl, setSelectedUrl] = useState(tutorials[0].url);

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ width: '200px', backgroundColor: '#f4f4f4', padding: '10px' }}>
        <h3>Tutorials</h3>
        <ul>
          {tutorials.map((tutorial, index) => (
            <li key={index} style={{ cursor: 'pointer', marginBottom: '5px' }} onClick={() => setSelectedUrl(tutorial.url)}>
              {tutorial.title}
            </li>
          ))}
        </ul>
      </div>
      <div style={{ flex: 1, padding: '10px' }}>
        <iframe
          src={selectedUrl}
          title="tutorial"
          style={{ width: '100%', height: '100%', border: 'none' }}
        />
      </div>
    </div>
  );
};

export default TutorialApp;