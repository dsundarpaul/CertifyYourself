import { Button, Card, Space, Typography } from "antd";
import React, { useState } from "react";
import { socket } from "../../../../utility/socket";

const SelectGameMode = () => {
  const [selectedMode, setSelectedMOde] = useState("Maths");
  const [time, setTIme] = useState(0);

  const GAME_OPTIONS = [
    {
      id: 1,
      mode: "Maths",
      path: "/lobby/maths",
    },
    {
      id: 2,
      mode: "Biology",
      path: "/lobby/biology",
    },
    {
      id: 3,
      mode: "Chemistry",
      path: "/lobby/chemistry",
    },
    {
      id: 4,
      mode: "Physics",
      path: "/lobby/phyysics",
    },
    {
      id: 5,
      mode: "English",
      path: "/lobby/english",
    },
  ];

  const findMatch = () => {
    socket.emit("startTimer");
  };

  const stopMatch = () => {
    socket.emit("stopTimer");
  };

  socket.on("timer", (timerValue) => {
    console.log({ timerValue });
    setTIme(timerValue);
  });

  return (
    <div>
      <Space wrap className="flex-center">
        {GAME_OPTIONS.map((option, idx) => (
          <Card
            key={option.id}
            hoverable
            className={`px-10 border-2 border-slate-700 ${
              selectedMode === option.mode ? "border-none bg-pink-100" : ""
            }`}
            onClick={() => setSelectedMOde(option.mode)}
          >
            <span className="text-4xl">{option.mode}</span>
          </Card>
        ))}
      </Space>

      <div className="flex-center pt-20">
        <Button
          className="px-10 py-7 text-center flex-center text-white text-xl font-bold font-sans rounded-md bg-[#ee404e] hover:!text-black hover:text-2xl hover:bg-slate-200 ease-in"
          onClick={() => findMatch()}
        >
          FIND MATCH
        </Button>
        <Button
          className="px-10 py-7 text-center flex-center text-white text-xl font-bold font-sans rounded-md bg-[#ee404e] hover:!text-black hover:text-2xl hover:bg-slate-200 ease-in"
          onClick={() => stopMatch()}
        >
          STOP
        </Button>
      </div>
      <div className="flex-center">
        <Typography.Title>{time}</Typography.Title>
      </div>
    </div>
  );
};

export default SelectGameMode;
