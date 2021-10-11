import React from 'react'

export default function CategoryItem({ item }) {
  return (
    <li>
      <strong style={{ color: !item.stocked && 'red' }}>{ item.name }</strong> - <span>{ item.price }</span>
    </li>
  )
}
