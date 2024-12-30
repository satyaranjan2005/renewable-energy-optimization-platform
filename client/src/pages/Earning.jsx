import React from "react";
import Profile from "../components/Profile";
import LineGraph from "../components/LineGraph";

const Earning = () => {
  return (
    <div className=" w-screen pr-10">
      <Profile />
      <div className="border-4 border-green3 rounded p-2">
        <div className="flex flex-col gap-10">
          <div className="h-64 w-full">
            <LineGraph />
          </div>
          <div className="flex gap-10 justify-center">
            <div className="border-4 border-green3 p-5 flex flex-col gap-2 items-center ">
              <p>Current Rate:</p>
              <h1 className="text-6xl">&#8377;5</h1>
              <p>per KWH</p>
            </div>
            <div className="border-4 border-green3 p-5 flex flex-col gap-2 items-center ">
              <p>Energy Available:</p>
              <h1 className="text-6xl">10</h1>
              <p>KWH</p>
            </div>
            <div className="border-4 border-green3 p-5 flex flex-col gap-2 items-center ">
              <p>Total Earning:</p>
              <h1 className="text-6xl">&#8377;100</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earning;
