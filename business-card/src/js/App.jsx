import React from 'react';

import Info from './components/Info';
import Footer from './components/Footer';

import profilePicture from '../assets/profile-picture.png';

export default function App() {
  return (
    <div className="container">
      <img src={profilePicture} alt="profile-picture" className="profile-picture" />

      <Info />
      <Footer />
    </div>
  );
}