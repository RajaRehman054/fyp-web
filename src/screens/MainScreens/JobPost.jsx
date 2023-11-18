import React, { useState, useEffect } from "react";

{
  /*Imported Components */
}
import ForYou from "../../Components/JobPostcomp/ForYou";
import YourJobs from "../../Components/JobPostcomp/YourJobs";
import CreateNewJobModal from "../../Components/JobPostcomp/CreateNewJobModal";
import SideTable from "../../Components/JobPostcomp/SideTable";
import Heading from "../../Components/Heading";
import { getFeedData, getJobs } from "../../api/Api";
import Loader from "../../Components/Loader/Loader";
import { ToastContainer } from "react-toastify";
import UserOne from "../../assets/jobpost.png";

const handleModal = async (checker) => {
  if (checker?.bubbles === true) {
    return document.getElementById("my_modal").showModal();
  }
  document.getElementById("my_modal").close();
};

const JobPost = () => {
  const [activeTab, setactiveTab] = useState(0);
  const [loading, setLoading] = useState(false);
  const [channels, setChannels] = useState([]);
  const [users, setUsers] = useState([]);
  const [jobs, setJobs] = useState([]);

  {
    /*Switching View Function */
  }
  const renderActiveComponent = () => {
    switch (activeTab) {
      case 0:
        return <ForYou data={jobs} />;
      case 1:
        return <YourJobs data={jobs} />;
    }
  };

  const fetchData = async () => {
    setLoading(true);
    const data = await getFeedData();
    const data1 = await getJobs();
    setUsers(data.users);
    setChannels(data.channels);
    setJobs(data1.jobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex w-full flex-col">
      {/*Top Heading */}
      <div className="flex w-full ">
        <h1 className="text-[20px] font-bold">Jobs Feed</h1>
      </div>

      {/*View Area divided in two */}
      <div className="my-[22px] flex flex-wrap justify-between">
        {/*First Column */}
        <div className="w-full sm:w-[65%]">
          <div className="relative flex h-[60px] w-full items-center rounded-xl bg-white p-4 shadow-xl">
            <div className="p-x-4 relative flex h-[40px]  w-full flex-row rounded-[10px]">
              <div
                onClick={() => setactiveTab(0)}
                className={`${
                  activeTab === 0
                    ? "w-[70%] bg-[#FF8216] text-white"
                    : "w-[70%] bg-transparent text-[#939393]"
                } flex h-full cursor-pointer items-center justify-center rounded-[10px]`}
              >
                <p className="font-bold">For You</p>
              </div>
              <div
                onClick={() => setactiveTab(1)}
                className={`${
                  activeTab === 1
                    ? "w-[70%] bg-[#FF8216] text-white"
                    : "w-[70%] bg-transparent text-[#939393]"
                } flex h-full cursor-pointer items-center justify-center rounded-[10px] bg-[#FF8216]`}
              >
                <p className="font-bold">Your Jobs</p>
              </div>
            </div>
          </div>

          {/* Jobs View */}
          {jobs.length === 0 ? (
            <div className="relative my-[22px] flex w-full flex-row h-64 rounded-xl bg-white p-4 shadow-xl">
              <div
                className=" w-full items-center p-4 rounded-xl relative"
                style={{
                  backgroundImage: `url(${UserOne})`,
                  backgroundSize: "contain", // Ensure the background image covers the entire container
                }}
              >
                {/* Opacity overlay div */}
                <div className="absolute inset-0 bg-[black] bg-opacity-50 rounded-xl"></div>

                <div className="text-center relative z-10">
                  <p className="font-[semibold] text-[50px] text-[white] my-5">
                    No Job Posts yet!!!
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative my-[22px] flex w-full flex-col items-center rounded-xl bg-white p-4 shadow-xl">
              {renderActiveComponent()}
            </div>
          )}
        </div>

        {/* Second Column View */}
        <div className="hidden w-full sm:block sm:w-[33%]">
          {/*Create New Job card*/}
          <div className="w-full rounded-[15px] bg-[#FF8216] p-4 shadow-xl">
            <p className="mb-5 text-[24px] font-bold text-white ">
              Create New Job
            </p>
            <p className="mb-2 text-[12px] text-white ">
              Add New Jobs for Citizen journalists
            </p>
            <button
              className="rounded bg-white px-10 py-1 text-[20px] font-bold text-[#FF8216] hover:bg-[#F7A541] "
              onClick={handleModal}
            >
              +
            </button>
          </div>

          {/*Heading */}
          <Heading text="Top Channels" />

          {/*Channels */}
          <SideTable data={channels} />
        </div>
      </div>

      {/*Job Creation Modal */}
      <CreateNewJobModal showModal={handleModal} />
      <ToastContainer />
    </div>
  );
};

export default JobPost;
