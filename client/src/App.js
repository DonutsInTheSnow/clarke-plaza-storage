import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StorageUnits from './components/StorageUnits';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Checkout from './components/Checkout';
import Confirmation from './components/Confirmation';
import Success from './components/Success';
import Cancel from './components/Cancel';
import Hero from './components/Hero';
import About from './components/About';
import BottomNav from './components/BottomNav';
import Footer from './components/Footer';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const stripePromise = loadStripe('pk_test_51QNeVREsjKcEVPdeUjDik70SFVHHMj1ZRiuS5A1nDaPSQIVAlGfdWKgvg2arB186ytYebkDhqeRf1CV4bn7TtR4J00HhrRwGIp');

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <BottomNav />
              <Hero />
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/checkout"
          element={
            <Elements stripe={stripePromise}>
              <Checkout />
            </Elements>
          }
        />
        <Route 
          path="/storageunits" 
          element={
            <>
              <BottomNav />
              <StorageUnits />
            </>
          } 
        />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>
    </Router>
  );
}

export default App;
