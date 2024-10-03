import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const ReportTemplate = ({ reportData, selectedTemplate }) => {
  const contentRef = useRef();

  const generatePDF = () => {
    const input = contentRef.current;
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4'); // 'p' = portrait, 'mm' = millimeters, 'a4' = page size
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('report.pdf');
    });
  };

  return (
    <div>
      {/* This is the selected template */}
      <div ref={contentRef} style={{ padding: 20, backgroundColor: '#f0f0f0' }}>
        {selectedTemplate === 'template1' && (
          <div>
            <h1>{reportData.title}</h1>
            <p>{reportData.description}</p>
            <p><strong>Venue:</strong> {reportData.venue}</p>
            <p><strong>Duration:</strong> {reportData.duration}</p>
          </div>
        )}

        {selectedTemplate === 'template2' && (
          <div style={{ textAlign: 'center' }}>
            <h2>{reportData.title}</h2>
            <p>{reportData.description}</p>
            <p>Event held at {reportData.venue}</p>
            <p>Duration: {reportData.duration}</p>
          </div>
        )}

        {/* Add more templates if needed */}
      </div>

      {/* Button to generate PDF */}
      <button onClick={generatePDF}>Download PDF</button>
    </div>
  );
};

export default ReportTemplate;
