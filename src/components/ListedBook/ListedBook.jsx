import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import DisplayShow from "../DisplayShow/DisplayShow";
// import { useLoaderData } from "react-router-dom";
// import { getStoreReadBook, getStoreWishlist } from "../../Utility/localStorage";



const ListedBook = () => {

    // const books = useLoaderData();
    // const [addBooks, setAddBooks] = useState([]);
    // const [addWish, setAddWish] = useState([]);
    // const [displayRead, setDisplayRead] = useState([]);
    // const [displayWish, setDisplayWish] = useState([]);

    const [displayAll, setDisplayAll] = useState([]);
    const [temp, setTemp] = useState([]);


    

    




    // clicked check
    const [clicked, setClicked] = useState(false);
    const [clicked1, setClicked1] = useState(false);




    // Two Button Handle Start
    const handleDisplayRead = () => {
        setClicked(true);
        setClicked1(false);



        setDisplayAll(appliedData);
        setTemp(appliedData);

    }

    // useEffect(() => {
    //     setDisplayAll(appliedData);
    //   }, [appliedData]);
      

    const handleDisplayWish = () => {

        setClicked1(true);
        setClicked(false);

        setDisplayAll(appliedWishData);

        setTemp(appliedWishData);
    }
    // Two Button Handle End






    // sorting function start

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
    // sorting function end




    // Get local storage Data And Set State Start
    const [appliedData, setAppliedData] = useState([]);
    const [appliedWishData, setAppliedWishData] = useState([]);
    // console.log(appliedData);


    
    useEffect(() => {
        const getDefaultData = JSON.parse(localStorage.getItem("read-mark")) || [];
        setAppliedData(getDefaultData);

        const getDefaultData1 = JSON.parse(localStorage.getItem("wish-mark")) || [];
        setAppliedWishData(getDefaultData1);

        //  setDisplayRead(appliedData);
        // const storeBookIds = getStoreReadBook();
        // const storeWishIds = getStoreWishlist();
        // if (books.length > 0) {
        // const bookAdd = books.filter(book => storeBookIds.includes(book.bookId)

        // const wishAdd = books.filter(wish => storeWishIds.includes(wish.bookId))

        // console.log(bookAdd);
        // console.log(wishAdd)

        // setAddBooks(bookAdd);
        // setDisplayRead(bookAdd);


        // setAddWish(wishAdd);
        // setDisplayWish(wishAdd);

        // }
        // setAddBooks(bookAdd);

        


        
    }, [])
    // Get local storage Data And Set State Start











    return (
        <div>
            <p className="text-3xl font-bold rounded-2xl text-center bg-base-200 py-8 mt-6 mb-2">Books</p>

            <div className="flex justify-center items-center mb-20 ">
                <details className="dropdown">
                    <summary className="m-1 btn bg-green-500">Sort By <IoIosArrowDown /></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 font-bold rounded-box w-52">
                        <li onClick={() => handleDisplaySort('rating')}><a>Rating</a></li>
                        <li onClick={() => handleDisplaySort('pages')}><a>Number of Pages</a></li>
                        <li onClick={() => handleDisplaySort('publish')}><a>Publisher year</a></li>
                    </ul>
                </details>
            </div>

            <div className=" flex" >
                <div>
                    <button onClick={handleDisplayRead} className={`py-3 px-6   hover:border-gray-700 ${clicked ? 'border-t-2 border-l-2 border-r-2 border-gray-500' : 'border-b-2 border-gray-700'}`}>Read Books</button>

                    <button onClick={handleDisplayWish} className={`py-3 px-6   hover:border-gray-700 ${clicked1 ? 'border-t-2 border-l-2 border-r-2 border-gray-500' : 'border-b-2 border-gray-700'}`}>Wishlist Books</button>
                </div>

                <div className="border-b-2 border-gray-700 flex-1 "><div ></div></div>
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