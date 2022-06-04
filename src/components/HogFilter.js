function HogFilter({ filteredHogs, greasedHogs, handleFilterChange }) {
  return (
    <div className="ui middle aligned center aligned grid form stacked">
      <div className="fields">
        <div className="field">
          <select className="ui dropdown" value={filteredHogs} onChange={handleFilterChange}>
            <option value="All">All</option>
            <option name="name" value="Name">Name</option>
            <option name="weight" value="Weight">Weight</option>
          </select>
        </div>
        <br />
        <div className="field">
          <div className="ui toggle checkbox">
            <input type="checkbox" checked={greasedHogs} name="public" onChange={handleFilterChange} />
            <label>Show Greased Hogs</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HogFilter