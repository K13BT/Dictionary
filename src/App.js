import './App.css';
import { useState} from 'react';
import WordPage from './components/WordPage';
import Header from './components/Header'

function App() {
  const [search, setSearch] = useState('')
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()
  
  const fetchData =  async (inputWord) => {
    await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputWord}`)
    .then(res => {
      if(!res.ok) {
        throw new Error('Word not found')
      }
      return res.json()
    })
    .then(data => {
        setData(data[0])
        setIsLoading(false)
    })
    .catch(error => {
      setError(error)
      setIsLoading(false)
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(search === '') {
      return
    }
    fetchData(search)
    setIsLoading(true)
    setSearch('')
  }

  const onChange = (e) => setSearch(e.target.value)

  if (isLoading) {
    return <h1 className='load'>Loading...</h1>
  }

  if (error) {
    return (
      <div className='err'>
        <h1 className='error'>Error: {error.message}</h1>
        <a href='/' className='btnBack'>Go back</a>
      </div>
    )
  }

  return (
    <div>
      <Header onChange={onChange} search={search} handleSubmit={handleSubmit} data={Object.keys(data).length !== 0 && data}/>
      {Object.keys(data).length !== 0 && <WordPage data={data}/>}  
    </div>
  );
}

export default App;
