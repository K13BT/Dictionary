import React, { useState } from 'react'

const listStyles = {
  listStyleType: 'none',
  backgroundColor: '#444',
  borderRadius: '10px',
  padding: '15px 20px',
  margin: '15px 10px'
}

const egStyles = {
  color: '#bbb',
  margin: 5
}

const Meanings = ({meanings}) => {
  const [showAll, setShowAll] = useState({})

  const handleClick = index => {
    setShowAll({...showAll, [index]: !showAll[index]});
  }

  console.log(showAll)

  return (
    <div>
    {meanings.map((meaning, index) => (
      <section key={index}>
        <h1>{meaning.partOfSpeech}</h1>

        <div>
          {showAll[index] ? (
            meaning.definitions.map((definition, index) => (
              <li key={index} style={listStyles}>
                <p>{definition.definition}</p>
                {definition.example && (
                  <p style={egStyles}>
                    <b>e.g. </b>
                    {definition.example}
                  </p>
                )}
              </li>
            ))
          ) : (
            meaning.definitions.slice(0, 3).map((definition, index) => (
              <li key={index} style={listStyles}>
                <p>{definition.definition}</p>
                {definition.example && (
                  <p style={egStyles}>
                    <b>e.g. </b>
                    {definition.example}
                  </p>
                )}
              </li>
            ))
          )}
          <button onClick={() => handleClick(index)}> 
            Show {showAll[index] ? 'less' : 'more'}
          </button>
        </div>
      </section>
    ))}
  </div>
  )
}

export default Meanings


      