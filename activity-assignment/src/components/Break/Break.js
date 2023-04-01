import React from 'react';
import './Break.css'

const Break = (props) => {
    const {handleBreak} = props;
    return (
        <div>
            <h2>Add a Break</h2>
            <div className='break-time'>
                <button onClick={()=>handleBreak(10)}>10s</button>
                <button onClick={()=>handleBreak(20)}>20s</button>
                <button onClick={()=>handleBreak(30)}>30s</button>
                <button onClick={()=>handleBreak(40)}>40s</button>
            </div>
        </div>
    );
};

export default Break;