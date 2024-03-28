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
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                {
                    booksAll.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;