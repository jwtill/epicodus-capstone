import React from "react"
import Record from "./Record"

export default function AllRecords(props) {
  return (
    <div>
      <ul className="record-list">
        {props.records.map((record) =>
    
            <Record
              whenRecordClicked={props.onRecordSelection}
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