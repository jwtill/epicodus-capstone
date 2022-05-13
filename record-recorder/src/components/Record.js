import React from "react";
import PropTypes from "prop-types";


function Record(props) {
  return (
    <React.Fragment>
      <li>
        <div>
          <h2>{props.title} from {props.artist}</h2>
          {/* <p>{props.pints} pints left</p> */}
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
  condition: PropTypes.string
};

export default Record;