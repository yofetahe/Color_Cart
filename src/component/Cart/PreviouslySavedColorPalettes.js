import React, { useContext } from 'react';

import './Cart.css';
import ColorPalette from './ColorPalette';

import { ColorsContext } from '../../Contexts/ColorsContext';

const PreviouslySavedColorPalettes = () => {
    
    const { prevSavedColorPalette } = useContext(ColorsContext);

    return (
        <div>            
            <h3 className="title">Previously saved color Palettes</h3>
            <div>
                {prevSavedColorPalette.map(color => {
                    return <ColorPalette color={color} key={color.id} />
                })}
            </div>
        </div>
    );
}

export default PreviouslySavedColorPalettes;