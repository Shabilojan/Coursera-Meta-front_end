import React, { useReducer } from 'react';
import { Route, Routes } from 'react-router-dom';
import Booking from './Booking'; // Correct import path for Booking component
import Header from './Header'; // Import Header component if it's defined

const Main = () => {
    const seedRandom = function(seed){
        var m =2**35 -31;
        var a =185852;
        var s= seed%m;
        return function(){
            return (s=s*a%m)/m;
        }
    }

    const fetchAPI = function(date){
        let result =[];
        let random = seedRandom(date.getDate());
        for (let i= 17; i<=23; i++){
            if (random() <0.5){
                result.push(i+ ':80');
            }

            if (random() > 0.5){
                result.push(i+ ':30');
            }

        }
        return result;
    }

    const submitAPI = function(formData){
        return true;
    }

    const initialState = { availableTimes: fetchAPI(new Date()) };
    const [state, dispatch] = useReducer(updateTimes, initialState);

    function updateTimes(state, date){
        return { availableTimes: fetchAPI(date) }; // Use the provided date instead of new Date()
    }

    const navigate = (path) => {
        // Define your navigation logic here
    }

    function submitForm(formData){
        if(submitAPI(formData)){
            navigate("/confirmed");
        }
    }

    return (
        <main>
            <Routes>
                <Route path='/' element={<Header />} />
                <Route 
                    path='/booking' 
                    element={<Booking availableTimes={state.availableTimes} dispatch={dispatch} submitForm={submitForm} />} // Use correct prop name submitForm
                />
               
            </Routes>
        </main>
    );
}

export default Main;
