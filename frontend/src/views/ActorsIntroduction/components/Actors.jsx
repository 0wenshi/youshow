import React from 'react';

import actor1 from '/images/actors/Annie.jpg';
import actor2 from '/images/actors/Bazi.jpg';
import actor3 from '/images/actors/Charlotte.jpg';
import actor4 from '/images/actors/Laohu.jpg';
import actor5 from '/images/actors/Qixue.jpg';
import actor6 from '/images/actors/Summer.jpg';
import actor7 from '/images/actors/Vincent.jpg';
import actor8 from '/images/actors/Wanning.jpg';

const files = [
  {
    title: 'Annie',
    subtitle: '脱口秀演员',
    description:
      '2023 年新西兰 Raw 单口喜剧大赛十强选手，2023 新西兰喜剧协会年度最佳新人提名，2024 年度最佳笑话提名，2024 喜剧联盟年度新星奖。视角独特，梗新颖有力，尤为擅长职场和移民话题。演出场次超过百场，中英文双语，切换自如。',
    source: actor1,
  },
  {
    title: '巴子老师',
    subtitle: '脱口秀新星/生活小观察家',
    description:
      '毒舌的背后却有一副更冷漠的灵魂。善于刁钻直给，立志做牛马的嘴替。从无到有的脱口秀经验，拥有各种不同场地的演出经验，坚信努力能换来汗水，勤奋换来大饼，熊的外表下是钢铁一般的意志。',
    source: actor2,
  },
  {
    title: 'Charlotte',
    subtitle: '热爱玩弄语言的代码民工',
    description:
      '人丑话又多，自称卡西莫说。之前看了巴子老师的演出，受了启发从此走向了脱口秀这条路。爱每一个可爱的人，创飞每个离谱的事。',
    source: actor3,
  },
  {
    title: '老虎',
    subtitle: '脱口秀新星',
    description:
      '用幽默与夸张的语言来表达日常琐事。出生在奥克兰，在中国长大，最 abc 的中国人，最中国人的 abc。受 Kevin Hart 无厘头又好笑的表演风格影响，开始写脱口秀段子。舞台上放飞自我，给观众们带来最劲爆的段子。观众的笑声是最大的认可，也是动力之泉。期待“虎式幽默”带到全球各地。',
    source: actor4,
  },
  {
    title: '齐雪',
    subtitle: '脱口秀新星',
    description:
      '天生的段子手，以诙谐幽默的方式演绎家庭，生活，职场发生的啼笑皆非的故事。在她的故事里，每一个角色都是真实且独一无二的灵魂，正如她自己所期待的那样，鲜活的表达自己生命的灵魂。她独特鲜明的个性尝试打破社会对性别，职业，自我的束缚。',
    source: actor5,
  },
  {
    title: 'Summer',
    subtitle: '脱口秀演员',
    description:
      '评委推荐奖”（第三名）& 决赛选手 - 2022 Raw Comedy Quest, 提名 - 最佳新人 - 2022 新西兰喜剧协会奖, 提名 - 最佳笑话 - 2023 新西兰喜剧协会奖。 第一次参加开放麦就赢得了一份披萨，产生了脱口秀可以当饭吃的幻觉。之后，就走上了在脱口秀上事无巨细分享鸡毛蒜皮的不归路。',
    source: actor6,
  },
  {
    title: 'Vincent',
    subtitle: '讲笑话的法务会计专家',
    description:
      '从爱给老师捧哏开始，到工作中善于将财务报告转化为笑点。文化差异和职场趣事，是创作的灵感源泉。受 George Carlin 启发，对脱口秀充满热情。加入 You Show 俱乐部，开启舞台生涯，将会计职场女性与直男的互动冲突，以诙谐段子呈现，深受观众喜爱。',
    source: actor7,
  },
  {
    title: '婉宁',
    subtitle: '会逗大家笑的心理咨询师/舞动治疗师',
    description:
      '用肢体与心灵共舞，用舞台与观众对话。通过细腻动作和生动表演赋予观点生命力，用身体语言和幽默打破情感隔阂，让观点更具温度与张力。以活力展现生活荒诞，用表演传递情感深意，在笑声中拉近与观众的距离，让脱口秀成为“看见”观点的艺术。',
    source: actor8,
  },
];

function Actors() {
  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10">
      {files.map((file, index) => (
        <div
          key={index}
          className="p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col sm:flex-row items-center"
        >
          {/* Image Section */}
          <img
            src={file.source}
            alt={file.title}
            className="w-52 h-80 object-cover rounded-lg"
          />
          {/* Text Section */}
          <div className="sm:ml-8 mt-4 sm:mt-0 text-center sm:text-left">
            <h2 className="text-orange-500 text-3xl font-black mb-4">
              {file.title}
            </h2>
            <h3 className="text-black text-lg font-semibold mb-4">
              {file.subtitle}
            </h3>
            <p className="text-black text-base font-sansregular">
              {file.description}
            </p>
          </div>
        </div>
      ))}
      <div className="mt-5 pt-5">
        <p className="text-left text-xs font-bold text-gray-800">
          *按照名字首字母顺序排列
        </p>
      </div>
    </div>
  );
}

export default Actors;
