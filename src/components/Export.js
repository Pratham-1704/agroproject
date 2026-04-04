import React, { useState } from 'react';

const Export = () => {

  const [selectedPdf, setSelectedPdf] = useState(null);

  const certificates = [
    {
      name: "GST REGISTRATION CERTIFICATE",
      file: "/certifications/my-certificate.pdf"
    },
    {
      name: "UDYAM REGISTRATION CERTIFICATE",
      file: "/certifications/my-certificate1.pdf"
    }
  ];

  return (
    <section className="export" id="export">
      <div className="export-container">

        <h2 className="section-title">Export</h2>

        {/* Certifications */}
        <div className="certifications-section">
          <h3 className="certifications-title">Our Certifications</h3>

          <div className="certifications-grid">

            {certificates.map((cert, index) => (
              <div className="certification-card" key={index}>
                {/* <div style={{ fontSize: "40px" }}>📄</div> */}
                <img src="./certifications/cert.png" alt={cert.name} />

                <span>{cert.name}</span>

                <button
                  className="view-btn"
                  onClick={() => setSelectedPdf(cert.file)}
                >
                  View
                </button>

              </div>
            ))}

          </div>
        </div>

        {/* ✅ PDF MODAL */}
        {selectedPdf && (
          <div className="pdf-modal">
            <div className="pdf-content">

              <button 
                className="close-btn" 
                onClick={() => setSelectedPdf(null)}
              >
                ✖
              </button>

              <iframe
                src={selectedPdf}
                title="Certificate"
                width="100%"
                height="600px"
              />

            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Export;