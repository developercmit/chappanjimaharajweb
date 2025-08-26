"use client";
import { useEffect } from 'react';  // Importing useEffect
import AOS from 'aos';
import 'aos/dist/aos.css'; // Don't forget to import the AOS styles
import './../app/globals.css'; // If you're using global styles


import Image from "next/image";
import Header from "./../components/Header";
import ImageSlider from "./../components/ImageSlider";
import ThreeCardSection from "./../components/ThreeCardSection";
import Gallery from "./../components/Gallery";
import TempleHistory from "./../components/TempleHistory";
import CTASection from "./../components/CTASection";
import LatestImages from "../components/LatestImages";
import BookingForm from "./../components/BookingForm";
import Footer from "./../components/Footer";



export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animates only once when it comes into view
    });
  }, []);
  return (
    <>
      <Header />
      <ImageSlider />
      <ThreeCardSection />
      <TempleHistory />
      <Gallery />
      <CTASection />
      <LatestImages />
      <BookingForm />
      <Footer />
      
      
      
    </>
  );
}
