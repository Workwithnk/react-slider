import React, { useState } from "react";
import "./StructureOfData.css";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

function StructureOfData({ detail }) {
  const [data, setData] = useState(detail);
  let initialVal = 0 ;
  const [state, setState] = useState(initialVal);
  const { img, name, des } = data[state];
  
  const rightClick = () => {
    return setState(state + 1);
  };
  const leftClick = () => { 
     return setState(state - 1);
  };

  return (
    <>
      <div
        style={{
          borderRadius: "8px",
          margin: "10px 30px",
          backgroundColor: "#95a5a6",
        }}
      >
        <div className="innerDiv">
          <img src={img} alt="img" className="imageStyle" />
          <h3 style={{ fontSize: "32px" }}>{name}</h3>
          <p
            style={{
              margin: "5px 30px",
              fontSize: "23px",
              textAlign: "center",
            }}
          >
            {des}
          </p>
        </div>
        <div className="leftIcon" onClick={ leftClick}>
        <AiFillLeftCircle />
      </div>
      <div className="rightIcon" onClick={rightClick}>
        <AiFillRightCircle />
      </div>
      </div>
      
    </>
  );
}

export default StructureOfData;
