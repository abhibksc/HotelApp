const ProductSection = () => {
  return (
    <div className="bg-slate-100 ">
      {/* 1st section */}
      <div className="grid gap-14 max-w-[1300px] mx-auto ">
        <span
        className="text-center text-3xl rounded-md shadow-md font-bold   px-4 pt-2 mx-auto bg-gray-50 pb-5">

          Food Essential Offer
        </span>
        <div className="grid md:grid-cols-3 gap-3 mx-auto">
          <div className="md:col-span-2">
            <img
              src="https://rukminim2.flixcart.com/flap/1500/1500/image/ed04b09381eec3f9.jpg?q=50"
              alt="Food Essential"
              className="w-full h-auto"
            />
          </div>
          <div className="grid gap-3">
            <img
              src="https://rukminim2.flixcart.com/flap/1500/1500/image/15cbd99e6fcb6fc1.jpg?q=50"
              alt="Food Essential"
              className="w-full h-auto"
            />
            <img
              src="https://rukminim2.flixcart.com/flap/1500/1500/image/7991ac0613e2ddd5.png?q=50"
              alt="Food Essential"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* 2nd section */}
      <div className="grid gap-14 max-w-[1300px] mx-auto  mt-14 ">
        <span 
        className="text-center text-3xl rounded-md shadow-md font-bold   p-2 mx-auto bg-gray-50 pb-5">
          PERSONAL CARE OFFER ZONE
        </span>
        <div className="grid md:grid-cols-2 gap-5 mx-auto">
          <div className="grid gap-5">
            <img
              src="https://rukminim2.flixcart.com/flap/1000/1000/image/f2f929242d71a365.jpg?q=50"
              alt="Personal Care"
              className="w-full h-auto"
            />
            <img
              src="https://rukminim2.flixcart.com/flap/1000/1000/image/538bbfa1ed73f14a.jpg?q=50"
              alt="Personal Care"
              className="w-full h-auto"
            />
            <img
              src="https://rukminim2.flixcart.com/flap/1000/1000/image/14017df9b6f0c7c5.png?q=50"
              alt="Personal Care"
              className="w-full h-auto"
            />
          </div>
          <div className="grid gap-5">
            <img
              src="https://rukminim2.flixcart.com/flap/1000/1000/image/6b4b795405956a68.jpg?q=50"
              alt="Personal Care"
              className="w-full h-auto"
            />
            <img
              src="https://rukminim2.flixcart.com/flap/1000/1000/image/f04eacc1076a8789.jpg?q=50"
              alt="Personal Care"
              className="w-full h-auto"
            />
            <img
              src="https://rukminim2.flixcart.com/flap/1000/1000/image/7245c5bc2a7c3dcb.jpg?q=50"
              alt="Personal Care"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* 3rd section */}
      <div className="grid gap-14 max-w-[1300px] mx-auto mt-14">
        <span className="text-center text-3xl rounded-md shadow-md font-bold   p-2 mx-auto bg-gray-50 pb-5">
          HOUSEHOLD CARE OFFER ZONE
        </span>
        <div className="grid md:grid-cols-3 gap-5 mx-auto">
          <img
            src="https://rukminim2.flixcart.com/flap/1000/1000/image/cb704060516230ca.jpg?q=50"
            alt="Household Care"
            className="w-full h-auto"
          />
          <img
            src="https://rukminim2.flixcart.com/flap/1000/1000/image/8c79136d5eeaae1f.jpg?q=50"
            alt="Household Care"
            className="w-full h-auto"
          />
          <img
            src="https://rukminim2.flixcart.com/flap/1000/1000/image/a3df8d2af525ec55.jpg?q=50"
            alt="Household Care"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
