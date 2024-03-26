import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
    const books = useLoaderData();
    const {bookId} = useParams()
    const book = books.find(book=> book.bookId === bookId);
    console.log(bookId,books);
    return (
        <div>
            ami book deatailsssssssssssss:{bookId}
        </div>
    );
};

export default BookDetails;