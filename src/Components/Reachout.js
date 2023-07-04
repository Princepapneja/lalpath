import React, { useState } from "react";
import ReachoutModal from "../Modals/ReachoutModal";

const Reachout = () => {
  //state for modal  
    const [showReachModal, setShowReachModal] = useState(false); 
  return (
    <>
      <section className=" h-auto my-4 sm:p-8 lg:px-14">
        <section onClick={()=>{setShowReachModal(true)}} className="w-full max-w-[1480px] h-auto p-5 px-6 mx-auto sm:rounded-xl bg-white shadow-md">
          <div className="w-full h-full primary-bg-color p-3 rounded-xl cursor-pointer">
              <p className="font-semibold text-center capitalize text-lg md:text-xl lg:text-2xl">Reach out to us</p>
          </div>
        </section>
        { showReachModal && <ReachoutModal  closeModal={setShowReachModal}/>}
      </section>
    </>
  );
};

export default Reachout;
