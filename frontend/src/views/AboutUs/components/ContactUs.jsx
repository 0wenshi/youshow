import React from 'react';

function ContactUs() {
  return (
    <div className="flex flex-wrap items-center justify-between p-5 w-full bg-orange-500 rounded-2xl">
      <div className="flex items-center justify-center mb-5">
        <img
          src="/images/Avatar.jpg"
          alt="YouShow Logo"
          className="w-[400px] h-[200px] object-cover"
        />
      </div>
      <div className="flex flex-col flex-1 ml-10 my-1 text-lg font-bold">
        <p>在线客服</p>
        <p>微信/公众号: youshow-nz</p>
        <p>邮箱: youshow.nz@gmail.com</p>
      </div>
    </div>
  );
}

export default ContactUs;
