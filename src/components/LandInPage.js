import React from 'react'
import CardsComp from './CardsComp'

const LandInPage = () => {
  const a=[1,2,3,4,5,67,8,9,10,11,12,13]
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
  return (
    <>
       <button className="btn btn-primary mt-4 d-block mx-auto">Login and Get started</button>
       <br />
       <div>
         <input className='form-control mb-5' type="text" name="search" placeholder='Search' />
         {LCard}
       </div>
    </>
  )
}

export default LandInPage