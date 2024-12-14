import React from "react";
import RatingStar from "./infosComponent/ratingStar/ratingStar";
import { useState, useEffect } from "react";
import './ProfileCard.css';
import InfosComponent from "./infosComponent/infosComponent";

const ProfileCard = ({ companyName, logo, isVerified, isPremium, websiteLink, repliesRate, responseTime, aiAssist, featuresPaid, averageRating, numberOfReviews }) => {
    const percent = averageRating - Math.floor(averageRating)
    const stars = []
    for (let i = 1; i <= 5; i++) {
        stars.push(
            <div key={i} style={{ width: "30px" }}>
                {(i <= averageRating) ?
                    <RatingStar id={i} rating={1} size={24} /> : i == Math.ceil(averageRating) ? <RatingStar id={i} rating={percent < 0.1 ? 0 : (percent >= 0.1 && percent < 0.35) ? 0.4 : (percent >= 0.35 && percent < 0.6) ? 0.51 : (percent >= 0.6 && percent < 0.85) ? 0.75 : 0.8} size={24} /> : <RatingStar id={i} rating={0} size={24} />
                }
            </div>
        );
    }


    const [con1, setcon1] = useState(false);
    const [con2, setcon2] = useState(false);
    const [con3, setcon3] = useState(false);
    const [con4, setcon4] = useState(false);
    const [con5, setcon5] = useState(false);


    useEffect(() => {
        const checkScreenSize = () => {
            setcon1(window.innerWidth <= 1254);
            setcon2(window.innerWidth <= 1124);
            setcon3(window.innerWidth <= 966);
            setcon4(window.innerWidth <= 780);
            setcon5(window.innerWidth <= 640);
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    return (
        <div className={con4 ? "profileCardContainer res9" : con3 ? "profileCardContainer res3" : "profileCardContainer"}>
            <div className={con3 ? "logoContainer res4" : "logoContainer"}>
                <div className="logoRoundedContainer">
                    <img src={logo} alt="Logo" />
                </div>

                <div className={con3 ? "containerU show" : "containerU"}>
                    <div className="firstRow">
                        <div className={con4 ? "companyName res7" : con3 ? "companyName" : con2 ? "companyName res2" : "companyName"}>{companyName}</div>
                        {isVerified && <><div className={con4 ? "verified2 hide" : "verified2"}>
                            <div className="checkIcon">
                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.375 7.01C14.375 10.8631 11.225 13.985 7.39995 13.985C3.54683 13.985 0.424951 10.8631 0.424951 7.01C0.424951 3.185 3.54683 0.035004 7.39995 0.035004C11.225 0.035004 14.375 3.185 14.375 7.01ZM6.58433 10.7225L11.7593 5.5475C11.9281 5.37875 11.9281 5.06938 11.7593 4.90063L11.1125 4.28188C10.9437 4.085 10.6625 4.085 10.4937 4.28188L6.27495 8.50063L4.27808 6.53188C4.10933 6.335 3.82808 6.335 3.65933 6.53188L3.01245 7.15063C2.8437 7.31938 2.8437 7.62875 3.01245 7.7975L5.93745 10.7225C6.1062 10.8913 6.41558 10.8913 6.58433 10.7225Z" fill="white" />
                                </svg>
                            </div>
                            <div className="verifiedText">Verified</div>
                        </div></>}

                    </div>
                    <div className="secondRow res8">
                        <div className={con4 ? "webIcon hide" : "webIcon"}>
                            <svg className={con4 ? "hide" : ""} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.5 5H4.96875C5.4375 2.21875 6.5 0.25 7.75 0.25C8.96875 0.25 10.0625 2.21875 10.5 5ZM4.75 8C4.75 7.3125 4.78125 6.65625 4.84375 6H10.625C10.6875 6.65625 10.7188 7.3125 10.7188 8C10.7188 8.71875 10.6875 9.375 10.625 10H4.84375C4.78125 9.375 4.75 8.71875 4.75 8ZM14.875 5H11.5C11.2188 3.25 10.7188 1.65625 9.9375 0.59375C12.1875 1.25 14 2.90625 14.875 5ZM5.53125 0.59375C4.75 1.65625 4.25 3.25 3.96875 5H0.59375C1.46875 2.90625 3.28125 1.25 5.53125 0.59375ZM15.2188 6C15.375 6.65625 15.4688 7.3125 15.4688 8C15.4688 8.71875 15.375 9.375 15.2188 10H11.625C11.6875 9.34375 11.75 8.6875 11.75 8C11.75 7.34375 11.6875 6.65625 11.625 6H15.2188ZM3.75 8C3.75 8.6875 3.78125 9.34375 3.84375 10H0.25C0.09375 9.375 0 8.71875 0 8C0 7.3125 0.09375 6.65625 0.25 6H3.84375C3.78125 6.65625 3.75 7.34375 3.75 8ZM4.96875 11H10.5C10.0625 13.8125 8.96875 15.75 7.75 15.75C6.5 15.75 5.4375 13.8125 4.96875 11ZM9.9375 15.4375C10.7188 14.375 11.25 12.7812 11.5 11H14.875C14 13.125 12.1875 14.7812 9.9375 15.4375ZM0.59375 11H3.96875C4.25 12.7812 4.75 14.375 5.53125 15.4375C3.28125 14.7812 1.46875 13.125 0.59375 11Z" fill="#F50057" />
                            </svg>
                        </div>
                        <div className={con4 ? "webLink hide" : "webLink"}>
                            <a href={websiteLink} target="_blank">{websiteLink}</a>
                        </div>

                        {isVerified && <><div className={con4 ? "verified" : "verified hide"}>
                            <div className="checkIcon">
                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.375 7.01C14.375 10.8631 11.225 13.985 7.39995 13.985C3.54683 13.985 0.424951 10.8631 0.424951 7.01C0.424951 3.185 3.54683 0.035004 7.39995 0.035004C11.225 0.035004 14.375 3.185 14.375 7.01ZM6.58433 10.7225L11.7593 5.5475C11.9281 5.37875 11.9281 5.06938 11.7593 4.90063L11.1125 4.28188C10.9437 4.085 10.6625 4.085 10.4937 4.28188L6.27495 8.50063L4.27808 6.53188C4.10933 6.335 3.82808 6.335 3.65933 6.53188L3.01245 7.15063C2.8437 7.31938 2.8437 7.62875 3.01245 7.7975L5.93745 10.7225C6.1062 10.8913 6.41558 10.8913 6.58433 10.7225Z" fill="white" />
                                </svg>
                            </div>
                            <div className="verifiedText">Verified</div>
                        </div></>}
                        {isPremium && <><div className={con4 ? "premium" : "premium2"}>
                            <div className="crownIcon">
                                <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.0399 13.41C15.2649 13.41 15.4899 13.635 15.4899 13.86V14.76C15.4899 15.0131 15.2649 15.21 15.0399 15.21H3.33994C3.08682 15.21 2.88994 15.0131 2.88994 14.76V13.86C2.88994 13.635 3.08682 13.41 3.33994 13.41H15.0399ZM16.8399 4.41C17.5712 4.41 18.1899 5.02875 18.1899 5.76C18.1899 6.51938 17.5712 7.11 16.8399 7.11C16.7556 7.11 16.6712 7.11 16.6149 7.11L14.5899 12.51H3.78994L1.73682 7.11C1.68057 7.11 1.59619 7.11 1.53994 7.11C0.780566 7.11 0.189941 6.51938 0.189941 5.76C0.189941 5.02875 0.780566 4.41 1.53994 4.41C2.27119 4.41 2.88994 5.02875 2.88994 5.76C2.88994 5.985 2.83369 6.15375 2.74932 6.3225L4.80244 7.56C5.22432 7.81313 5.78682 7.6725 6.03994 7.2225L8.31807 3.20063C8.03682 2.97563 7.83994 2.58188 7.83994 2.16C7.83994 1.42875 8.43057 0.810004 9.18994 0.810004C9.92119 0.810004 10.5399 1.42875 10.5399 2.16C10.5399 2.58188 10.3431 2.97563 10.0337 3.20063L12.3118 7.2225C12.5649 7.6725 13.1274 7.81313 13.5774 7.56L15.6024 6.3225C15.5181 6.15375 15.4899 5.985 15.4899 5.76C15.4899 5.02875 16.0806 4.41 16.8399 4.41Z" fill="#2C3E50" />
                                </svg>
                            </div>
                            <div className="premiumText">
                                Premium Member
                            </div>
                        </div></>}

                    </div>
                </div>

            </div>
            <div className={con3 ? "companyInfosContainer res5" : "companyInfosContainer"}>
                <div className={con4 ? "firstRow hide" : con3 ? "firstRow hide" : "firstRow"}>
                    <div className={con3 ? "companyName" : con2 ? "companyName res2" : "companyName"}>{companyName}</div>
                    {isVerified && <><div className="verified">
                        <div className="checkIcon">
                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.375 7.01C14.375 10.8631 11.225 13.985 7.39995 13.985C3.54683 13.985 0.424951 10.8631 0.424951 7.01C0.424951 3.185 3.54683 0.035004 7.39995 0.035004C11.225 0.035004 14.375 3.185 14.375 7.01ZM6.58433 10.7225L11.7593 5.5475C11.9281 5.37875 11.9281 5.06938 11.7593 4.90063L11.1125 4.28188C10.9437 4.085 10.6625 4.085 10.4937 4.28188L6.27495 8.50063L4.27808 6.53188C4.10933 6.335 3.82808 6.335 3.65933 6.53188L3.01245 7.15063C2.8437 7.31938 2.8437 7.62875 3.01245 7.7975L5.93745 10.7225C6.1062 10.8913 6.41558 10.8913 6.58433 10.7225Z" fill="white" />
                            </svg>
                        </div>
                        <div className="verifiedText">Verified</div>
                    </div></>}
                    {isPremium && <><div className="premium">
                        <div className="crownIcon">
                            <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.0399 13.41C15.2649 13.41 15.4899 13.635 15.4899 13.86V14.76C15.4899 15.0131 15.2649 15.21 15.0399 15.21H3.33994C3.08682 15.21 2.88994 15.0131 2.88994 14.76V13.86C2.88994 13.635 3.08682 13.41 3.33994 13.41H15.0399ZM16.8399 4.41C17.5712 4.41 18.1899 5.02875 18.1899 5.76C18.1899 6.51938 17.5712 7.11 16.8399 7.11C16.7556 7.11 16.6712 7.11 16.6149 7.11L14.5899 12.51H3.78994L1.73682 7.11C1.68057 7.11 1.59619 7.11 1.53994 7.11C0.780566 7.11 0.189941 6.51938 0.189941 5.76C0.189941 5.02875 0.780566 4.41 1.53994 4.41C2.27119 4.41 2.88994 5.02875 2.88994 5.76C2.88994 5.985 2.83369 6.15375 2.74932 6.3225L4.80244 7.56C5.22432 7.81313 5.78682 7.6725 6.03994 7.2225L8.31807 3.20063C8.03682 2.97563 7.83994 2.58188 7.83994 2.16C7.83994 1.42875 8.43057 0.810004 9.18994 0.810004C9.92119 0.810004 10.5399 1.42875 10.5399 2.16C10.5399 2.58188 10.3431 2.97563 10.0337 3.20063L12.3118 7.2225C12.5649 7.6725 13.1274 7.81313 13.5774 7.56L15.6024 6.3225C15.5181 6.15375 15.4899 5.985 15.4899 5.76C15.4899 5.02875 16.0806 4.41 16.8399 4.41Z" fill="#2C3E50" />
                            </svg>
                        </div>
                        <div className="premiumText">
                            Premium Member
                        </div>
                    </div></>}
                </div>
                <div className={con4 ? "secondRow hide" : con3 ? "secondRow hide" : "secondRow"}>
                    <div className="webIcon">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.5 5H4.96875C5.4375 2.21875 6.5 0.25 7.75 0.25C8.96875 0.25 10.0625 2.21875 10.5 5ZM4.75 8C4.75 7.3125 4.78125 6.65625 4.84375 6H10.625C10.6875 6.65625 10.7188 7.3125 10.7188 8C10.7188 8.71875 10.6875 9.375 10.625 10H4.84375C4.78125 9.375 4.75 8.71875 4.75 8ZM14.875 5H11.5C11.2188 3.25 10.7188 1.65625 9.9375 0.59375C12.1875 1.25 14 2.90625 14.875 5ZM5.53125 0.59375C4.75 1.65625 4.25 3.25 3.96875 5H0.59375C1.46875 2.90625 3.28125 1.25 5.53125 0.59375ZM15.2188 6C15.375 6.65625 15.4688 7.3125 15.4688 8C15.4688 8.71875 15.375 9.375 15.2188 10H11.625C11.6875 9.34375 11.75 8.6875 11.75 8C11.75 7.34375 11.6875 6.65625 11.625 6H15.2188ZM3.75 8C3.75 8.6875 3.78125 9.34375 3.84375 10H0.25C0.09375 9.375 0 8.71875 0 8C0 7.3125 0.09375 6.65625 0.25 6H3.84375C3.78125 6.65625 3.75 7.34375 3.75 8ZM4.96875 11H10.5C10.0625 13.8125 8.96875 15.75 7.75 15.75C6.5 15.75 5.4375 13.8125 4.96875 11ZM9.9375 15.4375C10.7188 14.375 11.25 12.7812 11.5 11H14.875C14 13.125 12.1875 14.7812 9.9375 15.4375ZM0.59375 11H3.96875C4.25 12.7812 4.75 14.375 5.53125 15.4375C3.28125 14.7812 1.46875 13.125 0.59375 11Z" fill="#F50057" />
                        </svg>
                    </div>
                    <div className="webLink">
                        <a href={websiteLink} target="_blank">{websiteLink}</a>
                    </div>
                </div>
                <div className={con5?"adjust":""}>
                <div className={con5?"thirdRow res10":con1 && (aiAssist || featuresPaid) ? "thirdRow res1" : "thirdRow"}>
                    <InfosComponent info={`Replies to ${repliesRate}% of reviews`} icon={<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.424951 5.15375L5.37495 0.878754C5.79683 0.513129 6.49995 0.822504 6.49995 1.41313V3.66313C11 3.69125 14.6 4.61938 14.6 8.89438C14.6 10.61 13.475 12.3256 12.2375 13.2256C11.8718 13.5069 11.3093 13.1413 11.45 12.6913C12.7156 8.61313 10.8593 7.54438 6.49995 7.48813V9.935C6.49995 10.5256 5.79683 10.835 5.37495 10.4694L0.424951 6.19438C0.115576 5.91313 0.115576 5.435 0.424951 5.15375Z" fill="#2C3E50" />
                    </svg>
                    } />

                    <InfosComponent info={`<${responseTime} response time`} icon={<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.38994 0.035004C11.2431 0.035004 14.3649 3.15688 14.3649 7.01C14.3649 10.8631 11.2431 13.985 7.38994 13.985C3.53682 13.985 0.414941 10.8631 0.414941 7.01C0.414941 3.15688 3.53682 0.035004 7.38994 0.035004ZM9.97744 8.83813C10.0337 8.78188 10.0899 8.66938 10.0899 8.55688C10.0899 8.41625 10.0056 8.30375 9.92119 8.21938L8.28994 7.01V2.96C8.28994 2.735 8.06494 2.51 7.83994 2.51H6.93994C6.68682 2.51 6.48994 2.735 6.48994 2.96V7.3475C6.48994 7.71313 6.63057 8.0225 6.91182 8.21938L8.79619 9.62563C8.85244 9.68188 8.96494 9.73813 9.04932 9.73813C9.21807 9.73813 9.33057 9.65375 9.41494 9.54125L9.97744 8.83813Z" fill="#2C3E50" />
                    </svg>
                    } />

                    {aiAssist &&
                        <InfosComponent info={"Uses Ai-assist"} icon={<svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.08994 7.11H1.98994V12.51H1.08994H1.06182C0.583691 12.51 0.161816 12.1163 0.161816 11.6381C0.161816 11.6381 0.189941 11.6381 0.189941 11.61V8.01C0.189941 7.53188 0.583691 7.11 1.06182 7.11C1.06182 7.11 1.06182 7.11 1.08994 7.11ZM15.4899 5.76V13.41C15.4618 14.4225 14.6743 15.21 13.6899 15.21H4.68994C3.67744 15.21 2.88994 14.4225 2.88994 13.41V5.76C2.88994 4.5225 3.87432 3.51 5.11182 3.51C5.11182 3.51 5.11182 3.51 5.13994 3.51H8.28994V1.71C8.28994 1.23188 8.68369 0.810004 9.18994 0.810004C9.66807 0.810004 10.0899 1.23188 10.0899 1.71V3.51H13.2399C14.4774 3.51 15.4899 4.5225 15.4899 5.76ZM7.61494 8.01C7.61494 7.39125 7.10869 6.885 6.48994 6.885C5.84307 6.885 5.36494 7.39125 5.36494 8.01C5.36494 8.65688 5.84307 9.135 6.48994 9.135C7.10869 9.135 7.61494 8.65688 7.61494 8.01ZM7.38994 11.61H5.58994V12.51H7.38994V11.61ZM10.0899 11.61H8.28994V12.51H10.0899V11.61ZM13.0149 8.01C13.0149 7.39125 12.5087 6.885 11.8899 6.885C11.2431 6.885 10.7649 7.39125 10.7649 8.01C10.7649 8.65688 11.2431 9.135 11.8899 9.135C12.5087 9.135 13.0149 8.65688 13.0149 8.01ZM12.7899 11.61H10.9899V12.51H12.7899V11.61ZM18.1899 8.01V11.61V11.6381C18.1899 12.1163 17.7681 12.5381 17.2899 12.5381V12.51H16.3899V7.11H17.2899C17.7681 7.11 18.1899 7.53188 18.1899 8.01Z" fill="#2C3E50" />
                        </svg>
                        } />}

                    {featuresPaid &&
                        <InfosComponent info={"Pays for extra features"} icon={<img src="src/assets/icons/featuresPaid.svg" alt="$" />} />
                    }
                </div>
                <div className={con5?"forthRow res11":con3 ? "forthRow res6" : con1?"forthRow res15":"forthRow"} style={{ display: "flex", marginTop: "10px" }}>
                    <div className="starsContainer" style={{ display: "flex", marginRight: "20px" }}>
                        {stars}
                    </div>
                    <div style={{ color: "black", paddingTop: "2px" }}>
                        {`${averageRating} out of 5 based on ${numberOfReviews} reviews`}
                    </div>
                    </div>
                </div>
            </div>

        </div>
    );

}

export default ProfileCard