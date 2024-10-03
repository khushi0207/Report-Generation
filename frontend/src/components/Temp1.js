import React, { useState } from 'react';
import ReportTemplate from './ReportTemplate';
//import { image } from 'html2canvas/dist/types/css/types/image';

const Temp1 = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('template1');
  const reportData = {
    title: 'Annual Report 2024',
    description: 'This is a report for the annual meeting.',
    venue: 'Conference Hall A',
    duration: '3 hours',

  };

  return (
    <div>
      <h1>Generate Report PDF</h1>

      {/* Template selection */}
      <select value={selectedTemplate} onChange={(e) => setSelectedTemplate(e.target.value)}>
        <option value="template1">Template 1</option>
        <option value="template2">Template 2</option>
        {/* Add more templates */}
      </select>

      {/* Display the report with the selected template */}
      <ReportTemplate reportData={reportData} selectedTemplate={selectedTemplate} />
    </div>
  );
};

export default Temp1;
