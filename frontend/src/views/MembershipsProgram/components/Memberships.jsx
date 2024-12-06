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
    </div>
  );
}

export default Memberships;
