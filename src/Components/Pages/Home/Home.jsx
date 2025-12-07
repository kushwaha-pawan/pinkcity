import React from 'react'
import Slider from "../Home/Slider"
import TopAttractions from "../Home/TopAttractions"
import TravelBlogVlog from "../Home/TravelBlogVlog"

const Home = () => {
  return (
    <div className="mt-16 bg-gradient-to-r from-cyan-300/20 to-purple-300/10">
      <Slider />
      <TopAttractions />
      <TravelBlogVlog />
    </div>
  )
}

export default Home