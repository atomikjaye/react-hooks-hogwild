import hogs from "../porkers_data"
import React, { useState } from "react"

function Tile({ name, speciality, weight, highMedal, image, greased }) {
  const [showInfo, setShowInfo] = useState(false)

  function handleShowInfo() {
    setShowInfo(!showInfo ? true : false)
    // if (!showInfo) {
    // console.log(showInfo)
    //   //   setShowInfo(!showInfo)
    //   //   console.log(showInfo)
    //   // }
  }
  function showInfoDisplay() {
    return (
      <>
        <div className="ui sub header">More Information</div>
        <div className="description">
          <span><strong>Specialty:</strong> {speciality}</span><br />
          <span><strong>Weight:</strong> {weight}</span><br />
          <span><strong>Highest Medal:</strong> {highMedal}</span><br />
          <span><strong>Greased:</strong> {greased ? 'Yes' : 'No'}</span>
        </div>
      </>
    )
  }
  return (
    <div className="ui card">
      <div className="ui slide masked reveal image">
        <img src={image} alt={name} className="visible content" />
        <div className="hidden content">
          <div className="meta">
            <div className="header">More Information</div>
            <span><strong>Specialty:</strong> {speciality}</span><br />
            <span><strong>Weight:</strong> {weight}</span><br />
            <span><strong>Highest Medal:</strong> {highMedal}</span><br />
            <span><strong>Greased:</strong> {greased ? 'Yes' : 'No'}</span>
          </div>
        </div>
      </div>
      <div className="content">
        <a className="header" onClick={handleShowInfo}>{name}</a>
        {showInfo ? showInfoDisplay() : null}
      </div>
      <div className="ui bottom attached button">
        <i className="window close outline icon"></i>
        Hide Hog
      </div>
    </div >
  )
}

export default Tile