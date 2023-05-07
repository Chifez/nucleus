import React from "react";
import { FaUserAlt } from "react-icons/fa";

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
    <div className="col-span-1 grid grid-rows-2 flex-1 rounded-md mb-2">
      <section className="h-[75vh] bg-white overflow-hidden rounded-md p-2">
        <div className="h-[3vh] my-2">
          <h3 className="font-semibold">Activity</h3>
        </div>
        <div className="h-[65vh] overflow-y-scroll scrollbar-hide">
          {Userslist.map((item, idx) => (
            <div className="flex gap-2 m-3 p-2 border-b border-[#ECECEE]">
              <div className="rounded-full w-fit h-fit p-2 flex items-center bg-[#9fade8}">
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
      <section className="flex-1 bg-white rounded-md">
        <div className="h-[3vh] my-2">
          <h3>IntegrationList</h3>
        </div>
        <div className="h-[60vh] overflow-y-scroll ">
          {IntegrationList.map((item, idx) => (
            <>
              <img src="" alt="" />
              <span>
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
              </span>
            </>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Activity;
