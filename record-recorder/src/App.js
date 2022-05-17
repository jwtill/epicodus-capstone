import React from "react"
import Header from "./components/Header"
import Form from "./components/Form"
import AllRecords from "./components/AllRecords"
import RecordDetail from "./components/RecordDetail"
import { db } from './services/firestore'; // update with your path to firestore config
import { doc, setDoc } from "firebase/firestore";

// export const createRecord = async (recordList) => {
//   await setDoc(doc(db, 'recordList', recordList[0].id), recordList);
// };




export default function App() {

 
    


  const [selectedMenu, setSelectedMenu] = React.useState('Home');

  const [recordList, setRecordList] = React.useState(
    () => JSON.parse(localStorage.getItem("recordList")) || []
  )

  const [selectedRecord, setSelectedRecord] = React.useState(
    () => JSON.parse(localStorage.getItem("selectedRecord")) || {}
  )

  const [likeRecords, setLikeRecords] = React.useState(
    () => JSON.parse(localStorage.getItem("likeRecords")) || []
  )
  const [term, setTerm] = React.useState(
    () => JSON.parse(localStorage.getItem("term")) || ""
  )

  React.useEffect (() => {

      // setDoc(doc(db, "recordList", "fish"), recordList, 

      // [recordList])});
      


  // const addRecordToDb = async (record) => {
  //   await setDoc(doc(db, "recordList", record.title), record
  // )};

  const handleChange = (event) => {
    setSelectedMenu(event.target.className);
  }

  function handleAddingNewRecordToList(newRecord) {
    setRecordList(oldList => [newRecord, ...oldList])
    // createRecord(newRecord);
    setSelectedMenu("See All Records");

  }

  function handleChangingSelectedRecord(id) {
    const clickedRecord = recordList.filter(record => record.id === id)[0];
    setSelectedRecord(clickedRecord);

    setSelectedMenu("Record Detail");
  }

  function handleReturningSimilarRecords(term, key) {
    const likeRecords = recordList.filter(record => record[key] === term);
    setTerm(term);
    setLikeRecords(likeRecords);
    setSelectedMenu("See Related Records");
  }

  return (
    <div>
      <Header selectedMenu={selectedMenu} handleChange={handleChange} />
      {selectedMenu === "Add a Record" &&
        <Form onNewRecordCreation={handleAddingNewRecordToList} />}

      {selectedMenu === "See All Records" && <AllRecords records={recordList} onRecordSelection={handleChangingSelectedRecord} onClickingRecord={handleChange} />}

      {selectedMenu === "Record Detail" && <RecordDetail record={selectedRecord} onSelectingTerm={handleReturningSimilarRecords} />}

      {selectedMenu === "See Related Records" && <AllRecords term={term} records={likeRecords} onRecordSelection={handleChangingSelectedRecord} onClickingRecord={handleChange} />}

    </div>

  );
}



