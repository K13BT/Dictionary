import React, { useState} from 'react'

const styles = {
  display: 'flex',
  justifyContent: 'flex-start',
  flexWrap: 'wrap',
}

const themeStyles = {
  margin: 20
}

const btnStyles = {
  borderRadius: '50%',
  border: 'none',
  margin: 10,
  backgroundColor: '#ccc'
}

const iconStyles = {
  padding: '5px',
  fontSize: '20px'
}

const phoneticStyles = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  fontSize: 20
}

const Phonetics = ({ phonetics, word }) => {
  const [audioState, setAudioState] = useState(phonetics.map(() => false));

  const toggleAudio = (index) => {
    setAudioState((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div style={themeStyles}>
      <h1>{word}</h1>
      <div style={styles}>
        {phonetics.map((phonetic, index) => (
          <div key={index} style={phoneticStyles}>
            <h3>{phonetic.text}</h3>
            <button onClick={() => toggleAudio(index)} style={btnStyles}>
              <i className="fas fa-volume-up" style={iconStyles}></i>
            </button>
            {audioState[index] && (
              <audio controls preload="auto">
                <source src={phonetic.audio} type="audio/mpeg" />
              </audio>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Phonetics