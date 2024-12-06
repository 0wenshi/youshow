import React from 'react';

import actor1 from '/images/lianghaiyuan.jpeg';
import actor2 from '/images/wangdefa.jpeg';
import actor3 from '/images/chenxiaojin.jpeg';
import actor4 from '/images/apan.jpeg';
import actor5 from '/images/zhaijianing.jpeg';

const files = [
    {
        title: '梁海源',
        subtitle: '经验丰富的喜剧作家',
        description: '身兼《吐槽大会》和《脱口秀大会》卡司和资深喜剧编剧。个人专场脱口秀《坐在角落里的人2》已成为华语脱口秀界的标杆之作。该系列自2024年启动以来,凭借出色的创作与幽默智慧,迅速席卷国内脱口秀市场,巡演覆盖近30座城市,售票量屡创历史新高,在豆瓣等平台上获得了9.4的高分评价。并成功开启了2024年度全球巡演计划。',
        source: actor1,
    },
    {
        title: '汪德发',
        subtitle: '‘神经系’脱口秀演员',
        description: '汪德发以其独特的‘神经系脱口秀’风格骤然升起,成为观众追捧的新星。擅长刻画生活中的点点滴滴,他强大的表现力为日常小事赋予了灵魂,使普通的事物焕发了独特的生命力,让观众真正感受到“讲心坎里”了”。他的表演风格自由奔放,同时也充满了对生活的深入思考,每次演出都炸翻全场！',
        source: actor2,
    },
    {
        title: '陈晓靖',
        subtitle: '中国脱口秀演员、编剧被誉为最具有亲和力的脱口秀演员',
        description: '陈晓靖个人专场秀《菜市场的女儿》以轻松舒展的状态，从女性视角讲述自己的故事与思考。《菜市场的女儿》不仅展现了她对生活细致入微的观察,更让观众感受到一种自然、真挚的表达方式。观众评价称，听陈晓靖讲段子,仿佛在与一位毫无包袱的姐妹聊天,轻松愉悦而又充满共鸣。特别是对于女性观众而言,她的内容常常能触动内心深处的情感,引发强烈共鸣与认同。',
        source: actor3,
        
    },
    {
        title: '阿潘',
        subtitle: '单口喜剧演员',
        description: '极具特色的表演风格用最直给的方式,然后你笑着笑着安静下来,发现眼角开始有泪。个人专场演出《望子成凤》豆瓣评分9.4在国内外许多城市返场三场以上,是非常成熟和优秀的专场作品。被称为身材最好的脱口秀演员。',
        source: actor4,
    },
    {
        title: '翟佳宁',
        subtitle: '中国男脱口秀演员、泛体育脱口秀节目《开麦总冠军》冠军',
        description: '拥有丰富的线下演出经验,以直爽敢怼的硬汉风格而闻名,被称为“东北直男的守护神”。他擅长用幽默和犀利的语言剖析“钢铁直男”的内心世界,展示出独特的东北幽默。个人专场《不服不怠》一经推出便在豆瓣获得9.6的高评分,这不仅体现了观众对他作品的高度认可,也证明了他在脱口秀领域的影响力与号召力。',
        source: actor5,
      },
  ];

function Actors() {
return (
  <ul role="list" className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {files.map((file, index) => (
      <li key={index} className={`p-4 rounded-lg flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'mt-0' : '-mt-48'}`}>
        <div className="flex items-center">
          <img 
              src={file.source} 
              alt={file.title} 
              style={{ width: '194px', height: '259px', objectFit: 'cover' }} 
              className="rounded-2xl mb-4 md:mb-0 md:mr-8" 
          />
          <div className="text-left w-[300px]">
            <h3 className="text-orange-600 font-black text-3xl mb-6">{file.title}</h3>
            <h4 className="font-extrabold text-sm mb-3">{file.subtitle}</h4> 
            <p className="font-semibold text-sm -mb-12">{file.description}</p>
          </div>
        </div>
      </li>
    ))}
  </ul>
    );
}

export default Actors;