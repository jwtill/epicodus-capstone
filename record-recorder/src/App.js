import React from "react"
import Header from "./components/Header"
import Form from "./components/Form"
import AllRecords from "./components/AllRecords"
import RecordDetail from "./components/RecordDetail"
import { db } from './services/firestore';
import { doc, setDoc } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import Data from "./data";


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

  const [recordList, setRecordList] = React.useState(Data);
 
  const [selectedRecord, setSelectedRecord] = React.useState({});

  const [likeRecords, setLikeRecords] = React.useState([]);

  const [term, setTerm] = React.useState("");

  const handleChange = (event) => {
    setSelectedMenu(event.target.className);
  }
  //FirebaseError: Function setDoc() called with invalid data. Unsupported field value: undefined
  function handleAddingNewRecordToList(newRecord) {
    setRecordList(prevRecordList => [...prevRecordList, newRecord])
    // setData(recordList);
    // localStorage.setItem("records")
    setSelectedMenu("See All Records");
  }

  // React.useEffect(() => {
  //   async function getData() {
  //     const list = [];
  //     const querySnapshot = await getDocs(collection(db, "record-collection"));
  //     querySnapshot.forEach(doc => {
  //       list.push(doc.data());
  //     })
  //     console.log(list);
  //     setRecordList(list);
  //   };
  //   getData();
  // }, [selectedMenu]
  // );


  async function setData(recordList) {
    const cityRef = doc(db, 'record-collection', 'recordList');
    setDoc(cityRef, { recordList }, { merge: true });
  };




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



