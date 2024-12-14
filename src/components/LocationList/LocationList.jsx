import React from "react";
import LocationCard from "./LocationCard/LocationCard";
import "./LocationList.css";
import { useState } from "react";

const LocationList = ({ Locations, numberOfLocations }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
    if (!isModalVisible) {
      document.body.classList.add('no-scroll');
  } else {
      document.body.classList.remove('no-scroll');
  }
  };

  const closeModal = () => {
    setIsModalVisible(false);
    document.body.classList.remove('no-scroll'); // Restore page scrolling

  };
  const locations = Locations.slice(0, 3)


  return (<>
    <div className="location-list">
      <h2 style={{ color: "black" }}>Locations {numberOfLocations}</h2>
      {locations.map((location, index) => (
        <LocationCard
          key={index}
          name={location.name}
          address={location.address}
          reviews={location.reviews}
        />
      ))}
      <button onClick={toggleModal} className="view-all-button">See all 20 locations</button>
    </div>
    {isModalVisible && <div className="bluredBackground" onClick={closeModal}>
      <div className="locationExpanded" onClick={(e) => e.stopPropagation()} >
        <h2 style={{ color: "black" }}>Locations {numberOfLocations}</h2>
        {Locations.map((location, index) => (
          <LocationCard
            key={index}
            name={location.name}
            address={location.address}
            reviews={location.reviews}
          />
        ))}
      </div>
    </div>}
  </>
  );
};

export default LocationList;
