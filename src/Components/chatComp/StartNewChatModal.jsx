import UserOne from "../../assets/img1.png";
import axiosClient from "../../../axiosClient";
import { useEffect, useState } from "react";

const StartNewChatModal = ({ showmodal, user }) => {
  const data = Array.isArray(user.following) ? user.following : [];
  const [following, setFollowing] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      for (const element of data) {
        console.log("following id = " + element.user);
      }
    };

    fetchData();
  }, [data]);

  // get user engaged in converstion
  return (
    <dialog id="my_modal" className="modal ">
      <div className="modal-box w-[400px] bg-white">
        <form method="dialog">
          <button
            className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2"
            onClick={showmodal}
          >
            ✕
          </button>
        </form>
        <div>
          <h3 className="text-center text-lg font-bold text-[#FF8216] my-5">
            Start Chat with Followings
          </h3>
        </div>
        {data.map((element, index) => (
          <div
            key={index}
            className=" mb-[10px]  flex h-[80px] cursor-pointer flex-row items-center justify-between  rounded-[20px] bg-[white]  p-4  hover:bg-[#EBEBEB]"
          >
            <div className="avatar items-center">
              <div className="w-[50px] rounded-full">
                <img src={element.img} />
              </div>
            </div>
            <div className="mr-[auto] px-5">
              <p className="font-bold text-[black]">{element.name}</p>
              <p className="text-[black]">{element.items} items</p>
            </div>
          </div>
        ))}
      </div>
    </dialog>
  );
};

export default StartNewChatModal;
