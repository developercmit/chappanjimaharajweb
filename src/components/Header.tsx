"use client";

import Image from "next/image";
import Link from "next/link";
import { Bell, Plus } from "lucide-react";
import { FaFacebook, FaMap, FaInstagram, FaYoutube } from 'react-icons/fa';


export default function BusinessNavbar() {
  return (
    <div className="bg-white hero-sec">
      <header className="z-50 bg-[#e1551a]">
        <div className="container mx-auto max-w-[1370px] relative">
            <nav aria-label="Global" className="flex items-center navbar justify-between w-full  py-[10px]  absolute lg:inset-x-15 md:inset-x-10 lg:px-[0px] md:px-[15px] top-2 z-50">
            <div className="flex lg:flex-1 max-w-[120px]">
                <a href="/" className="-m-1.5 p-1.5" data-aos="zoom-in">
                  <span className="sr-only">Your Company</span>
                  <img src="./logo.png" alt="" className="lg:h-[140px] md:h-[80px] w-auto rounded-2xl object-cover animate__animated animate__fadeIn" />
                </a>
            </div>
           
            <div className="hidden lg:flex lg:gap-x-12">
                {/* <p className="mt-2 text-white">
                  श्री छप्पन जी महाराज भैरव मंदिर कोयला, राजस्थान 325222
                </p> */}
            </div>
            {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <a href="#history" className="rounded-3xl bg-[unset] px-6 py-6 text-sm font-semibold text-[#fff]  hover:text-[#000] shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">मंदिर की उत्पत्ति और प्राचीन कथा<span aria-hidden="true">&rarr;</span></a>
                <a href="#gallery" className="rounded-3xl bg-[#fff] px-6 py-6 text-sm font-semibold text-[#e1551a]  hover:text-[#fff] shadow-xs hover:bg-[#000] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">मंदिर की तस्वीरें /
        पर्व-त्योहार की झलकियाँ <span aria-hidden="true">&rarr;</span></a>
            </div> */
            <div className="flex space-x-3 text-xl">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#cb230a] hover:text-[#fff] bg-[#fff] hover:bg-[#cb230a] px-3 py-3 rounded-full"  data-aos="zoom-in">
                <FaFacebook />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#cb230a] hover:text-[#fff] bg-[#fff] hover:bg-[#cb230a] px-3 py-3 rounded-full"  data-aos="zoom-in">
                <FaInstagram />
              </a>
                <a href="https://youtube.com/@shreechappanjimaharajkoyla?si=K4WybK9-GTSmZGuu" target="_blank" rel="noopener noreferrer" className="text-[#cb230a]   hover:text-[#fff] bg-[#fff] hover:bg-[#cb230a] px-3 py-3 rounded-full" data-aos="zoom-in">
                <FaYoutube />
              </a>
              <a href="https://maps.app.goo.gl/emMAJYqumKLFL6D87" target="_blank" rel="noopener noreferrer" className="text-[#cb230a] hover:text-[#fff] bg-[#fff] hover:bg-[#cb230a] px-3 py-3 rounded-full"  data-aos="zoom-in">
                <FaMap />
              </a>
            </div>
            }
            </nav>
        </div>
      </header>
    </div>
  );
}