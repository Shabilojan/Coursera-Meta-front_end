
import React, { useState } from 'react';

const BookingForms = (props) => {
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("");
    const [decision, setDecision] = useState(""); 

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        if (props.submitForm) {
            props.submitForm({ date, times, guests, decision }); // Pass form data to submitForm function
        }
    }

    const handleChange = (e) => {
        setDate(e.target.value); 
        if (props.dispatch) {
            props.dispatch(e.target.value);
        }
    }

    const renderTimeOptions = () => {
        return (
            <>
                <option key="" value="" disabled>Select a Time</option>
                {props.availableTimes.map(time => <option key={time}>{time}</option>)}
            </>
        );
    }

    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor='book-date'>Choose date</label>
                            <input id='book-date' value={date} onChange={handleChange} type='date' required/>
                        </div>
                    </fieldset>

                    <fieldset>
                        <div>
                            <label htmlFor='book-time'>Choose time :</label>
                            <select id='book-time' value={times} onChange={(e) => setTimes(e.target.value)} required>
                                {renderTimeOptions()}
                            </select>
                        </div>
                    </fieldset>

                    <fieldset>
                        <div>
                            <label htmlFor='book-guests'>Number of guests</label>
                            <input id='book-guests' min='1' value={guests} onChange={(e) => setGuests(e.target.value)} type='number' required/>
                        </div>
                    </fieldset>

                    <fieldset>
                        <div>
                            <label htmlFor='book-decision'>Decision</label>
                            <select id='book-decision' value={decision} onChange={(e) => setDecision(e.target.value)} required>
                                <option value="">Select an Option</option>
                                <option value="Birthday">Birthday</option>
                                <option value="Anniversary">Anniversary</option>
                            </select>
                        </div>
                    </fieldset>

                    <fieldset>
                        <div className='btnReceive'>
                            <input aria-label='On click' type='submit' value={"Make Your Reservation"}/>
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
}

export default BookingForms;
