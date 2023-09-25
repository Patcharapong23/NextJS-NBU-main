// components/ContractPage.tsx
import React, { useState } from "react";

const ContractPage: React.FC = () => {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
  };

  return (
    <div>
      <h1>2566 Contract Dormitory Information</h1>
      <div>{/* ลายละเอียดอื่น ๆ */}</div>
      <label>
        <input type="checkbox" checked={accepted} onChange={handleAccept} />
        Accept contract
      </label>
      <button>Next</button>
    </div>
  );
};

export default ContractPage;
