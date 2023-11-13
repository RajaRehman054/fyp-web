import DropdownNotification from "./DropdownNotification";
import { useState } from "react";
import { Link } from "react-router-dom";
import UserOne from "../assets/img1.png";

import { IoMoon, IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { HOSTNAME } from "../../Config";

const Header = ({ sidebarOpen, setSidebarOpen, data }) => {
  const { user } = useSelector((state) => state.user);
  const [search, setSearch] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="drop-shadow-1 sticky top-0 z-[30000] flex w-full bg-white">
      <div className="shadow-2 flex flex-grow items-center justify-between px-4 py-4 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              setSidebarOpen(!sidebarOpen);
            }}
            className="z-99999 border-stroke block rounded-sm border border-gray-300 bg-white p-1.5 shadow-sm lg:hidden"
          >
            <span className="relative block h-[22px] w-[22px] cursor-pointer">
              <span className="absolute right-0 block h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out ${
                    !sidebarOpen && "!w-full delay-300"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out ${
                    !sidebarOpen && "delay-400 !w-full"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out ${
                    !sidebarOpen && "!w-full delay-500"
                  }`}
                ></span>
              </span>

              <span className="absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out ${
                    !sidebarOpen && "!h-0 !delay-[0]"
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out ${
                    !sidebarOpen && "!h-0 !delay-200"
                  }`}
                ></span>
              </span>
            </span>
          </button>
        </div>

        <label
          htmlFor="searchInput"
          className="hidden h-[50px] w-full max-w-[400px] flex-row items-center justify-center gap-x-6 rounded-[50px] bg-[#F5F5F5] px-3 text-[#AEB6CF] focus:outline-none lg:flex lg:justify-start"
          style={{
            boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.10)",
            cursor: "text",
          }}
        >
          <IoSearch size={24} color="#AEB6CF" />
          <input
            type="text"
            id="searchInput" // Add an id to the input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#F5F5F5] text-[#868DA3] placeholder:text-[#AEB6CF] focus:outline-none"
            placeholder="Search"
          />
        </label>

        <div
          className={`absolute top-[90px] flex h-[48px] w-full transform justify-end bg-transparent text-[#868DA3] transition-transform duration-700 ease-in-out lg:hidden
        ${isSearchOpen ? "translate-y-0" : "-translate-y-[180px]"}`}
        >
          <input
            type="text"
            id="searchInput" // Add an id to the input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`mr-8 h-full w-full rounded-lg bg-[white] px-3 text-[#868DA3] placeholder:text-[#AEB6CF] focus:outline-none sm:mx-48`}
            style={{
              boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.10)",
            }}
            placeholder="Search"
          />
        </div>

        <div className="2xsm:gap-7 flex items-center">
          <div
            className="flex h-[46px] w-[46px] cursor-pointer flex-row items-center justify-center gap-x-6 rounded-lg px-3 text-[#AEB6CF] focus:outline-none lg:hidden lg:justify-start"
            onClick={() => {
              setIsSearchOpen(!isSearchOpen);
            }}
          >
            <IoSearch size={24} color="#48525B" />
          </div>
          <div className="flex flex-row items-center gap-x-1 sm:gap-x-6">
            <ul className="2xsm:gap-4 flex items-center gap-2">
              {/* <!-- Notification Menu Area --> */}
              <IoMoon size={24} color="#48525B" />
              {/* <!-- Notification Menu Area --> */}
            </ul>
          </div>

          <div className=" flex flex-row items-center gap-x-1 sm:gap-x-6 ">
            <ul className="2xsm:gap-4 flex items-center gap-2 ">
              {/* <!-- Notification Menu Area --> */}
              <DropdownNotification />
              {/* <!-- Notification Menu Area --> */}
            </ul>
          </div>
          {/* <!-- User Area --> */}
          <div className="relative">
            <Link className="flex items-center gap-3" to="#">
              <span
                className="h-10 w-10 overflow-hidden rounded-full"
                onClick={() => navigate(`/myProfile`)}
              >
                <img
                  src={
                    user.picture !== null
                      ? `${HOSTNAME}users/picture?path=${user.picture}`
                      : UserOne
                  }
                  alt="User"
                />
              </span>
              <span className="hidden text-right lg:block">
                <span
                  className="block text-sm font-medium text-black"
                  onClick={() => navigate(`/myProfile`)}
                >
                  {user.username}
                </span>
              </span>
            </Link>
          </div>
          {/* <!-- User Area --> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
