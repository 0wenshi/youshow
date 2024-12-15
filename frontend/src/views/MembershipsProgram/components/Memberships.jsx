import React from 'react';

function Memberships() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <img
          src="/images/sliverlevel.jpg"
          alt="银卡会员"
          className="w-full h-auto shadow-lg"
        />
      </div>
      <div>
        <img
          src="/images/goldlevel.jpg"
          alt="金卡会员"
          className="w-full h-auto shadow-lg"
        />
      </div>
      <div>
        <img
          src="/images/viplevel.jpg"
          alt="VIP会员"
          className="w-full h-auto shadow-lg"
        />
      </div>
      <div className="text-sm text-gray-800 text-left mt-8 space-y-2 w-full max-w-md">
        <p>*详情请咨询店内工作人员</p>
        <p>**会员计划最终解释权由 You Show Studio Limited 所有</p>
      </div>
    </div>
  );
}

export default Memberships;
