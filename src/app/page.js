"use client";
import Images from "@/lib/image";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [cloth, setCloth] = useState(Images.withoutcloth);
  const [loading, setLoading] = useState();

  useEffect (() => {
    setLoading(true);
    setTimeout(setLoading(false), 2000);
  }, [setCloth]);

  const handlecloth = (e) =>{
    console.log(e);
    setLoading(true);
     setTimeout(() => {
      if (e == "cloth1") {
        setCloth(Images.modelcloth1)
        setLoading(false);
       }
       if (e == "cloth2") {
        setCloth(Images.modelcloth2)
        setLoading(false);
       }
       if (e == "cloth3") {
        setCloth(Images.modelcloth3)
        setLoading(false);
       }
       if (e == "cloth4") {
        setCloth(Images.modelcloth4)
        setLoading(false);
       }
       if (e == "cloth5") {
        setCloth(Images.modelcloth5)
        setLoading(false);
       }
       if (e == "cloth6") {
        setCloth(Images.modelcloth6)
        setLoading(false);
       }
     }, 2000);
  }

  console.log(cloth);
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between ">
        <nav className=" w-full text-white bg-slate-600 fixed">
          <div className="flex md:mx-auto justify-between items-center">
            <div className="flex py-4">
              <span className="ml-5 text-2xl font-bold ">Virtual Try-On Demo</span>
            </div>
            <div className="text-white lg:block xm:hidden xx:hidden md:hidden sm:hidden ">
              <ul className="py-4 lg:flex gap-5 pr-20">
                <li
                  className={`px-4 py-2 font-medium  text-base bg-[rgba(255,255,255,0.12)] rounded-[100px]`}
                >
                  <a href="/">Home</a>
                </li>
                <li
                  className={`px-4 py-2 font-medium  text-base bg-[rgba(255,255,255,0.12)] rounded-[100px] `}
                >
                  <a href="https://www.prometheantech.in/">About</a>
                </li>
                <li
                  className={`px-4 py-2 font-medium  text-base bg-[rgba(255,255,255,0.12)] rounded-[100px] `}
                >
                  <a href="https://www.prometheantech.in/contact.html">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="flex flex-row mt-20">
          <div className=" flex flex-wrap gap-2">
            <Image
              src={Images.cloth1}
              width={0}
              height={0}
              className="w-80 h-80"
              onClick={() =>handlecloth("cloth1")}
            />
            <Image
              src={Images.cloth2}
              width={0}
              height={0}
              className="w-80 h-80"
              onClick={() =>handlecloth("cloth2")}
            />
            <Image
              src={Images.cloth3}
              width={0}
              height={0}
              className="w-80 h-80"
              onClick={() =>handlecloth("cloth3")}
            />
            <Image
              src={Images.cloth4}
              width={0}
              height={0}
              className="w-80 h-80"
              onClick={() =>handlecloth("cloth4")}
            />
            <Image
              src={Images.cloth5}
              width={0}
              height={0}
              className="w-80 h-80"
              onClick={() =>handlecloth("cloth5")}
            />
            <Image
              src={Images.cloth6}
              width={0}
              height={0}
              className="w-80 h-80"
              onClick={() =>handlecloth("cloth6")}
            />
          </div>
          <div className="w-1/3">
            {loading == false ? (
              <Image src={cloth} width={0} height={0} className="w-80 h-80" />
            ) : (
                  <div className="w-full h-80 flex justify-center items-center">
                    <Loader2 className=" h-12 w-12 animate-spin text-black" />
                  </div>
            )}
            <button
              className="mt-4 bg-[#DC2626] p-1 rounded-full px-4 text-white"
              onClick={() => setCloth(Images.withoutcloth)}
            >
              Reset
            </button>
          </div>
        </div>
        <p className="sm:w-3/4 md:w-9/12 mx-auto text-cp_secondary text-center text-xs font-medium leading-snug mt-10 mb-3 font-fontpop">
        Copyright © 2023 PrometheanTech. All Rights Reserved.
          </p>
      </main>
    </>
  );
}
