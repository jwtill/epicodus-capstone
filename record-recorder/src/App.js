import React from "react"
import Header from "./components/Header"
import Form from "./components/Form"
import AllRecords from "./components/AllRecords"
import RecordDetail from "./components/RecordDetail"
import { db } from './services/firestore';
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";



// useEffect( () => {
//   async function getData(){
//     const list=[];
//     setIsLoading(true);
//     const querySnapshot = await getDocs(collection(db, "posts"));
//     querySnapshot.forEach(doc => {
//       const {title, description, location } = doc.data();
//       list.push({
//         title,
//         description,
//         location
//       });
//     })
//     setPosts(list);
//     setIsLoading(false);
//   };
//   getData();
// }
// );



export default function App() {

  const [selectedMenu, setSelectedMenu] = React.useState('Home');

  const [recordList, setRecordList] = React.useState([]);

  const [selectedRecord, setSelectedRecord] = React.useState({});

  const [likeRecords, setLikeRecords] = React.useState([]);

  const [term, setTerm] = React.useState("");

  const handleChange = (event) => {
    setSelectedMenu(event.target.className);
  }
  //FirebaseError: Function setDoc() called with invalid data. Unsupported field value: undefined
  function handleAddingNewRecordToList(newRecord) {
    console.log("before record list", recordList);
    console.log("new record", newRecord);
    setRecordList(prevRecordList => [newRecord, ...prevRecordList])
    console.log("after set recordlist", recordList);
    // const recordRef = doc(db, 'record-collection', 'recordList');
    // setDoc(recordRef, { ...recordList}, { merge: true });
    setSelectedMenu("See All Records");
  }

  // React.useEffect(() => {
  //   // console.log("recordList before update:" , recordList)
  //   async function getData() {
  //     const list = [];
  //     const querySnapshot = await getDocs(collection(db, "record-collection"));
  //     querySnapshot.forEach(doc => {
  //       const {title, artist, genre, year, format, value, condition } = doc.data();
  //       list.push({title, artist, genre, year, format, value, condition});
  //     })
  //     console.log(list);
      
  //     setRecordList(list);
  //     // console.log("updated record list", recordList);
  //   };
  //   getData();
  // }, []
  // );



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



