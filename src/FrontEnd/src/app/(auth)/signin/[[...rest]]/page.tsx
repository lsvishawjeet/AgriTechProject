import React from "react";
import { SignIn } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import Main from "@/components/Main";

function page() {
  return (
    
    <div className="h-[100vh] w-[100vw] bg-weblogo1">
    <div className="h-[100%] w-[100vw] md:p-5 md:flex glass">
      <div className="md:w-1/2 md:h-[100%] bg-white md:rounded-l-2xl overflow-scroll  no-scrollbar">
        <div className="md:pr-2 md:mt-5 sticky top-0">
          <Navbar />
        </div>
        <div className="justify-center align-middle items-center h-auto bg-white md:flex hidden">
          <Main disabled={true} />
        </div>
      </div>
      <div className="md:w-1/2 bg-white md:h-[100%] p-2 md:rounded-r-2xl">
        <div className="bg-[#EFE1C4] bg-center bg-cover md:h-[100%] rounded-2xl">
          <div className="flex justify-center items-center md:h-[100%]  rounded-2xl">
            <div className="">
          <SignIn path="/signin" 
          appearance={{
            variables: {
              colorBackground: "",
            },
          }}
          />
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default page;
