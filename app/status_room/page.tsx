"use client";

import React, { useState } from "react";
import "./status_room.css";
type Room = {
  roomNumber: string;
  status: string;
  quantity: string;
  cost: string;
  type: string;
};

type RoomData = {
  [key: string]: Room[];
};

export default function Status_room() {
  const [selected, setSelected] = useState<string>("2");
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(event.target.value);
  };

  const roomData: RoomData = {
    "2": [
      {
        roomNumber: "221",
        status: "ว่าง",
        quantity: "3/4",
        cost: "15,000",
        type: "ธรรมดา",
      },
      {
        roomNumber: "222",
        status: "ไม่ว่าง",
        quantity: "4/4",
        cost: "15,000",
        type: "ธรรมดา",
      },
      {
        roomNumber: "223",
        status: "ว่าง",
        quantity: "2/4",
        cost: "15,000",
        type: "ธรรมดา",
      },
      {
        roomNumber: "224",
        status: "ว่าง",
        quantity: "3/4",
        cost: "15,000",
        type: "ธรรมดา",
      },
      {
        roomNumber: "225",
        status: "ไม่ว่าง",
        quantity: "4/4",
        cost: "15,000",
        type: "ธรรมดา",
      },
      {
        roomNumber: "226",
        status: "ว่าง",
        quantity: "2/4",
        cost: "15,000",
        type: "ธรรมดา",
      },
      {
        roomNumber: "227",
        status: "ไม่ว่าง",
        quantity: "2/4",
        cost: "15,000",
        type: "ธรรมดา",
      },
      {
        roomNumber: "228",
        status: "ว่าง",
        quantity: "1/4",
        cost: "15,000",
        type: "ธรรมดา",
      },
      {
        roomNumber: "229",
        status: "ไม่ว่าง",
        quantity: "4/4",
        cost: "15,000",
        type: "ธรรมดา",
      },
      {
        roomNumber: "230",
        status: "ไม่ว่าง",
        quantity: "2/4",
        cost: "15,000",
        type: "ธรรมดา",
      },
      {
        roomNumber: "231",
        status: "ว่าง",
        quantity: "1/4",
        cost: "15,000",
        type: "ธรรมดา",
      },
      {
        roomNumber: "232",
        status: "ไม่ว่าง",
        quantity: "4/4",
        cost: "15,000",
        type: "ธรรมดา",
      },
      {
        roomNumber: "233",
        status: "ว่าง",
        quantity: "2/4",
        cost: "15,000",
        type: "ธรรมดา",
      },
      {
        roomNumber: "234",
        status: "ไม่ว่าง",
        quantity: "2/4",
        cost: "15,000",
        type: "ธรรมดา",
      },
      {
        roomNumber: "235",
        status: "ว่าง",
        quantity: "1/4",
        cost: "15,000",
        type: "ธรรมดา",
      },
    ],
    "3": [
      {
        roomNumber: "321",
        status: "ไม่ว่าง",
        quantity: "2/4",
        cost: "15,000",
        type: "ธรรมดา",
      },
      {
        roomNumber: "322",
        status: "ว่าง",
        quantity: "1/4",
        cost: "15,000",
        type: "ธรรมดา",
      },
      {
        roomNumber: "323",
        status: "ไม่ว่าง",
        quantity: "4/4",
        cost: "15,000",
        type: "ธรรมดา",
      },
    ],
    "4": [
      // ข้อมูลชั้น 4
    ],
    "5": [
      // ข้อมูลชั้น 5
    ],
    "6": [
      // ข้อมูลชั้น 6
    ],
    "7": [
      // ข้อมูลชั้น 7
    ],
    "8": [
      // ข้อมูลชั้น 8
    ],
  };

  return (
    <div className="flex flex-auto md:flex-row justify-center items-center h-full gap-6 sm:gap-6 p-10 mt-24">
      <div className="container mx-auto p-4 max-w-screen-lg">
        <h1 className="text-4xl md:text-3xl lg:text-xl text-center mb-8 text-black font-bold font-Poppins ">
          ห้อง 4 ท่าน
        </h1>
        <div className="text-lg p-1">
          <select value={selected} onChange={handleSelectChange}>
            <option value="2">ชั้น 2</option>
            <option value="3">ชั้น 3</option>
            <option value="4">ชั้น 4</option>
            <option value="5">ชั้น 5</option>
            <option value="6">ชั้น 6</option>
            <option value="7">ชั้น 7</option>
            <option value="8">ชั้น 8</option>
          </select>
        </div>
        <div className="overflow-x-auto Box-room">
          <table className="table-auto min-w-max w-full border-collapse border border-green-800">
            <thead className="text-center font-normal">
              <tr className="bg-[#FFC79E]">
                <th className="border border-green-800 p-2">ห้อง</th>
                <th className="border border-green-800 p-2">สถานะ</th>
                <th className="border border-green-800 p-2">จำนวน</th>
                <th className="border border-green-800 p-2">ค่าบริการ</th>
                <th className="border border-green-800 p-2">ประเภทห้อง</th>
              </tr>
            </thead>

            <tbody>
              {roomData[selected] &&
                roomData[selected].map((room) => (
                  <tr key={room.roomNumber} className="text-center">
                    <td className="border border-green-800 p-2">
                      <button
                        className={`z-10 text-white border ${
                          room.status === "ว่าง"
                            ? "border-[#829DFF] bg-[#829DFF]"
                            : "border-[#BDBDBD] bg-[#BDBDBD]"
                        } w-[50px] rounded-lg`}
                      >
                        {room.roomNumber}
                      </button>
                    </td>
                    <td className="border border-green-800 p-2">
                      {room.status}
                    </td>
                    <td className="border border-green-800 p-2">
                      {room.quantity}
                    </td>
                    <td className="border border-green-800 p-2">{room.cost}</td>
                    <td className="border border-green-800 p-2">{room.type}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end p-1 items-center">
          <div className="Group2 w-36 h-[87px] relative">
            <div className="Boxs1 w-[58px] h-[59px] left-0 top-0 absolute bg-indigo-400 rounded-[20px]"></div>
            <div className="Boxs2 w-[58px] h-[59px] left-[86px] top-0 absolute bg-stone-300 rounded-[20px]"></div>
            <div className="31 left-[16px] top-[63px] absolute text-center text-black text-base font-bold font-['Poppins']">
              ว่าง
            </div>
            <div className="310 left-[94px] top-[63px] absolute text-center text-black text-base font-bold font-['Poppins']">
              ไม่ว่าง
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
