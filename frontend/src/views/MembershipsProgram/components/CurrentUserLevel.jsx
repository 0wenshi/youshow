import React from 'react';

const CurrentUserLevel = () => {
  // 模拟用户等级信息
  const user = {
    currentLevel: '普通会员',
    expiryDate: '2024.12.31',
    progress: 35, // 当前进度（百分比）
  };

  const levels = ['普通', '银卡', '金卡', 'VIP'];

  return (
    <div className="relative bg-orange-100 rounded-xl shadow-lg p-6 max-w-4xl mx-auto">
      {/* 左上角 "当前等级" */}
      <div className="absolute top-4 left-6 text-sm text-gray-800 font-bold">
        当前等级
      </div>

      {/* 等级内容 */}
      <div className="flex justify-between items-center">
        {/* 等级信息 */}
        <div>
          <h2 className="text-2xl font-bold text-orange-600 flex items-center">
            <span className="mr-2">🌟</span> {user.currentLevel}
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            {user.expiryDate}到期 ·{' '}
            <a href="#" className="text-orange-500 underline">
              查看权益
            </a>
          </p>
        </div>

        {/* 去升级按钮 */}
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-orange-600">
          去升级 &gt;
        </button>
      </div>

      {/* 进度条 */}
      <div className="relative mt-6">
        <div className="h-3 bg-orange-200 rounded-full">
          <div
            className="h-full bg-orange-500 rounded-full"
            style={{ width: `${user.progress}%` }}
          ></div>
        </div>
        {/* 小球标记 */}
        <div className="flex justify-between mt-2">
          {levels.map((level, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`w-4 h-4 rounded-full ${
                  user.progress >= (index / (levels.length - 1)) * 100
                    ? 'bg-orange-500'
                    : 'bg-orange-300'
                }`}
              ></div>
              <span className="mt-1 text-sm text-gray-700">{level}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurrentUserLevel;
