import React from "react";
import Sidebar from "../Header&SideBar/Sidebar";
const SavedUPI = () => {
  return (
    <div className="flex gap-4 justify-center">
      <Sidebar />

      <div className="bg-white flex flex-col gap-4 border p-4 w-[800px]">
        <h1 className="font-bold text-2xl font-roboto">Manage Saved UPI</h1>

        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-lg">Phonepe UPI</h2>
          <p>7992275028@ybl</p>
        </div>

        <div className="mt-4 flex flex-col gap-5 ">
          <h2 className="font-bold text-lg">FAQs</h2>
          <ul className="list-disc list-inside flex flex-col gap-10">
            <li>Why is my UPI being saved on Flipkart?</li>
            <p>
              It's quicker. You can save the hassle of typing in the complete UPI information every time you shop at Flipkart by saving your UPI details. You can make your payment by selecting the saved UPI ID of your choice at checkout. While this is obviously faster, it is also very secure.
            </p>
            <li>Is it safe to save my UPI on Flipkart?</li>
            <p>
              Absolutely. Your UPI ID information is 100 percent safe with us. UPI ID details are non PCI compliant and are non confidential data.
            </p>
            <li>What all UPI information does Flipkart store?</li>
            <p>
              Flipkart only stores UPI ID and payment provider details. We do not store UPI PIN/MPIN.
            </p>
            <li>Can I delete my saved UPI?</li>
            <p>
              Yes, you can delete your UPI ID at any given time.
            </p>
          </ul>
          <a href="#">View all FAQs</a>
        </div>
      </div>
    </div>
  );
};

export default SavedUPI;
