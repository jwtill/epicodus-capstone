import React from "react"
import Record from "./Record"

export default function AllRecords(props) {
  return (
    <div>
      <ul>
        {props.records.map((record) =>
          <li>
            <Record
              title={record.title}
              artist={record.title}
              genre={record.title}
              year={record.title}
              format={record.title}
              value={record.title}
              condition={record.title}
            />
          </li>
        )}
        </ul>
    </div>
  )

}