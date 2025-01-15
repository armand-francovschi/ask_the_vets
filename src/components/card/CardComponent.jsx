import React, { useState, useEffect } from "react";
import "./CardComponent.css"; // Import the CSS file for styling
import "../misc/modal.css"; // Import the CSS file for the modal
import { useNavigate } from "react-router-dom"; // Import useNavigate for React Router v6

const CardComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false); // State to track scroll position
  const navigate = useNavigate(); // Initialize navigate for navigation

  // Modal content descriptions
  const modalDescriptions = {
    1: "Consultațiile Online oferă posibilitatea de a obține sfaturi și recomandări pentru sănătatea animalului tău de companie, direct din confortul casei tale.",
    2: "Îngrijirea personalizată înseamnă o abordare adaptată nevoilor specifice ale animalului tău, pentru a asigura o stare de sănătate optimă.",
    3: "Blogul informativ oferă articole valoroase despre îngrijirea animalelor de companie, sfaturi și informații utile pentru a le menține sănătoase și fericite.",
    4: "Agenda digitală te ajută să îți organizezi întâlnirile și consultațiile pentru animalul tău, asigurându-te că nu vei uita niciodată o programare importantă."
  };

  // Card titles
  const cardTitles = {
    1: "Consultații Online",
    2: "Îngrijire personalizată",
    3: "Blog informativ",
    4: "Agendă digitală"
  };

  // Navigate to the respective page
  const handleNavigate = (page) => {
    closeModal(); // Close the modal first
    if (page === 1) {
      navigate("/consultatii");
    } else if (page === 2) {
      navigate("/ingrijire");
    } else if (page === 3) {
      navigate("/blog");
    } else if (page === 4) {
      navigate("/agenda");
    }
  };

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  // Scroll event listener to track when the page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      // Check if the page is scrolled more than 100px, and hide the button when at the top
      if (window.scrollY > 100) {
        setIsScrolled(true); // Show the button
      } else {
        setIsScrolled(false); // Hide the button
      }
    };

    // Add event listener on mount
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Scroll To Top Button */}
      <div
        className={`scroll-to-top-btn ${isModalOpen || !isScrolled ? "hidden" : ""}`} // Hide button if modal is open or page is not scrolled
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </div>

      <div className="card-container">
        {Object.keys(cardTitles).map((key) => (
          <div
            key={key}
            className="card"
            onClick={() => openModal(Number(key))}
          >
            {/* Dynamically set the image source */}
            <img
              src={`assets/images/card_selections/card_${key}.jpg`} // Dynamically load the image based on card number
              alt={cardTitles[key]}
              className="card-image"
            />
            <div className="card-text">{cardTitles[key]}</div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal show">
          <div className="modal-content">
            {/* Dynamically set the <h2> text based on the clicked card */}
            <h2>{cardTitles[modalContent]}</h2>
            <p>{modalDescriptions[modalContent]}</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel mauris felis. Curabitur non elit urna. Vivamus vel nisl id elit volutpat sollicitudin. Integer accumsan, ipsum in luctus tincidunt, nisl libero pharetra metus, sit amet laoreet ante eros ac lorem.
            </p>

            {/* First button to navigate to the respective page */}
            <button className="open-link" onClick={() => handleNavigate(modalContent)}>
              Go to Page
            </button>

            {/* Second button to close the modal */}
            <button className="close" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardComponent;
