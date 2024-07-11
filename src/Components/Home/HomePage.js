import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "primereact/carousel";
import Productsection from "./Productsection";
import OfferModal from "./OfferModal";
import { useSelector, useDispatch } from "react-redux";
import { logout, signIn } from "../ReduxStore/Slices/auth";
import { GetUserData } from "../CrudOperations/GetOperation";

const HomePage = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const alldata = useSelector((state) => state.auth);
  console.log(alldata);

  // Selecting email and registered state from Redux store
  const email = useSelector((state) => state.auth.email);
  const registered = useSelector((state) => state.auth.registered);

  const dispatch = useDispatch();

  // Effect to handle localStorage and update Redux state on component mount


  useEffect(() => {


    const fun = async () => {

      const responseFromLocalStorage = localStorage.getItem('token');

      if(responseFromLocalStorage){

        const token = JSON.parse(responseFromLocalStorage);

      

        const response = await GetUserData();
        console.log(response);
  
        dispatch(signIn({
          token : token.token,
          email : response.data.email,
          name : response.data.name,
          phone: response.data.phone,
          userId : response.data.userID,
        }))
      };


      fun();
  
   

      }
     

  
  }, [dispatch]);

  // Effect to handle showing modal when registered state changes
  useEffect(() => {
    if (registered) {
      setShowModal(true);
    }
  }, [registered]);

  // Handler to close the modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Images for Carousels
  const images = [
    "https://www.bigbasket.com/media/uploads/banner_images/B2C061811354-21877-DT-460-all-cm-220624.jpg?tr=w-1920,q=80",
    "https://www.bigbasket.com/media/uploads/banner_images/B2C061811354-21876-DT-460-all-cm-220624.jpg?tr=w-1920,q=80",
    "https://www.bigbasket.com/media/uploads/banner_images/B2C061811354-21875-DT-460-all-cm-220624.jpg?tr=w-1920,q=80"
  ];

  const images2 = [
    "https://rukminim2.flixcart.com/flap/140/140/image/e6e0ecc56771471a.png?q=100",
    "https://rukminim2.flixcart.com/flap/128/128/image/8014b1.jpg?q=100",
    "https://rukminim2.flixcart.com/flap/128/128/image/8014b1.jpg?q=100",
    "https://rukminim2.flixcart.com/flap/128/128/image/ac8550.jpg?q=100",
    "https://rukminim2.flixcart.com/flap/128/128/image/ac8550.jpg?q=100"
  ];

  // Carousel responsive options
  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1
    }
  ];

  const responsiveOptions2 = [
    {
      breakpoint: "1400px",
      numVisible: 4,
      numScroll: 1
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1
    }
  ];

  // Custom styles to hide navigation icons
  const customCarouselStyles = `
    .p-carousel-indicators, .p-carousel-arrow {
      display: none;
    }
  `;

  return (
    <main className="bg-gray-100">
      {/* Apply custom styles */}
      <style>{customCarouselStyles}</style>

      <div className="mx-auto">
        <Carousel
          value={images}
          numVisible={1}
          numScroll={1}
          itemTemplate={(images) => (
            <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
              <div>
                <img
                  src={images}
                  alt="Carousel Image"
                  className="mb-5 w-[400px] sm:w-[600px] md:w-full lg:w-full md:h-96 mx-auto object-cover rounded-md shadow-md shadow-black"
                />
              </div>
            </div>
          )}
          circular
          autoplayInterval={3000}
        />
      </div>

      <Productsection />

      <div className="mx-auto shadow-gray-200 rounded-lg w-full mt-10">
        <div className="text-3xl rounded-md shadow-md font-bold border w-80 pt-7 px-4 mx-auto bg-gray-50 pb-5">
          Food Essential Offer
        </div>
        <Carousel
          value={images2}
          numVisible={4}
          numScroll={1}
          responsiveOptions={responsiveOptions2}
          itemTemplate={(images2) => (
            <div className="pt-20 surface-border border-round m-2 text-center py-5 px-3">
              <div>
                <img
                  src={images2}
                  alt="Carousel Image"
                  className="w-64 h-64 mx-auto object-cover rounded-lg shadow-xl shadow-white"
                />
              </div>
            </div>
          )}
          circular
          autoplayInterval={4000}
        />
      </div>

      {/* Conditionally render OfferModal after login or signup */}
      {showModal && <OfferModal onClose={handleCloseModal} />}
    </main>
  );
};

export default HomePage;
