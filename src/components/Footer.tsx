import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaMap } from "react-icons/fa";

// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-red-700 text-white lg:pt-12 md:pt-12 pt-6">
      <div className="container mx-auto max-w-[1370px] grid md:grid-cols-3 gap-8 lg:pb-12 md:pb-12 pb-4">
            {/* Left Side - Welcome message */}
            <div className="lg:text-center md:text-left text-left">
            <a href="/" className="-m-1.5 p-1.5 lg:text-center md:text-center text-left">
                <img src="./logo.png" alt="" className="lg:h-[140px] md:h-[120px] h-[100px] w-auto rounded-2xl object-cover" />
            </a>
            <p className="text-left">
                सभी भक्तों से अनुरोध है की जो भी इस वेबसाइट को विजिट कर रहा है 
                वो हमारा फेसबुक पेज जरूर लाइक करे ताकि हम लोग आगे भी आपसे जुड़े रहे ।
            </p>
            <p className="text-left">धन्यवाद ।</p>
            <p className="text-left">जय श्री राम ।</p>
            </div>
            {/* Right Side - Other Mandirs */}
            <div className="lg:text-center md:text-left text-left px-[130px] max-[1280px]:px-[20px] max-[767px]:px-0">
            <h3 className="font-semibold mb-2 text-left">अन्य दर्शनीय मन्दिर</h3>
            <ul className="space-y-1 list-disc list-inside text-left">
                <li>कोयला का गढ़</li>
                <li>गोविंद देव जी मंदिर</li>
                <li>माँ आशा पुरा मंदिर</li>
                <li>कंकाली माता मंदिर</li>
                <li>तेजाजी महाराज मंदिर</li>
                <li>कल्ला जी महाराज मंदिर</li>
                
            </ul>
            </div>
            <div className="lg:text-center md:text-left text-left px-[100px] max-[1280px]:px-[20px] max-[767px]:px-0 ">
            <h3 className="font-semibold mb-2 text-left">संपर्क जानकारी</h3>
            {/* Contact info */}
            <div className="mb-4 space-y-2 text-left">
            <p>Email: <a href="mailto:info@mandir.com" className="text-white hover:underline">info@mandir.com</a></p>
            <p>Phone: <a href="tel:+911234567890" className="text-white hover:underline">+91 12345 67890</a></p>
            </div>

            {/* Social links */}
            <div className="flex justify-start  space-x-3 mb-6 text-yellow-700 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#cb230a] hover:text-[#fff] bg-[#fff] hover:bg-[#000] px-3 py-3 rounded-full">
                <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#cb230a] hover:text-[#fff] bg-[#fff] hover:bg-[#000] px-3 py-3 rounded-full">
                <FaInstagram />
            </a>
            <a href="https://youtube.com/@shreechappanjimaharajkoyla?si=K4WybK9-GTSmZGuu" target="_blank" rel="noopener noreferrer" className="text-[#cb230a] hover:text-[#fff] bg-[#fff] hover:bg-[#000] px-3 py-3 rounded-full" data-aos="zoom-in">
            <FaYoutube />
            </a>
            <a href="https://maps.app.goo.gl/emMAJYqumKLFL6D87" target="_blank" rel="noopener noreferrer" className="text-[#cb230a] hover:text-[#fff] bg-[#fff] hover:bg-[#cb230a] px-3 py-3 rounded-full"  data-aos="zoom-in">
            <FaMap />
            </a>
            </div>
            </div>
      </div>
       <div className="bg-red-800 text-center text-sm py-[30px] ">
            <div className="container mx-auto max-w-[1370px] flex justify-between lg:flex-row md:flex-row flex-col">
                <p className="lg:mb-0 md:mb-0 mb-2 leading-6 ">
                2025 © Shree Chappan Ji Maharaj Temple, Rajasthan. All Rights Reserved.
                </p>
                <p className="leading-6">
                Website Designed & Developed By : CMITEXPERTS SOFTECH LLP 
                </p>
            </div>
            </div>
    </footer>
  );
}
