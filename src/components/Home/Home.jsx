import Banner from "../Banner/Banner";
import Books from "../Books/Books";


const Home = () => {
    return (
        <div className="container mx-auto">
            <div className="mt-6"><Banner></Banner></div>



            <div><p className="text-3xl font-bold rounded-2xl text-center  py-8 mt-6 mb-2">Books</p></div>

            <div><Books></Books></div>
        </div>
    );
};

export default Home;