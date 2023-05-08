import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";

const Activity = () => {
  const Userslist = [
    {
      name: "james Anderson",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis a id excepturi eum ut possimus quos in mollitia ratione! Aliquam",
    },
    {
      name: "Vector sam",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis a id excepturi eum ut possimus quos in mollitia ratione! Aliquam",
    },
    {
      name: "Nathan stone",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis a id excepturi eum ut possimus quos in mollitia ratione! Aliquam",
    },
    {
      name: "Emma jeffery",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis a id excepturi eum ut possimus quos in mollitia ratione! Aliquam",
    },
    {
      name: "Emma jeffery",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis a id excepturi eum ut possimus quos in mollitia ratione! Aliquam",
    },
    {
      name: "Emma jeffery",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis a id excepturi eum ut possimus quos in mollitia ratione! Aliquam",
    },
    {
      name: "Emma jeffery",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis a id excepturi eum ut possimus quos in mollitia ratione! Aliquam",
    },
  ];

  const IntegrationList = [
    {
      name: "anderson john",
      desc: "integrating the user",
    },
  ];
  return (
    <div className="col-span-1 grid grid-rows-2 flex-1 rounded-md mb-2 ">
      <section className="h-[75vh] bg-white overflow-hidden rounded-md py-2 px-5">
        <div className="w-full h-[3vh] my-2 flex items-center justify-between">
          <h3 className="font-semibold">Activity</h3>
          <SlOptionsVertical />
        </div>
        <div className="h-[65vh] w-full overflow-y-scroll scrollbar-hide">
          {Userslist.map((item, idx) => (
            <div
              key={idx}
              className="flex gap-2 my-3 py-4 border-b border-[#ECECEE]"
            >
              <div className="rounded-full w-fit h-fit p-2 flex items-center bg-[#9fade8]">
                <FaUserAlt className="w-3 h-3" />
              </div>
              <span className="space-y-2">
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-xs">{item.desc}</p>
              </span>
            </div>
          ))}
        </div>
      </section>
      <section className="flex-1 bg-white overflow-hidden rounded-md py-2 px-5">
        <div className="w-full h-[3vh] my-2 flex items-center justify-between">
          <h3 className="font-semibold">IntegrationList</h3>
          <SlOptionsVertical />
        </div>
        <div className="h-[60vh] overflow-y-scroll scrollbar-hide">
          {IntegrationList.map((item, idx) => (
            <div key={idx}>
              <img src="" alt="" />
              <span>
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Activity;
