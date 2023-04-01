import React from 'react';
import './Detail.css'

const Detail = ({details, breakTime, oldBreak}) => {

    let total = 0;
    for(const detail of details){
         total = total + detail.time;
    }
    return (
        <div className='detail-container'>
            <h2>Exercise Details</h2>
            
            <div className='exercise-time-container'>
                <p>Exercise Time: {total} seconds</p>
            </div>
            <div className='break-time-container'>
                 <p>Break Time: {breakTime? breakTime:oldBreak? oldBreak:0} seconds</p>
            </div>
        </div>
    );
};

export default Detail;