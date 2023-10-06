// components/PayInsurancePage.tsx

import Image from "next/image";
import Qr from "../assets/Qrc.png";

import React from "react";
interface PayInsuranceProps {
  onSubmitPayInsurance: (data: any) => void;
  onExit: () => void; // เพิ่ม prop onExit
}

interface PayInsuranceProps {
  onSubmitPayInsurance: (data: any) => void;
}

export default function PayInsurance({
  onSubmitPayInsurance,
}: PayInsuranceProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ตัวอย่างการรับข้อมูลจากฟอร์ม (ถ้ามี)
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    onSubmitPayInsurance(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col items-center justify-center  gap-6 sm:gap-6 p-10 mt-24">
        <Image src={Qr} alt="QR Code" width={600} height={400} />
        <p>ค่าบริการ: 1000 บาท</p>
        <button type="submit">Confirm</button>
      </div>
    </form>
  );
}
