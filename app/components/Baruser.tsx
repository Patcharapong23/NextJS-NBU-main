"use client";
import React, { useState } from "react";
import ContractData from "../data/ContractData";
import AdditionalInfo from "../data/AdditionalInfo";
import PayInsurance from "../data/PayInsurance";

import "./contract.css";

export default function Baruser() {
  const [showContract, setShowContract] = useState(true);
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
  const [showPayInsurance, setShowPayInsurance] = useState(false);
  const [additionalInfoConfirmed, setAdditionalInfoConfirmed] = useState(false);

  const handleShowContract = () => {
    setShowContract(true);
    setShowAdditionalInfo(false);
    setShowPayInsurance(false);
  };

  const handleShowAdditionalInfo = () => {
    setShowContract(false);
    setShowAdditionalInfo(true);
    setShowPayInsurance(false);
  };

  const handleShowPayInsurance = () => {
    setShowContract(false);
    setShowAdditionalInfo(false);
    setAdditionalInfoConfirmed(true);
    setShowPayInsurance(true);
  };
  const handleAccept = (e: any) => {
    setShowAdditionalInfo(e.target.checked);
  };

  const handleAdditionalInfoSubmit = (additionalInfo: any) => {
    console.log("Additional Info:", additionalInfo);
    setAdditionalInfoConfirmed(true);
    handleShowPayInsurance(); // แสดงหน้าชำระค่าประกันหอ
  };

  return (
    <div className="flex flex-auto md:flex-row justify-center items-center h-full gap-6 sm:gap-6 p-10 mt-24">
      <div className="flex list-none flex-wrap pt-3 pb-4 flex-row justify-center">
        <div className="">
          <button className="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded-tl rounded-bl block leading-normal m-0">
            <i className="fas fa-space-shuttle text-base mr-1"></i> สมาชิก
          </button>
        </div>
        <div className="">
          <button
            className={`text-xs font-bold uppercase px-5 py-3 shadow-lg block leading-normal m-0 ${
              showContract ? "text-white bg-orange-600" : ""
            }`}
            onClick={handleShowContract}
          >
            <i className="fas fa-cog text-base mr-1"></i> สัญญา
          </button>
        </div>

        <div className="">
          <button
            className={`text-xs font-bold uppercase px-5 py-3 shadow-lg block leading-normal m-0 ${
              showPayInsurance || !additionalInfoConfirmed
                ? "text-gray-400"
                : ""
            }`}
            disabled={showPayInsurance || !additionalInfoConfirmed}
            onClick={handleShowPayInsurance}
          >
            <i className="fas fa-briefcase text-base mr-1"></i>
            ชำระค่าประกันหอ
          </button>
        </div>
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded mt-4">
          <div className="px-4 py-5 flex-auto">
            {showContract && (
              <div className="flex-auto md:flex-col justify-center items-center h-full gap-6 sm:gap-6 p-10 text-center ">
                <div className="contract-details">
                  <h1 className="p-4 text-[25px] font-bold">
                    สัญญาหอพัก ประจำปี 2566
                  </h1>
                  <div className="Box-Contract bg-white rounded-[20px] border border-black">
                    <div className="Box-details text-black text-xs font-normal font-['Poppins'] mb-4 ">
                      {ContractData.split("\n").map((line, index) => (
                        <div
                          key={index}
                          className="text-black text-xs font-bold font-['Poppins'] mb-4 p-1"
                        >
                          {line}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between w-full pt-6">
                  <label className="flex items-center gap-1 ml-2">
                    <input
                      type="checkbox"
                      checked={showAdditionalInfo}
                      onChange={handleAccept}
                    />
                    ฉันอ่านแล้วและยอมรับเงื่อนไข
                  </label>
                </div>
                {showAdditionalInfo && (
                  <AdditionalInfo
                    onSubmitAdditionalInfo={handleAdditionalInfoSubmit}
                  />
                )}
              </div>
            )}

            {showPayInsurance && (
              <PayInsurance
                onSubmitPayInsurance={(data) => {
                  // Handle submitting pay insurance data
                }}
                onExit={function (): void {
                  throw new Error("Function not implemented.");
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
