import React from "react"
import Header from "./components/Header"
import Form from "./components/Form"
import AllRecords from "./components/AllRecords"
import RecordDetail from "./components/RecordDetail"
import { db } from './services/firestore'; // update with your path to firestore config
// import { doc, setDoc, getDoc } from "firebase/firestore";




export default function App() {

  // const docRef = doc(db, "records", "recordList");
  // const docSnap = getDoc(docRef);

  // console.log(docSnap.data);
  // const data = {
  //   name: 'Los Angeles',
  //   state: 'CA',
  //   country: 'USA'
  // };
  
  
  

  const [selectedMenu, setSelectedMenu] = React.useState('Home');

  const [recordList, setRecordList] = React.useState([]);

  const [selectedRecord, setSelectedRecord] = React.useState({});

  const [likeRecords, setLikeRecords] = React.useState([]);

  const [term, setTerm] = React.useState("");

  
  // React.useEffect(() => {
  //   console.log("useEffect", recordList);
  //   setDoc(doc(db, "records", "recordList"), { recordList })
  // }, [recordList])


  const handleChange = (event) => {
    setSelectedMenu(event.target.className);
  }

  async function setDocument(db) {
    // [START firestore_data_set_from_map]
    const data = {
      name: 'Los Angeles',
      state: 'CA',
      country: 'USA'
    };
  
    // Add a new document in collection "cities" with ID 'LA'
    const res = await db.collection('cities').doc('LA').set(data);
    // [END firestore_data_set_from_map]
  
    console.log('Set: ', res);
  }

  function handleAddingNewRecordToList(newRecord) {
    setRecordList(oldList => [newRecord, ...oldList])
    // console.log(recordList);
    setDocument(db);
    // setDoc(doc(db, "record-collection", "recordList"), { recordList }); 
   
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



