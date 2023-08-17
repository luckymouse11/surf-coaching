import React from 'react'

const Bio = () => {

  return (
    <div className="container">
      <br/>
      <br/>
      <h4>About Me</h4>
      <br/>
      <br/>
      <div className="row row-cols-1 row-cols-sm-2">

        <div className="bio-pics col">
          <img 
          className="col-12"
          src="https://res.cloudinary.com/yl/image/upload/v1692280249/Badminton/20200422_134024_nn37we.jpg"
          alt="bio-pic"
          />
        </div>

        <div className="bio-info col d-flex flex-column justify-content-center">
          <h4>1</h4>
          <p>1
            1
            1
            1
          </p>
        </div>

        <div className="bio-info col d-flex flex-column justify-content-center">
          <h4>2</h4>
          <p>2
            2
            2
            2
          </p>
        </div>

        <div className="bio-pics col">
          <img 
          className="col-12"
          src="https://res.cloudinary.com/yl/image/upload/v1692280249/Badminton/20200422_134024_nn37we.jpg"
          alt="bio-pic"
          />
        </div>

        <div className="bio-pics col">
          <img 
          className="col-12"
          src="https://res.cloudinary.com/yl/image/upload/v1692280249/Badminton/20200422_134024_nn37we.jpg"
          alt="bio-pic"
          />
        </div>

        <div className="bio-info col d-flex flex-column justify-content-center">
          <h4>3</h4>
          <p>3
            3
            3
            3
          </p>
        </div>

      </div>

    </div>
  )

}

export default Bio