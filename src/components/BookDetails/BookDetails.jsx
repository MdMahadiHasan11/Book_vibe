import { useLoaderData, useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import ListedBook from "../ListedBook/ListedBook";
// import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { saveReadBook, saveWishlist } from "../../Utility/localStorage";

import { getStoreReadBook, getStoreWishlist } from "../../Utility/localStorage";

const BookDetails = () => {



    // const [addBooks, setAddBooks] = useState([]);
    // const [addWish, setAddWish] = useState([]);



    const books = useLoaderData();
    const { bookId } = useParams()
    const book1 = books.find(book => book.bookId === parseInt(bookId));
    // console.log(book1);


    // const storeBookIdss = getStoreReadBook();
    // const storeWishIdss = getStoreWishlist();

    // const [addBooksid, setAddBooksid] = useState([]);
    // const [addWishid, setAddWishid] = useState([]);

    // useEffect(() => {
    //     const storeBookIds = getStoreReadBook();
    //     const storeWishIds = getStoreWishlist();
    //     // setAddBooksid(storeBookIds);
    //     // setAddWishid(storeWishIds);
    
    // }, [])
    // const storeBookIdss = localStorage.getItem('read-mark');
    const storeBookIds = getStoreReadBook();
        const storeWishIds = getStoreWishlist();




    const handleRead = (bookId) => {

      
        const isExist = storeBookIds.find(id => id === parseInt(bookId));


        if (!isExist) {
     
            saveReadBook(parseInt(bookId));
            toast('Books Added to Read List')

            // localStorage.setItem('read-mark',JSON.stringify(storeReadBook))

        }
        // if()
        // saveReadBook(parseInt(bookId))
        else toast('You have Already Read this Books')
        // console.log(addBooks);

    }

    const handleWishlist = () => {
        // saveWishlist(parseInt(bookId))
        // toast('Success Wishlist')



        const isExist = storeWishIds.find(id => id === parseInt(bookId))
        const isExist2 = storeBookIds.find(id => id === parseInt(bookId));


        if (!(isExist || isExist2)) {

            saveWishlist(parseInt(bookId))
            toast('Books Added To Wishlist')

        }
        else if (isExist && !(isExist2)) {
            toast('You have Already Added To Wishlist')

        }

        else toast('You have Already Read this Books')


    }


    return (
        <div>

            <ToastContainer />


            <div className="">
                <div className="flex lg:flex-row gap-6">
                    <div className="w-1/2 rounded-2xl flex justify-center items-center  bg-base-200">

                        <img src={book1.image} className=" h-full  p-16" />




                    </div>

                    <div className="w-1/2">
                        <h1 className="text-5xl font-bold mt-8">{book1.bookName}</h1>
                        <h3 className="font-medium my-5">By : {book1.author}</h3>

                        <hr className="my-3"></hr>
                        <h6>{book1.category}</h6>
                        <hr className="my-3"></hr>

                        <p className="py-6"><span className="font-bold ">Review :</span> <span className="text-gray-400">{book1.review}</span></p>
                        <div className="flex gap-5 ">
                            <p className="font-bold"> Tag</p>
                            <div className="flex gap-10">
                                <p className="text-green-500"># {book1.tags[0]}</p>
                                <p className="text-green-500"># {book1.tags[1]}</p>

                            </div>
                        </div>

                        <hr className="my-3"></hr>


                        <div className=" flex  gap-14">
                            <div>
                                <p>Number of Pages:</p>
                                <p className="my-3">Publisher:</p>
                                <p>Year of Publishing:</p>
                                <p className="my-3" >Rating:</p>
                            </div>

                            <div className="font-bold">
                                <p>{book1.totalPages}</p>
                                <p className="my-3">{book1.publisher}</p>
                                <p>{book1.yearOfPublishing}</p>
                                <p className="my-3">{book1.rating}</p>

                            </div>
                        </div>


                        <div className="flex gap-5">
                            <button onClick={() => { handleRead(bookId) }} className="btn px-10  font-bold bg-green-500">Read</button>
                            <button onClick={handleWishlist} className="btn bg-cyan-400  font-bold px-7">Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default BookDetails;