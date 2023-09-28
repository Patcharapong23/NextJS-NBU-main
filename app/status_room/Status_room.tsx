/* eslint-disable @next/next/no-async-client-component */
"use client";
import React, { useState, useEffect } from "react";
interface Room {
  // Define the properties of your Room type
}

interface RoomData {
  [x: string]: any;
  roomNumber: string;
  status: string;
  quantity: string;
  cost: string;
  type: string;
}

export default function Status_room({}: Room) {
  const [selected, setSelected] = useState<string>("2");
  const [roomData, setRoomData] = useState<RoomData | null>(null);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://my-room-status--patcharapongnam.repl.co/roomData";
        const response = await fetch(url);
        const data = await response.json();
        setRoomData(data);
      } catch (error) {
        console.error("Error fetching room data:", error);
      }
    };

    fetchData();
  }, []);

  if (roomData === null) {
    return <div>Loading...</div>;
  }

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
            <option value="3">ชั้น 4</option>
            <option value="3">ชั้น 5</option>
            <option value="3">ชั้น 6</option>
            <option value="3">ชั้น 7</option>
            <option value="3">ชั้น </option>
            {/* Add more options if needed */}
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
              {roomData.map((room: any) => (
                <tr key={room.roomNumber} className="text-center">
                  <td className="border border-green-800 p-2">
                    {room.roomNumber}
                  </td>
                  <td className="border border-green-800 p-2">{room.status}</td>
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
          <div className="Group2 w-36 h-[87px] relative mt-4">
            <div className="Boxs1 w-[58px] h-[59px] left-0 top-0 absolute bg-indigo-400 rounded-[20px]"></div>
            <div className="Boxs2 w-[58px] h-[59px] left-[86px] top-0 absolute bg-stone-300 rounded-[20px]"></div>
            <div className="31 left-[16px] top-[63px] absolute text-center text-black text-base font-bold font-['Poppins'] ">
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
