import React from "react"
import Record from "./Record"

export default function AllRecords(props) {
  const { records, term, onRecordSelection } = props;
  return (
    <div>
    
      <ul className="record-list">
      <h1>{term ? `Other records with the "${term}" tag` : "All Records"} </h1>
        {records.map((record) =>
            <Record
              whenRecordClicked={onRecordSelection}
              title={record.title}
              artist={record.artist}
              genre={record.genre}
              year={record.year}
              format={record.format}
              value={record.value}
              condition={record.condition}
              id={record.id}
              key={record.id}
            />
         
        )}
        </ul>
    </div>
  )

}