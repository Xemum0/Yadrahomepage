import React from "react";
import { useState } from "react";
import './RatingDetails.css';
import RatingStar from "../ProfileCard/infosComponent/ratingStar/ratingStar";
import PercentageContainer from "./ui/percentageContainer";

const RatingDetails = ({ numberOf_5_Stars, numberOf_4_Stars, numberOf_3_Stars, numberOf_2_Stars, numberOf_1_Stars }) => {
    const totalNumOfReviews = numberOf_5_Stars + numberOf_4_Stars + numberOf_3_Stars + numberOf_2_Stars + numberOf_1_Stars;
    const _5_StarsPercentage = numberOf_5_Stars / totalNumOfReviews;
    const _4_StarsPercentage = numberOf_4_Stars / totalNumOfReviews;
    const _3_StarsPercentage = numberOf_3_Stars / totalNumOfReviews;
    const _2_StarsPercentage = numberOf_2_Stars / totalNumOfReviews;
    const _1_StarsPercentage = numberOf_1_Stars / totalNumOfReviews;

    const colorPicker = (percentage) => {
        return percentage >= 0.8 ? "#A8D5BA" : percentage >= 0.6 ? "#C2E3B1" : percentage >= 0.4 ? "#EDE0A3" : percentage >= 0.2 ? "#F3C5A8" : "#F2A3A3";
    }

    const averageRating = 5 * _5_StarsPercentage + 4 * _4_StarsPercentage + 3 * _3_StarsPercentage + 2 * _2_StarsPercentage + 1 * _1_StarsPercentage;

    const percent = averageRating - Math.floor(averageRating)
    const stars = []
    for (let i = 31; i <= 35; i++) {
        stars.push(
            <div key={i} style={{ width: "30px" }}>
                {(i <= averageRating + 30) ?
                    <RatingStar id={i} rating={1} size={24} /> : i == Math.ceil(averageRating) ? <RatingStar id={i} rating={percent < 0.1 ? 0 : (percent >= 0.1 && percent < 0.35) ? 0.4 : (percent >= 0.35 && percent < 0.6) ? 0.51 : (percent >= 0.6 && percent < 0.85) ? 0.75 : 0.8} size={24} /> : <RatingStar id={i} rating={0} size={24} />
                }
            </div>
        );
    }


    return (
        <div className="ratingDetailsContainer">
            <div className="ratingAverage">
                <div style={{ color: "black", fontSize: "36px" }}>{averageRating.toFixed(2)}</div>
                <div style={{ display: "flex" }}>{stars}</div>
                <p style={{ color: "black" }}>Based on {totalNumOfReviews} reviews</p>
            </div>

            <div className="ratingDetails">
                <div style={{ width: "30px", display: "flex", justifyContent: "center" }}>
                    <p style={{ margin: 0 }}>5 ★</p>
                </div>
                <PercentageContainer percentage={_5_StarsPercentage * 100} color={colorPicker(_5_StarsPercentage)} />
                <p style={{ margin: 0 }}>{(_5_StarsPercentage * 100).toFixed(2)}%</p>

                <div style={{ width: "30px", display: "flex", justifyContent: "center" }}>
                    <p style={{ margin: 0 }}>4 ★</p>
                </div>
                <PercentageContainer percentage={_4_StarsPercentage * 100} color={colorPicker(_4_StarsPercentage)} />
                <p style={{ margin: 0 }}>{(_4_StarsPercentage * 100).toFixed(2)}%</p>

                <div style={{ width: "30px", display: "flex", justifyContent: "center" }}>
                    <p style={{ margin: 0 }}>3 ★</p>
                </div>
                <PercentageContainer percentage={_3_StarsPercentage * 100} color={colorPicker(_3_StarsPercentage)} />
                <p style={{ margin: 0 }}>{(_3_StarsPercentage * 100).toFixed(2)}%</p>

                <div style={{ width: "30px", display: "flex", justifyContent: "center" }}>
                    <p style={{ margin: 0 }}>2 ★</p>
                </div>
                <PercentageContainer percentage={_2_StarsPercentage * 100} color={colorPicker(_2_StarsPercentage)} />
                <p style={{ margin: 0 }}>{(_2_StarsPercentage * 100).toFixed(2)}%</p>


                <div style={{ width: "30px", display: "flex", justifyContent: "center" }}>
                    <p style={{ margin: 0 }}>1 ★</p>
                </div>
                <PercentageContainer percentage={_1_StarsPercentage * 100} color={colorPicker(_1_StarsPercentage)} />
                <p style={{ margin: 0 }}>{(_1_StarsPercentage * 100).toFixed(2)}%</p>

            </div>

        </div>
    )

}

export default RatingDetails