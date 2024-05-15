import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className='home-background'>
      <div className='home-btn'>
        <Link to={"/empform"}>
          <button className='btn btn-info fw-bold p-3'>Registor Now</button>
          </Link>
      </div>
    </div>
  )
}

export default Home;
