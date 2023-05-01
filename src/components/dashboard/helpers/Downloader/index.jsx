import React from 'react';
import { CSVLink } from 'react-csv';

const CsvDownloadButton = ({ data }) => {
  return (
    <CSVLink
      data={data}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Download CSV
    </CSVLink>
  );
};

export default CsvDownloadButton;