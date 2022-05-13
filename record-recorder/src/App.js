import React from "react"
import Header from "./components/Header"
import Form from "./components/Form"

export default function App() {
  const [selectedMenu, setSelectedMenu] = React.useState('Home');

  const handleChange = (event) => {
    console.log(selectedMenu)
    setSelectedMenu(event.target.className);
  };

  return (
    <div>
      <Header selectedMenu={selectedMenu} handleChange={handleChange} />
      {selectedMenu === "Add a Record" && <Form />}
    </div>

  );
}


