import React from "react";
import UserOne from "../../assets/img1.png";

export default function Message({ message, own }) {
  return (
    <div className="p-3">
      <div className={`chat ${own ? "chat-end" : "chat-start"}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={UserOne} />
          </div>
        </div>
        <div
          className={`chat-bubble ${
            own ? "bg-[#EBEBEB] text-black" : "bg-[#FF8216] text-white"
          }`}
        >
          {message.text}
        </div>
      </div>
    </div>
  );
}
