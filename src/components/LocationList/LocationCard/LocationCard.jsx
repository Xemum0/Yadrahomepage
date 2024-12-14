import React from "react";
import RatingStar from "../../ProfileCard/infosComponent/ratingStar/ratingStar";
import "./LocationCard.css";

const LocationCard = ({ name, address, reviews, averageRating = 3 }) => {
    const percent = averageRating - Math.floor(averageRating)
    const stars = []
    for (let i = 3501; i <= 3505; i++) {
        stars.push(
            <div key={i} style={{ width: "15px" }}>
                {(i <= averageRating + 3500) ?
                    <RatingStar id={i} rating={1} size={15} /> : i == Math.ceil(averageRating) ? <RatingStar id={i} rating={percent < 0.1 ? 0 : (percent >= 0.1 && percent < 0.35) ? 0.4 : (percent >= 0.35 && percent < 0.6) ? 0.51 : (percent >= 0.6 && percent < 0.85) ? 0.75 : 0.8} size={15} /> : <RatingStar id={i} rating={0} size={15} />
                }
            </div>
        );
    }
    return (
        <div className="location-card">
            <h3 className="location-name">{name}</h3>
            <div style={{ display: "flex" ,justifyContent:"center"}}>{stars}</div>
            <p className="location-address">{address}</p>
            <p className="location-reviews">{reviews} reviews</p>

        </div>
    );
};

export default LocationCard;
