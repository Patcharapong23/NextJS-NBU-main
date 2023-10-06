import React, { useState, useEffect } from "react";
import "./Info.css";

const AdditionalInfo = ({
  onSubmitAdditionalInfo,
}: {
  onSubmitAdditionalInfo: (data: object) => void;
}) => {
  const [additionalInfo, setAdditionalInfo] = useState({
    studentId: "",
    name: "",
    faculty: "",
    department: "",
    telephoneNumber: "",
    contractDate: "",
  });

  const [isFormComplete, setIsFormComplete] = useState(false);

  useEffect(() => {
    const formValues = Object.values(additionalInfo);
    const complete = formValues.every((value) => value !== "");
    setIsFormComplete(complete);
  }, [additionalInfo]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setAdditionalInfo({
      ...additionalInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const formValues = Object.values(additionalInfo);
    const complete = formValues.every((value) => value !== "");

    if (complete) {
      onSubmitAdditionalInfo(additionalInfo);
    }
  };

  const faculties = [
    {
      name: "เทคโนโลยีสารสนเทศและนวัตกรรมดิจิทัล",
      departments: [
        "เทคโนโลยีสารสนเทศและนวัตกรรมดิจิทัล",
        "สาขาวิชานวัตกรรมดิจิทัลและสื่อศิลป์",
        "สาขาวิชาเทคโนโลยีธุรกิจดิจิทัล",
      ],
    },
    { name: "พยาบาลศาสตร์ ", departments: ["พยาบาลศาสตร์ ", "ผู้ช่วยพยาบาล"] },
    {
      name: "ศึกษาศาสตร์ ",
      departments: [
        "คอมพิวเตอร์ศึกษา ",
        "การศึกษาปฐมวัย",
        "พลศึกษาและวิทยาศาสตร์การกีฬา",
        ,
      ],
    },
    // เพิ่มคณะและสาขาตามที่ต้องการ
  ];

  return (
    <div className="flex-auto md:flex-col justify-center items-center h-full gap-6 sm:gap-6 p-10  text-center ">
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
              style={{ width: "350px" }}
              className="input-style border-2 mt-3 "
              value={additionalInfo.studentId}
            />
          </label>
          <label className="mt-5">
            ชื่อ-นามสกุล
            <input
              type="text"
              name="name"
              onChange={handleChange}
              className="input-style border-2 mt-3"
              style={{ width: "350px" }}
              value={additionalInfo.name}
            />
          </label>
          <label className="mt-5">
            คณะ
            <select
              name="faculty"
              onChange={handleChange}
              style={{ width: "350px" }}
              className="input-style flex border-2 mt-3"
              value={additionalInfo.faculty}
            >
              <option value="">กรุณาเลือกคณะ</option>
              {faculties.map((faculty) => (
                <option key={faculty.name} value={faculty.name}>
                  {faculty.name}
                </option>
              ))}
            </select>
          </label>
          {additionalInfo.faculty && (
            <label className="mt-5">
              สาขา
              <select
                name="department"
                onChange={handleChange}
                style={{ width: "350px" }}
                className="input-style flex border-2 mt-3"
                value={additionalInfo.department}
              >
                <option value="">กรุณาเลือกสาขา</option>
                {faculties
                  .find((faculty) => faculty.name === additionalInfo.faculty)
                  ?.departments.map((department) => (
                    <option key={department} value={department}>
                      {department}
                    </option>
                  ))}
              </select>
            </label>
          )}
          <label className="mt-5">
            เบอร์
            <input
              type="text"
              name="telephoneNumber"
              onChange={handleChange}
              style={{ width: "350px" }}
              className="input-style flex border-2 mt-3"
              value={additionalInfo.telephoneNumber}
            />
          </label>
          <label className="mt-5">
            วันที่ทำสัญญา
            <input
              type="date"
              name="contractDate"
              onChange={handleChange}
              style={{ width: "350px" }}
              className="input-style flex  border-2 mt-3"
              value={additionalInfo.contractDate}
            />
          </label>
        </div>
        <div className="flex justify-end mt-5 mr-[16px] ">
          <button
            className={`relative rounded-xl px-4 py-2 text-white  flex ${
              isFormComplete ? "bg-[#E4965D]" : "bg-neutral-700"
            }`}
            onClick={handleSubmit}
            disabled={!isFormComplete}
          >
            ยืนยัน
          </button>
        </div>

        {!isFormComplete && (
          <div className="text-red-600 mt-2">กรุณากรอกข้อมูลให้ครบถ้วน</div>
        )}
      </div>
    </div>
  );
};

export default AdditionalInfo;
