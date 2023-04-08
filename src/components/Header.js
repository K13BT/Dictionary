

const Header = ({onChange, search, handleSubmit, data}) => {

  return (
    <header className="header">
        
        {(Object.keys(data).length === 0) && <h1 className="heading">Dictionary</h1>}
        <a href='/' >
          <i className="fas fa-book-open book"></i>
        </a>
        <form onSubmit={handleSubmit} className="form">
          <input onChange={onChange} value={search} placeholder='search...' type="text"/>
          <button>Search</button>
        </form >    
    </header>
  )
}

export default Header