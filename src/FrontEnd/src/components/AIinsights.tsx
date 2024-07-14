import React, { useEffect, useState } from "react";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Skeleton } from "./ui/skeleton";

function AIinsights() {
  const apiKey = "AIzaSyDsoMy940nDJWuJNGWUZhmuTsbXoIsH4S0";
  const genAI = new GoogleGenerativeAI(apiKey as string);
  //   const md = markdownit();
  const [message, setMessage] = useState<string>("");
  const [isGetting, setIsGetting] = useState(false);

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction:
      "This website asks farmer about their soil details and weather details. These details are: Nitrogen (kg/ha), Phosphorus (kg/ha), Potassium (kg/ha), Temperature (Celsius), Humidity (percentage), pH_Value, Rainfall (mm). Then based on those details, it give best suitable crop prediction according to conditions. Website uses its own ml model and predicting crops. Now, you will get the user entered values and predicted suitable crop name from website, you will be providing more details about that particular crop, Your response should include: Why that crop suits most with those conditions. What are the improvements farmer can make by adding ingredients to soil, and what ingredients should be added to soil to increase the production of that crop. Which ingridient can become headache while growing that crop.",
  });

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };

  const enteredValues: string | any =
    sessionStorage.getItem("enteredValues") +
    " " +
    `Predicted Crop: ${sessionStorage.getItem("predicted_crop")}`;


  async function run() {
    try {
        setIsGetting(true)
        const chatSession = model.startChat({
            generationConfig,
            history: [],
          });
          const result = await chatSession.sendMessage(enteredValues);
          setMessage(result.response.text());
          console.log(result.response.text());
    } catch (error) {
        console.log(error)
    } finally{
        setIsGetting(false)
    }
  }
  useEffect(() => {
    run();
  }, []);

  return (
    <div>
        {isGetting ?<div className="w-[100%]"><div className="flex"><span className="loading loading-spinner text-neutral"></span><p className="text-lg ml-3">Loading More Insights...</p></div><div className="flex flex-col space-y-3">
      <div className="space-y-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" /></div></div></div> :
      <Markdown className="text-justify" remarkPlugins={[remarkGfm]}>
        {message}
      </Markdown>}
    </div>
  );
}

export default AIinsights;
