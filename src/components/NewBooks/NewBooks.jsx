import Books from "../Books/Books";

const NewBooks = () => {
    return (
        <div>
            <p className="text-3xl font-bold rounded-2xl text-center bg-cyan-400 py-8 mt-6 mb-2 text-white">New Books</p>

            <div><Books></Books></div>
            
        </div>
    );
};

export default NewBooks;