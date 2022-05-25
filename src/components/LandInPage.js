import React from "react";
import CardsComp from "./CardsComp";
import { useNavigate } from "react-router";
import "../styles/LandIn.css";

const LandInPage = () => {
  const navigate = useNavigate();
  const a = [1, 2, 3, 4, 5, 67, 8, 9, 10, 11, 12, 13];
  const LCard = (
    <div className="body-controls">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          {a.map((x) => {
            return (
              <>
                <CardsComp />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
  const goToLogin = () => {
    navigate("/Login");
  };
  return (
    <div className="landInContainer">
      <button
        className="btn btn-primary d-block mx-auto"
        onClick={() => goToLogin()}
      >
        Login and Get started
      </button>
      <br />
      <div className="form">
        <input
          className="mb-5"
          type="text"
          name="search"
          placeholder="Search"
        />
        <button className="btn btn-primary" onClick={() => goToLogin()}>
          Search
        </button>
      </div>
      {LCard}
    </div>
  );
};

export default LandInPage;
