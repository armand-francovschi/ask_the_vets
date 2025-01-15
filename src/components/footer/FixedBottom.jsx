import React, { useState } from 'react';
import './FixedBottom.css'; // Adjust to match your file name

const FixedBottom = () => {
  const [isFooterVisible, setIsFooterVisible] = useState(false); // State to control visibility

  // Toggle the visibility of the footer
  const toggleFooter = () => {
    setIsFooterVisible(!isFooterVisible);
  };

  return (
    <div>
      <button className="contact-us-button" onClick={toggleFooter}>
        Contact Us
      </button>

      <div className={`fixed-bottom ${isFooterVisible ? 'show' : ''}`}>
        <div className="fixed-bottom-content">
          {/* Contact Information Section */}
          <div className="fixed-bottom-left">
            <h4>Contact Information</h4>
          </div>

          {/* Social Links Section */}
          <div className="fixed-bottom-right">
            <ul className="social-links">
              <li>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                    alt="Facebook"
                  />
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                    alt="Instagram"
                  />
                  Instagram
                </a>
              </li>
              <li>
                <a href="mailto:catalui.m@yahoo.com">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/%40_symbol.svg/1024px-%40_symbol.svg.png"
                    alt="Email Icon"
                  />
                  catalui.m@yahoo.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="fixed-bottom-bottom">
          <p>&copy; 2025 Ask the Vets</p>
        </div>
      </div>
    </div>
  );
};

export default FixedBottom;
