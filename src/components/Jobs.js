import React from "react";
import CardsComp from "./CardsComp";

const Jobs = () => {
  const a = [1, 2, 3, 4, 5, 6,7, 8, 9, 10, 11, 12];
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
  return <>
    <div className="landInContainer pt-5">
    { LCard }
    </div>
  </>;
};

export default Jobs;
