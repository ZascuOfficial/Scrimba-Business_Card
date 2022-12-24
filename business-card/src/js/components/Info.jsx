import React from 'react';

import Details from './Details';
import About from './About';
import Interests from './Interests';

export default function Info() {
  return (
    <section id='info'>
      <Details />
      <About />
      <Interests />
    </section>
  );
}