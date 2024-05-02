import React from 'react';
import BookingForms from './BookingForm'; // Corrected import path

const Booking = (props) => {
  return (
    <BookingForms
      availableTimes={props.availableTimes}
      submitForm={props.submitForm} // Assuming 'submitForm' is the correct prop name
    />
  );
};

export default Booking;
