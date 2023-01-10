import { useNavigate, useParams } from 'react-router-dom';
import useHook from '../useHook/useHook';
import { Link } from 'react-router-dom';

function CardDetails() {

const { id } = useParams()
const { data: item, error, isLoading } = useHook('http://localhost:8000/items/' + id)
const navigate = useNavigate();

const handleClick = () => {
  fetch('http://localhost:8000/items/' + item.id, {
    method: 'DELETE'
  }).then(() => {
    navigate('/');
  })
}

  return (
    <div className="main">
        { isLoading && <div>Loading...</div> }
        { error && <div>{ error }</div> }
        { item && (
            <div className="item-detail">
              
                <h2>{ item.name }</h2>

                <div className="info-box">

                  <div className="info-box-left">
                    <div className="info-box-row">
                      <p>Fruchttyp:</p>
                      <p>{ item.type }</p>
                    </div>
                    <div className="info-box-row">
                      <p>Wuchshöhe:</p>
                      <p>{ item.height } cm</p>
                    </div>
                    <div className="info-box-row">
                      <p>Fruchtgewicht:</p>
                      <p>{ item.weight } g</p>
                    </div>
                    <div className="info-box-row">
                      <p>Reifezeit:</p>
                      <p>{ item.maturation }</p>
                    </div>
                    <div className="info-box-row">
                      <p>Standort:</p>
                      <p>{ item.cultivation }</p>
                    </div>
                  </div>

                  <div className="info-box-right">
                    <button className="delete" onClick={handleClick}>löschen</button>
                  </div>
                  
                </div>

                <p>{ item.description }</p>

                <Link to="/" className='back-button'>zurück</Link>
                
            </div>
        )}

    </div>
  )
}

export default CardDetails