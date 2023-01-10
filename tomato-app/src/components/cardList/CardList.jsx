import React from 'react'
import { Link } from 'react-router-dom';
import { GiTomato } from 'react-icons/gi';


function CardList({ items, type }) {

  return (
    <div>
      <h2>{ type }</h2>
      {items.map((item) => (
        <div className="card-list" key={item.id}>
          <Link to={`/items/${item.id}`}>
            <div className="card-row">
              <div className="icon">
                <GiTomato />
              </div>
              <div className="name">
                <h3>{ item.name }</h3>
                <p>{ item.type }</p>
              </div>
            </div>
          </Link>
        </div>
    ))}
    </div>
  )
}

export default CardList;
