import React from 'react';
// import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Create() {

  const [name, setName] = useState('');
  const [type, setType] = useState('Fleischtomate');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [maturation, setMaturation] = useState('früh');
  const [cultivation, setCultivation] = useState('Gewächshaus');
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // const [update, setUpdate] = useState('')
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = { name, type, height, weight, maturation, cultivation, description }

    setIsLoading(true);
    
    fetch('http://localhost:8000/items', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    }).then(() => {
      console.log('new item added');
      setIsLoading(false);
      navigate('/');
    })    
  }

  // const updateItem = () => {
  // }


  // useEffect(() => {
  //   const requestOptions = {
  //       method: 'PUT',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(updatedItem)
  //     };
  //     fetch(`http://localhost:8000/items/${id}`, requestOptions)
  //       .then(async response => {
  //         const data = await response.json();
  //         if (!response.ok) {
  //           const error = (data && data.message) || response.status;
  //           return Promise.reject(error);
  //         }
  //         setPostId(data.id);
  //       })
  //       .catch(error => {
  //         setErrorMessage(error);
  //         console.error('There is an error', error);
  //       })
    
  // }, []);


  return (

    <div className='main'>
      <div className="create">
        <h3>Neue Tomate</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-left">
            ((<label>Name</label>
            <input 
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label>Fruchttyp</label>
            <select 
              className="select"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="Fleischtomate">Fleischtomate</option>
              <option value="Salattomate">Salattomate</option>
              <option value="Cherrytomate">Cherrytomate</option>
              <option value="Flaschentomate">Flaschentomate</option>
            </select>

            <label>Wuchshöhe</label>
            <input 
              type="number"
              required 
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />

            <label>Fruchtgewicht</label>
            <input 
              type="number"
              required 
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />

            <label>Reifezeit</label>
            <select 
              className="select"
              value={maturation}
              onChange={(e) => setMaturation(e.target.value)}
            >
              <option value="früh">früh</option>
              <option value="mittel">mittel</option>
              <option value="spät">spät</option>
            </select>
            
            <label>Standort</label>
            <select 
              className="select"
              value={cultivation}
              onChange={(e) => setCultivation(e.target.value)}
            >
              <option value="Gewächshaus">Gewächshaus</option>
              <option value="Freiland unter Dach">Freiland unter Dach</option>
              <option value="Freiland">Freiland</option>
            </select>))
          </div>

          <div className="form-right">
            <label>Sortenbeschreibung</label>
            <textarea 
              type="text"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            { !isLoading && <button>Tomate hinzufügen</button> }
            { isLoading && <button>wird hinzugefügt...</button> }

          </div>
        </form>
      </div>
    </div>
  )
}

export default Create