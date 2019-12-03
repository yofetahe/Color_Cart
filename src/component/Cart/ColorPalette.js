import React from 'react';

import SavedColor from './SavedColor';

const ColorPalette = (props) => {
    return (
        <div>
            <h4>{props.color.title} - {props.color.colors.length} colors</h4>
            {props.color.colors.map(color => {
                return <SavedColor key={color.id} color={color} paletteId={props.color.id} />
            })}
        </div>
    );
}

export default ColorPalette;