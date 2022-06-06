import React, { useState } from "react"


function AddHogForm({ addNewHog }) {
  let [showForm, setShowForm] = useState(false)

  function handleFormSubmit(e) {
    e.preventDefault()
    const hogData = {
      name: e.target.Name.value,
      specialty: e.target.Specialty.value,
      greased: e.target.greased.value === 'true',
      weight: e.target.Weight.value,
      "highest medal achieved": e.target.Medal.value,
      image: e.target.Picture.value
    }
    console.log(e.target.Name.value)
    console.log(hogData, e)
    addNewHog(hogData)
    // return hogData
  }

  function addHogButtonHTML(text, icon) {
    return (
      <div className="ui animated button" tabIndex="0" style={{ margin: "10px" }}>
        <div className="visible content">{text}</div>
        <div className="hidden content" onClick={handleShowForm}>
          <i className={`right ${icon} icon`}></i>
        </div>
      </div >
    )
  }

  function handleShowForm() {
    console.log("HI")
    setShowForm(!showForm)
  }

  function showFormHtml() {
    return (
      <form className="ui middle aligned center stacked form" onSubmit={(e) => handleFormSubmit(e)}>
        <h4 className="ui dividing header">Add a New Hog</h4>
        <div className="ui four column grid centered form">
          <div className="field">
            <label>Name</label>
            <input type="text"
              name="Name"
              placeholder="Name" />
          </div>
          <div className="field">
            <label>Picture</label>
            <input type="text"
              name="Picture"
              placeholder="Picture URL" />
          </div>
          <div className="fields">
            <div className="four wide field">
              <label>Specialty</label>
              <input type="text"
                name="Specialty"
                placeholder="Specialty" />
            </div>

            <div className="four wide field">
              <label>Weight</label>
              <div className="ui right labeled input">
                <input type="number"
                  name="Weight"
                  placeholder="Weight" />
                <div className="ui basic label">
                  kg
                </div>
              </div>
            </div>

            <div className="four wide field">
              <label>Highest Medal</label>
              <select name="Medal" className="ui dropdown">
                <option value="bronze">Bronze</option>
                <option value="silver">Silver</option>
                <option value="gold">Gold</option>
              </select>
            </div>

            <div className="four wide grouped field">
              <label>Is this hog greased?</label>
              <div className="ui radio checkbox">
                <input type="radio" value="true" name="greased" />
                <label>Yes</label>
              </div>
              <div className="ui radio checkbox">
                <input type="radio" value="false" name="greased" />
                <label>No</label>
              </div>
            </div>
          </div>
          <button className="ui button" type="submit">Submit</button>
        </div>

        {addHogButtonHTML('Remove Form', 'x')}

      </form>
    )
  }

  return (
    <>
      {showForm ? showFormHtml() : addHogButtonHTML('Add Hog', 'plus')}
    </>
  )
}

export default AddHogForm