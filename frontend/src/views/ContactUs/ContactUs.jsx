import React from 'react';
import NavBar from '../CommonComponents/NavBar';

function ContactUs() {
  return (
    <div className="h-screen w-screen mx-auto bg-[#ff8500] flex items-center justify-between px-[250px]">
      <div className="fixed top-0 left-0 right-0 z-50">
        <NavBar />
      </div>
      <div className="w-auto h-auto">
        <img src="/images/Avatar.jpg" alt="YouShow Logo" />
      </div>
      <div className="text-left text-black text-[20px] font-black stroke-black">
        <p>在线客服</p>
        <p>微信/公众号: youshow-nz</p>
        <p>邮箱: youshow.nz@gmail.com</p>
      </div>
    </div>
  );
}

export default ContactUs;
