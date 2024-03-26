import { useLoaderData, useParams } from "react-router-dom";
// import ListedBook from "../ListedBook/ListedBook";
// import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
import { saveReadBook , saveWishlist } from "../../Utility/localStorage";

const BookDetails = () => {



    // const [addBooks, setAddBooks] = useState([]);
    // const [addWish, setAddWish] = useState([]);



    const books = useLoaderData();
    const {bookId} = useParams()
    const book1 = books.find(book=> book.bookId === parseInt(bookId));
    // console.log(book1);





    const handleRead = (bookId)=>{

        // if()
        saveReadBook(parseInt(bookId))
        toast('Success read')
        // console.log(addBooks);

    }

    const handleWishlist = ()=>{
        saveWishlist(parseInt(bookId))
        toast('Success Wishlist')

    }


    return (
        <div>
            <p>ami book deatails:{bookId}</p> 
            <p>Book name:{book1.bookName}</p>
            <ToastContainer />
            <div className="flex gap-5">
                <button onClick={()=>{handleRead(bookId)}} className="btn bg-yellow-400">Read</button>
                <button onClick={handleWishlist} className="btn bg-yellow-400">Wishlist</button>
            </div>
        </div>
    );
};

export default BookDetails;