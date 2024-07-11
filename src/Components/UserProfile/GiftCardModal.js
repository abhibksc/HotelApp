import ReactDOM from "react-dom";
import { RxCross1 } from "react-icons/rx";

const GiftCardModal = ({ toggle }) => {
  return ReactDOM.createPortal(
    <>
      <div className="fixed inset-0 bg-opacity-40 bg-black flex justify-center items-center">
        <div className="bg-white border p-3 w-80 flex flex-col gap-5">
          <h1
            className="text-blue-600 font-bold font-roboto cursor-pointer self-end"
            onClick={toggle}
          >
            <RxCross1 />
          </h1>

          <input
            className="border bg-white p-2"
            type="text"
            placeholder="Gift Card Number *"
            style={{ fontFamily: 'Roboto, sans-serif', width: '100%' }}
          />

          <input
            className="border bg-white p-2"
            type="text"
            placeholder="PIN *"
            style={{ fontFamily: 'Roboto, sans-serif', width: '100%' }}
          />

          <button className="border p-3 bg-blue-500 rounded-md text-white">
            ADD GIFT CARD TO ACCOUNT
          </button>
        </div>
      </div>
    </>,
    document.getElementById("modal-root") // Ensure you have a div with id="modal-root" in your index.html or root component
  );
};

export default GiftCardModal;
