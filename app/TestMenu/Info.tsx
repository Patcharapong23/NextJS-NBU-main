"use client";
import React, { useState } from "react";

import "./Info.css"; // Import your custom CSS file

export default function Info() {
  const [formData, setFormData] = useState({
    studentId: "",
    name: "",
    faculty: "",
    department: "",
    telephoneNumber: "",
    contractDate: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // ส่งข้อมูลไปยัง back-end
    fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="w-[1120px] relative mx-auto text-center">
      <div className="Box w-[409px]  px-[21px] py-[26px] flex-col items-center gap-[13px] inline-flex justify-center">
        <div className="text-black text-lg font-normal font-['Poppins'] ">
          กรุณากรอกข้อมูลส่วนตัว
        </div>
        <div className="mt-5 text-left">
          <label className="mt-5">
            รหัสนักศึกษา
            <input
              type="text"
              name="studentId"
              onChange={handleChange}
              value={formData.studentId}
              style={{ width: "350px" }}
              className="input-style "
            />
          </label>
          <label>
            ชื่อ-นามสกุล
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name}
              className="input-style"
              style={{ width: "350px" }}
            />
          </label>
          <label>
            คณะ
            <input
              type="text"
              name="faculty"
              onChange={handleChange}
              value={formData.faculty}
              className="input-style flex"
              style={{ width: "350px" }}
            />
          </label>
          <label>
            สาขา
            <input
              type="text"
              name="department"
              onChange={handleChange}
              value={formData.department}
              style={{ width: "350px" }}
              className="input-style flex"
            />
          </label>
          <label>
            เบอร์
            <input
              type="text"
              name="telephoneNumber"
              onChange={handleChange}
              value={formData.telephoneNumber}
              style={{ width: "350px" }}
              className="input-style flex"
            />
          </label>
          <label>
            วันที่ทำสัญญา
            <input
              type="date"
              name="contractDate"
              onChange={handleChange}
              value={formData.contractDate}
              style={{ width: "350px" }}
              className="input-style flex"
            />
          </label>
          <div className="flex justify-end mt-5 mr-[16px] ">
            <button
              className="relative bg-neutral-700 rounded-xl px-4 py-2 text-white  flex"
              onClick={handleSubmit}
            >
              ถัดไป
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
