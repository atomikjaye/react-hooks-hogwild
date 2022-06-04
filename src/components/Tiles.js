import Tile from "./Tile"
function Tiles({ hogs }) {
  console.log(hogs)
  const displayTiles = hogs.map(hog => {
    return (
      <Tile
        key={hog.name}
        name={hog.name}
        specialty={hog.specialty}
        weight={hog.weight}
        greased={hog.greased}
        highMedal={hog['highest medal achieved']}
        image={hog.image}
      />
    )
  })
  return (
    <div className="ui four stackable cards">
      {displayTiles}
    </div>
  )
}

export default Tiles