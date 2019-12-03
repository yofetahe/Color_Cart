import React, { createContext, useState, useEffect } from 'react';
// import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { client } from '../API/api-call'

export const ColorsContext = createContext();

const ColorsContextProvider = (props) => {

    const [colorsList, setColorsList] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);
    const [count, setCount] = useState(0);
    const [colorNumber, setColorNumber] = useState(21);
    const [colorPaletteName, setColorPaletteName] = useState("");
    const [prevSavedColorPalette, setPrevSavedColorPalette] = useState([]);

    // const LOAD_MORE_COLOR = gql`
    // {
    //     colors(
    //         orderCol: "rgb"
    //         sortBy: "id"
    //         numResults: 50
    //         resultOffset: 50) {
    //             id
    //             title
    //             hex
    //             imageUrl
    //     }
    // }`;
    function LoadMore() {
        setColorNumber(prevNum => prevNum + 21);
        client.query({
            query: gql`
            {
                colors(
                    orderCol: "rgb"
                    sortBy: "id"
                    numResults: ${colorNumber}
                    resultOffset: ${colorNumber}) {
                        id
                        title
                        hex
                        imageUrl
                }
            }`
        })
        .then(result => {
            setColorsList(result.data.colors)
        });      
        // const { loading, error, data } = useQuery(LOAD_MORE_COLOR).then(result => setColorsList(result.data.colors));    
    }

    function handleColorSelection(color) {
        if(!selectedColors.includes(color)){
            var c = selectedColors;        
            c.push(color);
            setSelectedColors(c);
            setCount(prevCount => prevCount + 1);
            document.getElementById(color.id).style.boxShadow = "4px 4px #888888";            
        }
    }

    function handleColorDeletion(color) {
        var c = selectedColors.filter(c => c !== color);
        setCount(prevCount => prevCount - 1);
        setSelectedColors(c);
    }

    // const COLORS_LIST = gql`
    // {
    //     colors(
    //         orderCol: "rgb"
    //         sortBy: "id"
    //         numResults: 28
    //         resultOffset: 28) {
    //             id
    //             title
    //             hex
    //             imageUrl
    //     }
    // }`;
    useEffect(()=> {
        client.query({
            query: gql`
            {
                colors(
                    orderCol: "rgb"
                    sortBy: "id"
                    numResults: ${colorNumber}
                    resultOffset: ${colorNumber}) {
                        id
                        title
                        hex
                }
            }`
        })
        .then(result => {
            setColorsList(result.data.colors)
        });
    },[])

    const handleInputChange = (value) =>{
        
        setColorPaletteName(value);
    }

    const handleFormSubmition = (event) => {
        if(selectedColors.length > 0 && colorPaletteName !== ""){
            event.preventDefault();

            var col = selectedColors;
            var deleteCell = {
                id: 0,
                hex: "f8f9fa",
                title: "DeletePalette"
            }
            col.push(deleteCell);
            setSelectedColors(col);
            console.log(selectedColors);

            var val = prevSavedColorPalette;            
            var newColorPalatte = {
                id: 1,
                title: colorPaletteName,
                colors: selectedColors
            }
            val.push(newColorPalatte);
            setPrevSavedColorPalette(val);
            setCount(prevCount => prevCount + 1);
            setSelectedColors([]);
        }
    }

    function handleColorPaletteDeletion(paletteId){
        console.log(paletteId);
        var colorPalettes = prevSavedColorPalette.filter(c => paletteId !== c.id);
        setPrevSavedColorPalette(colorPalettes);
    }

    return (
        <ColorsContext.Provider value={{ 
            colorsList, 
            selectedColors, 
            handleColorSelection, 
            handleColorDeletion, 
            count, 
            LoadMore, 
            handleFormSubmition, 
            handleInputChange, 
            prevSavedColorPalette,
            handleColorPaletteDeletion }}>

            { props.children }
        </ColorsContext.Provider>
    );
}

export default ColorsContextProvider;