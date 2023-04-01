import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Break from '../Break/Break';
import Detail from '../Detail/Detail';
import Exercise from '../Exercise/Exercise';
import Person from '../Person/Person';
import './Routine.css'

const Routine = () => {
    const [exercises, setExercises] = useState([]);
    const [details, setDetails] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setExercises(data))
    }, [])
    const handleClick = (exercise) =>{
        console.log(exercise);
        const newDetails = [...details, exercise];
        setDetails(newDetails);
    }
    const [breakTime, setBreakTime] = useState('');
    const getOldbreak = localStorage.getItem('breakTime');
    const oldBreak = JSON.parse(getOldbreak);
    const handleBreak = (breaks) =>{
        if(oldBreak){
            setBreakTime(breaks);
            localStorage.setItem('breakTime', breaks);
        }
        else{
            localStorage.setItem('breakTime', breaks);
            setBreakTime(breaks);
        }
    }
    const notify = () => toast('All The Things Are Done.');
    return (
        <div className='routine-container'>
            <div className ="exercises-container" >
                <div className='title-container'>
                    <FontAwesomeIcon icon ={faDumbbell}></FontAwesomeIcon>
                <h2>Power Gymnasium</h2>
                </div>
                <h2>Select todays exercise</h2>
                <div className="exercises">
                {
                    exercises.map(exercise => <Exercise exercise = {exercise}
                    key ={exercise.id}
                    handleClick = {handleClick}
                    >  </Exercise>)
                }
                </div>
            </div>
            <div className="activities">
                <Person></Person>
                <Break handleBreak ={handleBreak}></Break>
                <Detail details ={details}
                breakTime = {breakTime}
                oldBreak= {oldBreak}></Detail>
                <div>
                <button onClick={notify} className='activity-button'>Activity</button>
                <Toaster></Toaster>
                </div>
            </div>
        </div>
    );
};

export default Routine;