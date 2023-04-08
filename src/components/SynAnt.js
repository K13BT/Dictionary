import React from 'react'

const words = {
  borderRadius: '20px',
  border: '1px solid #aaa',
  margin: '10px',
  padding: 10,
  display: 'inline-block',
  color: '#ddd',
  fontSize: '20px'
}

const SynAnt = ({meanings}) => {
  return (
    <div>
        {meanings.map((meaning, index) => {
        return ( 
            <section key={index}>
              
              {(meaning.synonyms.length !== 0) && <div><h3>synonyms</h3> {meaning.synonyms.map((synonym, index) => <span key={index} style={words}>{synonym}</span>)}</div>}

              {(meaning.antonyms.length !== 0) && <div><h3>antonyms</h3> {meaning.antonyms.map((antonym, index) => <span key={index} style={words}>{antonym}</span>)}</div>}
              
            </section>
        )})}
    </div>
  )
}

export default SynAnt