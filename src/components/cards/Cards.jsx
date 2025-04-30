import React from 'react'

function Cards(props) {
  return (
    <>
<div className="card mb-2">
  <div className="card-header">
    Pavadinimas: {props.productName.toUpperCase()}
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Vienetai: {props.productQuantity} Kiekis dėžėje: {props.productBoxQuantity}</li>
    <li className="list-group-item">Paletės: {props.totalPallets} Dėžės: {props.totalBoxes} Likutis: {props.totalRemainder}</li>
  </ul>
  <button type="button" onClick={props.onDelete} className="btn btn-danger">Trinti</button>
</div>
    </>
  )
}

export default Cards