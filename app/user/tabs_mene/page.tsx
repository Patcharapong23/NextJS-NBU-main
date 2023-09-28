"use client";
import React, { useState } from "react";
import Contract from "../contract/page";
import Info from "../Info/page";
import assert from "assert";
const Tabs = () => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <div className="flex flex-auto md:flex-row justify-center items-center h-full gap-6 sm:gap-6 p-10 mt-24">
      <div className="flex flex-wrap">
        <div className="flex  list-none flex-wrap pt-3 pb-4 flex-row justify-center">
          <div className="-mb-px mr-2 last:mr-0 flex-auto text-center justify-center">
            <button
              className={
                "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded-tl rounded-bl block leading-normal " +
                (openTab === 1
                  ? "text-white bg-orange-600"
                  : "text-orange-600 bg-white")
              }
              onClick={() => setOpenTab(1)}
            >
              <i className="fas fa-space-shuttle text-base mr-1"></i> สมาชิก
            </button>
          </div>
          <div className="-mb-px mx-2 flex-auto text-center">
            <button
              className={
                "text-xs font-bold uppercase px-5 py-3 shadow-lg block leading-normal " +
                (openTab === 2
                  ? "text-white bg-orange-600"
                  : "text-orange-600 bg-white")
              }
              onClick={() => setOpenTab(2)}
            >
              <i className="fas fa-cog text-base mr-1"></i> สัญญา
            </button>
          </div>
          <div className="-mb-px ml-2 flex-auto text-center">
            <button
              className={
                "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded-tr rounded-br block leading-normal " +
                (openTab === 3
                  ? "text-white bg-orange-600"
                  : "text-orange-600 bg-white")
              }
              onClick={() => setOpenTab(3)}
            >
              <i className="fas fa-briefcase text-base mr-1"></i>{" "}
              ชำระค่าประกันหอ
            </button>
          </div>
        </div>
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
          <div className="px-4 py-5 flex-auto">
            <div className="tab-content tab-space">
              {openTab === 1 && <Info />}
              {openTab === 2 && <Contract />}
              {openTab === 3 && <Info />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
