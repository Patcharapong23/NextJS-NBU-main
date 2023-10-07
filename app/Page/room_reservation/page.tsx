import Image from "next/image";
import Bed4 from "@/app/assets/Bed4.png";
import Bed2 from "@/app/assets/Bed2.png";

import Air from "@/app/assets/Air.png";
import Bed2_2 from "@/app/assets/Bed2_2.png";
import shower from "@/app/assets/shower.png";
import toilet from "@/app/assets/toilet.png";
import table from "@/app/assets/table.png";
import chair from "@/app/assets/chair.png";
import closet from "@/app/assets/closet.png";
import Fan from "@/app/assets/Fan.png";

import t7 from "@/app/assets/t7.png";
import curtains from "@/app/assets/curtains.png";
import bed from "@/app/assets/bed.png";

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
      {" "}
      <Link
        href="/Page/Room_Status"
        className=" relative bg-[#F5EDDC] max-w-lg rounded-[55px] overflow-hidden shadow-xl ring-1 ring-gray-900/5 mx-4 p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#F5EDDC] duration-300 "
      >
        <h1
          className="px-6 pt-10 pb-8 text-center text-2xl font-bold font-BaiphaiThin"
          style={{
            left: 156,
            top: -18,
            background: "#fff09ce1",
            borderRadius: 37,
          }}
        >
          สำหรับ 4 ท่าน
        </h1>
        <div className="divide-y divide-gray-300/50 space-y-6 py-8 text-base leading-7 text-gray-600  font-BaiphaiThin">
          <Image alt="Bed" src={Bed4} width={600} height={400} />
          <h2 className="text-xl font-bold mb-2 text-left">
            15,000 บาท / ปี / คน
          </h2>
          <p className="flex flex-wrap justify-center gap-2">
            <Image alt="Air" src={Air} width={32} height={32} />1
            <Image alt="shower" src={shower} width={32} height={32} />1
            <Image alt="toilet" src={toilet} width={32} height={32} />1
            <Image alt="Fan" src={Fan} width={32} height={32} />1
            <Image alt="Bed2_2" src={Bed2_2} width={32} height={32} />2
            <Image alt="closet" src={closet} width={32} height={32} />4
            <Image alt="chair" src={chair} width={32} height={32} />4
            <Image alt="chair" src={table} width={32} height={32} />4
          </p>
        </div>
      </Link>
      <Link
        href="/Page/Room_Status"
        className="relative bg-[#F5EDDC] max-w-lg rounded-[55px] overflow-hidden shadow-xl ring-1 ring-gray-900/5 mx-4 p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#F5EDDC] duration-300"
      >
        <h1
          className="px-6 pt-10 pb-8 text-center text-2xl font-bold font-BaiphaiThin"
          style={{
            left: 156,
            top: -18,
            background: "#fff09ce1",
            borderRadius: 37,
          }}
        >
          สำหรับ 2 ท่าน
        </h1>
        <div className="divide-y divide-gray-300/50 space-y-6 py-8 text-base leading-7 text-gray-600  font-BaiphaiThin">
          <Image alt="Bed2" src={Bed2} width={600} height={400} />
          <h2 className="text-xl font-bold mb-2 text-left">
            30,000 บาท / ปี / คน
          </h2>
          <p className="flex flex-wrap justify-center gap-2">
            <Image alt="Air" src={Air} width={32} height={32} />1
            <Image alt="t7" src={t7} width={32} height={32} />1
            <Image alt="toilet" src={toilet} width={32} height={32} />1
            <Image alt="curtains" src={curtains} width={32} height={32} />1
            <Image alt="Bed" src={bed} width={32} height={32} />2
            <Image alt="closet" src={closet} width={32} height={32} />2
            <Image alt="chair" src={chair} width={32} height={32} />2
            <Image alt="chair" src={table} width={32} height={32} />2
          </p>
        </div>
      </Link>
    </div>
  );
}
