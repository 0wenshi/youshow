import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      navbar: {
        plans: 'Performance Plans',
        actors: 'Actors Introduction',
        memberships: 'Memberships Program',
        about: 'About Us',
        more: 'More',
        login: 'Login',
        logout: 'Logout',
      },
      dropdown: {
        talkshow: 'Talk Show',
        guidelines: 'Guidelines',
        rental: 'Venue Rental',
        recruitment: 'Recruitment',
      },
      actors: {
        note: "*Sorted alphabetically by name",
        annie: {
          title: "Annie",
          subtitle: "Stand-up Comedian",
          description:
            "Top Ten contestant in the Raw New Zealand Stand-up Competition 2023, New Zealand Comedy Association Newcomer of the Year 2023, Best Joke of the Year 2024, Comedy League Rising Star of the Year 2024. She has a unique perspective and a powerful narrative, especially on workplace and immigration topics. More than 100 performances, bilingual Chinese and English, easy to switch.",
        },
        bazi: {
          title: "Ba Zi",
          subtitle: "Stand-up Rising Star / Life Observer",
          description:
            "Behind the bitter tongue there is a colder soul. Good at tricky straight to, determined to do the mouth of the cow. He has experience in stand-up shows from scratch, has experience in performing in various venues, and believes that hard work pays for sweat and hard work pays for bread. Underneath the bear's appearance is a will like steel.",
        },
        charlotte: {
          title: "Charlotte",
          subtitle: "Code Enthusiast and Comedian",
          description:
            "There are many ugly words, said the self-proclaimed Cassimo. After watching the performance of teacher Ba Zi, I was inspired to go to the road of talk show from now on. Love every lovely person, create every outrageous thing.",
        },
        laohu: {
          title: "Tiger",
          subtitle: "Stand-up Rising Star",
          description:
            "Use humor and exaggeration to express daily trivia. Born in Auckland, grew up in China, the most abc Chinese, the most Chinese abc. Influenced by Kevin Hart's ridiculous and funny acting style, he began to write stand-up jokes. Let yourself go on stage, give the audience the most powerful jokes. The laughter of the audience is the greatest recognition and the fountain of motivation. Look forward to bringing Tiger humor to the world.",
        },
        qixue: {
          title: "Qi Xue",
          subtitle: "Stand-up Rising Star",
          description:
            "A natural comedian, with a humorous way to interpret the family, life, the workplace of ironic stories. In her stories, each character is a real and unique soul, a soul that expresses its life as vividly as she wants it to. Her unique and distinctive personality tries to break the social constraints on gender, occupation and self.",
        },
        summer: {
          title: "Summer",
          subtitle: "Stand-up Comedian",
          description:
            "Judges' Recommendation Award (3rd place) & Finalists - 2022 Raw Comedy Quest, Nominated - Best Newcomer - 2022 New Zealand Comedy Society Award, Nominated - Best Joke - 2023 New Zealand Comedy Society Award. I won a pizza at my first open Mic, and I had the illusion that a talk show could be a meal. After that, it was a slippery slope to sharing every detail on talk shows.",
        },
        vincent: {
          title: "Vincent",
          subtitle: "A forensic accounting expert who tells jokes",
          description:
            "From the love of making funny teachers, to the work of good financial reports into a joke. Cultural differences and workplace anecdotes are a source of inspiration. Inspired by George Carlin, he has a passion for talk shows. Join the You Show club and start your career on stage. The interaction between accounting women and straight men is presented in humorous jokes, which are deeply loved by the audience.",
        },
        wanning: {
          title: "Wan Ning",
          subtitle: "A therapist/dance therapist who makes people laugh",
          description:
            "Dance with the body and the mind, and talk with the audience with the stage. Delicate movements and vivid performances give life to ideas, use body language and humor to break the emotional barrier, and make ideas more warm and tense. Show the absurdity of life with vitality, convey emotional depth with performance, narrow the distance with the audience in laughter, and make talk show an art of 'seeing' views.",
        },
      },
      memberships: {
        note1: '*For details, please consult in-store staff.',
        note2: '**The final interpretation of the membership program is reserved by You Show Studio Limited.',
      },
      wonderful_review: {
        title: 'Wonderful Review',
        slides: {
          1: {
            title: 'A-Pan',
            subtitle: 'Stand-up Comedy Special',
            description: '"Be Proud of Yourself"',
          },
          2: {
            title: 'Chen Xiaojing',
            subtitle: 'Comedy Special',
            description: '"Daughter of the Market"',
          },
          3: {
            title: 'Liang Haiyuan',
            subtitle: 'Comedy Special',
            description: '"The Man in the Corner 2"',
          },
          4: {
            title: 'You Show All-Star Lineup',
            subtitle: 'Annual Comedy Show',
            description: 'Liu Renchen, Yu Xiangyu, Lao Wang, Caicai, Echo',
          },
          5: {
            title: 'Zhai Jianing',
            subtitle: 'Stand-up Comedy Featured Show',
            description: '"Not Obedient and Resentful"',
          },
          6: {
            title: 'Zhang Haozhe',
            subtitle: 'Stand-up Comedy Special',
            description: '"The Wandering Plan"',
          },
          7: {
            title: 'Hei Deng',
            subtitle: 'Stand-up Comedy Special',
            description: '"Unseen"',
          },
        },
      },
      contact_us: {
        customer_service: 'Customer Service',
        wechat: 'WeChat / Public Account:',
        email: 'Email:',
      },
    },
  },
  zh: {
    translation: {
      navbar: {
        plans: '演出计划',
        actors: '演员介绍',
        memberships: '会员计划',
        about: '关于我们',
        more: '更多',
        login: '登录',
        logout: '退出',
      },
      dropdown: {
        talkshow: '脱口秀',
        guidelines: '观演须知',
        rental: '场地租赁',
        recruitment: '新人招募',
      },
      actors: {
        note: "*按照名字首字母顺序排列",
        annie: {
          title: "Annie",
          subtitle: "脱口秀演员",
          description:
            "2023 年新西兰 Raw 单口喜剧大赛十强选手，2023 新西兰喜剧协会年度最佳新人提名，2024 年度最佳笑话提名，2024 喜剧联盟年度新星奖。视角独特，梗新颖有力，尤为擅长职场和移民话题。演出场次超过百场，中英文双语，切换自如。",
        },
        bazi: {
          title: "巴子老师",
          subtitle: "脱口秀新星/生活小观察家",
          description:
            "毒舌的背后却有一副更冷漠的灵魂。善于刁钻直给，立志做牛马的嘴替。从无到有的脱口秀经验，拥有各种不同场地的演出经验，坚信努力能换来汗水，勤奋换来大饼，熊的外表下是钢铁一般的意志。",
        },
        charlotte: {
          title: "Charlotte",
          subtitle: "热爱玩弄语言的代码民工",
          description:
            "人丑话又多，自称卡西莫说。之前看了巴子老师的演出，受了启发从此走向了脱口秀这条路。爱每一个可爱的人，创飞每个离谱的事。",
        },
        laohu: {
          title: "老虎",
          subtitle: "脱口秀新星",
          description:
            "用幽默与夸张的语言来表达日常琐事。出生在奥克兰，在中国长大，最 abc 的中国人，最中国人的 abc。受 Kevin Hart 无厘头又好笑的表演风格影响，开始写脱口秀段子。舞台上放飞自我，给观众们带来最劲爆的段子。观众的笑声是最大的认可，也是动力之泉。期待“虎式幽默”带到全球各地。",
        },
        qixue: {
          title: "齐雪",
          subtitle: "脱口秀新星",
          description:
            "天生的段子手，以诙谐幽默的方式演绎家庭，生活，职场发生的啼笑皆非的故事。在她的故事里，每一个角色都是真实且独一无二的灵魂，正如她自己所期待的那样，鲜活的表达自己生命的灵魂。她独特鲜明的个性尝试打破社会对性别，职业，自我的束缚。",
        },
        summer: {
          title: "Summer",
          subtitle: "脱口秀演员",
          description:
            "评委推荐奖”（第三名）& 决赛选手 - 2022 Raw Comedy Quest, 提名 - 最佳新人 - 2022 新西兰喜剧协会奖, 提名 - 最佳笑话 - 2023 新西兰喜剧协会奖。 第一次参加开放麦就赢得了一份披萨，产生了脱口秀可以当饭吃的幻觉。之后，就走上了在脱口秀上事无巨细分享鸡毛蒜皮的不归路。",
        },
        vincent: {
          title: "Vincent",
          subtitle: "讲笑话的法务会计专家",
          description:
            "从爱给老师捧哏开始，到工作中善于将财务报告转化为笑点。文化差异和职场趣事，是创作的灵感源泉。受 George Carlin 启发，对脱口秀充满热情。加入 You Show 俱乐部，开启舞台生涯，将会计职场女性与直男的互动冲突，以诙谐段子呈现，深受观众喜爱。",
        },
        wanning: {
          title: "婉宁",
          subtitle: "会逗大家笑的心理咨询师/舞动治疗师",
          description:
            "用肢体与心灵共舞，用舞台与观众对话。通过细腻动作和生动表演赋予观点生命力，用身体语言和幽默打破情感隔阂，让观点更具温度与张力。以活力展现生活荒诞，用表演传递情感深意，在笑声中拉近与观众的距离，让脱口秀成为“看见”观点的艺术。",
        },
      },
      memberships: {
        note1: '*详情请咨询店内工作人员',
        note2: '**会员计划最终解释权由 You Show Studio Limited 所有',
      },
      wonderful_review: {
        title: '精彩回顾',
        slides: {
          1: {
            title: 'A-Pan',
            subtitle: '单口喜剧个人专场',
            description: '《望子成风》',
          },
          2: {
            title: '陈晓靖',
            subtitle: '脱口秀专场',
            description: '《菜市场的女儿》',
          },
          3: {
            title: '梁海源',
            subtitle: '脱口秀专场',
            description: '《坐在角落的人2》',
          },
          4: {
            title: 'You Show 首场全明星阵容',
            subtitle: '年度大咖秀',
            description: '刘仁铖,于祥宇,大老王,菜菜,Echo',
          },
          5: {
            title: '翟佳宁',
            subtitle: '单口喜剧主打秀',
            description: '《不服不忿》',
          },
          6: {
            title: '张灏喆',
            subtitle: '单口喜剧专场',
            description: '《流浪计划》',
          },
          7: {
            title: '黑灯',
            subtitle: '单口喜剧专场',
            description: '《君不见》',
          },
        },
      },
      contact_us: {
        customer_service: '在线客服',
        wechat: '微信/公众号:',
        email: '邮箱:',
      },
    },
  },
};

i18n
  .use(LanguageDetector) // 自动检测用户语言
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en', // 默认语言
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
