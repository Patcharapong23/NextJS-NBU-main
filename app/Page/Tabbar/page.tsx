import React from "react";
import Baruser from "../../components/Baruser";
export const metadata = {
  title: "Tabbar",
  description: "Generated for the Tabbar page",
};

export default function Tabbar() {
  return (
    <div className="flex flex-auto md:flex-row justify-center items-center h-full gap-6 sm:gap-6 p-10 mt-24 ">
      <Baruser />
    </div>
  );
}
