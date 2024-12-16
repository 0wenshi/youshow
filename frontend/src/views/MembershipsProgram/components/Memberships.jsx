import React from 'react';

function Memberships() {
  return (
    <div className="flex flex-col items-center p-16 space-y-12 ">
      <div className="space-y-8">
        <div
          className="p-6 rounded-lg bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/199.jpg')",
            width: '650px',
            height: '300px',
          }}
        ></div>
        <div
          className="p-6 rounded-lg bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/666.jpg')",
            width: '650px',
            height: '300px',
          }}
        ></div>
        <div
          className="p-6 rounded-lg bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/999.jpg')",
            width: '650px',
            height: '300px',
          }}
        ></div>
        <div className="text-base text-gray-800 text-left space-y-2 w-full max-w-md font-bold">
          <p>*详情请咨询店内工作人员</p>
          <p>**会员计划最终解释权由 You Show Studio Limited 所有</p>
        </div>
      </div>
    </div>
  );
}

export default Memberships;
