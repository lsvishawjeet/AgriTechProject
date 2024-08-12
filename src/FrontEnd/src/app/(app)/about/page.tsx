import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import React from "react";

function page() {
  return (
    <div className="h-[100vh] w-[100vw] bg-weblogo1">
      <div className="h-[100%] w-[100vw] md:p-5 md:flex glass">
        <div className="md:w-1/2 h-[100%] bg-white md:rounded-l-2xl overflow-scroll no-scrollbar">
          <div className="md:pr-2 md:mt-5 sticky top-0">
            <Navbar />
          </div>
          <div className="flex justify-center align-middle items-center h-auto bg-white">
            <div className="md:p-7 p-3">
              <h2 className="text-xl font-bold">Project: Data Visualization and Insights Generation</h2>
              <div className="mt-2 flex flex-col">
                <strong>Created by:</strong> <p className="pl-3">Vishawjeet Singh Sidhu, Manjot Kaur, Parmeet Kaur, Arshdeep Singh, Ratanveer</p><br/>
                <strong>Institution:</strong>  <p className="pl-3">Baba Farid College Of Engineering And Technology</p><br/>
                <strong>Team Name:</strong>  <p className="pl-3">Bytesmiths</p><br/>
                <strong>Problem by:</strong>  <p className="pl-3">Intel</p><br/>
                  <strong>Description:</strong> <p className="pl-3">This project focuses on data visualization and insights generation. 
                  We have chosen a <a
                href="https://www.kaggle.com/datasets/aksahaha/crop-recommendation/"
                target="_blank"
                className="  md:hover:bg-transparent md:border-0 text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500  dark:hover:text-white md:dark:hover:bg-transparent"
              >
                crop recommendation
              </a>{" "} dataset from Kaggle, trained a model on it, and designed a system 
                  where users input soil and weather values. The model then predicts the best suitable crop for the given conditions.</p><br/>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 bg-white h-[100%] p-2 md:rounded-r-2xl md:flex md:flex-col hidden">
          <div className="bg-weblogo1 bg-center bg-cover h-[100%] rounded-2xl">
            <div className="flex justify-center items-center h-[100%]">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
