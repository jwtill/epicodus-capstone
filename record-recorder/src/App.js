import React from "react"
import Header from "./components/Header"
import Form from "./components/Form"
import AllRecords from "./components/AllRecords"
import { nanoid } from "nanoid"

function App() {
  const [selectedMenu, setSelectedMenu] = React.useState('Home');

  const handleChange = (event) => {
    setSelectedMenu(event.target.className);
  }
  const [recordList, setRecordList] = React.useState( 
    () => JSON.parse(localStorage.getItem("recordList")) || []
  )
  React.useEffect(() => {
    localStorage.setItem("recordList", JSON.stringify(recordList))
  }, [recordList])
  
  function handleAddingNewRecordToList (newRecord)  {
    console.log("newRecord: ", newRecord)
    setRecordList(oldList => [newRecord, ...oldList]) 
    console.log("here's the records", recordList);
    setSelectedMenu("See All Records");
  }
  

  // React.useEffect(() => {
  //   localStorage.setItem("records", JSON.stringify(records))
  // }, [records]) //when 'records' is update, do this

 
  // function createNewNote() {
  //   const newRecord = {
  //     id: nanoid(),
  //     body: "# Type your markdown note's title here"
  //   }
  //   setRecords(prevRecords => [newRecord, ...prevRecords])
  //   setCurrentRecordId(newRecord.id)
  // }

 


  return (
    <div>
      <Header selectedMenu={selectedMenu} handleChange={handleChange} />
      {selectedMenu === "Add a Record" && 
      <Form  onNewRecordCreation={handleAddingNewRecordToList} />}
      {selectedMenu === "See All Records" && <AllRecords records={recordList} />}
    </div>

  );
}

export default App;

// onNewRecordCreation={handleAddingNewRecordToList}
