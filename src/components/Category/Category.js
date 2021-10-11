import React from 'react'

export default function Category({ categoryName, children }) {
  return (
    <div>
      <h2>{ categoryName }</h2>
      { React.Children.count(children) > 0 ? children : <p>Pas d'items</p> }
    </div>
  )
}
