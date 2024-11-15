import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-center text-white py-6">
      <div className="container mx-auto">
        <p>&copy; 2024 SSX Fan Site. All rights reserved.</p>

        <div className="mt-4">
          <a href="/about" className="text-gray-400 hover:text-white mx-2">About</a>
          <a href="/privacy" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a>
          <a href="/terms" className="text-gray-400 hover:text-white mx-2">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

