"use client";
import { Flower2, BookOpen, HandHeart } from "lucide-react";

export default function ThreeCardSection() {
  return (
    <section className="lg:py-16 md:py-12 pt-8 pb-12 bg-orange-50">
      <div className="container mx-auto max-w-[1370px] max-w-6xl mx-auto main-typing">
        {/* Heading */}
          <div className="text-center mb-12" data-aos="zoom-in">
            <div className="flex main-typing-text">
              <h2 className="lg:text-3xl md:text-3xl text-[30px] font-bold text-orange-800 typing">🙏 श्री छप्पन जी महाराज कोयला मंदिर में आपका हार्दिक स्वागत है। 🙏</h2>
              <h2 className="lg:text-3xl md:text-3xl text-[30px] font-bold text-orange-800 typing">श्री छप्पन जी महाराज कोयला मंदिर में आपका हार्दिक स्वागत है। 🙏</h2>
            </div>
            <p className="mt-2 text-orange-600">
                यह पावन धाम भक्तों की आस्था और श्रद्धा का केंद्र है, जहाँ प्रतिदिन सैकड़ों श्रद्धालु दर्शन करने आते हैं।
              </p>
          </div>
      </div>
          <div className="container mx-auto max-w-[1370px] max-w-6xl mx-auto">  
              
            {/* Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 - पूजा एवं आरती */}
              <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition card" data-aos="flip-left">
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 text-orange-600 flex items-center justify-center rounded-full">
                  <Flower2 size={32} />
                </div>
                <h3 className="text-xl font-semibold text-orange-800 mb-2">
                  पूजा एवं आरती
                </h3>
                <p className="text-gray-600">
                  प्रतिदिन भगवान की पूजा एवं आरती में शामिल होकर शांति और आशीर्वाद प्राप्त करें।
                </p>
              </div>

              {/* Card 2 - धार्मिक ग्रंथ */}
              <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition card" data-aos="flip-left">
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 text-orange-600 flex items-center justify-center rounded-full">
                  <BookOpen size={32} />
                </div>
                <h3 className="text-xl font-semibold text-orange-800 mb-2">
                  धार्मिक ग्रंथ
                </h3>
                <p className="text-gray-600">
                  वेद, गीता, पुराण आदि धार्मिक ग्रंथों का अध्ययन कर आध्यात्मिक ज्ञान प्राप्त करें।
                </p>
              </div>

              {/* Card 3 - सेवा एवं दान */}
              <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition card" data-aos="flip-left">
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 text-orange-600 flex items-center justify-center rounded-full">
                  <HandHeart size={32} />
                </div>
                <h3 className="text-xl font-semibold text-orange-800 mb-2">
                  सेवा एवं दान
                </h3>
                <p className="text-gray-600">
                  समाज की सेवा और दान के माध्यम से पुण्य अर्जित करें और भक्ति में आगे बढ़ें।
                </p>
              </div>
            </div>
        </div>
    </section>
  );
}
