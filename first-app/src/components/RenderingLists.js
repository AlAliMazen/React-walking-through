import React from 'react'
import Book from './Book'

function RenderingLists() {
    /**
     * when we are dealing with a list of thning, it is better to use a kind of loop to go over each item and
     * perform a process on it.
     * The importat thing to take away from this lesson is to use the map function from JS which takes a list
     * of items and returns a list of item with the required process performed on it
     * consider if we have a list of books which we want to show in int eh App with title number of pages and 
     * cover image as well as the author 
     * 
     */
    const BookList=[
        'To Kill a Mockingbird',
        'The Great Gatesby',
        'The Catcher in the Rye'
    ]

    /**
     * Another important thing to consoder when using the map method appears when we inspect the page, every child of
     * the mao needs a uuique key -> where to get it?
     * In fact, the key is nothing but a way to help React to keep track of the DOM and knows exactly what to update 
     * If we consider the arrays examples, we can use book as a key as for the array has nothing but a string 
     * on the other hand, we can use the book.title as a key in the books array to solve this problem
     * 
     * Keep in mind the following point:
     * 1- key is a reserved word for React and don't trry to access it from the child component 
     * 2- Keep the key in the outermost element in html
     * 3- in some cases we can use index a a second parameter for the map function but it has special 
     * cases, read about them online :-) 
     */
    const Books=[{
            title:"The Merchant of Venice",
            author:"William Shakespear",
            pages:110
        },
        {
            title:"Permanent Record",
            author:"Edward Snowden",
            pages:250
        },
        {
            title:"Angels and Demons",
            author:"Dan Brown",
            pages:110
        },
        {
            title:"Sons and Lovers",
            author:"D. H. Lawrence",
            pages:110
        },
    ]
  return (
    <div>
        {/*BookList.map(book=>{return <h1>{book}</h1>})*/}
        <hr/>
        {
            Books.map(book=>{
                return <Book key={book.title} book={book}/>
            })
        }
    </div>
  )
}

export default RenderingLists