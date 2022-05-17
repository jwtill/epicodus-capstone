import React from "react"
import Header from "./components/Header"
import Form from "./components/Form"
import AllRecords from "./components/AllRecords"
import RecordDetail from "./components/RecordDetail"

function App() {
  const [selectedMenu, setSelectedMenu] = React.useState('Home');

  const [recordList, setRecordList] = React.useState(
    () => JSON.parse(localStorage.getItem("recordList")) || []
  )

  const [selectedRecord, setSelectedRecord] = React.useState(
    () => JSON.parse(localStorage.getItem("selectedRecord")) || {}
  )

  React.useEffect(() => {
    localStorage.setItem("recordList", JSON.stringify(recordList))
  }, [recordList])

  const handleChange = (event) => {
    setSelectedMenu(event.target.className);
  }

  function handleAddingNewRecordToList(newRecord) {
    setRecordList(oldList => [newRecord, ...oldList])
    setSelectedMenu("See All Records");
  }

  function handleChangingSelectedRecord(id) {
    const clickedRecord = recordList.filter(record => record.id === id)[0];
    setSelectedRecord(clickedRecord);
    setSelectedMenu("Record Detail");
  }

  //generates new list of records, filtering from main list
  //term=string`
  function handleReturningSimilarRecords(term, key) {
    console.log(term, key)
    const likeRecords = recordList.filter(record => record[key] === term);
    console.log("Like Records: ", likeRecords);
    // return likeRecords;
    // console.log("handle changing selected record: ", selectedRecord["title"])
  }


  return (
    <div>
      <Header selectedMenu={selectedMenu} handleChange={handleChange} />
      {selectedMenu === "Add a Record" &&
        <Form onNewRecordCreation={handleAddingNewRecordToList} />}

      {selectedMenu === "See All Records" && <AllRecords records={recordList} onRecordSelection={handleChangingSelectedRecord} onClickingRecord={handleChange} />}

      {selectedMenu === "Record Detail" && <RecordDetail record={selectedRecord} onSelectingTerm={handleReturningSimilarRecords} />}
    </div>

  );
}

export default App;

