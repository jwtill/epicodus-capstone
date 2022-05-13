import React from "react"
import Header from "./components/Header"
import Form from "./components/Form"
import { nanoid } from "nanoid"

function App() {
  const [selectedMenu, setSelectedMenu] = React.useState('Home');

  const handleChange = (event) => {
    setSelectedMenu(event.target.className);
    console.log(selectedMenu)
  }
  const [recordList, setRecordList] = React.useState([])
  // const [currentRecordId, setCurrentRecordId] = React.useState(
  //   (records[0] && records[0].id) || ""
  // )
  
  function handleAddingNewRecordToList (newRecord)  {
    console.log("newRecord")
    setRecordList(oldList => [newRecord, ...oldList]) 
    console.log("here's the records", recordList);
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
    </div>

  );
}

export default App;

// onNewRecordCreation={handleAddingNewRecordToList}
