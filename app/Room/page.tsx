"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

import "./Apitest.css";

interface Room {
  Faculty: string;
  Department: string;
  roomNumber: string;
  status: string;
  quantity: string;
  cost: string;
  type: string;
}

const UsersPage: React.FC = () => {
  const [selected, setSelected] = useState(2);
  const [roomData, setRoomData] = useState<Room[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://my-room-status.patcharapongnam.repl.co/room${selected}`
        );
        if (res.ok) {
          const data: Room[] = await res.json();
          setRoomData(data);
        } else {
          setRoomData([]); // Set roomData to empty array if there's no data
        }
      } catch (error) {
        console.error("Error fetching room data:", error);
      }
    };

    fetchData();
  }, [selected]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(Number(event.target.value));
  };

  const handleRoomClick = (roomNumber: string) => {
    setRoomData((prevRoomData) =>
      prevRoomData.map((room) =>
        room.roomNumber === roomNumber
          ? { ...room, status: room.status === "ว่าง" ? "ไม่ว่าง" : "ว่าง" }
          : room
      )
    );
  };

  return (
    <>
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

          <div className="overflow-x-auto Box-room table-auto min-w-max w-full border-2">
            <table className="table tabel-border ">
              <thead>
                <tr className="bg-[#FFC79E] text-center font-bold text-[16px] text-black ">
                  <th>ห้อง</th>
                  <th>สถานะ</th>
                  <th>จำนวน</th>
                  <th>ค่าบริการ</th>
                  <th>ประเภทห้อง</th>
                </tr>
              </thead>
              <tbody>
                {roomData.length > 0 ? (
                  roomData.map((room) => (
                    <tr key={room.roomNumber} className="text-center">
                      <td>
                        <Link href={`/TestMenu?RoomNumber${room.roomNumber}`}>
                          <button
                            onClick={() => handleRoomClick(room.roomNumber)}
                            className={`border-2 border-b rounded-lg w-[55px] ${
                              room.status === "ว่าง"
                                ? "bg-[#829DFF] text-white"
                                : "bg-stone-300"
                            }`}
                            disabled={room.status !== "ว่าง"}
                          >
                            {room.roomNumber}
                          </button>
                        </Link>
                      </td>
                      <td>{room.status}</td>
                      <td>{room.quantity}</td>
                      <td>{room.cost}</td>
                      <td>{room.type}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="text-center">
                      ไม่มีข้อมูลห้อง
                    </td>
                  </tr>
                )}
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
    </>
  );
};

export default UsersPage;
