import Image from "next/image";
import Bed4 from "../assets/Bed4.png";
import Bed2 from "../assets/Bed2.png";
import Link from "next/link";
import "./styleroom.css";
//page.tsx

import React from "react";

export const metadata = {
  title: "Room Reservation",
  description: "Generated for the about page",
};

export default function Room_Reservation() {
  return (
    <div className="flex flex-auto md:flex-row justify-center items-center h-full gap-6 sm:gap-6 p-10 mt-24 ">
      <Link
        href="/Apitest"
        className="relative bg-[#F5EDDC] max-w-lg rounded-[55px] overflow-hidden shadow-xl ring-1 ring-gray-900/5 mx-4 p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#F5EDDC] duration-300 "
      >
        <div
          className="px-6 pt-10 pb-8 text-center text-xl font-bold"
          // style={{
          //   left: 156,
          //   top: -18,
          //   background: "#FFE972",
          //   borderRadius: 37,
          // }}
        >
          สำหรับ 4 ท่าน
        </div>
        <div className="divide-y divide-gray-300/50 space-y-6 py-8 text-base leading-7 text-gray-600">
          <Image
            alt="Bed"
            src={Bed4}
            layout="responsive"
            width={600}
            height={400}
          />
          <h1 className="text-2xl font-bold mb-2 text-left">
            15,000 บาท / ปี / คน
          </h1>
          <p className="text-sm text-left">
            แอร์ 1 เครื่อง, 1 เครื่องทำน้ำอุ่น, 2 เตียง 2 ชั้น, 1 ห้องน้ำ, 1
            ห้องน้ำ ตู้เสื้อผ้าใหม่ 4 ตู้ โต๊ะใหม่ 4 ตัว และเก้าอี้ใหม่ 4 ตัว
          </p>
        </div>
      </Link>
      <Link
        href="/status_room"
        className="relative bg-[#F5EDDC] max-w-lg rounded-[55px] overflow-hidden shadow-xl ring-1 ring-gray-900/5 mx-4 p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#F5EDDC] duration-300"
      >
        <div
          className="px-6 pt-10 pb-8 text-center text-xl font-bold"
          // style={{
          //   left: 156,
          //   top: -18,
          //   background: "#FFE972",
          //   borderRadius: 37,
          // }}
        >
          สำหรับ 2 ท่าน
        </div>
        <div className="divide-y divide-gray-300/50 space-y-6 py-8 text-base leading-7 text-gray-600">
          <Image
            alt="Bed"
            src={Bed2}
            layout="responsive"
            width={600}
            height={400}
          />
          <h1 className="text-2xl font-bold mb-2">30,000 บาท / ปี / คน</h1>
          <p className="text-sm text-left">
            เครื่องปรับอากาศ 1 เครื่อง , 1 เครื่องทำน้ำอุ่น , 2 เตียงเดี่ยว , 1
            ห้องน้ำ , 1 ห้องน้ำ ตู้เสื้อผ้า 2 ตู้ โต๊ะทำงาน 2 ตัว และเก้าอี้ 2
            ตัว
          </p>
        </div>
      </Link>
    </div>
  );
}
