import React from 'react';
import { useState } from 'react';
import './ReviewCard.css';
import RatingStar from '../ProfileCard/infosComponent/ratingStar/ratingStar';

const ReviewCard = ({ reviewID, reviewer, location, date, rating, reviewText, companyResponse,isVerified, likes,isLiked }) => {
    const [like,setLike] = useState(isLiked);

    return (
        <div className="review-card">
            <div className="review-header">
                <div className="avatar"></div>
                <div className="reviewer-info">
                    <div style={{ display: "flex" ,justifyContent:"center"}}>
                        <h3>{reviewer}</h3>
                       {isVerified && <div className="verified-badge"><svg style={{ position: "absolute", bottom: "7px", left: "5px" }} width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.05 3L4.55005 8.5L2.05005 6" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>Verified</div>}
                    </div>

                    <p>{location} • {date}</p>
                </div>
            </div>

            <div className="review-rating">{Array.from({ length: 5 }, (_, i) => (
                <span key={i}>{(i < rating) ?
                    <RatingStar id={`${i}` + `_` + `${reviewID}`} rating={1} size={24} /> : <RatingStar id={`${i}` + `_` + `${reviewID}`} rating={0} size={24} />
                }</span>
            ))}</div>

            <p className="review-text">{reviewText}</p>

            {companyResponse && (
                <div className="company-response">
                    <div style={{ display: "flex" }}>
                        <svg style={{ marginRight: "10px" }} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 14.6666V2.66659C4 2.31296 4.14048 1.97382 4.39052 1.72378C4.64057 1.47373 4.97971 1.33325 5.33333 1.33325H10.6667C11.0203 1.33325 11.3594 1.47373 11.6095 1.72378C11.8595 1.97382 12 2.31296 12 2.66659V14.6666H4Z" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3.99992 8H2.66659C2.31296 8 1.97382 8.14048 1.72378 8.39052C1.47373 8.64057 1.33325 8.97971 1.33325 9.33333V13.3333C1.33325 13.687 1.47373 14.0261 1.72378 14.2761C1.97382 14.5262 2.31296 14.6667 2.66659 14.6667H3.99992" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 6H13.3333C13.687 6 14.0261 6.14048 14.2761 6.39052C14.5262 6.64057 14.6667 6.97971 14.6667 7.33333V13.3333C14.6667 13.687 14.5262 14.0261 14.2761 14.2761C14.0261 14.5262 13.687 14.6667 13.3333 14.6667H12" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6.66675 4H9.33341" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6.66675 6.66675H9.33341" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6.66675 9.33325H9.33341" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6.66675 12H9.33341" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <h4>Company Response</h4>
                    </div>
                    <p>{companyResponse}</p>
                </div>
            )}
            <hr></hr>
            <div className="review-footer">
                <div className="likes" onClick={()=>setLike(!like)}><svg style={{position:"absolute",left:0,bottom:"4px"}} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.99992 3.91992L9.33325 6.66659H13.2199C13.4269 6.66659 13.6311 6.71478 13.8162 6.80735C14.0013 6.89992 14.1624 7.03432 14.2866 7.19992C14.4108 7.36551 14.4947 7.55775 14.5317 7.7614C14.5688 7.96506 14.5579 8.17454 14.4999 8.37325L12.9466 13.7066C12.8658 13.9835 12.6974 14.2268 12.4666 14.3999C12.2358 14.573 11.9551 14.6666 11.6666 14.6666H2.66659C2.31296 14.6666 1.97382 14.5261 1.72378 14.2761C1.47373 14.026 1.33325 13.6869 1.33325 13.3333V7.99992C1.33325 7.6463 1.47373 7.30716 1.72378 7.05711C1.97382 6.80706 2.31296 6.66659 2.66659 6.66659H4.50659C4.75464 6.66645 4.99774 6.59713 5.20856 6.4664C5.41937 6.33567 5.58953 6.14873 5.69992 5.92659L7.99992 1.33325C8.3143 1.33715 8.62374 1.41203 8.90512 1.55232C9.1865 1.6926 9.43254 1.89466 9.62486 2.14339C9.81717 2.39212 9.9508 2.68109 10.0157 2.98872C10.0807 3.29635 10.0753 3.61468 9.99992 3.91992Z" stroke={like?"blue":"black"} strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                </svg> <div style={{paddingLeft:"20px"}}>{isLiked?((like==false)?likes-1:likes):((like==true)?likes+1:likes)}</div></div>
                <div className="actions">
                    <button className="share"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5.33325C13.1046 5.33325 14 4.43782 14 3.33325C14 2.22868 13.1046 1.33325 12 1.33325C10.8954 1.33325 10 2.22868 10 3.33325C10 4.43782 10.8954 5.33325 12 5.33325Z" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4 10C5.10457 10 6 9.10457 6 8C6 6.89543 5.10457 6 4 6C2.89543 6 2 6.89543 2 8C2 9.10457 2.89543 10 4 10Z" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 14.6667C13.1046 14.6667 14 13.7713 14 12.6667C14 11.5622 13.1046 10.6667 12 10.6667C10.8954 10.6667 10 11.5622 10 12.6667C10 13.7713 10.8954 14.6667 12 14.6667Z" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M5.72656 9.00659L10.2799 11.6599" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10.2732 4.34009L5.72656 6.99342" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                    </svg></button>
                    <button className="report"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.66675 9.99992C2.66675 9.99992 3.33341 9.33325 5.33341 9.33325C7.33341 9.33325 8.66675 10.6666 10.6667 10.6666C12.6667 10.6666 13.3334 9.99992 13.3334 9.99992V1.99992C13.3334 1.99992 12.6667 2.66659 10.6667 2.66659C8.66675 2.66659 7.33341 1.33325 5.33341 1.33325C3.33341 1.33325 2.66675 1.99992 2.66675 1.99992V9.99992Z" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2.66675 14.6667V10" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                    </svg></button>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;