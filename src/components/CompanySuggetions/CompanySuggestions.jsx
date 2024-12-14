// CompanySuggestions.jsx
import React from 'react';
import './CompanySuggestions.css';
import Stars from './ui/starsRating';

const CompanySuggestions = () => {
  const companies = [
    {
      name: 'ooredoo algeria',
      rating: 2.9,
      reviews: 4109,
      logo: 'https://s3-alpha-sig.figma.com/img/be9f/029a/ea294d1666e3d7558b0131c0be802a76?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RTJtUezW5pVednpS-weWaT-TNce5h7S1uYhfaXojKwUkRtxqvZWjWjpdPD6dFn3XPmI53AQXWeRlK2l4eXaAHhNsB2nDe2WdaGbgQiHCgRQq1eW9UsNjX5uS-rTlLTsS3DX-u6KaPtlHeiMmz5Jc0QKO5OY2pLXSRXOaLcA~qmiauUPIMIixEWaK7d~9g7MthyYcSb3U5bm2IyjFaLHVK2cte5MnUDqFsqjwlCAXlCXKYp5nWItNhuqeKFS2RjPpGu65P1z~RjdvAr377-ZLTT5-B92ATWRriejh2XpP1QgD3H73bkIOt3qecOY16h4XV8OHxy0ZED0Dtj1ZCXqMfw__', // Replace with actual path or import
    },
    {
      name: 'mobilis',
      rating: 4.2,
      reviews: 4154,
      logo: 'https://s3-alpha-sig.figma.com/img/9aaa/d50c/317bbec26ef45bc20a00847079234ab9?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k2ht8zoC2TejzXX5if0GHZbmLkqdk4Tlkdy468zzL3PbUn4QguFzuvFrL28BpxMBaSuzo5FDIlI0NmvD69eAvu~0nhH4Sl1B018KfWpPzWFY~lsjdXgwEw5fQEkGkOgqFLnuIr0z55aTzjsZFWIcMG7PRKt3wKuv4NMTPCEn2JwVcJelUy~qsm2QrST7Fw8YXy0N6RVeCRiVQGMCa11qdmMjtqrnksxi7I0PBY07R~xrYRCmCy7iKZ58XuZYKLaxDoTSEm-rndE1-o~tLzGrJuPiZS1iMqk9TeiRSk7hmsrGaGL4-zHTfYZARQ6Bu~3niR9WBWjGXDS6HDZXOqtvqA__', // Replace with actual path or import
    },
    {
      name: 'Algérie Télécom',
      rating: 3.8,
      reviews: 1504,
      logo: 'https://s3-alpha-sig.figma.com/img/ac9c/ddde/d6c9e62e7e6ac4b1f985c68162cf90f3?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nBlDR3cQ7oO6IYzi7h7VcE0qblW7X5y0ygerC-oP4xL0MVTu0g8jSCeNmdkjnrG6JkJFBDyuzw8kphQyhAM1shcgKOMayuvrerygz-xYnsttVVri92nBhrimcxoViw7YEgLJe~caJxvi8eIEzWulJbY9kiuta~c31nDSVuBtRxSPbYNGPK7-kK~GbXlGKj~G~cCM8O2X68Q08rz9g0NpcBHOsvmgKrzktx0ikNMSR8uGhb--evnE0aIEBMvs~~qkJ2DaBmqOh1BU0XMKClAt1Mpd01oIzSv6gS4SPMM-8cqWtF9L07PxoX6WZFi6CDJgZLqEAp5RzWI7aPj021rfQA__', // Replace with actual path or import
    },
  ];



  return (
    <div className="suggestions-container">
      <h3 className="suggestions-title">People who looked at this company also looked at</h3>
      <ul className="company-list">
        {companies.map((company, index) => (
          <li key={index} className="company-item">
            <img src={company.logo} alt={company.name} className="company-logo" />
            <div className="company-info">
              <span className="company-name">{company.name}</span>
              <div style={{ display: "flex" }}>
                <Stars averageRating={company.rating} Size={16} origin={index * 25 + 80} />
                <span className="company-reviews">{company.reviews.toLocaleString()}</span>
              </div>
              <div style={{display:"flex"}}>
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8 16.3999C10.1217 16.3999 12.1566 15.557 13.6569 14.0568C15.1571 12.5565 16 10.5216 16 8.3999C16 6.27817 15.1571 4.24334 13.6569 2.74305C12.1566 1.24276 10.1217 0.399902 8 0.399902C5.87827 0.399902 3.84344 1.24276 2.34315 2.74305C0.842855 4.24334 0 6.27817 0 8.3999C0 10.5216 0.842855 12.5565 2.34315 14.0568C3.84344 15.557 5.87827 16.3999 8 16.3999ZM7.112 11.9599L12.715 6.0899L11.992 5.3999L7.095 10.5299L4.707 8.1419L4 8.8489L7.112 11.9599Z" fill="black" />
                </svg>
                <span className="company-status">Asking for reviews</span></div>
            </div>
          </li>
        ))}
      </ul>
      <p className="suggestion-footer">
        Suggested companies are based on people’s <a href="#" className="footer-link">browsing tendencies</a>.
      </p>
    </div>
  );
};

export default CompanySuggestions;
