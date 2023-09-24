import React from "react";

export default function test() {
  return (
    <div className="flex flex-auto md:flex-row justify-center items-center h-full gap-6 sm:gap-6 p-10 mt-24 ">
      <div className="relative bg-[#F6EECF] px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:max-w-2xl sm:rounded-[55px] sm:px-10 flex-auto content-start ">
        <div className="border-4 border-indigo-500/100">
          <h2 className="text-xl text-center mb-8">For 4 people.</h2>
          <div className="grid grid-cols-4 gap-1">
            {Array(4)
              .fill(undefined)
              .map((_, index) => (
                <div
                  key={index}
                  className={`flex-auto rounded-lg h-20 bg-[#829DFF] ${
                    index === 3 ? "" : ""
                  }`}
                ></div>
              ))}
            {Array(4)
              .fill(undefined)
              .map((_, index) => (
                <div
                  key={index}
                  className={`flex-auto rounded-lg h-20 bg-[#829DFF] ${
                    index === 3 ? "" : ""
                  }`}
                ></div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
