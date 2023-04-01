import React from 'react';
import './Exercise.css'

const Exercise = (props) => {
    const {img,category,age,time} = props.exercise;
    const {handleClick} = props;
    return (
        <div className='exercise-container'>
           <img src={img} alt="" /> 
           <h3>{category}</h3>
           <p>For Age: {age}</p>
           <p>Time require: {time}s</p>
           <button onClick={()=> handleClick(props.exercise)}>Add To List</button>
        </div>
    );
};

export default Exercise;