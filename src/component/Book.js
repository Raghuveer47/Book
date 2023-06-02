import React from 'react';

const Book = ({ title, author, image, buttonText, url, description }) => {
  const handleClick = () => {
    window.open(url, '_blank');
  };

  return (
    <div className="book-card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h3>description: {description}</h3>
      <p>Author: {author}</p>
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
};

export default Book;
