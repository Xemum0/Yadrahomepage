import { useState } from 'react'
import ProfileCard from '../components/ProfileCard/ProfileCard'
import Navbar from '../components/Navbar'
import infosComponent from '../components/ProfileCard/infosComponent/infosComponent'
import ReviewForm from '../components/ShareExperience/ShareExperience'
import RatingDetails from '../components/RatingDetails/RatingDetails'
import ReviewCard from '../components/ReviewCard/ReviewCard'
import FilterBar from '../components/FilterBar/FilterBar'
import LocationList from '../components/LocationList/LocationList'
import AboutSection from '../components/AboutSection/AboutSection'
import CompanySuggestions from '../components/CompanySuggetions/CompanySuggestions'

interface Review {
  id: number;
  user: string;
  rating: number;
  datePosted: string;
  companyResponse: string | null;
  likes: number;
  text: string;
  status: string[];
}

interface Filters {
  rating: number[];
  datePosted: string[];
  status: string[];
  sortBy: string | null;
}

const CompanyPage = () => {
  const reviewsData: Review[] = [
    {
      id: 1,
      user: "Alice",
      rating: 5,
      datePosted: "2024-12-10",
      companyResponse: "Thank you for your feedback! We're glad you had a great experience.",
      likes: 56,
      text: "Amazing service! Highly recommend.",
      status: ["Company replied"],
    },
    {
      id: 2,
      user: "Bob",
      rating: 4,
      datePosted: "2024-12-01",
      companyResponse: null,
      likes: 112,
      text: "Great experience overall, but some room for improvement.",
      status: ["Verified", "Company replied"],
    },
    {
      id: 3,
      user: "Charlie",
      rating: 3,
      datePosted: "2024-10-15",
      companyResponse: "We appreciate your input and will work to improve!",
      likes: 154,
      text: "The service was okay but not exceptional.",
      status: ["Verified", "Company replied"],
    },
    {
      id: 4,
      user: "Diana",
      rating: 2,
      datePosted: "2024-08-05",
      status: ["Verified"],
      companyResponse: null,
      likes: 17,
      text: "Faced some issues. I hope it gets better.",
    },
    {
      id: 5,
      user: "Eve",
      rating: 1,
      datePosted: "2024-06-20",
      companyResponse: "We're sorry to hear this. Please contact us so we can resolve your issue.",
      likes: 164,
      text: "Terrible experience! Would not recommend.",
      status: ["Company replied"],
    },
    {
      id: 6,
      user: "Frank",
      rating: 5,
      datePosted: "2024-12-12",
      status: ["Verified"],
      companyResponse: null,
      likes: 152,
      text: "Absolutely fantastic service!",
    },
  ];

  const [filteredReviews, setFilteredReviews] = useState<Review[]>(reviewsData);

  const handleFilterChange = (filters: Filters) => {
    let filtered = [...reviewsData];

    // Filter by rating
    if (filters.rating.length > 0) {
      filtered = filtered.filter((review) =>
        filters.rating.includes(review.rating)
      );
    }

    // Filter by date posted
    if (filters.datePosted.length > 0) {
      const dateRanges: { [key: string]: number } = {
        "Last week": 7,
        "Last month": 30,
        "Last 6 months": 180,
        "Last year": 365,
      };
      filtered = filtered.filter((review) => {
        const daysDiff =
          (new Date().getTime() - new Date(review.datePosted).getTime()) / (1000 * 60 * 60 * 24);
        return filters.datePosted.some(
          (range) => daysDiff <= dateRanges[range]
        );
      });
    }

    // Filter by status
    if (filters.status.length > 0) {
      filtered = filtered.filter((review) =>
        filters.status.every((status) => review.status.includes(status))
      );
    }

    // Sort reviews
    if (filters.sortBy) {
      if (filters.sortBy === "Highest rated") {
        filtered = filtered.sort((a, b) => b.rating - a.rating);
      } else if (filters.sortBy === "Lowest rated") {
        filtered = filtered.sort((a, b) => a.rating - b.rating);
      } else if (filters.sortBy === "Most recent") {
        filtered = filtered.sort(
          (a, b) => new Date(b.datePosted).getTime() - new Date(a.datePosted).getTime()
        );
      }
    }

    setFilteredReviews(filtered);
  };

  return (
    <>
      <ProfileCard 
        numberOfReviews={3562} 
        averageRating={4.2} 
        companyName={"Djezzy Solutions"} 
        aiAssist={true} 
        featuresPaid={true} 
        isVerified={true} 
        isPremium={true} 
        websiteLink={"www.djezzy.dz"} 
        repliesRate={56} 
        responseTime={5} 
        logo={"https://s3-alpha-sig.figma.com/img/454c/f13a/26cfa771c1213400d19ee295581e425f?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KZkfBWefgFQwbzeoESj9kY4p8Gv2j8ZEWoAe5udhqGLGyn1kAt4JMeej6Nsc4morL4oDS73uhBuFmckSLdyXFABwPrJsHTh6S7YrslmSPf0XD2751xhIzcHYOnVm2Oj2bR7LGdCY~e8UMUedRYp4InirvB8aOoXgahn1nBREY5tV7kMnsJ6AckDmwuCbrV9hGw51tQDkIOXCgpua7Gw0hFtUnfEzScFiVzN6qIDEy0xbNIkY7z~3OBPfEDo4DeLwubNoej7FtJsiY5C7sMq2VPl-wiKOy2Z70Ij5z-GvdniLlV69s9jQr2~53SdEEsuSp4YOAW~qWx0gUvRhYiyQjQ__"} 
      />
      <div style={{ width: "89vw", display: "flex" }}>
        <div style={{ width: "67.86%", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ width: "70%", display: "flex", justifyContent: "center" }}>
            <ReviewForm companyName={"Djezzy"} />
          </div>
          <RatingDetails 
            numberOf_1_Stars={20} 
            numberOf_2_Stars={59} 
            numberOf_3_Stars={156} 
            numberOf_4_Stars={86} 
            numberOf_5_Stars={14} 
          />
          <FilterBar onFilterChange={handleFilterChange} />
          {filteredReviews.map((review) => (
            <div style={{ width: "100%" }} key={review.id}>
              <ReviewCard
                isVerified={review.status[0] === "Verified"} 
                likes={review.likes} 
                reviewID={review.id} 
                reviewer={review.user} 
                location={"Algiers"} 
                date={review.datePosted} 
                rating={review.rating} 
                reviewText={review.text} 
                companyResponse={review.companyResponse} 
                isLiked={false}
              />
            </div>
          ))}
        </div>

        <div style={{ width: "32.14%", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <LocationList 
            Locations={[
              { name: "Djezzy Alger", address: "5 rue Mihoubi Mohamed, 16002", reviews: 525 },
              { name: "Djezzy Oran", address: "Cité du Lycée villa n°F05, 16013", reviews: 178 },
              { name: "Djezzy Annaba", address: "Cité Ibn Khaldoun Bt 76A1, 35000", reviews: 146 },
            ]} 
            numberOfLocations={20} 
          />
          <AboutSection 
            address={"PX5X+V2C, Draria, Alger, Algeria"} 
            phone={"(00) 553 3388"} 
            email={'support@djezzy.com'} 
            companyName={"Djezzy Solutions"} 
            description={"Leading technology solutions provider in Algeria, specializing in software development, IT consulting, and digital transformation services."} 
          />
          <CompanySuggestions />
        </div>
      </div>
    </>
  );
};

export default CompanyPage;