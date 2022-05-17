import React from "react";
import PropTypes from "prop-types";

export default function RecordDetail(props) {
  const { record, onSelectingTerm  } = props;

  return (
    <div className="detail">
      <div onClick={() => onSelectingTerm(record.title)}>{record.title}</div>
      <div onClick={() => onSelectingTerm(record.artist)}>
        {console.log("onclick: ", record.artist)}
        {record.artist}</div>
      <div>{record.genre}</div>
      <div>{record.year}</div>
      <div>{record.format}</div>
      <div>{record.value}</div>
      <div>{record.condition}</div>
    </div>
  );
}



RecordDetail.propTypes = {
  record: PropTypes.object,
  onSelectingTerm: PropTypes.func
};

