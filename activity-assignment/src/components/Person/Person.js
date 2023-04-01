import React from 'react';
import './Person.css'

const Person = () => {
    return (
        <div className='person'>
           <h2>Rashedul Islam</h2>
           <p>Dhaka, Bangladesh</p> 
           <div className='person-info'>
            <div>
                <h3>75 <small>kg</small></h3>
                <p>Weight</p>
            </div>
            <div>
                <h3>6.5</h3>
                <p>Height</p>
            </div>
            <div>
                <h3>25 <small>yrs</small></h3>
                <p>Age</p>
            </div>
           </div>
        </div>
    );
};

export default Person;