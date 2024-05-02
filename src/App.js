
import React from 'react';
import './App.css';
import Main from './components/Main'
import Nav from './components/Nav';
import Footer from './components/Footer';
import BookingForms from './components/BookingForm';

function App() {
  return (
    <>
      <Nav />
      <Main/>
      <BookingForms/>
      <Footer />
    </>
  );
}

export default App;
