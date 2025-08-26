'use client';

import { useState } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Booking Data:', formData);
    alert('Booking request submitted!');
    setFormData({ name: '', email: '', phone: '' });
  };

  return (
    <section className="lg:py-12 md:py-12 pt-0 pb-12 bg-orange-50" id="gallery">   
        <div className="container mx-auto max-w-[1370px] pt-5">
            <div className="flex lg:flex-row md:flex-row flex-col items-center bg-[#fff] rounded-lg lg:py-[50px] md:py-[50px] py-[24px] lg:px-[50px] md:px-[50px] px-[20px] lg:max-w-[90%] md:max-w-[90%] max-w-full mx-auto gap-10">
                <form onSubmit={handleSubmit} className="space-y-4 lg:w-6/12 md:w-6/12 w-full" data-aos="zoom-in">
                    <div className="text-center lg:mb-12 md:mb-10 mb-4 max-w-[65%] mx-auto">
                        <h2 className="text-3xl font-bold text-orange-800">धर्मशाला बुकिंग फॉर्म</h2>
                    </div>
                    <div>
                    <label className="block text-yellow-900 font-medium mb-1">नाम</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name || ''}
                        onChange={handleChange}
                        required
                        className="w-full border border-black rounded px-3 py-2 h-[50px] rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                    </div>
                    <div>
                    <label className="block text-yellow-900 font-medium mb-1">ईमेल</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email || ''}
                        onChange={handleChange}
                        required
                        className="w-full border border-black rounded px-3 py-2 h-[50px] rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                    </div>
                    <div>
                    <label className="block text-yellow-900 font-medium mb-1">फ़ोन नंबर</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone || ''}
                        onChange={handleChange}
                        required
                        className="w-full border border-black rounded px-3 py-2 h-[50px] rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                    </div>
                    <button
                    type="submit"
                    className="text-[#fff] cursor-pointer hover:text-[#fff] bg-[#cb230a] hover:bg-[#000] lg:px-8 lg:py-5 px-6 py-3 rounded-full transition w-full mt-8"
                    >
                    बुकिंग सबमिट करें
                    </button>
                </form>
                <div className="text-center w-full mb-0 lg:max-w-[50%] md:max-w-[50%] max-w-full mx-auto lg:h-[500px] md:h-[500px] h-[300px]" data-aos="fade-up">
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.837692665963!2d76.54769708012168!3d25.20869552021359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3970049f6522bc75%3A0x7774cee4dee41bb0!2sChhappan%20Bhairav%20Mandir!5e0!3m2!1sen!2sin!4v1755760132949!5m2!1sen!2sin"
                    width="100%"
                    height={"100%"}
                    style={{ border: "0", borderRadius: "20px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </div>
    </section>
  );
};

export default BookingForm;
