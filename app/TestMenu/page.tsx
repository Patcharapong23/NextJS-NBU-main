"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";
import Qrc from "@/app/assets/Qrc.png";

import "./contract.css";
interface Room {
  roomNumber: string;
  status: string;
  quantity: string;
  Faculty: string;
  Department: string;
}

const TestMenu = () => {
  const router = useRouter();

  const [roomData, setRoomData] = useState<Room[]>([]);
  const [faculty, setFaculty] = useState("");
  const [department, setDepartment] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const roomNumber = params.get("roomNumber");
    const facultyParam = params.get("faculty");
    const departmentParam = params.get("department");

    if (facultyParam && departmentParam) {
      setFaculty(facultyParam);
      setDepartment(departmentParam);
    }
    setFaculty(faculty);
    setDepartment(department);
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://my-room-status.patcharapongnam.repl.co/room2`
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
  }, []);

  const [formData, setFormData] = useState({
    studentId: "",
    name: "",
    faculty: "",
    department: "",
    telephoneNumber: "",
    contractDate: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [openTab, setOpenTab] = useState(1);

  const handleConfirm = () => {
    // ทำงานเมื่อกดปุ่ม "ยืนยัน"
    if (accepted) {
      // ไปที่ openTab ที่ 4
      setOpenTab(4);
    }
  };

  const [accepted, setAccepted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (
      formData.studentId === "" ||
      formData.name === "" ||
      formData.faculty === "" ||
      formData.department === "" ||
      formData.telephoneNumber === "" ||
      formData.contractDate === ""
    ) {
      alert("กรุณากรอกข้อมูลให้ครบ");
      return;
    }
    fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  const handleAccept = () => {
    setAccepted(!accepted);
  };

  return (
    <div className="flex flex-auto md:flex-row justify-center items-center h-full gap-6 sm:gap-6 p-10 mt-24">
      <div className="flex flex-wrap">
        <div className="text-center">
          {/* {roomData.map((room) => (
            <div key={room.roomNumber} className="mb-4">
              <h2 className="text-2xl font-bold">{room.roomNumber}</h2>
            </div>
          ))}{" "} */}
        </div>
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
                (openTab === 4
                  ? "text-white bg-orange-600"
                  : "text-orange-600 bg-white")
              }
              onClick={() => setOpenTab(4)}
            >
              <i className="fas fa-briefcase text-base mr-1"></i>{" "}
              ชำระค่าประกันหอ
            </button>
          </div>
        </div>
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
          <div className="px-4 py-5 flex-auto">
            <div className="tab-content tab-space">
              {openTab === 1 && (
                <div className="flex-auto md:flex-col justify-center items-center h-full gap-6 sm:gap-6 p-10  text-center ">
                  {roomData.length > 0 ? (
                    roomData.map((room) => (
                      <div key={room.roomNumber} className="mb-4">
                        <h2 className="text-2xl font-bold">{faculty}</h2>
                        <h2 className="text-2xl font-bold">{department}</h2>
                      </div>
                    ))
                  ) : (
                    <div className="text-2xl font-bold">ไม่มีข้อมูลห้อง</div>
                  )}
                </div>
              )}
              {openTab === 2 && (
                <div className="flex-auto md:flex-col justify-center items-center h-full gap-6 sm:gap-6 p-10  text-center ">
                  <h1 className="p-4 text-[25px] font-bold">
                    สัญญาหอพัก ประจำปี 2566{" "}
                  </h1>
                  <div className="Box-Contract bg-white rounded-[20px] border border-black">
                    <div className="Box-details text-black text-xs font-normal font-['Poppins'] mb-4 ">
                      <div className="text-black text-xs font-bold font-['Poppins'] mb-4 p-1">
                        สัญญาเช่าห้องพัก
                      </div>
                      สัญญานี้ทำขึ้นที่……………………เมื่อวันที่……………………ระหว่าง………………...
                      <br />
                      ………………………………………อยู่บ้านเลขที่…………………….………………ตำบล/แขวง
                      <br />
                      …………………………..อำเภอ/เขต………………………..จังหวัด…………………ซึ่งต่อไปใน
                      <br />
                      สัญญานี้จะเรียกว่า “ผู้ให้เช่า”
                      ฝ่ายหนึ่งกับ…………………………….อยู่บ้านเลขที่………………..
                      <br />
                      ตำบล/แขวง……………………….อำเภอ/เขต…………………………..จังหวัด…………………..
                      <br />
                      ซึ่งต่อไปในสัญญานี้จะเรียกว่า “ผู้เช่า” อีกฝ่ายหนึ่ง
                      <br /> ทั้งสองฝ่ายตกลงทำสัญญากันโดยมีข้อความดังต่อไปนี้
                      <br /> ข้อ ๑
                      ผู้เช่าตกลงเช่าและผู้ให้เช่าตกลงให้เช่าห้องพักอาศัยห้องเลขที่……………………….
                      <br />
                      ชั้นที่……….. ของ (ระบุชื่อของอพาร์ตเม้นต์)
                      ซึ่งตั้งอยู่ที่……………………………ตำบล/แขวง
                      <br />
                      …………………….อำเภอ/เขต………………………จังหวัด…………………….…….เพื่อใช้เป็น
                      <br />
                      ที่พักอาศัย ในอัตราค่าเช่าเดือนละ…………….บาท (…………..……)
                      ค่าเช่านี้ไม่รวมถึงค่าไฟฟ้า
                      <br />
                      ค่าน้ำประปา ค่าโทรศัพท์
                      ซึ่งผู้เช่าต้องชำระแก่ผู้ให้เช่าตามอัตราที่กำหนดไว้ในสัญญาข้อ
                      ๔
                      <br /> ข้อ ๒ ผู้เช่าตกลงเช่าห้องพักอาศัยตามสัญญาข้อ ๑
                      มีกำหนดเวลา………ปี นับตั้งแต่วัน
                      ที่……………………ถึงวันที่……………………..
                      <br /> ข้อ ๓ การชำระค่าเช่า
                      ผู้เช่าตกลงจะชำระค่าเช่าแก่ผู้ให้เช่าเป็นการล่วงหน้า
                      โดยชำระภายในวันที่…………………..ของทุกเดือนตลอดเวลาอายุการเช่า
                      <br /> ข้อ ๔ ผู้ให้เช่าคิดค่าไฟฟ้า ค่าน้ำประปา ค่าโทรศัพท์
                      ในอัตราดังนี้
                      <br /> (๑) ค่าไฟฟ้ายูนิตละ……………….บาท
                      <br /> (๒) ค่าน้ำประปาลูกบาศก์เมตรละ………………….บาท
                      <br /> (๓) ค่าโทรศัพท์ (โทร. ออก) ครั้งละ…………………….บาท
                      <br /> ข้อ ๕ ผู้เช่าต้องชำระค่าไฟฟ้า ค่าน้ำประปา
                      ค่าโทรศัพท์
                      ตามจำนวนหน่วยที่ใช้ในแต่ละเดือนและต้องชำระพร้อมกับการชำระค่าเช่าของเดือนถัดไป
                      <br /> ข้อ ๖ เพื่อเป็นการปฏิบัติตามสัญญาเช่า
                      ผู้เช่าตกลงมอบเงินประกันแก่ผู้ให้เช่าไว้เป็นจำนวน……………….บาท
                      (………………..)
                      เงินประกันนี้ผู้ให้เช่าจะคืนให้แก่ผู้เช่าเมื่อผู้เช่ามิได้
                      <br />
                      ผิดสัญญา และมิได้ค้างชำระเงินต่างๆ ตามสัญญานี้
                      <br /> ข้อ ๗
                      ผู้เช่าต้องเป็นผู้ชำระเงินค่ากำจัดขยะเดือนละ……………..บาท
                      (………………….)
                      <br /> ข้อ ๘
                      ผู้เช่าต้องเป็นผู้ดูแลรักษาความสะอาดบริเวณทางเดินส่วนกลางหน้าห้องพักอาศัยของผู้เช่า
                      และผู้เช่าจะต้องไม่นำสิ่งของใดๆ
                      มาวางไว้ในบริเวณทางเดินดังกล่าว
                      <br /> ข้อ ๙ ผู้เช่าต้องดูแลห้องพักอาศัยและทรัพย์สินต่างๆ
                      ในห้องพักดังกล่าวเสมือนเป็นทรัพย์สินของตนเอง
                      และต้องรักษาความสะอาดตลอดจนรักษาความสงบเรียบร้อย
                      ไม่ก่อให้เกิดเสียงให้เป็นที่เดือดร้อนรำคาญแก่ผู้อยู่ห้องพักอาศัยข้างเคียง
                      <br /> ข้อ ๑๐ ผู้เช่าต้องเป็นผู้รับผิดชอบในบรรดาความสูญหาย
                      เสียหาย หรือบุบสลายอย่างใดๆ
                      อันเกิดแก่ห้องพักอาศัยและทรัพย์สินต่างๆ ในห้องพักดังกล่าว
                      <br /> ข้อ ๑๑ ผู้เช่าต้องยอมให้ผู้ให้เช่า
                      หรือตัวแทนของผู้ให้เช่าเข้าตรวจดูห้องพักอาศัยได้เป็นครั้งคราวในระยะเวลาอันสมควร
                      <br /> ข้อ ๑๒ ผู้เช่าต้องไม่ทำการดัดแปลง ต่อเติม
                      หรือรื้อถอนห้องพักอาศัยและทรัพย์สินต่างๆ ในห้องพักดังกล่าว
                      ไม่ว่าทั้งหมดหรือบางส่วน
                      หากฝ่าฝืนผู้ให้เช่าจะเรียกให้ผู้เช่าทำทรัพย์สินดังกล่าวให้กลับคืนสู่สภาพเดิม
                      และเรียกให้ผู้เช่ารับผิดชดใช้ค่าเสียหายอันเกิดความสูญหาย
                      เสียหาย หรือบุบสลายใดๆ อันเนื่องมาจากการดัดแปลง ต่อเติม
                      หรือรื้อถอนดังกล่าว
                      <br /> ข้อ ๑๓
                      ผู้เช่าต้องไม่นำบุคคลอื่นนอกจากบุคคลในครอบครัวของผู้เช่าเข้ามาพักอาศัยในห้องพักอาศัย
                      <br /> ข้อ ๑๔
                      ผู้เช่าสัญญาว่าจะปฏิบัติตามระเบียบข้อบังคับของอพาร์ตเม้นต์ท้ายสัญญานี้
                      ซึ่งคู่สัญญาทั้งสองฝ่ายให้ถือว่าระเบียบข้อบังคับดังกล่าวเป็นส่วนหนึ่งแห่งสัญญาเช่านี้ด้วย
                      หากผู้เช่าละเมิดแล้วผู้ให้เช่าย่อมให้สิทธิตามข้อ ๑๗ และข้อ
                      ๑๘ แห่งสัญญานี้ได้
                      <br /> ข้อ ๑๕
                      ผู้ให้เช่าไม่ต้องรับผิดชอบในความสูญหายหรือความเสียหายอย่างใดๆ
                      อันเกิดขึ้นแก่รถยนต์รวมทั้งทรัพย์สินต่างๆ
                      ในรถยนต์ของผู้เช่า
                      ซึ่งได้นำมาจอดไว้ในที่จอดรถยนต์ที่ผู้ให้เช่าจัดไว้ให้
                      <br /> ข้อ ๑๖
                      ผู้เช่าตกลงว่าการผิดสัญญาเช่าเครื่องเรือนซึ่งผู้เช่าได้ทำไว้กับผู้ให้เช่าต่างหากจากสัญญานี้
                      ถือว่าเป็นการผิดสัญญานี้ด้วย และโดยนัยเดียวกัน
                      การผิดสัญญานี้ย่อมถือเป็นการผิดสัญญาเช่าเครื่องเรือนด้วย
                      <br /> ข้อ ๑๗ หากผู้เช่าประพฤติผิดสัญญาข้อหนึ่งข้อใด
                      หรือหลายข้อก็ดี
                      ผู้เช่าตกลงให้ผู้ให้เช่าใช้สิทธิดังต่อไปนี้
                      ข้อใดข้อหนึ่งหรือหลายข้อรวมกันก็ได้ คือ
                      <br /> (๑) บอกเลิกสัญญาเช่า
                      <br /> (๒) เรียกค่าเสียหาย
                      <br /> (๓)
                      บอกกล่าวให้ผู้เช่าปฏิบัติตามข้อกำหนดในสัญญาภายในกำหนดเวลาที่ผู้ให้เช่าเห็นสมควร
                      <br /> (๔) ตัดกระแสไฟฟ้า น้ำประปา และโทรศัพท์ ได้ในทันที
                      โดยไม่จำเป็นต้องบอกกล่าวแก่ผู้เช่าเป็นการล่วงหน้า
                      <br /> ข้อ ๑๘ ในกรณีที่สัญญาเช่าระงับสิ้นลง
                      ไม่ว่าด้วยเหตุใดๆ ก็ตาม ผู้เช่าต้องส่งมอบห้อง
                      พักอาศัยคืนแก่ผู้ให้เช่าทันที หากผู้เช่าไม่ปฏิบัติ
                      ผู้ให้เช่าสิทธิกลับเข้าครอบครองห้องพักอาศัยที่ให้เช่าและขนย้ายบุคคลและทรัพย์สินของผู้เช่าออกจากห้องพักดังกล่าวได้
                      โดยผู้เช่าเป็นผู้รับผิดชอบในความสูญหายหรือความเสียหายอย่างใดๆ
                      อันเกิดขึ้นแก่ทรัพย์สินของผู้เช่า
                      ทั้งผู้ให้เช่ามีสิทธิริบเงินประกันการเช่า
                      ตามที่ระบุไว้ในสัญญาข้อ ๖ ได้ด้วย
                      <br /> ข้อ ๑๙ ในวันทำสัญญานี้
                      ผู้เช่าได้ตรวจดูห้องพักอาศัยที่เช่าตลอดจนทรัพย์สินต่างๆ
                      ในห้องพักดังกล่าวแล้วเห็นว่ามีสภาพปกติทุกประการ
                      และผู้ให้เช่าได้ส่งมอบห้องพักอาศัยและทรัพย์สินต่างๆ
                      ในห้องพักแก่ผู้เช่าแล้ว
                      <br />{" "}
                      คู่สัญญาได้อ่านและเข้าใจข้อความในสัญญานี้โดยตลอดแล้วเห็นว่าถูกต้อง
                      จึงได้ลงลายมือชื่อไว้เป็นสำคัญต่อหน้าพยาน
                    </div>
                  </div>
                  <div className="flex justify-between w-full pt-6">
                    <label className="flex items-center gap-1 ml-2">
                      <input
                        type="checkbox"
                        checked={accepted}
                        onChange={() => {
                          setAccepted(!accepted);
                        }}
                      />
                      ฉันอ่านแล้วและยอมรับเงื่อนไข
                    </label>
                  </div>
                </div>
              )}
              {openTab === 2 && accepted && (
                <div className="w-[1120px] relative mx-auto text-center">
                  <div className="Box w-[409px]  px-[21px] py-[26px] flex-col items-center gap-[13px] inline-flex justify-center">
                    <div className="text-black text-lg font-normal font-['Poppins'] ">
                      กรุณากรอกข้อมูลส่วนตัว
                    </div>
                    <div className="mt-5 text-left">
                      <label className="mt-5">
                        รหัสนักศึกษา
                        <input
                          type="text"
                          name="studentId"
                          onChange={handleChange}
                          value={formData.studentId}
                          style={{ width: "350px" }}
                          className="input-style border-2 mt-3 "
                        />
                      </label>
                      <label className="mt-5">
                        ชื่อ-นามสกุล
                        <input
                          type="text"
                          name="name"
                          onChange={handleChange}
                          value={formData.name}
                          className="input-style border-2 mt-3"
                          style={{ width: "350px" }}
                        />
                      </label>
                      <label className="mt-5">
                        คณะ
                        <input
                          type="text"
                          name="faculty"
                          onChange={handleChange}
                          value={formData.faculty}
                          className="input-style flex border-2 mt-3"
                          style={{ width: "350px" }}
                        />
                      </label>
                      <label className="mt-5">
                        สาขา
                        <input
                          type="text"
                          name="department"
                          onChange={handleChange}
                          value={formData.department}
                          style={{ width: "350px" }}
                          className="input-style flex border-2 mt-3"
                        />
                      </label>
                      <label className="mt-5">
                        เบอร์
                        <input
                          type="text"
                          name="telephoneNumber"
                          onChange={handleChange}
                          value={formData.telephoneNumber}
                          style={{ width: "350px" }}
                          className="input-style flex border-2 mt-3"
                        />
                      </label>
                      <label className="mt-5">
                        วันที่ทำสัญญา
                        <input
                          type="date"
                          name="contractDate"
                          onChange={handleChange}
                          value={formData.contractDate}
                          style={{ width: "350px" }}
                          className="input-style flex  border-2 mt-3"
                        />
                      </label>
                      <div className="flex justify-center mt-5 mr-[16px] ">
                        <button
                          className={`rounded-xl w-[91px] h-[35px] text-white text-sm ${
                            Object.values(formData).every((val) => val !== "")
                              ? "bg-[#E4965D]"
                              : "bg-neutral-700"
                          }`}
                          onClick={handleConfirm}
                          disabled={
                            !Object.values(formData).every((val) => val !== "")
                          }
                        >
                          ยืนยัน
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {openTab === 4 && accepted && (
                <div className="w-[1120px] relative mx-auto text-center">
                  <div className="flex flex-auto md:flex-row justify-center items-center h-full gap-6 sm:gap-6 p-10 mt-24 ">
                    <div className="divide-y divide-gray-300/50 space-y-6 py-8 text-base leading-7 text-gray-600">
                      <Image
                        alt="Bed"
                        src={Qrc}
                        layout="responsive"
                        width={100}
                        height={100}
                        sizes="22rem"
                      />
                      <div className=" text-center items-center mt-2">
                        <button className="sm:btn-sm md:btn-md lg:btn-lg bg-[#E4965D]  rounded-[12px] text-white hover:bg-[#e4955da1]">
                          เสร็จสิ้น
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestMenu;
