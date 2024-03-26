const getStoreReadBook = ()=>{
    const storeReadBook = localStorage.getItem('read-mark')
    if(storeReadBook)
    {
        return JSON.parse(storeReadBook);
    }
    return [];
}

const saveReadBook = bookId =>{
    const storeReadBook = getStoreReadBook();
    const exist = storeReadBook.find( id => id === bookId);
    if(!exist){
        storeReadBook.push(bookId);
        localStorage.setItem('read-mark',JSON.stringify(storeReadBook))

    }
}
// wish

const getStoreWishlist = ()=>{
    const storeWishlist = localStorage.getItem('wish-mark')
    if(storeWishlist)
    {
        return JSON.parse(storeWishlist);
    }
    return [];
}

const saveWishlist = bookId =>{
    const storeWishlist = getStoreWishlist();
    const exist = storeWishlist.find( id => id === bookId);
    if(!exist){
        storeWishlist.push(bookId);
        localStorage.setItem('wish-mark',JSON.stringify(storeWishlist))

    }
}


export {saveReadBook , getStoreReadBook , saveWishlist , getStoreWishlist }