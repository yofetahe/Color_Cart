import React, {useContext} from 'react';

import Color from './Color';

import { ColorsContext } from '../../Contexts/ColorsContext';

const ColorBoard = (props) => {
    
    const { colorsList, LoadMore } = useContext(ColorsContext);

    // const colors = ["#bb2341", "#23A4BB", "#2c2c2c", "#C68135", "#BB23A8", "#9DB77A", "#06691A"];
        
    return (
        <div>            
            <div>
                {colorsList && colorsList.map(color => {
                    return <Color key={color.id} color={color} />
                })}
            </div>
            <button onClick={LoadMore}>Load More</button>
        </div>
    )
}

export default ColorBoard;