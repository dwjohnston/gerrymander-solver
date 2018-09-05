import React from 'react';


export const District = ({ population, lean, maxPop }) => {

    const style = {
        backgroundColor: `rgba(${lean * 255}, 0, ${(1 - lean) * 255}, ${population / maxPop})`
    };

    return <div className="District" style={style}>

    </div>;
}; 
