// pages/[roomNumber].tsx

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Room {
  roomNumber: string;
  status: string;
  quantity: string;
  cost: string;
  type: string;
}

const RoomDetail: React.FC = () => {
  const router = useRouter();
  const { roomNumber } = router.query;

  const [roomData, setRoomData] = useState<Room | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://my-room-status.patcharapongnam.repl.co/room${roomNumber}`
        );
        if (res.ok) {
          const data: Room = await res.json();
          setRoomData(data);
        } else {
          setRoomData(null); // Set roomData to null if there's no data
        }
      } catch (error) {
        console.error("Error fetching room data:", error);
      }
    };

    if (roomNumber) {
      fetchData();
    }
  }, [roomNumber]);

  if (!roomData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Room Number: {roomData.roomNumber}</h1>
      <p>Status: {roomData.status}</p>
      <p>Quantity: {roomData.quantity}</p>
      <p>Cost: {roomData.cost}</p>
      <p>Type: {roomData.type}</p>
    </div>
  );
};

export default RoomDetail;
