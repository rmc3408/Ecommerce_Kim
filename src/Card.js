import React from 'react'

function Card(props) {
  return (
    <div className="w3-card w3-margin w3-col m6 l3" style={{ width: '20%' }}>
      <img src={props.avatar} alt="Avatar" style={{ width: '100%' }} />
      <div className="container">
        <h4>
          <b>{props.name}</b>
        </h4>
        <input type="text" value={props.name} onChange={props.onChangeName}/>
        <p>{props.ocup}</p>
      </div>
      {props.children}
      <div className="w3-bar w3-center">
        <button
          className="w3-bar-item w3-black w3-button"
          onClick={props.flipName}
        >
          newName
        </button>
      </div>
    </div>
  )
}

export default Card
