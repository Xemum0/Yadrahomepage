import React, { useState } from 'react';
import './FilterBar.css';

const FilterBar = ({ onFilterChange }) => {
    const [filters, setFilters] = useState({
        rating: [],
        datePosted: [],
        status: [],
        sortBy: '',
    });

    const handleCheckboxChange = (category, value) => {
        setFilters((prev) => {
            const updatedCategory = prev[category].includes(value)
                ? prev[category].filter((item) => item !== value)
                : [...prev[category], value];

            const updatedFilters = { ...prev, [category]: updatedCategory };
            onFilterChange(updatedFilters);
            return updatedFilters;
        });
    };

    const handleRadioChange = (category, value) => {
        const updatedFilters = { ...filters, [category]: value };
        setFilters(updatedFilters);
        onFilterChange(updatedFilters);
    };

    return (
        <div className="filter-bar">
            <div className="filter-group">
                <h4>Rating</h4>
                {[5, 4, 3, 2, 1].map((star) => (
                    <label className='checkbox-container' key={star}>
                        <input
                            type="checkbox"
                            checked={filters.rating.includes(star)}
                            onChange={() => handleCheckboxChange('rating', star)}
                        />
                        <span className="checkmark"></span>

                        {star} ★
                    </label>
                ))}
            </div>

            <div className="filter-group">
                <h4>Date posted</h4>
                {['Last week', 'Last month', 'Last 6 months', 'Last year'].map((timeframe) => (
                    <label className='checkbox-container' key={timeframe}>
                        <input
                            type="checkbox"
                            checked={filters.datePosted.includes(timeframe)}
                            onChange={() => handleCheckboxChange('datePosted', timeframe)}
                        />
                        <span className="checkmark"></span>

                        {timeframe}
                    </label>
                ))}
            </div>

            <div className="filter-group">
                <h4>Status</h4>
                {['Verified', 'Company replied'].map((status) => (
                    <label className='checkbox-container' key={status}>
                        <input
                            type="checkbox"
                            checked={filters.status.includes(status)}
                            onChange={() => handleCheckboxChange('status', status)}
                        />
                        <span className="checkmark"></span>
                        {status}
                    </label>
                ))}
            </div>

            <div className="filter-group">
                <h4>Sort by</h4>
                {['Most recent', 'Highest rated', 'Lowest rated'].map((option) => (
                    <label className='radio2-container'
                        key={option}>
                        <input
                            type="radio"
                            name="sortBy"
                            checked={filters.sortBy === option}
                            onChange={() => handleRadioChange('sortBy', option)}
                        />
                        <span className="checkmark"></span>
                        {option}
                    </label>
                ))}
            </div>
        </div>
    );
};

export default FilterBar;
