import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
    const [booksAll,setBooksAll]= useState([]);

    useEffect( () =>{
        fetch('BookData.json')
        .then(res => res.json())
        .then( data => setBooksAll(data));

    },[])
    // console.log(booksAll);
    return (
        <div>
            <div className="grid grid-cols-3 gap-6">
                {
                    booksAll.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;