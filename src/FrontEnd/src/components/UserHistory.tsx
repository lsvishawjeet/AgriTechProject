"use client"
import React, { useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs'
import axios from 'axios'

function UserHistory() {
    const { user } = useUser()
    const [historyData, setHistoryData] = useState<any>([])
    const [loading, setLoading] = useState<boolean>(true) // Track loading state

    useEffect(() => {
        async function getData() {
            try {
                setLoading(true) // Start loading
                const userId = user?.publicMetadata?.userId
                console.log(userId)
                const { data } = await axios.get(`/api/getHistory/${userId}`)
                console.log(data)
                setHistoryData(data)
            } catch (error) {
                console.log("Error fetching history", error)
            } finally {
                setLoading(false) // End loading
            }
        }
        if (user?.publicMetadata?.userId) {
            getData()
        }
    }, [user])

    return (
        <div className="min-h-screen">
            <h1 className="text-lg font-bold mb-4">Prediction History</h1>
            {loading ? (
                <div className="flex justify-center items-center h-full">
                    {/* Improved Loader */}
                    <div className="relative">
                        <div className="w-16 h-16 rounded-full border-t-4 border-gray-500 border-b-4  animate-spin"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            {/* <div className="w-10 h-10  bg-gray-600 rounded-full"></div> */}
                        </div>
                    </div>
                    <p className="ml-4 text-gray-600 text-lg">Loading...</p> 
                </div>
            ) : historyData.length > 0 ? (
                historyData.map((item: any, index: number) => (
                    <div key={index} className="bg-white shadow-md rounded-lg p-4 mb-4">
                        <div className="flex flex-col gap-2 mb-4">
                            <p className="text-gray-600 text-sm">
                                <span className="font-semibold">Date:</span> {new Date(item.date).toLocaleDateString()}
                            </p>
                            <div className="border-t border-gray-300 pt-2">
                                {item.enteredFields.map((d: any, i: number) => (
                                    <div key={i} className="flex flex-wrap gap-3">
                                        <span><span className="font-semibold">Nitrogen:</span> {d.nitrogen}</span>
                                        <span><span className="font-semibold">Phosphorus:</span> {d.phosphorus}</span>
                                        <span><span className="font-semibold">Potassium:</span> {d.potassium}</span>
                                        <span><span className="font-semibold">Temperature:</span> {d.temperature}</span>
                                        <span><span className="font-semibold">pH Value:</span> {d.phValue}</span>
                                        <span><span className="font-semibold">Humidity:</span> {d.humidity}</span>
                                        <span><span className="font-semibold">Rainfall:</span> {d.rainfall}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="border-t border-gray-300 pt-2 flex">
                            <p><span className="text-lg font-semibold">Predicted Crop: </span><span className="text-lg text-gray-800">{item.predictedCrop}</span> </p>
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-gray-600">No history found</p>
            )}
        </div>
    )
}

export default UserHistory
