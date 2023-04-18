import React from 'react';

const Square = ({ val, chooseSquare }) => {
    return (
        <div className='squre' onClick={chooseSquare}>
            {val}
        </div>
    )
}

export default Square;