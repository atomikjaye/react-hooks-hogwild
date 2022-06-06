// import hogs from "../porkers_data"
import React, { useState } from "react"

function Tile({ name, specialty, weight, highMedal, image, greased }) {
  const [showInfo, setShowInfo] = useState(false)
  const [showHide, setShowHide] = useState(true)

  function handleShowInfo() {
    console.log("HERE click")
    setShowInfo(showInfo ? false : true)
  }

  function handleShowHide() {
    console.log("click")
    setShowHide(showHide ? false : true)
    console.log(showHide)

  }

  function showInfoDisplay() {
    return (
      <>
        <div className="ui sub header">More Information</div>
        <div className="description left aligned">
          <span><strong>✨ Specialty:</strong> {specialty}</span><br />
          <span><strong>🏋️ Weight:</strong> {weight}</span><br />
          <span><strong>🥇 Highest Medal:</strong> {highMedal}</span><br />
          <span><strong>🛢️ Greased:</strong> {greased ? 'Yes' : 'No'}</span>
        </div>
      </>
    )
  }

  function showTile() {
    return (
      <div className="ui card">
        <div className="ui slide masked reveal image">
          <img src={image} alt={name} className="content" />
        </div>
        <div className="content">
          <a className="header" onClick={handleShowInfo}>{name}</a>
          {showInfo ? showInfoDisplay() : null}
        </div>
        <div className="ui bottom attached button" onClick={handleShowHide}>
          <i className="window close outline icon"></i>
          Hide Hog
        </div>
      </div>
    )
  }
  return (
    <>
      {showHide ? showTile() : null}
    </>
  )
}

export default Tile