import React, { useContext } from 'react';

import './Cart.css'
import DeleteIcon from '@material-ui/icons/Delete';

import { ColorsContext } from '../../Contexts/ColorsContext';

const Color = (props) => {

    const { handleColorPaletteDeletion } = useContext(ColorsContext);

    return (
        <div className="colorDisplay" 
            style={{backgroundColor: "#"+props.color.hex}}>
            <div> 
                {props.color.id !== 0 ? props.color.hex : <DeleteIcon color="secondary" onClick={()=>handleColorPaletteDeletion(props.paletteId)} />} 
            </div>
        </div>
    );
}

export default Color;