import * as React from 'react';
import { Navbar } from '../components/Navbar';
import { Announcement } from '../components/Announcement';
import { Slider } from '../components/Slider';
import { Categories } from '../components/Categories';
import { Products } from '../components/Products';
import { Newsletter } from '../components/Newsletter';
import { Footer } from '../components/Footer';

export const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products popular={true} />
      <Newsletter />
      <Footer />
    </div>
  );
};
