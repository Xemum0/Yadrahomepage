import React from 'react';

const RatingStar = ({
    id,
    rating = 0,
    size = 24,
    fillColor = '#3E66DF',
    emptyColor = '#ffffff',
    borderColor = '#3E66DF',
    borderWidth = 3
}) => {
    // Ensure rating is between 0 and 1
    const clampedRating = Math.max(0, Math.min(1, rating));

    // Precise star path calculation using trigonometry
    const createStarPath = (centerX, centerY, innerRadius, outerRadius, numPoints = 5) => {
        const points = [];
        for (let i = 0; i < numPoints * 2; i++) {
            const angle = (Math.PI / numPoints) * i - Math.PI / 2;
            const radius = i % 2 === 0 ? outerRadius : innerRadius;
            const x = centerX + Math.cos(angle) * radius;
            const y = centerY + Math.sin(angle) * radius;
            points.push(`${x},${y}`);
        }
        return `M${points.join('L')}Z`;
    };

    // Star dimensions
    const centerX = 30;
    const centerY = 30;
    const outerRadius = 28;
    const innerRadius = 11;

    // Create star paths
    const fullStarPath = createStarPath(centerX, centerY, innerRadius, outerRadius);

    return (
        <svg
            width={`${size}px`}
            height={`${size}px`}
            viewBox="0 0 60 60"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Defs for clipping */}
            <defs>
                <clipPath id={"star-clip"+id}>
                    <rect
                        x="0"
                        y="0"
                        width={`${clampedRating * 100}%`}
                        height="100%"
                    />
                </clipPath>
            </defs>

            {/* Empty star background with border */}
            <path
                d={fullStarPath}
                fill={emptyColor}
                stroke={borderColor}
                strokeWidth={borderWidth}
                strokeLinejoin="round"
                strokeLinecap="round"
            />

            {/* Filled portion */}
            <path
                d={fullStarPath}
                fill={fillColor}
                clipPath={"url(#star-clip"+id+")"}
                stroke={fillColor}
                strokeWidth={borderWidth}
                strokeLinejoin="round"
                strokeLinecap="round"
            />
        </svg>
    );
};

export default RatingStar;