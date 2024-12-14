import React from "react";
import RatingStar from "../../ProfileCard/infosComponent/ratingStar/ratingStar";
const Stars = ({averageRating,origin,Size})=>{
const percent = averageRating - Math.floor(averageRating)
    const stars = []
    for (let i = origin; i <= origin+4; i++) {
        stars.push(
            <div key={i} style={{ width: `${Size}px` }}>
                {(i < averageRating+origin) ?
                    <RatingStar id={i} rating={1} size={Size} /> : i == Math.ceil(averageRating+origin) ? <RatingStar id={i} rating={percent < 0.1 ? 0 : (percent >= 0.1 && percent < 0.35) ? 0.4 : (percent >= 0.35 && percent < 0.6) ? 0.51 : (percent >= 0.6 && percent < 0.85) ? 0.75 : 0.8} size={Size} /> : <RatingStar id={i} rating={0} size={Size} />
                }
            </div>
        );
    }

    return (
        <div style={{display:"flex"}}>
            {stars}
        </div>
    )
}

export default Stars