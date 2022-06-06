import React, { useState } from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import Tiles from "./Tiles"
import HogFilter from "./HogFilter"
import AddHogForm from "./AddHogForm"

function App() {
  // Filter Hogs based on form
  const [hogArr, setHogArr] = useState(hogs)
  const [filteredHogs, setFilteredHogs] = useState("All")
  const [greasedHogs, setGreasedHogs] = useState(false)

  function handleFilterChange(e) {
    if (e.target.type === 'checkbox') {
      setGreasedHogs(e.target.checked)
    } else {
      setFilteredHogs(e.target.value)
    }
  }

  function handleNewHog(newHog) {
    console.log("IN APP.js", newHog)
    setHogArr([...hogArr, newHog])
    console.log("NEW HOG ARR", hogArr)
    console.log("NEW HOG ARR", hogsToDisplay)
    // console.log("NEW HOG ARR", hogArr)
  }
  // we want updated Array to sort by name
  // so we want to sort Arr based on

  const hogsToDisplay = hogArr
    .filter((hog) => (greasedHogs) ? hog.greased : true)
    .sort((currHog, prevHog) => {
      if (filteredHogs === "Weight") {
        return currHog.weight - prevHog.weight
      } else if (filteredHogs === "Name") {
        let nameA = currHog.name.toLowerCase()
        let nameB = prevHog.name.toLowerCase()

        if (nameA < nameB) {
          return -1
        } else if (nameA > nameB) {
          return 1
        }
        return 0
      }
    })

  return (
    <div className="App">
      <Nav />
      <HogFilter
        filteredHogs={filteredHogs}
        handleFilterChange={handleFilterChange}
        greasedHogs={greasedHogs}
      />
      <AddHogForm addNewHog={handleNewHog} />
      <Tiles
        hogs={hogsToDisplay}
        filteredHogs={filteredHogs}
        greasedHogs={greasedHogs}
      />
    </div>
  );
}

export default App;
