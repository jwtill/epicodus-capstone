import React from "react";
import PropTypes from "prop-types";

export default function RecordDetail(props) {
  const { record, onSelectingTerm } = props;
  const recordKey = Object.keys(record);

  return (
    <div className="detail">
      <div
        onClick={() => onSelectingTerm(record.title, recordKey[0])}>{record.title}
      </div>
      <div
        onClick={() => onSelectingTerm(record.artist, recordKey[1])}>{record.artist}
      </div>
      <div
        onClick={() => onSelectingTerm(record.genre, recordKey[2])}>{record.genre}
      </div>
      <div
        onClick={() => onSelectingTerm(record.year, recordKey[3])}>
        {record.year}
      </div>
      <div
        onClick={() => onSelectingTerm(record.format, recordKey[4])}>{record.format}
      </div>
      <div
        onClick={() => onSelectingTerm(record.value, recordKey[5])}>{record.value}
      </div>
      <div
        onClick={() => onSelectingTerm(record.condition, recordKey[6])}>{record.condition}
      </div>
    </div>
  );
}



RecordDetail.propTypes = {
  record: PropTypes.object,
  onSelectingTerm: PropTypes.func
};

