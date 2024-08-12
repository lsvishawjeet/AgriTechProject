'use client'
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import React, { useEffect } from "react";
import axios, { AxiosError } from "axios";
import { backend_address } from "../../../../configurations/address";

function page() {
  useEffect(()=>{
    async function wakeUpServer() {
      try {
        const response = await axios({
          method: "get",
          url: backend_address,
        });   
      } catch (error) {
        console.log(error)
      }
    }
    wakeUpServer()
  },[])
  return (
    <div className="h-[100vh] w-[100vw] bg-weblogo1">
      <div className="h-[100%] w-[100vw] md:p-5 md:flex glass">
        <div className="md:w-1/2 h-[100%] bg-white md:rounded-l-2xl overflow-scroll  no-scrollbar">
          <div className="md:pr-2 md:mt-5 sticky top-0">
            <Navbar />
          </div>
          <div className="flex justify-center align-middle items-center h-auto bg-white">
            <Main disabled = {false}/>
          </div>
        </div>
        <div className="md:w-1/2 bg-white h-[100%] p-2 md:rounded-r-2xl md:flex md:flex-col hidden">
            <div className=" bg-weblogo1 bg-center bg-cover h-[100%] rounded-2xl">
              <div className="flex justify-center items-center h-[100%]">
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default page;
