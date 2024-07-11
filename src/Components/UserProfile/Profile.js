import React, { useEffect, useState } from "react";
import Sidebar from "../Header&SideBar/Sidebar";
import {
  sendNumberOTP,
  UpdateName,
  verifyNumberOtp,
} from "../CrudOperations/Update&Edit";
import { useDispatch, useSelector } from "react-redux";
import { logout, signIn, signup, updateNumber } from "../ReduxStore/Slices/auth";
import { GetUserData } from "../CrudOperations/GetOperation";

const Profile = () => {
  const emails = useSelector((state) => state.auth.email);
  const phones = useSelector((state) => state.auth.phone);
  const registered = useSelector((state) => state.auth.registered);
  console.log(registered);
  const token = useSelector((state) => state.auth.token);
  const userId = useSelector((state) => state.auth.userId);
  const dispatch = useDispatch();

  const [editName, setEditName] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [editNumber, setEditNumber] = useState(false);
  const [numberVerification, setNumberVerification] = useState("Send OTP");
  const [numberOtp, setNumberOtp] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState(emails);
  const [phone, setPhone] = useState(phones);

  const handleProfileName = async () => {
    if (firstName && lastName) {
      const response = await UpdateName({
        name: `${firstName} ${lastName}`,
        registered,
        token,
        id: userId,
      });

      if (response) setEditName(false);
    }
  };

  useEffect(() => {
    const fun = async () => {

      const responseFromLocalStorage = localStorage.getItem('token');
      const token = JSON.parse(responseFromLocalStorage);
      console.log(token.token);

      const response = await GetUserData();
      console.log(response);

      dispatch(signup({
        token : token.token,
        email : response.data.email,
        name : response.data.name,
        phone: response.data.phone,
        userId : response.data.userID,
      }))
    };

    fun();

    if (numberOtp.length === 6) {
      const verifyNumber = async () => {
        const response = await verifyNumberOtp({
          phone: numberOtp,
          registered,
          token,
          id: userId,
        });

        if (response) {
          dispatch(updateNumber(response.data.UpdatedNumber));
          alert("Successfully verified");
          setEditNumber(false);
        }
      };

      verifyNumber();
    }
  }, [numberOtp, dispatch, registered, token, userId]);

  const handleEmail = async () => {
    if (email) {
      const response = await UpdateProfile({
        email,
        registered,
        token,
        id: userId,
      });
      console.log(response);
    }
  };

  const handleMobileNumber = async () => {
    if (phone.length === 6) {
      setNumberOtp(phone);
    } else if (phone.length === 10) {
      const response = await sendNumberOTP({
        phone,
        registered,
        token,
        id: userId,
      });

      if (response) {
        alert(response.data.message);
        setNumberVerification("Verify OTP");
        setPhone("Enter OTP");
      }
    } else {
      alert("Enter a valid number or OTP");
    }
  };

  return (
    <div className="flex gap-4 justify-center">
      <Sidebar />

      <div className="bg-white flex flex-col gap-4 border p-4 w-[800px]">
        {/* Personal Information */}
        <div className="flex flex-col gap-5 mb-10">
          <div className="flex gap-4">
            <h1 className="font-bold font-roboto">Personal Information</h1>
            <span
              onClick={() => setEditName(!editName)}
              className="cursor-pointer text-blue-600 font-semibold font-roboto"
            >
              Edit
            </span>
          </div>

          <div className="flex flex-row gap-4">
            {editName ? (
              <div className="flex flex-row gap-4">
                <input
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                  placeholder="First Name"
                  className="bg-gray-200 rounded-sm w-48 px-3 py-2"
                  type="text"
                />
                <input
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                  placeholder="Last Name"
                  className="bg-gray-200 rounded-sm w-48 px-3 py-2"
                  type="text"
                />
                <button
                  className="border w-28 p-2 bg-blue-400 hover:bg-blue-600"
                  onClick={handleProfileName}
                >
                  ADD
                </button>
              </div>
            ) : (
              <div className="flex flex-row gap-4">
                <input
                  placeholder={firstName}
                  className="bg-gray-200 text-gray-400 rounded-sm w-48 px-3 py-2"
                  readOnly
                  type="text"
                />
                <input
                  placeholder={lastName}
                  className="bg-gray-200 text-gray-400 rounded-sm w-48 px-3 py-2"
                  readOnly
                  type="text"
                />
              </div>
            )}
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col gap-5 mb-10">
          <div className="flex gap-4">
            <h1 className="font-bold font-roboto">Email</h1>
            <span
              onClick={() => setEditEmail(!editEmail)}
              className="cursor-pointer text-blue-600 font-semibold font-roboto"
            >
              Edit
            </span>
          </div>

          <div className="flex flex-row gap-4">
            {editEmail ? (
              <div className="flex gap-3">
                <input
                  placeholder={email}
                  className="bg-gray-200 rounded-sm w-48 px-3 py-2"
                  type="email"
                  readOnly
                />
                <button
                  className="border w-28 p-2 bg-blue-400 hover:bg-blue-600"
                  onClick={handleEmail}
                >
                  ADD
                </button>
              </div>
            ) : (
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-200 rounded-sm w-48 px-3 py-2"
                type="email"
              />
            )}
          </div>
        </div>

        {/* Mobile Number */}
        <div className="flex flex-col gap-5 mb-10">
          <div className="flex gap-4">
            <h1 className="font-bold font-roboto">Mobile Number</h1>
            <span
              onClick={() => setEditNumber(!editNumber)}
              className="text-blue-600 font-semibold font-roboto cursor-pointer"
            >
              Edit
            </span>
          </div>
          <div className="flex flex-row gap-4">
            {editNumber ? (
              <div className="flex gap-4">
                <input
                  // value={phone}
                  placeholder={phones}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-gray-200 rounded-sm w-48 px-3 py-2"
                  type="text"
                />
                <button
                  className="border w-28 p-2 bg-blue-400 hover:bg-blue-600"
                  onClick={handleMobileNumber}
                >
                  {numberVerification}
                </button>
              </div>
            ) : (
              <input
                placeholder={phones || phone}
                readOnly
                className="bg-gray-200 rounded-sm w-48 px-3 py-2"
                type="text"
              />
            )}
          </div>
        </div>

        {/* FAQs */}
        <div className="flex flex-col gap-5 mt-10">
          <h1 className="text-xl font-bold">FAQs</h1>
          <p>What happens when I update my email address (or mobile number)?</p>
          <p>
            Your login email id (or mobile number) changes, likewise. You'll
            receive all your account related communication on your updated email
            address (or mobile number).
          </p>
          <p>
            When will my account be updated with the new email address (or
            mobile number)?
          </p>
          <p>
            It happens as soon as you confirm the verification code sent to your
            email (or mobile) and save the changes.
          </p>
          <p>
            What happens to my existing account when I update my email address
            (or mobile number)?
          </p>
          <p>
            Updating your email address (or mobile number) doesn't invalidate
            your account. Your account remains fully functional. You'll continue
            seeing your order history, saved information, and personal details.
          </p>
        </div>

        {/* Deactivate Account */}
        <div className="font-bold text-blue-600 font-roboto">
          Deactivate Account
        </div>
        <div className="text-red-600 font-roboto font-bold">Delete Account</div>
      </div>
    </div>
  );
};

export default Profile;
