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

  const hogsToDisplay = hogs
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

  console.log(hogsToDisplay)
  // function hogsToDisplay() {
  //   let updatedArr = [...hogArr]
  //   if (filteredHogs === "All") {
  //     updatedArr = updatedArr.filter(hog => true)
  //   } else if (filteredHogs === "Name") {
  //     // I was having problems understanding why
  //     // this was editing my original array
  //     // turns out sort() overwrites the original array!!
  //     updatedArr = updatedArr.sort((a, b) => {
  //       let nameA = a.name.toLowerCase()
  //       let nameB = b.name.toLowerCase()

  //       if (nameA < nameB) {
  //         return -1
  //       } else if (nameA > nameB) {
  //         return 1
  //       }
  //       return 0
  //     })
  //   } else if (filteredHogs === "Weight") {
  //     updatedArr = updatedArr.sort((a, b) => a.weight - b.weight)
  //   }
  // }

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
        hogs={hogsToDisplay}
        filteredHogs={filteredHogs}
        greasedHogs={greasedHogs}
      />
    </div>
  );
}

export default App;
