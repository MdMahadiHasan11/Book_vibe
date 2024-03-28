import bannerImg from '../../assets/images/banner.png'
import { NavLink } from "react-router-dom";

const Banner = () => {
    return (
        <div className="rounded-2xl hero min-h-screen bg-base-200">
  <div className=" hero-content flex-col lg:flex-row-reverse">
    <img src={bannerImg} />
    <div>
      <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold lg:w-3/5">Books to freshen up your bookshelf</h1>
      <div><NavLink to="/listedBook"><button className="btn  bg-green-500 mt-12">View The List</button></NavLink></div>
      
    </div>
  </div>
</div>
    );
};

export default Banner;