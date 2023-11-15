import React, { useState } from "react";
import { payment } from "../../api/Api";
import { toast } from "react-toastify";

const PaymentModal = () => {
  const [checked, setChecked] = useState(false);
  const [price, setPrice] = useState(1);
  const createBidHandler = async () => {
    const res = await payment(price);
    console.log(res);
    window.location.href = res.url;
  };

  return (
    <dialog id="my_modal_3" className="modal ">
      <div className="modal-box w-[400px] bg-white ">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div>
          <h3 className="text-center text-lg font-bold text-[#FF8216]">
            Place a Bid
          </h3>

          <div className="mt-[30px] flex w-full flex-row items-center">
            <p className=" w-[50%]  text-[20px] font-bold">Leading Bid</p>

            <p className=" w-[50%] text-center text-[20px] font-bold"></p>
          </div>
          <div className="mt-[30px] flex w-full flex-row items-center">
            <p className=" w-[50%] text-[20px] font-bold">
              Enter an amount for wallet
            </p>

            <input
              className="h-[60px] w-[50%] rounded-[10px] border border-[#FF8216] bg-[#FF8216] bg-opacity-10 px-[30px] shadow-input focus:border-heading focus:outline-none active:outline-none"
              placeholder="$"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mt-[20px] flex w-full">
            <button
              className="h-[60px] w-full rounded-[10px] bg-[#FF8216] text-[15px] font-bold text-white hover:bg-[#F7A541] active:bg-[#FFD583]"
              style={{ transition: "0.3s" }}
              onClick={createBidHandler}
            >
              Place a Bid
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default PaymentModal;
