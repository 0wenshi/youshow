import React from 'react';

function RentalDetail() {
  return (
    <div className="font-sans text-black p-6">
      <div className="text-center font-bold text-2xl mb-8">场地租赁</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4">
          <div className="text-lg font-semibold">地址</div>
          <div className="font-bold">Am2Pm</div>
          <div>7 Corinthian Drive, Albany, Auckland 0632</div>
          <img
            src="/images/address.jpg"
            alt="Address"
            className="w-full md:w-80 h-50 rounded-[35px] shadow-md"
          ></img>
        </div>
        <div className="space-y-4 text-sm">
          <p>
            我们俱乐部同样也适合举办各种类型的室内活动，例如生日派对，
            公司活动，节日派对，私人聚会等。 我们提供
            <span className="font-bold text-red-500">灵活多样</span>
            的空间布置和专业的现场支持，是您理想的活动场地选择。
          </p>
          <div className="text-base font-bold">为什么选择我们？</div>
          <p>
            我们可以根据活动需求灵活调整座位、灯光和舞台设置。
            高品质音响、灯光系统等专业设备、酒水吧
            <span className="font-semibold text-red-500">一应俱全</span>
            ，为您的活动提供保障。 场地位于“北岸华人宇宙中心”，
            <span className="font-semibold text-red-500">交通便捷</span>
            ，停车位充足，周边配套设施完善。
            我们团队会协助您安排活动细节，让您全程无忧。
          </p>
          <div className="text-base font-bold">联系我们</div>
          <p className="font-semibold">想了解更多场地信息或预订，请联系：</p>
          <p className="font-semibold">📧 am2pmnz@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default RentalDetail;
