import axios from "axios";
import React, { useEffect, useState } from "react";
import Dropdown from "../dropdown";

const config = {
  headers: {
    "X-RapidAPI-Key": "6ca948ceb7msh426f11ced47c1b7p13741cjsnf6f65942f5df",
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    "Access-Control-Allow-Origin": "*",
  },
};
const url = "https://free-to-play-games-database.p.rapidapi.com/api/games";

const Body = () => {
  const [listData, setListData] = useState([]);
  const fetchingData = () => {
    axios
      .get(url, config)
      .then((res) => setListData(res?.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <div className="flex justify-center bg-[#EDF1F3]">
      <div className="md:container px-28">
        <div className="flex justify-between py-10">
          <div>Game Terbaru</div>
          <div>
            <Dropdown />
          </div>
        </div>
        {/* Content */}
        <div className="grid grid-cols-3 gap-4 ">
          {listData &&
            listData.map((data) => {
              return (
                <div className="w-[378px] bg-white rounded-lg p-3">
                  <div className="relative ">
                    <img src={data.thumbnail} alt="" className="rounded-lg" />
                    <div className="bg-[#C1E1FF] bottom-5 left-6 absolute text-sm rounded-full w-max font-bold p-2">
                      {data.genre}
                    </div>
                  </div>
                  <h1 className="py-3">{data.title}</h1>
                  <p>{data.short_description}</p>
                  <div className="flex justify-between pt-2 border-t border-[#A0A7B9] mt-2">
                    <div className="space-y-2">
                      <h1 className="text-[#A0A7B9] text-sm">Platform</h1>
                      <p>{data.platform}</p>
                    </div>
                    <div className="space-y-2">
                      <h1 className="text-[#A0A7B9] text-sm">Release Date</h1>
                      <p>{data.release_date}</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Body;
