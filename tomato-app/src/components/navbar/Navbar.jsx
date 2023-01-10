import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className='navbar'>
        <div className="title">
          <h1>Tomaten Kollektion</h1>
        </div>
        <div className='links'>
          <Link to={'/'}>Kollektion</Link>
          <Link to={'/create'}>Neue Tomate</Link>
        </div>
    </nav>
  )
}

export default Navbar