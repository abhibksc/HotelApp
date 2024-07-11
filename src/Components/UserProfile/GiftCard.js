import React, { useState } from "react";
import GiftCardModal from "./GiftCardModal";
import Sidebar from "../Header&SideBar/Sidebar";


const GiftCard = () => {
  const [hide, setHide] = useState(false);

  const handleToggle = () => setHide(!hide);

  return (
    <div className="flex gap-4 justify-center">
      <Sidebar />

      <div className="bg-white flex flex-col gap-4 border p-4 w-[800px]">
        <h1 className="font-bold text-2xl font-roboto">Add A Gift Card</h1>
        <p className="font-roboto text-sm text-gray-600">
          Gift Card number & PIN are sent to your email inbox
        </p>

        {!hide && (
          <h1
            className="font-roboto text-blue-600 font-bold cursor-pointer"
            onClick={handleToggle}
          >
            ➕ ADD GIFT CARD TO ACCOUNT
          </h1>
        )}

        {hide && (
          <GiftCardModal toggle ={handleToggle}/>
        )}
      </div>
    </div>
  );
};

export default GiftCard;
