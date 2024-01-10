import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Column 1 */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Company Name</h3>
            <p className="text-black">Your company description goes here.</p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Quick Links</h3>
            <ul className="text-black">
              <li className="mb-1">
                <a href="#">Home</a>
              </li>
              <li className="mb-1">
                <a href="#">About</a>
              </li>
              <li className="mb-1">
                <a href="#">Services</a>
              </li>
              <li className="mb-1">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Contact Us</h3>
            <p className="text-black">
              Your company address goes here.
            </p>
            <p className="text-black">
              Email: <a href="mailto:info@example.com">info@example.com</a>
            </p>
            <p className="text-black">
              Phone: <a href="tel:+123456789">+123456789</a>
            </p>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-black hover:text-white transition duration-300"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="#"
                className="text-black hover:text-white transition duration-300"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-black hover:text-white transition duration-300"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
