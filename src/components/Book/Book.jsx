import PropTypes from 'prop-types';
import { IoIosStarOutline } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const Book = ({ book }) => {
    const { bookId,image,bookName, author, tags, category, rating } = book;
    return (
        <div> <NavLink to={`/bookDetails/${bookId}`}>
            <div className="card bg-base-100 shadow-xl">
                <figure className='w-full h-full bg-[#F3F3F3] py-8'><img src={image}  /></figure>
                <div className="card-body">
                    <div className='flex gap-14 text-[#23BE0A] font-medium'>
                    <h2 className="">{tags[0]}</h2>
                    <h2 className="">{tags[1]}</h2>
                    </div>
                    <p className='text-2xl font-bold my-5'>{bookName}</p>

                    <p className=' font-medium text-gray-600'>By : {author}</p>

                    <div className="card-actions text-lg font-medium text-gray-600 mt-5">
                        <p>{category}</p>
                        <div className='flex gap-2 justify-center items-center'>
                            <p>{rating}</p>
                            <p><IoIosStarOutline/></p>
                        </div>
                    </div>
                </div>
            </div>
        </NavLink>

            

        </div>
    );
};
Book.propTypes = {
    book: PropTypes.object,
}

export default Book;