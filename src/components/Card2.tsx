import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import '../assets/styles/card.css';

interface CardProps {
  image_source: string;
  company_name: string;
  company_slogan: string;
  company_description: string;
  rating: number;
  progress: number;
}

function Card2({ 
  image_source, 
  company_name, 
  company_slogan, 
  company_description, 
  rating, 
  progress 
}: CardProps) {
  const getProgressColor = (progressValue: number) => {
    if (progressValue <= 20) return 'yellow';
    if (progressValue <= 40) return 'orange';
    if (progressValue <= 60) return 'lightgreen';
    if (progressValue <= 80) return 'lightblue';
    return 'green';
  };

  return (
    <div className='card'>
      <div 
        className="progress-ring" 
        style={{ 
          background: `conic-gradient(
            ${getProgressColor(progress)} ${progress}%, 
            #e0e0e0 ${progress}% 100%
          )` 
        }}
      >
        <div className="progress-ring-inner">
          <img src={image_source} alt={company_name} />
        </div>
      </div>
      
      <p className='name'>{company_name} company</p>
      <p className='description'>{company_description}</p>
      
      <div className="stars">
        {Array.from({ length: 5 }, (_, index) => (
          <span
            key={index}
            className={index < rating ? 'star colored' : 'star'}
          >
            ★
          </span>
        ))}
      </div>
      <p className='slogan'>{company_slogan}</p>
      
      <div className='verified20'>
        <span>Verified</span>
        <FaThumbsUp className="like-icon" />
      </div>
    </div>
  );
}

export default Card2;