"use client";
import React, { useState } from "react";

export default function Info() {
  const [formData, setFormData] = useState({
    studentId: "",
    name: "",
    faculty: "",
    department: "",
    identificationNumber: "",
    telephoneNumber: "",
    roomType: "4 คน",
    roomPrice: "15,000 บาท",
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
    <div className="flex flex-col items-center justify-center h-full gap-6 sm:gap-6 p-10 mt-24">
      <div className="w-[1120px] h-[468px] relative mx-auto">
        <div className="Box w-[409px] h-[438px] px-[21px] py-[26px] flex-col items-start gap-[13px] inline-flex justify-start">
          <div className="text-black text-lg font-normal font-['Poppins']">
            Please fill out personal information
          </div>

          <label>
            Student ID :
            <input
              type="text"
              name="studentId"
              onChange={handleChange}
              value={formData.studentId}
            />
          </label>
          <label>
            Name :
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name}
            />
          </label>
          <label>
            Faculty :
            <input
              type="text"
              name="faculty"
              onChange={handleChange}
              value={formData.faculty}
            />
          </label>
          <label>
            Department :
            <input
              type="text"
              name="department"
              onChange={handleChange}
              value={formData.department}
            />
          </label>
          <label>
            Identification Number :
            <input
              type="text"
              name="identificationNumber"
              onChange={handleChange}
              value={formData.identificationNumber}
            />
          </label>
          <label>
            Telephone number :
            <input
              type="text"
              name="telephoneNumber"
              onChange={handleChange}
              value={formData.telephoneNumber}
            />
          </label>
          <label>
            Room type :
            <input
              type="text"
              name="roomType"
              value={formData.roomType}
              readOnly
            />
          </label>
          <label>
            Room price:
            <input
              type="text"
              name="roomPrice"
              value={formData.roomPrice}
              readOnly
            />
          </label>
          <label>
            Contract date :
            <input
              type="date"
              name="contractDate"
              onChange={handleChange}
              value={formData.contractDate}
            />
          </label>
          <button onClick={handleSubmit}>Next</button>
        </div>
      </div>
    </div>
  );
}
