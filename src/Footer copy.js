import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="Footer">
      <p>&copy; {(new Date().getFullYear())} Your Website Name. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
