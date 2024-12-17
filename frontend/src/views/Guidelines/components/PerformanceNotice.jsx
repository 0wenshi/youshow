import React from 'react';

function PerformanceNotice() {
  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto rounded-lg p-8">
        <h1 className="text-center text-2xl font-bold mb-4 text-black">
          观演须知
        </h1>
        <p className="text-center text-lg font-bold mb-6 text-black">
          为了确保每位观众和演员都能享受一场愉快的脱口秀体验，请注意以下事项：
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <img
              src="/images/tomato_wine.png"
              alt="Tomato Icon"
              className="w-32 h-32 md:w-48 md:h-48"
            />
            <p className="font-bold text-black text-sm text-center md:text-left">
              吧台将在演出前
              <span className="text-red-500 font-bold">30分钟</span>
              分钟以及中场休息时提供酒水售卖服务， 演出期间将
              <span className="text-red-500 font-bold">关闭吧台</span>
              以免影响观演体验。
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <img
              src="/images/tomato_accompany.png"
              alt="Tomato Icon"
              className="w-32 h-32 md:w-48 md:h-48"
            />
            <p className="font-bold text-black text-sm text-center md:text-left">
              部分演出建议
              <span className="text-red-500 font-bold">16</span>
              岁以上观众观看，未成年人需家长陪同。
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <img
              src="/images/tomato_no_recording.png"
              alt="Tomato Icon"
              className="w-32 h-32 md:w-48 md:h-48"
            />
            <p className="font-bold text-black text-sm text-center md:text-left">
              演出期间
              <span className="text-red-500 font-bold">禁止</span>
              录音、录像或现场直播， 但欢迎拍照留念，请
              <span className="text-red-500 font-bold">关闭闪光灯</span>
              以免影响他人。
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <img
              src="/images/tomato_mute.png"
              alt="Tomato Icon"
              className="w-32 h-32 md:w-48 md:h-48"
            />
            <p className="font-bold text-black text-sm text-center md:text-left">
              为了避免干扰表演，请将手机调至
              <span className="text-red-500 font-bold">静音</span>或
              <span className="text-red-500 font-bold">振动</span>
              模式。
            </p>
          </div>
        </div>
        <div className="text-center space-y-4">
          <p className="text-black text-lg font-bold">
            演出票非普通商品，购票后
            <span className="text-red-500 font-bold">不支持</span>
            退款，改期，敬请谅解。
          </p>

          <p className="text-black text-lg font-bold">
            演出开场前
            <span className="text-red-500 font-bold">半小时</span>
            开始检票，请提前到场，按座位号入座。
          </p>

          <p className="text-black text-lg font-bold">
            <span className="text-red-500 font-bold">专场</span>
            演出
            <span className="text-red-500 font-bold">不设</span>
            中场休息，
            <span className="text-red-500 font-bold">开放麦</span>
            演出期间有
            <span className="text-red-500 font-bold">十分钟</span>
            的中场休息。
          </p>

          <p className="text-black text-lg font-bold">
            请<span className="text-red-500 font-bold">尊重</span>
            演员的表演，不随意打断，放松心情，尽情享受快乐。
          </p>
        </div>
      </div>
    </div>
  );
}

export default PerformanceNotice;
