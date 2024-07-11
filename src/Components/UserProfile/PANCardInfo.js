import React, { useState } from "react";
import Sidebar from "../Header&SideBar/Sidebar";
const PANCardInfo = () => {
  const [hide, setHide] = useState(false);

  const handleToggle = () => setHide(!hide);

  return (
    <div className="flex gap-4 justify-center">
      <Sidebar />

      <div className="bg-white flex flex-col gap-4 border p-4 w-[800px]">
        <h1 className="font-bold text-2xl font-roboto">PAN Card Information</h1>

        {!hide && (
          <h1
            className="font-roboto text-blue-600 font-bold cursor-pointer"
            onClick={handleToggle}
          >
            ➕ ADD PAN CARD DETAILS
          </h1>
        )}

        {hide && (
          <form className="bg-blue-100 border p-3 flex flex-col gap-5">
            <h1
              className="text-blue-600 font-bold font-roboto cursor-pointer"
              onClick={handleToggle}
            >
              ➕ ADD PAN CARD DETAILS
            </h1>

            <div className="flex flex-row gap-4">
              <input
                className="border bg-white p-2"
                type="text"
                placeholder="PAN Card Number"
              />
            </div>

            <div className="flex flex-row gap-4">
              <input
                className="border bg-white p-2"
                type="text"
                placeholder="Name as on PAN Card"
              />
            </div>

            <div className="flex gap-4">
              <button className="border p-3 w-40 bg-blue-500 rounded-md text-white">
                Save
              </button>
              <button className="border p-3 w-40 rounded-md">
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default PANCardInfo;
