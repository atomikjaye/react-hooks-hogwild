import React, { useState } from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import Tiles from "./Tiles"
import HogFilter from "./HogFilter"

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

  // we want updated Array to sort by name
  // so we want to sort Arr based on



  function hogsToDisplay() {
    let updatedArr = [...hogArr]
    console.log("HOG ARR", hogArr)
    console.log("HOUpdated ARR", hogArr)
    console.log(filteredHogs)
    if (filteredHogs === "All") {
      updatedArr = hogArr.filter(hog => true)
    } else if (filteredHogs === "Name") {
      updatedArr = hogArr.sort((a, b) => {
        let nameA = a.name.toLowerCase()
        let nameB = b.name.toLowerCase()
        if (nameA < nameB) {
          return -1
        }
        if (nameA > nameB) {
          return 1
        }
        return 0
      })
    } else if (filteredHogs === "Weight") {
      updatedArr = hogArr.sort((a, b) => a.weight - b.weight)
    }
    console.log("UPDATED ARR", updatedArr)
  }
  hogsToDisplay()

  return (
    <div className="App">
      <Nav />
      <HogFilter
        filteredHogs={filteredHogs}
        handleFilterChange={handleFilterChange}
        greasedHogs={greasedHogs}
      // setgreasedHogs={setGreasedHogs}
      />
      <Tiles
        hogs={hogArr}
        filteredHogs={filteredHogs}
        greasedHogs={greasedHogs}
      />
    </div>
  );
}

export default App;
