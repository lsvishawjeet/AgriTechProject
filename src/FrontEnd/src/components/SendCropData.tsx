"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast"
import { backend_address } from "../../configurations/address";


const formSchema = z.object({
  Nitrogen: z.string(),
  Phosphorus: z.string(),
  Potassium: z.string(),
  Temperature: z.string(),
  Humidity: z.string(),
  pH_Value: z.string(),
  Rainfall: z.string(),
});

const SendCropData = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Nitrogen: "",
      Phosphorus: "",
      Potassium: "",
      Temperature: "",
      Humidity: "",
      pH_Value: "",
      Rainfall: "",
    },
  });

  const [crop, setCrop] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [graphUrl, setGraphUrl] = useState<string>("");
  const router = useRouter();
  const { toast } = useToast()
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsProcessing(true);
      console.log("Submitting form with values:", values);
      
      const response = await axios({
        method: "post",
        url: `${backend_address}/predict`,
        data: values,
      });
  
      console.log("Received response:", response.data);
      setSuccess(true);
      setCrop(response.data.predicted_crop);
      setGraphUrl(response.data.image_url);
      sessionStorage.setItem("predicted_crop", response.data.predicted_crop);
      sessionStorage.setItem("enteredValues", JSON.stringify(values));
      sessionStorage.setItem(
        "graphURL",
        `${backend_address}/${response.data.image_url}`
      );
      router.push(`/home/predict/result`);
    } catch (error: any | AxiosError) {
      console.error("Error during form submission:", error);
      if (axios.isAxiosError(error)) {
        if (error.response) {
          toast({
            title: "Error",
            description: error.response.data.message || "An error occurred.",
            variant: "destructive",
          });
        } else if (error.request) {
          toast({
            title: "Error",
            description: "No response from server. Please try again later.",
            variant: "destructive",
          });
        } else {
          toast({
            title: "Error",
            description: error.message,
            variant: "destructive",
          });
        }
      } else {
        toast({
          title: "Error",
          description: "An unexpected error occurred.",
          variant: "destructive",
        });
      }
      setSuccess(false);
    } finally {
      setIsProcessing(false);
    }
  }
  
  return (
    <div className="flex flex-col items-center">
      <div className="md:w-[80%] p-5 rounded-2xl glass md:m-5">
        <div className={success ? "hidden" : ""}>
          <div className="mt-3 mb-6">
            <h1 className="text-2xl font-semibold text-center">
              Predict Best Crop
            </h1>
            <p className="text-center text-sm">Fill Soil and Weather Details</p>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className=" w-[100%] space-y-1 flex flex-wrap space-x-2 justify-center mb-4"
            >
              <FormField
                control={form.control}
                name="Nitrogen"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nitrogen (kg/ha)</FormLabel>
                    <FormControl>
                      <Input placeholder="80" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Phosphorus"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phosphorus (kg/ha)</FormLabel>
                    <FormControl>
                      <Input placeholder="40" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Potassium"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Potassium (kg/ha)</FormLabel>
                    <FormControl>
                      <Input placeholder="40" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Temperature"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Temperature (Celsius)</FormLabel>
                    <FormControl>
                      <Input placeholder="30" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Humidity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Humidity (percentage)</FormLabel>
                    <FormControl>
                      <Input placeholder="82" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="pH_Value"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>pH_Value</FormLabel>
                    <FormControl>
                      <Input placeholder="6" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Rainfall"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Rainfall (mm)</FormLabel>
                    <FormControl>
                      <Input placeholder="200" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className=" h-18 flex items-end">
                <Button className="w-[100%]" type="submit">
                  {isProcessing ? (
                    <span className="loading loading-ring loading-md"></span>
                  ) : (
                    "Submit"
                  )}
                </Button>
              </div>
            </form>
          </Form>
          {isProcessing ? <><p className="text-center font-light">Please wait... this usually takes a minute</p></>:<></>}
        </div>
      </div>
    </div>
  );
};
export default SendCropData;

{
  /* <Button disabled>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button> */
}
