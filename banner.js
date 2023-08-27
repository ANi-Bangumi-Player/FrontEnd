"use client";
import config from "@/app/config";
import { useState,useEffect } from "react";
import "tw-elements";
export default function BangumiBanner(){
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const response = await fetch(config.API_LIST.HOT_BANGUMI);
                const data = await response.json();
                setData(data);
                setLoading(false);
            }
            catch(error) {
                console.error("Failed to fetch.",error);
            }
        }
        fetchData();
    },[]);
    if(loading){
        return <div>加载中...</div>
    }
    
    return (
            <div 
            id="headbanner" 
            className="relative" 
            data-te-carousel-init 
            data-te-ride="carousel">
            {/* Indecators */}
            <div 
            className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
            data-te-carousel-indicators>
                {
                    data.map((item,idx) => (
                        <button 
                            type="button"
                            data-te-target="#headbanner"
                            data-slide-to={idx}
                            data-te-carousel-active={idx==0?true:undefined}
                            className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                            aria-current={idx==0?true:undefined}
                            aria-label={`Slide ${idx}`}
                            key={idx}
                        />
                    ))
                }
            </div>
        {/* Picture */}
            <div className="relative w-full h-full overflow-hidden after:clear-both after:block after:content-['']">
                {
                    data.map((item,idx)=>(<div className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-active={idx==0?true:undefined}
                    data-te-carousel-item
                    style={{"backfaceVisibility": "hidden"}}>
                        <img
                        src={`${item.picture}`}
                        className="object-none overflow-hidden block w-full "/>
                        <div 
                        className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block"
                        >
                                <h5 className="text-xl">{item.name}</h5>
                        </div>
                    </div>))
                }
            </div>
        {/* controller */}
            <button 
                className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button"
                data-te-target="#headbanner"
                data-te-slide="prev"
                >
                    <span className="inline-block h-8 w-8">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6">
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </span>
                    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                        Previous
                    </span>
            </button>
            <button
                className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button"
                data-te-target="#headbanner"
                data-te-slide="next">
                <span className="inline-block h-8 w-8">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6">
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                </span>
                <span
                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Next</span
                >
            </button>
        </div>)
}