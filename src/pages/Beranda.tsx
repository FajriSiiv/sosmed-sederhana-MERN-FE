import React, { useState } from "react";
import { AiFillHome, AiFillLike } from "react-icons/ai";
import {
  FaHashtag,
  FaRegListAlt,
  FaUserCircle,
  FaDeviantart,
} from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { BsFillBookmarkFill } from "react-icons/bs";
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoLogOutOutline } from "react-icons/io5";

export default function Beranda() {
  const [likeStatus, setLikeStatus] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const clickLike = () => {
    if (likeStatus) {
      setLikeStatus(false);
    } else {
      setLikeStatus(true);
    }
  };

  const clickNavBar = () => {
    if (navbar) {
      setNavbar(false);
    } else {
      setNavbar(true);
    }
  };

  const PostComponents = ({
    text,
    time,
    like,
    username,
  }: {
    text: String;
    time: String;
    like: String;
    username: String;
  }) => {
    return (
      <div className="flex flex-col p-4 border-[1px] rounded-lg w-full bg-[#f1f2f3]">
        <div className="flex items-center gap-4">
          <div className="bg-rose-500 rounded-full h-14 w-14"></div>
          <div className="flex flex-col">
            <p className="font-semibold">{username}</p>
            <p className="opacity-70 text-sm">{time}</p>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <p>{text}</p>
        </div>
        <div
          className="flex mt-4 items-center gap-2 cursor-pointer transition-all justify-center rounded-md"
          onClick={clickLike}
        >
          <AiFillLike
            className={`w-8 h-8 ${likeStatus ? "text-blue-500" : "text-black"}`}
          />
          <div className="w-10 rounded-full text-white bg-sky-500 text-center selection:bg-none">
            {like}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-12 gap-5 bg-[#f8f9fa] min-h-screen relative md:flex md:flex-col">
      <div
        className={`col-span-3 px-5 relative md:mt-10 transition-all duration-300  md:left-0 md:top-0 md:fixed md:w-full  md:translate-y-20 z-50 ${
          navbar ? "md:translate-x-0" : "md:-translate-x-full"
        }`}
      >
        <div className="sticky w-full right-5 top-10 md:bg-white">
          <div className="flex flex-col gap-y-6 border-2 rounded-md p-5 ">
            <FaDeviantart className="w-10 h-10 text-[#758bfd]" />
            <div className="flex items-center gap-x-3 hover:text-blue-500 text-slate-800 cursor-pointer transition-all duration-150 ">
              <AiFillHome className="w-7 h-7" />
              <p className="font-bold text-xl">Home</p>
            </div>
            <div className="flex items-center gap-x-3 hover:text-blue-500 text-slate-800 cursor-pointer transition-all duration-150  ">
              <FaHashtag className="w-7 h-7" />
              <p className="font-bold text-xl">Explore</p>
            </div>
            <div className="flex items-center gap-x-3 hover:text-blue-500 text-slate-800 cursor-pointer transition-all duration-150  ">
              <SiMinutemailer className="w-7 h-7" />
              <p className="font-bold text-xl">Messages</p>
            </div>
            <div className="flex items-center gap-x-3 hover:text-blue-500 text-slate-800 cursor-pointer transition-all duration-150  ">
              <BsFillBookmarkFill className="w-7 h-7" />
              <p className="font-bold text-xl">Bookmarks</p>
            </div>
            <div className="flex items-center gap-x-3 hover:text-blue-500 text-slate-800 cursor-pointer transition-all duration-150  ">
              <FaRegListAlt className="w-7 h-7" />
              <p className="font-bold text-xl">List</p>
            </div>
            <div className="flex items-center gap-x-3 hover:text-blue-500 text-slate-800 cursor-pointer transition-all duration-150  ">
              <FaUserCircle className="w-7 h-7" />
              <p className="font-bold text-xl">Profile</p>
            </div>
            <div className="flex items-center gap-x-3 hover:text-blue-500 text-slate-800 cursor-pointer transition-all duration-150  ">
              <IoLogOutOutline className="w-7 h-7" />
              <p className="font-bold text-xl">Logout</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="lg:hidden top-10 right-10 border p-2 bg-white rounded-full fixed"
        onClick={clickNavBar}
      >
        <HiBars3BottomRight className="h-8 w-8" />
      </div>
      <div className="col-span-6 flex flex-col pt-10 gap-y-7 justify-center items-start  md:px-5 md:mt-20">
        <div className="border-[1px] p-5 rounded-lg w-full">
          <div className="flex justify-center gap-x-3">
            <div className="bg-rose-500 rounded-full h-14 w-14 aspect-square"></div>
            <textarea
              name=""
              id=""
              className="w-[90%] p-3 bg-gray-400/20 rounded-md resize-none h-28 focus:outline-slate-400 "
              placeholder="Start Post"
            ></textarea>
          </div>
          <button className="float-right mt-3 bg-blue-500 text-white px-8 py-2 rounded-lg">
            Post
          </button>
        </div>

        <PostComponents
          like="12K"
          username="fajri222"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium iure quidem voluptate modi. Iure cumque nobis, quaerat iste cum optio? Doloremque blanditiis veritatis nam, odio non consequuntur tempore incidunt totam."
          time="1 min ago"
        />
        <PostComponents
          like="12K"
          username="anrean"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium iure quidem voluptate modi. Iure cumque nobis, quaerat iste cum optio? Doloremque blanditiis veritatis nam, odio non consequuntur tempore incidunt totam."
          time="21 min ago"
        />
        <PostComponents
          like="12K"
          username="draweinw223"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium iure quidem voluptate modi. Iure cumque nobis, quaerat iste cum optio? Doloremque blanditiis veritatis nam, odio non consequuntur tempore incidunt totam."
          time="1 hours ago"
        />
        <PostComponents
          like="12K"
          username="ty21ss2"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium iure quidem voluptate modi. Iure cumque nobis, quaerat iste cum optio? Doloremque blanditiis veritatis nam, odio non consequuntur tempore incidunt totam."
          time="1 day ago"
        />
      </div>
      <div className="col-span-3 relative h-full mt-10 px-3 md:hidden">
        <div className="border-2 rounded-lg h-fit  w-full  py-5 px-3 sticky right-5 top-10">
          <h2 className="mb-2 font-semibold text-xl text-center">
            Your Profile
          </h2>
          <div className="flex flex-col gap-y-3">
            <div className="flex justify-items-center items-center gap-2">
              <div className="bg-rose-500 rounded-full h-14 w-14"></div>
              <div className="flex flex-col">
                <p className="font-semibold">Fjriri123</p>
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <p>
                Name : <span className="font-semibold">Muhammad Fajri</span>
              </p>
              <p>
                Email : <span className="font-semibold">email@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
