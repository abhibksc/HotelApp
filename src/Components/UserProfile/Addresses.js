import React, { useState, useEffect } from "react";
import Sidebar from "../Header&SideBar/Sidebar";

const Addresses = () => {
  const [hide, setHide] = useState(false);
  const [location, setLocation] = useState({ latitude: "", longitude: "" });
  const [addressDetails, setAddressDetails] = useState({
    name: "",
    phone: "",
    locality: "",
    city: "",
    address: "",
    state: "",
    alternatePhone: "",
    pincode: "",
    landmark: "",
    addressType: ""
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });

          fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
          )
            .then(response => response.json())
            .then(data => {
              const address = data.address || {};
              setAddressDetails({
                name: "",
                phone: "",
                locality: address.suburb || "",
                city: address.city || address.town || address.village || "",
                address: address.road || "",
                state: address.state || "",
                alternatePhone: "",
                pincode: address.postcode || "",
                landmark: address.neighbourhood || "",
                addressType: ""
              });
            })
            .catch(error => console.error("Error fetching address details: ", error));
        },
        (error) => {
          console.error("Error Code = " + error.code + " - " + error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const handleToggle = () => setHide(!hide);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddressDetails(prevDetails => ({ ...prevDetails, [name]: value }));
  };

  return (
    <div className="flex gap-4 justify-center">
      <Sidebar />

      <div className="bg-white flex flex-col gap-4 border p-4 w-[800px]">
        <h1 className="font-bold text-2xl font-roboto">Manage Addresses</h1>

        {!hide && (
          <h1
            className="font-roboto text-blue-600 font-bold cursor-pointer"
            onClick={handleToggle}
          >
            ➕ ADD A NEW ADDRESS
          </h1>
        )}

        {hide && (
          <form className="bg-blue-100 border p-3 flex flex-col gap-5">
            <h1
              className="text-blue-600 font-bold font-roboto cursor-pointer"
              onClick={handleToggle}
            >
              ➕ ADD A NEW ADDRESS
            </h1>
      

            <div className="flex flex-row gap-4">
              <input
                className="border bg-white p-2"
                type="text"
                placeholder="Name"
                name="name"
                value={addressDetails.name}
                onChange={handleChange}
              />
              <input
                className="border bg-white p-2"
                type="text"
                placeholder="10-digit"
                name="phone"
                value={addressDetails.phone}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-row gap-4">
              <input
                className="border bg-white p-2"
                type="text"
                placeholder="Locality"
                name="locality"
                value={addressDetails.locality}
                onChange={handleChange}
              />
              <input
                className="border bg-white p-2"
                type="text"
                placeholder="City"
                name="city"
                value={addressDetails.city}
                onChange={handleChange}
              />
            </div>

            <input
              className="border bg-white p-2 h-24"
              placeholder="Address"
              type="text"
              name="address"
              value={addressDetails.address}
              onChange={handleChange}
            />

            <div className="flex flex-row gap-4">
              <input
                className="border bg-white p-2"
                type="text"
                placeholder="State"
                name="state"
                value={addressDetails.state}
                onChange={handleChange}
              />
              <input
                className="border bg-white p-2"
                type="text"
                placeholder="Alternate Phone"
                name="alternatePhone"
                value={addressDetails.alternatePhone}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-row gap-4">
              <input
                className="border bg-white p-2"
                type="text"
                placeholder="Pincode"
                name="pincode"
                value={addressDetails.pincode}
                onChange={handleChange}
              />
              <input
                className="border bg-white p-2"
                type="text"
                placeholder="Landmark"
                name="landmark"
                value={addressDetails.landmark}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col">
              <h1>Address Type</h1>
              <div className="flex flex-row gap-4">
                <input
                  type="radio"
                  id="home"
                  name="addressType"
                  value="Home"
                  checked={addressDetails.addressType === "Home"}
                  onChange={handleChange}
                />
                <label htmlFor="home">Home</label>
                <input
                  type="radio"
                  id="office"
                  name="addressType"
                  value="Office"
                  checked={addressDetails.addressType === "Office"}
                  onChange={handleChange}
                />
                <label htmlFor="office">Office</label>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="border p-3 w-40 bg-blue-500 rounded-md text-white">
                Save
              </button>
              <button className="border p-3 w-40 rounded-md" type="button" onClick={handleToggle}>
                Cancel
              </button>
            </div>
          </form>
        )}

        <div>
          <ul>Something</ul>
        </div>
      </div>
    </div>
  );
};

export default Addresses;
