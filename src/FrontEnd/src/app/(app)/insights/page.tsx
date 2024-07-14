import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import React from "react";
import { backend_address } from "../../../../configurations/address";

function page() {
  return (
    <div className="h-[100vh] w-[100vw] bg-weblogo1">
      <div className="h-[100%] w-[100vw] md:p-5 md:flex glass">
        <div className="h-[100%] w-[100%] bg-white md:rounded-2xl overflow-scroll  no-scrollbar">
          <div className="md:pr-2 md:mt-5 sticky top-0">
            <Navbar />
            <div className="flex flex-wrap justify-center align-middle items-center h-auto bg-white">
              <p className="text-xl p-3">
                Explore all the useful insights generated from{" "}
                <a
                  href="https://www.kaggle.com/datasets/aksahaha/crop-recommendation/"
                  target="_blank"
                  className="  md:hover:bg-transparent md:border-0 text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500  dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  crop recommendation
                </a>{" "}
                dataset:
                
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center space-y-5 p-3">
          <span className="text-sm pl-2 font-light">
                  please wait this usually take {"<"} min
                </span>
            <img
              className="rounded-xl bg-blend-multiply"
              src={`${backend_address}/insights/cropdistributiongraph`}
              alt={``}
            />
            <img
              className="rounded-xl bg-blend-multiply"
              src={`${backend_address}/insights/Apple`}
              alt={``}
            />
            <img
              className="rounded-xl bg-blend-multiply"
              src={`${backend_address}/insights/Banana`}
              alt={``}
            />
            <img
              className="rounded-xl bg-blend-multiply"
              src={`${backend_address}/insights/Blackgram`}
              alt={``}
            />
            <img
              className="rounded-xl bg-blend-multiply"
              src={`${backend_address}/insights/ChickPea`}
              alt={``}
            />
            <img
              className="rounded-xl bg-blend-multiply"
              src={`${backend_address}/insights/Coconut`}
              alt={``}
            />
            <img
              className="rounded-xl bg-blend-multiply"
              src={`${backend_address}/insights/Coffee`}
              alt={``}
            />
            <img
              className="rounded-xl bg-blend-multiply"
              src={`${backend_address}/insights/Cotton`}
              alt={``}
            />
            <img
              className="rounded-xl bg-blend-multiply"
              src={`${backend_address}/insights/Grapes`}
              alt={``}
            />
            <img
              className="rounded-xl bg-blend-multiply"
              src={`${backend_address}/insights/Jute`}
              alt={``}
            />
            <img
              className="rounded-xl bg-blend-multiply"
              src={`${backend_address}/insights/KidneyBeans`}
              alt={``}
            />
            <img
              className="rounded-xl bg-blend-multiply"
              src={`${backend_address}/insights/Lentil`}
              alt={``}
            />
            <img
              className="rounded-xl bg-blend-multiply"
              src={`${backend_address}/insights/Maize`}
              alt={``}
            />
            <img
              className="rounded-xl bg-blend-multiply"
              src={`${backend_address}/insights/Mango`}
              alt={``}
            />
            <img
              className="rounded-xl bg-blend-multiply"
              src={`${backend_address}/insights/MothBeans`}
              alt={``}
            />
            <img
              className="rounded-xl bg-blend-multiply"
              src={`${backend_address}/insights/MungBeans`}
              alt={``}
            />
            <img
              className="rounded-xl bg-blend-multiply"
              src={`${backend_address}/insights/Muskmelon`}
              alt={``}
            />
            <img
              className="rounded-xl bg-blend-multiply"
              src={`${backend_address}/insights/Orange`}
              alt={``}
            />
            <img
              className="rounded-xl bg-blend-multiply"
              src={`${backend_address}/insights/Papaya`}
              alt={``}
            />
            <img
              className="rounded-xl bg-blend-multiply"
              src={`${backend_address}/insights/PigeonPeas`}
              alt={``}
            />
            <img
              className="rounded-xl bg-blend-multiply"
              src={`${backend_address}/insights/Pomegranate`}
              alt={``}
            />
            <img
              className="rounded-xl bg-blend-multiply"
              src={`${backend_address}/insights/Rice`}
              alt={``}
            />
            <img
              className="rounded-xl bg-blend-multiply"
              src={`${backend_address}/insights/Watermelon`}
              alt={``}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
