import React from "react";
import PropTypes from "prop-types";

export default function RecordDetail(props) {
  const { record } = props;
  console.log("Record Detail", record);

  return (
    <div className="detail">
      <div>{record.title}</div>
      <div>{record.artist}</div>
      <div>{record.genre}</div>
      <div>{record.year}</div>
      <div>{record.format}</div>
      <div>{record.value}</div>
      <div>{record.condition}</div>
    </div>
  );
}


RecordDetail.propTypes = {
  record: PropTypes.object
};

