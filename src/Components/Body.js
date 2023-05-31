import React, { StrictMode } from "react";
import Modal from "./Modal";
import Crousel from "./Crousel";
import Cards from "./Cards";

export default function Body(props) {
  let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div  style={{
            backgroundColor: !props.darkModeswithch ? "white" : "#21253a",
            color: !props.darkModeswithch ? "black" : "white",
          }}>
       <Crousel />
      <div
        className="container my-3"
        style={{
          backgroundColor: !props.darkModeswithch ? "white" : "#21253a",
          color: !props.darkModeswithch ? "black" : "white",
        }}
      >
        <StrictMode>
        <Modal mode={props.darkModeswithch} />
        </StrictMode>
        <div
          className="row"
          style={{
            backgroundColor: !props.darkModeswithch ? "white" : "#21253a",
            color: !props.darkModeswithch ? "black" : "white",
          }}
        >
          {a.map((value, index) => {
            return (
              <Cards name={value} key={index} mode={props.darkModeswithch} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
