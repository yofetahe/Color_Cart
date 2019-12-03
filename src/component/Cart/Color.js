import React, { useContext } from 'react';

import './Cart.css'
import DeleteIcon from '@material-ui/icons/Delete';

import { ColorsContext } from '../../Contexts/ColorsContext';

const Color = (props) => {

    const { handleColorDeletion } = useContext(ColorsContext);

    return (
        <div className="colorDisplay" 
            style={{backgroundColor: "#"+props.color.hex}}>
            <div> 
                {props.color.hex} 
                <span onClick={() => handleColorDeletion(props.color)}> <DeleteIcon fontSize="small" /> </span> 
            </div>
        </div>
    );
}

export default Color;