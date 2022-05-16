import React from "react"
import Header from "./components/Header"
import Form from "./components/Form"
import AllRecords from "./components/AllRecords"
import { nanoid } from "nanoid"

function App() {
  const [selectedMenu, setSelectedMenu] = React.useState('Home');

  const [recordList, setRecordList] = React.useState( 
    () => JSON.parse(localStorage.getItem("recordList")) || []
  )

  const [selectedRecord, setSelectedRecord] = React.useState(
    () => JSON.parse(localStorage.getItem("selectedRecord")) || []
  )

  React.useEffect(() => {
    localStorage.setItem("recordList", JSON.stringify(recordList))
  }, [recordList])

  const handleChange = (event) => {
    setSelectedMenu(event.target.className);
  }
  
  function handleAddingNewRecordToList (newRecord)  {
    setRecordList(oldList => [newRecord, ...oldList]) 
    setSelectedMenu("See All Records");
  }

  function handleChangingSelectedRecord(id)  {
    const selectedRecord = recordList.filter(record => record.id === id)[0];
    setSelectedRecord({ selectedRecord: selectedRecord });
    console.log("Selected Record: ", selectedRecord)
  }
  

  return (
    <div>
      <Header selectedMenu={selectedMenu} handleChange={handleChange} />
      {selectedMenu === "Add a Record" && 
      <Form  onNewRecordCreation={handleAddingNewRecordToList} />}
      {selectedMenu === "See All Records" && <AllRecords records={recordList} onRecordSelection={handleChangingSelectedRecord} />}
    </div>

  );
}

export default App;

