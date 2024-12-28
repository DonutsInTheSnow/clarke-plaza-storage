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
import Business from './components/Business';
import BottomNav from './components/BottomNav';
import Footer from './components/Footer';
import './App.css';

const stripePromise = loadStripe('pk_test_51QXPEkIplsHMw5nPyklN27i0iOACGDzjPD5Nnm1I3AAvOK1qG7MIf6PmAHbgBVntHx64zSndvzjhOlcUDdshBlN800Z1pgT3zK');

function App() {
  return (
    <Router>
      <Routes>
        <Route
          id="root"
          path="/"
          element={
            <>
              <BottomNav />
              <Hero />
              <About />
              <Business />
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
              <Footer />
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
