import React, { useState } from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import Tiles from "./Tiles"
import HogFilter from "./HogFilter"

function App() {
  // Filter Hogs based on form
  const [filteredHogs, setFilteredHogs] = useState("All")
  const [greasedHogs, setGreasedHogs] = useState(false)

  function handleFilterChange(e) {
    console.log(e.target.type === 'checkbox')
    if (e.target.type === 'checkbox') {
      setGreasedHogs(e.target.checked)
    } else {
      setFilteredHogs(e.target.value)
    }
  }

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
        hogs={hogs}
        filteredHogs={filteredHogs}
        greasedHogs={greasedHogs}
      />
    </div>
  );
}

export default App;
