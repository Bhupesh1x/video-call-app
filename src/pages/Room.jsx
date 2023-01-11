import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function Room() {
  const { roomID } = useParams();
  const user = useSelector((state) => state.user.value);
  const navigate = useNavigate();

  const meeting = async (element) => {
    const appID = 930387872;
    const serverSecret = "53689af1b9f06afbcaa3c59ab6056919";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      Date.now().toString(),
      user?.displayName
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall,
      },
    });
  };

  useEffect(() => {
    if (!user?.displayName) {
      navigate(`/`);
    }
  }, []);

  const handleNavigateToHome = (e) => {
    e.preventDefault();
    window.location.href = "/";
  };

  return (
    <>
      <button
        className="pl-4 flex items-center text-blue-400 text-xl font-bold bg-[#1D1F2E] w-full"
        onClick={handleNavigateToHome}
      >
        <p>{"<"}</p>
        <p className="pl-0.5 pt-0.5">Back</p>
      </button>
      <div ref={meeting} style={{ width: "100vw", height: "96.3vh" }}></div>
    </>
  );
}

export default Room;
