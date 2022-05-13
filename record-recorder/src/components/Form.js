import React from "react"
import { nanoid } from "nanoid"

export default function Form() {

  const [formData, setFormData] = React.useState(
    {
      title: "",
      artist: "",
      genre: "",
      year: "",
      format: "",
      value: "",
      condition: ""
    }
  )
  

  function handleChange(event) {
    const { name, value} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name] : value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log("You submitted a form:", formData);

    props.onNewRecordCreation({
      title: event.target.title.value,
      artist: event.target.artist.value,
      genre: parseInt(event.target.genre.value),
      year: parseInt(event.target.year.value),
      format: parseInt(event.target.format.value),
      value: parseInt(event.target.value.value),
      condition: parseInt(event.target.condition.value),
      id: nanoid()
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="title"
        onChange={handleChange}
        name="title"
        value={formData.title}
      />
      <input
        type="text"
        placeholder="artist"
        onChange={handleChange}
        name="artist"
        value={formData.artist}
      />
      <input
        type="text"
        placeholder="genre"
        onChange={handleChange}
        name="genre"
        value={formData.genre}
      />
      <input
        type="text"
        placeholder="year"
        onChange={handleChange}
        name="year"
        value={formData.year}
      />
      <input
        type="text"
        placeholder="format"
        onChange={handleChange}
        name="format"
        value={formData.format}
      />
      <input
        type="text"
        placeholder="value"
        onChange={handleChange}
        name="value"
        value={formData.value}
      />
      <input
        type="text"
        placeholder="condition"
        onChange={handleChange}
        name="condition"
        value={formData.condition}
      />
      
      <button>Submit</button>

    </form>
  )
}