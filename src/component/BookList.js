import React from 'react';
import Book from './Book';
import Carousel from 'react-bootstrap/Carousel';
const books = [
  {
    title: 'Book 1',
    author: 'Author 1',
    image: 'https://m.media-amazon.com/images/I/81fdQIY6ykL._AC_UF1000,1000_QL80_.jpg',
    buttonText: 'Read Now',
    url: 'https://web.iitd.ac.in/~prbijwe/Book_Abstracts/The%20Secret.pdf',
    description:'This is amazing Book'
  },
  {
    title: 'Book 2',
    author: 'Author 2',
    image: 'https://cdn.shoplightspeed.com/shops/660667/files/51191343/atomic-habits-an-easy-proven-way-to-build-good-hab.jpg',
    buttonText: 'Read Now',
    url: 'https://businesswales.gov.wales/sites/business-wales/files/Atomic%20Habits%20-%20James%20Clear%202018_0.pdf',
  },
  {
    title: 'Book 3',
    author: 'Author 3',
    image: 'https://m.media-amazon.com/images/I/81pQPZAFWbL._AC_UF1000,1000_QL80_.jpg',
    buttonText: 'Read Now',
    url: 'https://www.fisica.net/relatividade/stephen_hawking_a_brief_history_of_time.pdf',
  },
  {
    title: 'It End with us',
    author: 'Author 1',
    image: 'https://upload.wikimedia.org/wikipedia/en/e/e4/It_Ends_with_Us_%28Colleen_Hoover%29.png',
    buttonText: 'Read Now',
    url: 'https://icrrd.com/media/15-05-2021-052358It-Ends-with-Us.pdf',
    description:'This is amazing Book'
  },
  {
    title: 'Book 2',
    author: 'Author 2',
    image: 'https://cdn.shoplightspeed.com/shops/660667/files/51191343/atomic-habits-an-easy-proven-way-to-build-good-hab.jpg',
    buttonText: 'Read Now',
    url: 'https://businesswales.gov.wales/sites/business-wales/files/Atomic%20Habits%20-%20James%20Clear%202018_0.pdf',
  },
  {
    title: 'Book 3',
    author: 'Author 3',
    image: 'https://m.media-amazon.com/images/I/81pQPZAFWbL._AC_UF1000,1000_QL80_.jpg',
    buttonText: 'Read Now',
    url: 'https://www.fisica.net/relatividade/stephen_hawking_a_brief_history_of_time.pdf',
  },
  {
    title: 'Book 1',
    author: 'Author 1',
    image: 'https://manybooks.net/sites/default/files/styles/220x330sc/public/2023-01/seriesstarter%20copy.jpg?itok=rZz5p7xE',
    buttonText: 'Read Now',
    url: 'https://manybooks.net/book/260891/read',
    description:'This is amazing Book'
  },
  {
    title: 'Book 2',
    author: 'Author 2',
    image: 'https://cdn.shoplightspeed.com/shops/660667/files/51191343/atomic-habits-an-easy-proven-way-to-build-good-hab.jpg',
    buttonText: 'Read Now',
    url: 'https://businesswales.gov.wales/sites/business-wales/files/Atomic%20Habits%20-%20James%20Clear%202018_0.pdf',
  },
  {
    title: 'Book 3',
    author: 'Author 3',
    image: 'https://m.media-amazon.com/images/I/81pQPZAFWbL._AC_UF1000,1000_QL80_.jpg',
    buttonText: 'Read Now',
    url: 'https://www.fisica.net/relatividade/stephen_hawking_a_brief_history_of_time.pdf',
  },
  {
    title: 'Book 1',
    author: 'Author 1',
    image: 'https://manybooks.net/sites/default/files/styles/220x330sc/public/2023-01/seriesstarter%20copy.jpg?itok=rZz5p7xE',
    buttonText: 'Read Now',
    url: 'https://manybooks.net/book/260891/read',
    description:'This is amazing Book'
  },
  {
    title: 'Book 2',
    author: 'Author 2',
    image: 'https://cdn.shoplightspeed.com/shops/660667/files/51191343/atomic-habits-an-easy-proven-way-to-build-good-hab.jpg',
    buttonText: 'Read Now',
    url: 'https://businesswales.gov.wales/sites/business-wales/files/Atomic%20Habits%20-%20James%20Clear%202018_0.pdf',
  },
  {
    title: 'Book 3',
    author: 'Author 3',
    image: 'https://m.media-amazon.com/images/I/81pQPZAFWbL._AC_UF1000,1000_QL80_.jpg',
    buttonText: 'Read Now',
    url: 'https://www.fisica.net/relatividade/stephen_hawking_a_brief_history_of_time.pdf',
  },
  // Add more books with their respective URLs
];

const BookList = () => {
  return (
    <div>
      <h1>Book Store</h1>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1552084297/afawwwfa_i2oq5t"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.nyc.gov/assets/mome/images/content/onebook2019-header.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://stylecaster.com/wp-content/uploads/2020/02/10-incredible-books-by-women-to-add-to-your-reading-list-in-2020.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      <div className="book-list">
        {books.map((book, index) => (
          <Book
            key={index}
            title={book.title}
            author={book.author}
            image={book.image}
            buttonText={book.buttonText}
            url={book.url}
          />
        ))}
      </div>
    </div>
  );
};

export default BookList;
