// components/PayInsurancePage.tsx
import React from "react";

export default function Pay_Insurance() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-6 sm:gap-6 p-10 mt-24">
      <img src="QRcode.png" alt="QR Code" sizes="60px" />
      <p>ค่าบริการ: 1000 บาท</p>
      <button>Confirm</button>
    </div>
  );
}
