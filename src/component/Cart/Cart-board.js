import React, { useContext } from 'react';

import Divider from '@material-ui/core/Divider';

import SelectedColors from './SelectedColors';
import PreviouslySavedColorPalettes from './PreviouslySavedColorPalettes';

import { ColorsContext } from '../../Contexts/ColorsContext';

const CartBoard = () => {

    const { prevSavedColorPalette } = useContext(ColorsContext);

    return (
        <div>
            {prevSavedColorPalette}
            <SelectedColors />

            <Divider />

            <PreviouslySavedColorPalettes />
        </div>
    );
}

export default CartBoard