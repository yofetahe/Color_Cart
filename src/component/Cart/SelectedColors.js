import React, { useContext } from 'react';

import { ColorsContext } from '../../Contexts/ColorsContext';
import Color from './Color';

import './Cart.css';

const SelectedColors = () => {

    const { selectedColors, handleInputChange, handleFormSubmition } = useContext(ColorsContext);

    return (
        <div className="content">
            <h3 className="title">Your Current color Cart Palette</h3>

            {selectedColors.length > 0 ? selectedColors.map(color => {
                return <Color key={color.id} color={color} />
            }): <div className="no-content">There is no selected color</div>}

            <h5 className="small-title">Name and Save your color Palette</h5>
            <form onSubmit={(e) => handleFormSubmition(e)}>               
                <input type="text" placeholder="Color Palette Name" 
                    name="colorPaletteName" id="colorPaletteName"
                    onChange={(e) => handleInputChange(e.target.value)}/>
                <button type="submit">Save Palette</button>
            </form>
        </div>
    );
}

export default SelectedColors;