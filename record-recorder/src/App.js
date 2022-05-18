import React from "react"
import Header from "./components/Header"
import Form from "./components/Form"
import AllRecords from "./components/AllRecords"
import RecordDetail from "./components/RecordDetail"
import { db } from './services/firestore';
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";







export default function App() {

  async function getData() {
    const querySnapshot = await getDocs(collection(db, "record-collection"));
    let results = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
  
      results.push(doc.data());
    });

  }
  // getData().then(
  //   function(results) {
  //     return results;
  //   }
  // )
  
  const currentRecordData = getData();
  console.log("results: ", currentRecordData);





  const [selectedMenu, setSelectedMenu] = React.useState('Home');

  const [recordList, setRecordList] = React.useState([]);


  const [selectedRecord, setSelectedRecord] = React.useState({});

  const [likeRecords, setLikeRecords] = React.useState([]);

  const [term, setTerm] = React.useState("");



  const handleChange = (event) => {
    setSelectedMenu(event.target.className);
  }



  function handleAddingNewRecordToList(newRecord) {
    setRecordList(oldList => [newRecord, ...oldList])

    // updateDoc(doc(db, "record-collection", "recordList"), {
    //   newRecord
    // });
    const recordRef = doc(db, 'record-collection', 'recordList');
    setDoc(recordRef, { ...recordList }, { merge: true });



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



