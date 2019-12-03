import React, { useContext } from 'react';

import './Colors.css'

import { ColorsContext } from '../../Contexts/ColorsContext';

const Color = (props) => {

    const { handleColorSelection } = useContext(ColorsContext);

    return (
        <div id={props.color.id} className="colorDisplay" 
            onClick={() => handleColorSelection(props.color)} 
            style={{backgroundColor: "#"+props.color.hex}}>
            {props.color.hex}
        </div>
    );
}

export default Color;