import Image from "next/image";
import Bed4 from "../assets/Bed4.png";
import Bed2 from "../assets/Bed2.png";
import Link from "next/link";
import styles from "./Room_menu.module.css";

//page.tsx

import React from "react";

export const metadata = {
  title: "Room menu",
  description: "Generated for the room menu page",
};

export default function Room_menu() {
  return (
    <div
      className={`flex flex-auto md:flex-row justify-center items-center h-full gap-6 sm:gap-6 p-10 mt-24 ${styles.menuContainer}`}
    >
      <div className="Menu w-[1120px] h-[536px] relative bg-white rounded-[20px] border border-black overflow-hidden ">
        <div className=" w-[1120px] h-[73px] left-0 top-0 absolute border border-black">
          <div className=" w-[226px] left-[23px] top-[6px] absolute text-black text-[40px] font-bold font-['Poppins']">
            Room 221{" "}
          </div>
        </div>
        <div className="Menu31Frame31 w-[1120px] left-0 top-[73px] absolute bg-white border border-black justify-start items-start inline-flex">
          <div className=" w-[271px] h-[70px] px-10 py-1.5 bg-white shadow border border-black border-opacity-25 justify-center items-start flex">
            <div className="Student31 h-[58px] p-[5px] justify-center items-center gap-[5px] flex">
              <div className="Userst31Student31 w-12 h-12 relative">
                <div className=" w-12 h-12 left-0 top-0 absolute bg-zinc-300"></div>
              </div>
              <div className=" w-[188px] h-[27px] relative">
                <div className=" left-[0.50px] top-[-0.50px] absolute text-black text-lg font-bold font-['Poppins']">
                  Member of this room
                </div>
              </div>
            </div>
          </div>
          <div className="Contract31Menu31Frame31 w-[196px] h-[70px] px-10 py-1.5 bg-white shadow border border-black border-opacity-25 justify-center items-start flex">
            <div className="Student31Contract31Menu31Frame31 h-[58px] p-[5px] justify-center items-center gap-[5px] flex">
              <div className="Contractsss31Student31Contract31Menu31Frame31 w-12 h-12 relative">
                <div className="Boundingbox31Contractsss31Student31Contract31Menu31Frame31 w-12 h-12 left-0 top-0 absolute bg-zinc-300"></div>
              </div>
              <div className="Frame1831Student31Contract31Menu31Frame31 w-20 h-[27px] relative">
                <div className="Contract31Frame1831Student31Contract31Menu31Frame31 left-0 top-0 absolute text-black text-lg font-bold font-['Poppins']">
                  Contract
                </div>
              </div>
            </div>
          </div>
          <div className=" w-[270px] h-[70px] px-5 py-1.5 bg-neutral-200 shadow border border-black border-opacity-25 justify-center items-start flex">
            <div className=" h-[58px] p-[5px] justify-center items-center gap-[5px] flex">
              <div className="QrCodeScanner31 w-12 h-12 relative">
                <div className="Boundingbox31QrCodeScanner31 w-12 h-12 left-0 top-0 absolute bg-zinc-300"></div>
              </div>
              <div className=" w-[141px] h-[27px] relative">
                <div className="Payinsurance31 w-[134px] h-8 left-0 top-[-0.50px] absolute text-black text-lg font-bold font-['Poppins']">
                  Pay Insurance
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[889px] h-[393px] left-[100px] top-[143px] absolute ">
          <div className="Box31 w-[889px] h-[186px] left-0 top-[11px] absolute bg-white rounded-[20px] border border-black">
            <div className=" w-[337px] h-36 left-[250px] top-[22px] absolute">
              <div className=" left-0 top-[24px] absolute text-black text-[32px] font-bold font-['Poppins']">
                Faculty: *******
              </div>
              <div className="Department31 left-0 top-[72px] absolute text-black text-[32px] font-bold font-['Poppins']">
                Department: *******
              </div>
            </div>
            <div className=" w-[137px] h-[137px] left-[63px] top-[29px] absolute">
              <div className="w-[137px] h-[137px] left-0 top-0 absolute bg-zinc-300 rounded-[38px]"></div>
              <div className="left-[26px] top-[38px] absolute text-black text-[40px] font-bold font-['Poppins']">
                NBU
              </div>
            </div>
          </div>
          <div className="Box310 w-[889px] h-[186px] left-0 top-[217px] absolute bg-white rounded-[20px] border border-black">
            <div className="0 w-[337px] h-36 left-[250px] top-[22px] absolute">
              <div className=" left-0 top-[24px] absolute text-black text-[32px] font-bold font-['Poppins']">
                Faculty: *******
              </div>
              <div className="Department310 left-0 top-[72px] absolute text-black text-[32px] font-bold font-['Poppins']">
                Department: *******
              </div>
            </div>
            <div className="0 w-[137px] h-[137px] left-[63px] top-[29px] absolute">
              <div className="0 w-[137px] h-[137px] left-0 top-0 absolute bg-zinc-300 rounded-[38px]"></div>
              <div className=" left-[26px] top-[38px] absolute text-black text-[40px] font-bold font-['Poppins']">
                NBU
              </div>
            </div>
          </div>
          <div className="w-[889px] h-[186px] left-0 top-[423px] absolute bg-white rounded-[20px] border border-black">
            <div className="1 w-[337px] h-36 left-[250px] top-[22px] absolute">
              <div className=" left-0 top-[24px] absolute text-black text-[32px] font-bold font-['Poppins']">
                Faculty: *******
              </div>
              <div className="   left-0 top-[72px] absolute text-black text-[32px] font-bold font-['Poppins']">
                Department: *******
              </div>
            </div>
            <div className=" w-[137px] h-[137px] left-[63px] top-[29px] absolute">
              <div className=" w-[137px] h-[137px] left-0 top-0 absolute bg-zinc-300 rounded-[38px]"></div>
              <div className="Nbu31 left-[26px] top-[38px] absolute text-black text-[40px] font-bold font-['Poppins']">
                NBU
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
