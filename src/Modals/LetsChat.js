import React from "react";
import { BsChatRightFill } from "react-icons/bs";

const LetsChat = () => {
  return (
    <>
      <section className=" fixed bottom-8 right-6 z-30 animate-bounce hover:animate-none">
        <button className="text-white font-semibold bg-[#2DACF0] w-32 py-3 rounded-lg shadow-sky-600 shadow-lg flex items-center justify-evenly ">
          <BsChatRightFill fill="#fff" />
          Lets Chat
        </button>
      </section>
    </>
  );
};

export default LetsChat;
