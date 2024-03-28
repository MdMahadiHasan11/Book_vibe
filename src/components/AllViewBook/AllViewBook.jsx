

    import { useEffect, useState } from "react";
    import DisplayShow from "../DisplayShow/DisplayShow";
       
    const AllViewBook = () => {
      
        // const [displayAll, setDisplayAll] = useState([]);
    
             
        // Get local storage Data And Set State Start
        const [appliedData, setAppliedData] = useState([]);
        const [appliedWishData, setAppliedWishData] = useState([]);
        // console.log(appliedData);
    
    
    
        useEffect(() => {
            const getDefaultData = JSON.parse(localStorage.getItem("read-mark")) || [];
            setAppliedData(getDefaultData);
            // setDisplay.AllappliedData;
    
        }, [])
        
    
        
        useEffect(() => {
          
            const getDefaultData1 = JSON.parse(localStorage.getItem("wish-mark")) || [];
            setAppliedWishData(getDefaultData1);
            
            
        }, [])
        // Get local storage Data And Set State Start
    
        return (
            <div className="container mx-auto">
                <p className="text-3xl font-bold rounded-2xl text-center bg-cyan-400 py-8 mt-6 mb-2 text-white">All Read And Wishlist Books</p>              
    
                <div>
                    <ul>
    
                        {
                            appliedData.map((bookmark) => <DisplayShow
                                key={bookmark.bookId}
                                bookmark={bookmark}
                            >  </DisplayShow>)
    
                        }
                    </ul>
                    <ul>
    
                        {
                            appliedWishData.map((bookmark) => <DisplayShow
                                key={bookmark.bookId}
                                bookmark={bookmark}
                            >  </DisplayShow>)
    
                        }
                    </ul>
    
                </div>   
            </div>
        );
    };
    
export default AllViewBook;