import React from 'react'
import Phonetics from './Phonetics'
import Meanings from './Meanings'
import SynAnt from './SynAnt'

const wordStyles = {
    backgroundColor: '#ccc',
    color: '#000',
    margin: 0,
    padding: '10px 20px',
    fontSize: '3rem',
}

const WordPage = ({data}) => {

    const {word, phonetics, meanings} = data
 
    return (
    <div>
        <h1 style={wordStyles}>{word}</h1>
        <Phonetics phonetics={phonetics} word={word}/>
        <Meanings meanings={meanings}/>
        <SynAnt meanings={meanings}/>
        
    </div>
    )
}

export default WordPage