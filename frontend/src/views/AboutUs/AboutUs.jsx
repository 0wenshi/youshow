import React from 'react';
import NavBar from '../CommonComponents/NavBar';
import ContactUs from './components/ContactUs';
import WonderfulReview from './components/WonderfulReview';

function AboutUs() {
  return (
    <div className="bg-[url('/images/background_2.jpg')] bg-cover items-center p-5">
      <div className="pt-0 px-8 pb-8">
        <div className="fixed top-0 left-0 right-0 z-50">
          <NavBar />
        </div>
        <div className="mt-12">
          <WonderfulReview />
        </div>
        {/* Gradient horizontal line */}
        <div className="my-8">
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-[rgb(250,127,42)] to-transparent"></div>
        </div>
        <div className="flex justify-center mb-8 mt-12">
          <div className="relative w-[400px] h-[300px]">
            {/* 背景层（橘黄色带边框） */}
            <div className="absolute w-full h-full bg-orange-400 border-4 border-black rounded-2xl left-4 top-2"></div>

            {/* 图片层 */}
            <div
              className="absolute w-full h-full bg-cover bg-center rounded-2xl"
              style={{ backgroundImage: 'url("/images/aboutus.jpg")' }}
            ></div>
          </div>
        </div>

        {/* 内容部分 */}
        <div className="text-center max-w-4xl mx-auto mt-12 text-lg leading-relaxed font-extrabold text-black">
          <p className="text-xl mb-6">
            <span className="font-black text-2xl text-black">
              You Show Studio
            </span>{' '}
            是新西兰首家运营中文脱口秀项目的华人脱口秀俱乐部，成立于 2022
            年。尽管成立时间不长，但我们已经成功举办了超过 50 场大大小小的演出。
            除中文节目之外，我们还运营英文脱口秀，以支持广泛的亚裔演员及观众群体，并迅速在新西兰的喜剧界树立了独特的品牌形象和广泛的知名度。
          </p>
          <p className="text-xl">
            我们的主理人是新西兰喜剧协会的董事之一，具备丰富的行业经验和广泛的人脉资源。这不仅为我们的节目质量提供了保障，也使我们能够在新西兰的喜剧行业中拥有重要的地位和影响力。
          </p>
        </div>

        {/* Gradient horizontal line */}
        <div className="my-48">
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-[rgb(250,127,42)] to-transparent"></div>
        </div>
        <div className="-mt-44">
          <ContactUs />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
