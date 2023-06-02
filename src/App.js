import React, { useState } from 'react';
import BookList from './component/BookList';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import './App.css';

const books = [
  {
    title: 'Book 1',
    author: 'Author 1',
    image: 'book1.jpg',
    buttonText: 'Read Now',
  },
  // Add more books here
];

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchTerm) => {
    const results = books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      <Navbar handleSearch={handleSearch} />
      <BookList books={searchResults.length > 0 ? searchResults : books} />
      <Footer />
    </div>
  );
};

export default App;
