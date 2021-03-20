import React, { useState, useEffect } from 'react';

import SearchBar from '../SearchBar';
import Books from '../Books';
import Header from '../Header';

import data from '../../books.json';

const SearchPage = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [books, setBooks] = useState([]);

    //on component render, showing the Books data
    useEffect(() => {
        setBooks(data.books);
        
    }, [books]);

    //filter the search results
    useEffect(() => {
        const results = books.filter(book => {
            return (book.title.toLowerCase().includes(searchTerm.toLowerCase()) || book.user_borrowed.toLowerCase().includes(searchTerm.toLowerCase()))
        });
        setFilteredBooks(results);
    }, [searchTerm, books])

    //on change of the search field, capture the input value
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <>
            <Header brand="Library System Management" />
            <section className="col-md-8 mx-auto">
                <h1 className="text-center mb-3">Search page</h1>

                <SearchBar
                    searchTerm={searchTerm}
                    handleChange={handleChange}
                />

                <Books filteredBooks={filteredBooks} />
            </section>
        </>
    );
};

export default SearchPage;