import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { auth, provider } from "../firebase";

function Home() {
  const [roomCode, setRoomCode] = useState("");
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.value);

  const handleNavigateRoom = (e) => {
    e.preventDefault();
    navigate(`/room/${roomCode}`);
  };

  const handleStartMeeting = (e) => {
    e.preventDefault();
    var meetCode = Math.floor(100000 + Math.random() * 9000);
    navigate(`/room/${meetCode}`);
  };

  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  };

  return (
    <>
      <Navbar />

      <div className="px-20 mt-20 lg:mt-36 flex flex-col gap-10 lg:flex-row">
        {/* Left */}
        <div className="lg:w-[60%]">
          <h1 className=" text-3xl lg:text-4xl">
            Video calls and meetings for everyone.
          </h1>
          <p className="mt-6 lg:mt-9 text-gray-500">
            Video Chat App is one service for high-quality video meetings{" "}
            <strong>
              Sign in and click Start a meeting to get a 6 digit code you can
              send to people you want to meet or Enter 6 digit meet code to join
              meet.
            </strong>
          </p>

          <div className="flex items-center space-x-2 bg-blue-600 text-white py-2.5 px-4 w-fit rounded-md mt-10 lg:mt-14 cursor-pointer">
            <img
              src="https://img.icons8.com/fluency-systems-filled/48/FFFFFF/video-clip.png"
              className="h-5 w-5"
              alt=""
            />
            <p className=" text-lg font-light">
              {user?.displayName ? (
                <p onClick={handleStartMeeting}>Start a meeting</p>
              ) : (
                <p onClick={signIn}>Sign In</p>
              )}
            </p>
          </div>

          <div className="flex items-center mt-4 lg:mt-7 gap-6">
            <div className="flex items-center border-2  py-2.5 px-3 w-fit space-x-3 rounded-md bg-gray-50 focus-within:border-blue-600">
              <img
                src="https://img.icons8.com/material-outlined/24/null/keyboard.png"
                alt="h-9 w-9"
              />
              <input
                type="text"
                required
                value={roomCode}
                onChange={(e) => setRoomCode(e.target.value)}
                placeholder="Enter Meeting Code"
                className="outline-none flex-1 bg-transparent"
              />
            </div>
            <button
              disabled={!roomCode.trim() || !user?.displayName}
              className="text-blue-400 text-xl disabled:text-gray-400 cursor-pointer disabled:cursor-not-allowed"
              onClick={handleNavigateRoom}
            >
              Join
            </button>
          </div>
          <div></div>
        </div>

        {/* Right */}
        <div className="lg:w-[40%] lg:h-fit bg-white border shadow-md p-3 rounded-md flex">
          <img
            src="https://lh3.googleusercontent.com/g6WWfSMs3V0w2hhsaoc9myxQXmfO3IcRPwIsSo7nUJkNDHFb2JT4bffBiNH50_seojxYfC3AfBz8xNHd5k7tqXVsjRVvHGfJfAPx-zz8Lk7EQ0cPuA=rwu-v1-w1400"
            alt=""
            className="h-[100%] w-[100%] object-contain rounded-md"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
