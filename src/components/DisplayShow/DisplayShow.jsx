import PropTypes from 'prop-types';
import { IoLocationOutline } from "react-icons/io5";
import {  RiPagesFill } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";

const DisplayShow = ({ bookmark }) => {
    const { image, bookName, author, tags, publisher, rating, yearOfPublishing, category, totalPages } = bookmark;
    return (
        <div className=" border border-gray-500 rounded-2xl p-4 my-8 ">
            <div className=" flex gap-8 ">
                <div className=' flex items-center justify-center w-2/6 '>
                    <img src={image} className=" p-14 rounded-lg shadow-2xl" />
                </div>

                <div className='flex flex-col w-full '>
                    <h1 className="text-3xl font-bold my-3">{author}</h1>
                    <h3 className='font-semibold my-3'>By: {bookName}</h3>
                    <div className='flex gap-10 my-4'>
                        <p>Tag </p>
                        <div className="flex gap-10">
                            <p className="text-green-500"># {tags[0]}</p>
                            <p className="text-green-500"># {tags[1]}</p>

                        </div>

                        <div className='flex justify-center items-center '>
                            <p className='ml-5'><IoLocationOutline /></p>
                            <div>
                                Year of Publishing :{yearOfPublishing}
                            </div>
                        </div>


                    </div>

                    <div >
                        <div className='flex gap-10 my-4'>
                            <div className='flex justify-center items-center gap-4'>
                                <p > <FaUserFriends /></p>
                                <p>Publisher:{publisher}</p>
                            </div>
                            <div className='flex justify-center items-center gap-4 '>
                                <p><RiPagesFill /></p>
                                <p>Page:{totalPages}</p>
                            </div>
                        </div>
                    </div>
                    <div className='my-4 border-b border-gray-400 flex-1'></div>
                    <div className='flex gap-6 mb-4'>
                        <div className='rounded-2xl text-cyan-500 border bg-emerald-200 px-5 py-3'> Category : {category}</div>
                        <div className='rounded-2xl text-red-500 border bg-red-200 px-5 py-3'> Rating : {rating}</div>
                        <button className="btn bg-green-500 px-5">View Details</button>

                    </div>
                    
                </div>
            </div>
        </div>
    );
};


DisplayShow.propTypes = {
    bookmark: PropTypes.object,
}

export default DisplayShow;