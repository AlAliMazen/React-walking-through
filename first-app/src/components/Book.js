import React from 'react'

function Book(props) {
    const book=props.book
  return (
    <div>
        <h3>HHHHHHH</h3>
        <h4>{book.title}</h4>
        <p>{book.author}</p>
        <p>{book.pages}</p>
    </div>
  )
}

export default Book