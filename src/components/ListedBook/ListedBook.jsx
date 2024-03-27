import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreReadBook, getStoreWishlist } from "../../Utility/localStorage";
import DisplayShow from "../DisplayShow/DisplayShow";


const ListedBook = () => {
    const books = useLoaderData();
    const [addBooks, setAddBooks] = useState([]);
    const [addWish, setAddWish] = useState([]);

    const [displayAll, setDisplayAll] = useState([]);
    const [displayRead, setDisplayRead] = useState([]);
    const [displayWish, setDisplayWish] = useState([]);


    let temp;


    // const handleDisplaySort = sort => {
    //     if (sort === 'rating') {
    //         const sortedNumbers = addBooks.slice().sort((a, b) => b.rating - a.rating);
    //         setDisplayAll(sortedNumbers);
    //         // console.log(addBooks)
    //     }
    //     else if (sort === 'pages') {
    //         const sortedNumbers = addBooks.slice().sort((a, b) => b.totalPages - a.totalPages);
    //         setDisplayAll(sortedNumbers);
    //     }
    //     else if (sort === 'publish') {
    //         const sortedNumbers = addBooks.slice().sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    //         setDisplayAll(sortedNumbers);

    //     }

    // };

    //   setDisplayAll();


    const handleDisplayRead = () => {

        setDisplayAll(displayRead);
        temp = displayRead;

    }

    const handleDisplayWish = () => {

        setDisplayAll(displayWish);

        temp = displayWish;
    }





    const handleDisplaySort = sort => {
        if (sort === 'rating') {
            const sortedNumbers = temp.slice().sort((a, b) => b.rating - a.rating);
            setDisplayAll(sortedNumbers);
            // console.log(addBooks)
        }
        else if (sort === 'pages') {
            const sortedNumbers = temp.slice().sort((a, b) => b.totalPages - a.totalPages);
            setDisplayAll(sortedNumbers);
        }
        else if (sort === 'publish') {
            const sortedNumbers = temp.slice().sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
            setDisplayAll(sortedNumbers);

        }

    };



    useEffect(() => {
        const storeBookIds = getStoreReadBook();
        const storeWishIds = getStoreWishlist();
        if (books.length > 0) {
            const bookAdd = books.filter(book => storeBookIds.includes(book.bookId))


            const wishAdd = books.filter(wish => storeWishIds.includes(wish.bookId))

            // console.log(bookAdd);
            // console.log(wishAdd)

            setAddBooks(bookAdd);
            setDisplayRead(bookAdd);


            setAddWish(wishAdd);
            setDisplayWish(wishAdd);

        }


    }, [books])







    return (
        <div>
            <p>listedBook:{addBooks.length}</p>
            <p>listedWishListBook:{addWish.length}</p>

            <div>
                <details className="dropdown">
                    <summary className="m-1 btn">Sort By</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => handleDisplaySort('rating')}><a>Rating</a></li>
                        <li onClick={() => handleDisplaySort('pages')}><a>Number of Pages</a></li>
                        <li onClick={() => handleDisplaySort('publish')}><a>Publisher year</a></li>
                    </ul>
                </details>
            </div>
            <div>
                <button onClick={handleDisplayRead} className="btn">Read Books</button>
                <button onClick={handleDisplayWish} className="btn">Wishlist Books</button>
            </div>

            <div>
                <ul>
                    {/* {
                        displayAll.map(book => <DisplayShow key={book.bookId} book={book}></DisplayShow>)
                    } */}

                    {
                        displayAll.map((bookmark) => <DisplayShow
                            key={bookmark.bookId}
                            bookmark={bookmark}
                        >  </DisplayShow>)

                    }
                </ul>

            </div>





        </div>
    );
};

export default ListedBook;