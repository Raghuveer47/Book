import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="about-us">
          <h3>About Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada arcu nec dolor ultrices, vel aliquet lorem consectetur. Sed eget massa ac justo commodo posuere.</p>
        </div>
        <div className="contact-us">
          <h3>Contact Us</h3>
          <p>Email: info@bookstore.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
      </div>
      <p>&copy; {new Date().getFullYear()} Book Store. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
