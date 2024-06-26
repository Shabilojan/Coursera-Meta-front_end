import React, { useReducer } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Booking from './Booking';
import Header from './Header'; 

const Main = () => {

  const fetchAPI = function(date) {
    let result = [];
    for (let i = 17; i <= 23; i++) {
      if (Math.random() < 0.5) {
        result.push(i + ':00');
      } else {
        result.push(i + ':30');
      }
    }
    return result;
  };

  const submitAPI = function(formData) {
    return true;
  };

  const initialState = { availableTimes: fetchAPI(new Date()) };
  const [state, dispatch] = useReducer(updateTimes, initialState);

  function updateTimes(state, date) {
    return { availableTimes: fetchAPI(date) };
  }

  const navigate = useNavigate(); // Import and initialize useNavigate

  function submitForm(formData) {
    if (submitAPI(formData)) {
      navigate("/confirmed"); 
    }
  }

  return (
    <main>
      <Routes>
        <Route path='/' element={<Header />} />
        <Route 
          path='/booking' 
          element={<Booking availableTimes={state.availableTimes} dispatch={dispatch} submitForm={submitForm} />} 
        />
        <Route path='/Booking' element={<Booking />} />
        <Route path='*' element={<Header />} /> 
      </Routes>
    </main>
  );
};

export default Main;
