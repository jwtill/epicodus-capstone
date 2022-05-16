import React from "react";
import PropTypes from "prop-types";

export default function RecordDetail(props) {
  const { record } = props;
  console.log("Record Detail", record);

  return (
    <React.Fragment>
      <table>
        <tbody>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Genre</th>
            <th>Year</th>
            <th>Format</th>
            <th>Value</th>
            <th>Condition</th>
          </tr>
          <tr>
            <td>{record.title}</td> 
            <td>{record.artist}</td>
            <td>{record.genre}</td>
            <td>{record.year}</td>
            <td>{record.format}</td>
            <td>{record.value}</td>
            <td>{record.condition}</td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
}


RecordDetail.propTypes = {
  record: PropTypes.object
};

