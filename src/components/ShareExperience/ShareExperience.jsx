import React, { useState, useEffect } from 'react';
import './ShareExperience.css';
import CustomDateInput from './ui/dateInput/dateInput';
import RadioButton from './ui/radioBtn/radioBtn';
import RatingStar from '../ProfileCard/infosComponent/ratingStar/ratingStar';

const ReviewForm = ({ companyName }) => {
  const [numStars1, setNumStars1] = useState(0);
  const [numStars2, setNumStars2] = useState(0);
  const [numStars3, setNumStars3] = useState(0);
  const [numStars4, setNumStars4] = useState(0);
  const [numStars5, setNumStars5] = useState(0);
  const [numStars6, setNumStars6] = useState(0);

  const [showForm, setShowForm] = useState(false);

  function setStars(initialValue){
    setNumStars1(initialValue-100)
    setNumStars2(initialValue-100)
    setNumStars3(initialValue-100)
    setNumStars4(initialValue-100)
    setNumStars5(initialValue-100)
    setNumStars6(initialValue-100)
    setShowForm(true)
  }



  const stars1 = []
  const stars2 = []
  const stars3 = []
  const stars4 = []
  const stars5 = []
  const stars6 = []

  for (let i = 6; i <= 10; i++) {
    stars1.push(
      <div onClick={() => setNumStars1(i - 5)} key={i} style={{ width: "30px" }}>
        {(i <= numStars1 + 5) ?
          <RatingStar id={i} rating={1} size={24} /> : <RatingStar id={i} rating={0} />
        }
      </div>
    );
  }

  for (let i = 11; i <= 15; i++) {
    stars2.push(
      <div onClick={() => setNumStars2(i - 10)} key={i} style={{ width: "30px" }}>
        {(i <= numStars2 + 10) ?
          <RatingStar id={i} rating={1} size={24} /> : <RatingStar id={i} rating={0} />
        }
      </div>
    );
  }

  for (let i = 16; i <= 20; i++) {
    stars3.push(
      <div onClick={() => setNumStars3(i - 15)} key={i} style={{ width: "30px" }}>
        {(i <= numStars3 + 15) ?
          <RatingStar id={i} rating={1} size={24} /> : <RatingStar id={i} rating={0} />
        }
      </div>
    );
  }

  for (let i = 21; i <= 25; i++) {
    stars4.push(
      <div onClick={() => setNumStars4(i - 20)} key={i} style={{ width: "30px" }}>
        {(i <= numStars4 + 20) ?
          <RatingStar id={i} rating={1} size={24} /> : <RatingStar id={i} rating={0} />
        }
      </div>
    );
  }

  for (let i = 26; i <= 30; i++) {
    stars5.push(
      <div onClick={() => setNumStars5(i - 25)} key={i} style={{ width: "30px" }}>
        {(i <= numStars5 + 25) ?
          <RatingStar id={i} rating={1} size={24} /> : <RatingStar id={i} rating={0} />
        }
      </div>
    );
  }

  for (let i = 101; i <= 105; i++) {
    stars6.push(
      <div onClick={() => {setStars(i)}} key={i} style={{ width: "30px" }}>
        {(i <= numStars5 + 100) ?
          <RatingStar id={i} rating={1} size={24} /> : <RatingStar id={i} rating={0} />
        }
      </div>
    );
  }

  const [con1, setcon1] = useState(false);
  const [con2, setcon2] = useState(false)
  const [activeName, setActiveName] = useState(false)



  useEffect(() => {
    const checkScreenSize = () => {
      setcon1(window.innerWidth <= 1261);
      setcon2(window.innerWidth <= 496);
    }

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  return (
    <>
      <div style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}}>
        <div className='shareInt' style={{width:"100%",display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
        <div className="avatarOfUser"></div>
        <h3 style={{color:"#4A3DE5",cursor:"pointer"}} onClick={()=>setShowForm(!showForm)}>Share your experience</h3>
        <div style={{display:"flex"}}>
          {stars6}
        </div>
        </div>
        <form id={"formReview"} className={showForm?"visible":"hidden"} style={{margin:"30px"}}>
          <div className={con1 ? "shareExp res1" : 'shareExp'}>
            <div style={{ width: "100%" ,display:con1?"flex":"",justifyContent:"center"}}>
              <div style={{ display: "flex", flexDirection: "column", position: "relative", width: "247px" }}>
                <div style={{ marginLeft: "10px", display: "flex", justifyContent: "start" }}><label className='labelStyle' htmlFor="">Name</label></div>
                <input onFocus={() => setActiveName(true)} onBlur={() => setActiveName(false)} placeholder='Name' className='Name' type="text" />
                <svg style={{ position: "absolute", transform:"translateY(165%)", right: "10px" }} width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.24031 9.37697C12.0847 9.37697 14.3905 7.52201 14.3905 5.23379C14.3905 2.94557 12.0847 1.09061 9.24031 1.09061C6.39592 1.09061 4.09009 2.94557 4.09009 5.23379C4.09009 7.52201 6.39592 9.37697 9.24031 9.37697Z" stroke={activeName ? "#4A3AFF" : "grey"} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M1 17.9661C1 16.2079 1.86818 14.5218 3.41354 13.2786C4.95891 12.0354 7.05488 11.337 9.24036 11.337C11.4258 11.337 13.5218 12.0354 15.0672 13.2786C16.6125 14.5218 17.4807 16.2079 17.4807 17.9661" stroke={activeName ? "#4A3AFF" : "grey"} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column",alignItems:con1?"center":"", width: "100%" }}>
              <div style={{ marginLeft: "10px", display: "flex", justifyContent: "start" }}><label className='labelStyle' htmlFor="">Anonymous?</label></div>
              <div style={{ display: "flex", justifyContent: "space-between" }}><RadioButton /></div>
            </div>
            <div style={{ width: "100%" ,display:"flex",flexDirection:"column",alignItems:con1?"center":""}}>
              <div style={{ marginLeft: "10px", display: "flex", justifyContent: "start" }}><label className='labelStyle' htmlFor="">date of experience</label></div>
              <CustomDateInput />
            </div>
            <div style={{ display: "flex", flexDirection: "column", width: "100%",alignItems:con1?"center":"" }}>
              <div style={{ marginLeft: "10px", display: "flex", justifyContent: "start" }}><label className='labelStyle' htmlFor="">Company</label></div>
              <input type="text" readOnly={true} className='Name' value={companyName} />
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)" }}>
            <div style={{ marginLeft: "20px", display: "flex", justifyContent: "start" }}><label className='labelStyle' htmlFor="">Product Quality:</label></div>
            <div style={{ marginLeft: "20px", display: "flex" }}>
              {stars1}
            </div>
            <div style={{ marginLeft: "20px", display: "flex", justifyContent: "start" }}><label className='labelStyle' htmlFor="">Price:</label></div>
            <div style={{ marginLeft: "20px", display: "flex" }}>
              {stars2}
            </div>
            <div style={{ marginLeft: "20px", display: "flex", justifyContent: "start" }}><label className='labelStyle' htmlFor="">Delivery Speed:</label></div>
            <div style={{ marginLeft: "20px", display: "flex" }}>
              {stars3}
            </div>
            <div style={{ marginLeft: "20px", display: "flex", justifyContent: "start" }}><label className='labelStyle' htmlFor="">Customer Service:</label></div>
            <div style={{ marginLeft: "20px", display: "flex" }}>
              {stars4}
            </div>
            <div style={{ marginLeft: "20px", display: "flex", justifyContent: "start" }}><label className='labelStyle' htmlFor="">Ease of use:</label></div>
            <div style={{ marginLeft: "20px", display: "flex" }}>
              {stars5}
            </div>
          </div>
          <div style={{ marginLeft: "20px", display: "flex", justifyContent: "start" }}><label className='labelStyle' htmlFor="">Additional feedback:</label></div>
          <textarea style={{ width: "90%", height: "122px", outline: "none", boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.274)", backgroundColor: "white", color: "black", borderRadius: "20px", padding: "20px" }} placeholder='If you have any additional feedback, please type it in here...' name="feedback" id="feedbackTextArea"></textarea>
          <p style={{ color: "grey", fontSize: "10px" }}>By submitting this review, you confirm it’s based on a genuine experience and you haven’t received an incentive to write it.</p>
          <input className='btnSubmit' type="submit" value={"Submit feedback"} />
        </form>
      </div>



    </>

  );
};

export default ReviewForm;