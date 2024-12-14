  import { FaArrowRight } from "react-icons/fa";
  import "../assets/styles/thirdbonde.css";
  import TypeCard from "./TypeCard";
  interface infoProps {
    name: string;
    image:string;
  }
  interface ThirdBondeProps{
    type1:infoProps;
    type2:infoProps;
    type3:infoProps;
  } 
  function ThirdBonde({ type1, type2, type3 }: ThirdBondeProps) {
    return (
      <div className="thirdbonde">
        <div className="thirdbondetitle">
          <h1>Categories</h1>
          <p>Find what you are looking for</p>
        </div>
        <div className="background_column">
          <div className="third">
            <div className="firsttype">
              <TypeCard type_title={type1.name} ima={type1.image} />
            </div>
            <div className="secondtype">
              <TypeCard type_title={type2.name} ima={type2.image} />
            </div>
            <div className="thirdtype">
              <TypeCard type_title={type3.name} ima={type3.image} />
            </div>
          
          </div>
          <div className="center_button">
            <p>Horem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button className="explore_button"><span>Explore</span>
              <FaArrowRight className="arrow-icon" /></button>
          </div>
        </div>
      </div>
    );
  }
  export default ThirdBonde;
