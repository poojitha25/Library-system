import React from 'react';

const Books = (props) => {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Book ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Sub Title</th>
                    <th scope="col">Author</th>
                    <th scope="col">Published</th>
                    <th scope="col">Publisher</th>
                    <th scope="col">Book Availability Status</th>
                    <th scope="col">Return Due Date(if any)</th>
                    <th scope="col">User Borrowed</th>
                    <th scope="col">Fine</th>
                </tr>
            </thead>
            <tbody>
                {props.filteredBooks.length > 0 ?
                    (props.filteredBooks.map((book) => {
                        if (book) {
                            return (
                                <tr key={book.book_id}>
                                    <td scope="row">{book.book_id}</td>
                                    <td>{book.title}</td>
                                    <td>{book.sub_title}</td>
                                    <td>{book.author}</td>
                                    <td>{book.published}</td>
                                    <td>{book.publisher}</td>
                                    <td>{book.status}</td>
                                    <td>{book.return_due_date ? book.return_due_date : "NA"}</td>
                                    <td>{book.user_borrowed ? book.user_borrowed : "NA"}</td>
                                    <td>{book.fine ? book.fine : "NA"}</td>
                                 </tr>
                            )
                        }
                    })) :
                    (<tr>
                        <td colSpan="10" className="alert alert-danger">No search results found for the given serach term.</td>
                    </tr>)}
            </tbody>
        </table>
    );
}

export default Books;