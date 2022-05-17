import React from "react";
import PropTypes from "prop-types";


function Record(props) {
  return (
    <React.Fragment>
      <li>
        <div onClick={() => props.whenRecordClicked(props.id)}>
          <h3>{props.title} by {props.artist}</h3>
        </div>
      </li>
    </React.Fragment>
  );
}

Record.propTypes = {
  title: PropTypes.string,
  artist: PropTypes.string,
  genre: PropTypes.string,
  year: PropTypes.string,
  format: PropTypes.string,
  value: PropTypes.string,
  condition: PropTypes.string,
  id: PropTypes.string,
  whenRecordClicked: PropTypes.func
};

export default Record;