import { Link } from 'react-router-dom';

const NotFound = () => {
    return ( 
        <div className="main">
            <h2>Sorry!</h2>
            <p className='not-found-p'>Diese Seite kann nicht gefunden werden</p>
            <Link to="/" className='back-button'>Zurück zu Home</Link>
            
        </div>
     );
}
 
export default NotFound;