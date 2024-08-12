"use client";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import "chart.js/auto";
const AIinsights = dynamic(() => import("@/components/AIinsights"), {
  ssr: false,
});
const Bar = dynamic(() => import("react-chartjs-2").then((mod) => mod.Bar), {
  ssr: false,
});

type passedData = {
  Nitrogen: string;
  Phosphorus: string;
  Potassium: string;
  Temperature: string;
  Humidity: string;
  pH_Value: string;
  Rainfall: string;
};

function page() {
  // { params }: { params: { result: ['a', 'b'] } }
  const [predictedCrop, setPredictedCrop] = useState<String>("");
  const [values, setValues] = useState<passedData | null>(null);
  const [graphUrl, setGraphUrl] = useState<string>("");

  useEffect(() => {
    const getData = async () => {
      const data = sessionStorage.getItem("predicted_crop");
      const enteredValues = sessionStorage.getItem("enteredValues");
      const graph = sessionStorage.getItem("graphURL");
      if (data) {
        setPredictedCrop(data);
      }
      if (enteredValues) {
        setValues(JSON.parse(enteredValues) as passedData);
      }
      if (graph) {
        setGraphUrl(graph);
      }
    };
    getData();
    console.log(`values: ${values}`);
  }, []);

  const data = {
    labels: ["N2", "P4", "K", "T", "H", "pH", "R"],
    datasets: [
      {
        label: `Entered data for ${predictedCrop}`,
        data: [
          Number(values?.Nitrogen),
          Number(values?.Phosphorus),
          Number(values?.Potassium),
          Number(values?.Temperature),
          Number(values?.Humidity),
          Number(values?.pH_Value),
          Number(values?.Rainfall),
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="h-[100vh] w-[100vw] bg-weblogo1">
      <div className="h-[100%] w-[100vw] md:p-5 md:flex glass">
        <div className="md:w-1/2 h-[100%] bg-white md:rounded-l-2xl overflow-scroll  no-scrollbar">
          <div className="md:pr-2 md:mt-5 sticky top-0">
            <Navbar />
          </div>
          <div className="flex justify-center align-middle items-center h-auto bg-white">
            <Suspense fallback={<p>Loading...</p>}>
              <div className={" p-5 w-[100%]"}>
                <h1 className="text-3xl font-semibold mb-2">{predictedCrop}</h1>
                <AIinsights />
                <div className=" rounded-md m-2 ">
                  <div className="glass p-3 h-56 rounded-md">
                    <h1>Entered Data</h1>
                    <Bar data={data} />
                  </div>
                </div>
              </div>
            </Suspense>
          </div>
        </div>
        <div className="md:w-1/2 bg-white h-[100%] p-2 md:rounded-r-2xl bg">
          <div className=" md:bg-weblogo1 bg-center bg-cover h-[100%] rounded-2xl overflow-hidden">
            <div className="flex justify-center items-center h-[100%] overflow-scroll no-scrollbar">
              {/* <Suspense fallback={<p>Loading...</p>}> */}
              <div className="relative  h-[100%]">
                <div
                  className={
                    "md:flex md:sticky hidden top-5 mt-5 mb-5 glass m-3 md:m-4 rounded-lg z-10"
                  }
                >
                  <p className="p-3">
                    Best suitable crop for your condition:{" "}
                    <span className="font-semibold">{predictedCrop}</span>
                  </p>
                </div>
                <div className="p-3 overflow-hidden rounded-lg glass m-3 md:m-4">
                  {graphUrl && (
                    <img
                      className="rounded-xl bg-blend-multiply"
                      src={graphUrl}
                      alt={graphUrl}
                    />
                  )}
                </div>
                  <a
                    href="/insights"
                    className=" text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    <p className="text-end px-4 text-sm font-light"><span className="rounded-md glass p-2">Explore requirements of other crops</span></p>
                  </a>
                </div>
              {/* </Suspense> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
