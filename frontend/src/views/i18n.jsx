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
        note: '*Sorted alphabetically by name',
        annie: {
          title: 'Annie',
          subtitle: 'Stand-up Comedian',
          description:
            'Top Ten contestant in the Raw New Zealand Stand-up Competition 2023, New Zealand Comedy Association Newcomer of the Year 2023, Best Joke of the Year 2024, Comedy League Rising Star of the Year 2024. She has a unique perspective and a powerful narrative, especially on workplace and immigration topics. More than 100 performances, bilingual Chinese and English, easy to switch.',
        },
        bazi: {
          title: 'Ba Zi',
          subtitle: 'Stand-up Rising Star / Life Observer',
          description:
            "Behind the bitter tongue there is a colder soul. Good at tricky straight to, determined to do the mouth of the cow. He has experience in stand-up shows from scratch, has experience in performing in various venues, and believes that hard work pays for sweat and hard work pays for bread. Underneath the bear's appearance is a will like steel.",
        },
        charlotte: {
          title: 'Charlotte',
          subtitle: 'Code Enthusiast and Comedian',
          description:
            'There are many ugly words, said the self-proclaimed Cassimo. After watching the performance of teacher Ba Zi, I was inspired to go to the road of talk show from now on. Love every lovely person, create every outrageous thing.',
        },
        laohu: {
          title: 'Tiger',
          subtitle: 'Stand-up Rising Star',
          description:
            "Use humor and exaggeration to express daily trivia. Born in Auckland, grew up in China, the most abc Chinese, the most Chinese abc. Influenced by Kevin Hart's ridiculous and funny acting style, he began to write stand-up jokes. Let yourself go on stage, give the audience the most powerful jokes. The laughter of the audience is the greatest recognition and the fountain of motivation. Look forward to bringing Tiger humor to the world.",
        },
        qixue: {
          title: 'Qi Xue',
          subtitle: 'Stand-up Rising Star',
          description:
            'A natural comedian, with a humorous way to interpret the family, life, the workplace of ironic stories. In her stories, each character is a real and unique soul, a soul that expresses its life as vividly as she wants it to. Her unique and distinctive personality tries to break the social constraints on gender, occupation and self.',
        },
        summer: {
          title: 'Summer',
          subtitle: 'Stand-up Comedian',
          description:
            "Judges' Recommendation Award (3rd place) & Finalists - 2022 Raw Comedy Quest, Nominated - Best Newcomer - 2022 New Zealand Comedy Society Award, Nominated - Best Joke - 2023 New Zealand Comedy Society Award. I won a pizza at my first open Mic, and I had the illusion that a talk show could be a meal. After that, it was a slippery slope to sharing every detail on talk shows.",
        },
        vincent: {
          title: 'Vincent',
          subtitle: 'A forensic accounting expert who tells jokes',
          description:
            'From the love of making funny teachers, to the work of good financial reports into a joke. Cultural differences and workplace anecdotes are a source of inspiration. Inspired by George Carlin, he has a passion for talk shows. Join the You Show club and start your career on stage. The interaction between accounting women and straight men is presented in humorous jokes, which are deeply loved by the audience.',
        },
        wanning: {
          title: 'Wan Ning',
          subtitle: 'A therapist/dance therapist who makes people laugh',
          description:
            "Dance with the body and the mind, and talk with the audience with the stage. Delicate movements and vivid performances give life to ideas, use body language and humor to break the emotional barrier, and make ideas more warm and tense. Show the absurdity of life with vitality, convey emotional depth with performance, narrow the distance with the audience in laughter, and make talk show an art of 'seeing' views.",
        },
      },
      memberships: {
        note1: '*For details, please consult in-store staff.',
        note2:
          '**The final interpretation of the membership program is reserved by You Show Studio Limited.',
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
      about_us: {
        description1:
          "is New Zealand's first Chinese stand-up comedy club, established in 2022. Despite being a young organization, we have successfully hosted over 50 performances of various scales. In addition to Chinese shows, we also operate English stand-up comedy, supporting a wide Asian actor and audience base. We have rapidly established a unique brand image and extensive reputation in New Zealand's comedy scene.",
        description2:
          "Our director is a board member of the New Zealand Comedy Association, with extensive industry experience and connections. This not only ensures the quality of our programs but also enables us to have significant influence and a prominent position in New Zealand's comedy industry.",
      },
      introduction: {
        title1: 'How are jokes born?',
        description1:
          'Many people may misunderstand and think that stand-up comedians should frequently update their jokes. In fact, joke creation requires repeated polishing and testing.',
        subtitle1:
          'Here is the process of creating a complete commercial performance joke:',
        steps: [
          'The comedian extracts material from daily life and writes the initial joke content.',
          "The new joke is performed at open mic sessions to evaluate its effect through the audience's reaction.",
          'Keep the parts with good audience reactions, remove or modify less exciting content, and test again at open mic.',
          'After multiple tests and adjustments, a mature joke is ready for commercial performances.',
        ],
        description2:
          'Stand-up comedy demands originality, making content creation the biggest challenge for comedians. The birth of a great joke may require months of effort and numerous open mic sessions, but this persistence leads to the laughter-inducing comedy content you enjoy.',
        title2: 'About Stand-up Comedy',
        description3:
          'Stand-up comedy is an art form where individuals express personal observations and viewpoints humorously. It primarily features solo performances with minimal stage equipment (such as a microphone and lighting). Performers convey their deep thoughts on life, society, and personal experiences in a witty manner, evoking audience resonance and laughter.',
        subtitle2: 'Forms of Stand-up Comedy',
        description4:
          'Based on the scale and nature of the performance, stand-up comedy is usually divided into the following forms:',
        formats: [
          {
            title: '1. Open Mic',
            description:
              'Open mic is where comedians practice and test new jokes. Experienced comedians experiment with and refine their new jokes, while newcomers also take the stage. It’s a kind of “blind box” performance.',
          },
          {
            title: '2. Commercial Shows',
            description:
              'Commercial shows involve multiple comedians performing for about 10-15 minutes each. These performances offer a variety of styles, allowing the audience to experience different comedic approaches in one session.',
          },
          {
            title: '3. Specials/Headliner Shows',
            description:
              'A special is a solo performance by one comedian, typically lasting around 60 minutes and centered on a core theme. A headliner show is a shorter performance (about 45 minutes) but equally requires thorough preparation and creativity.',
          },
        ],
      },
      performanceNotice: {
        title: 'Performance Notice',
        subtitle:
          'To ensure an enjoyable experience for everyone, please pay attention to the following:',
        rules: [
          {
            image: '/images/tomato_wine.png',
            alt: 'Bar Icon',
            text: 'The bar will be open <span>30 minutes</span> before the performance and during intermission. <span>The bar will be closed</span> during the performance to avoid disrupting the experience.',
          },
          {
            image: '/images/tomato_accompany.png',
            alt: 'Accompany Icon',
            text: 'Some performances are recommended for audiences <span>aged 16 and above.</span> Minors must be accompanied by parents or guardians.',
          },
          {
            image: '/images/tomato_no_recording.png',
            alt: 'No Recording Icon',
            text: '<span>No recording, video or live broadcast is allowed</span> during the performance, but you are welcome to take photos. Please <span>turn off the flash</span> to avoid disturbing others.',
          },
          {
            image: '/images/tomato_mute.png',
            alt: 'Mute Icon',
            text: 'To avoid interfering with the performance, please turn your phone to <span>mute</span> or <span>vibrate</span> mode.',
          },
        ],
        remarks: [
          'Performance tickets are <span>non-refundable</span> and non-reschedulable after purchase.',
          'Admission starts <span>30 minutes</span> before the performance. Please arrive on time and take your assigned seats.',
          '<span>Special shows</span> do not have intermissions. For <span>open mic</span> performances, there will be a <span>10-minute</span> break.',
          'Please <span>respect</span> the performers and avoid interruptions. Relax and enjoy the show!',
        ],
      },
      rentalDetail: {
        title: 'Venue Rental',
        address: {
          title: 'Address',
          name: 'Am2Pm',
          location: '7 Corinthian Drive, Albany, Auckland 0632',
        },
        details:
          'Our venue is also perfect for various indoor activities such as birthday parties, corporate events, holiday parties, and private gatherings. We provide <span>flexible and diverse</span> spatial arrangements and professional on-site support, making us your ideal event venue choice.',
        whyUsTitle: 'Why Choose Us?',
        whyUs:
          'We can flexibly adjust seating, lighting, and stage settings according to event needs. With high-quality sound and lighting systems and a well-stocked bar, we provide <span>comprehensive support</span> for your event. Located in the "North Shore Chinese Universe Center," our venue offers <span>convenient transportation</span>, ample parking, and complete surrounding facilities. Our team assists you in arranging event details, allowing you to be worry-free.',
        contact: {
          title: 'Contact Us',
          info: 'To learn more about the venue or to make a reservation, please contact:',
        },
      },
      recruitment: {
        title: 'Recruitment',
        introduction:
          'Are you passionate about stand-up comedy?<br />Do you dream of standing on stage, using your humor to connect with audiences and spread joy?<br />Now, <span>Youshow</span> Comedy Club opens its doors to dreamers like you. The next "King of Stand-Up Comedy" could be you!',
        whatWeNeed: {
          title: 'What Are We Looking For?',
          description:
            'Observant and thoughtful about life, loves sharing stories and perspectives;<br />Not afraid of trying new things, willing to face stage challenges;<br />No experience needed, just a love for comedy and the courage to take the first step.',
        },
        growth: {
          title: 'How Do Newcomers Grow?',
          description:
            'Open mic – the starting point for every stand-up comedian.<br />Whether you are trying for the first time or refining new material, open mics provide valuable practical opportunities.<br />We have a group of like-minded peers to share experiences and encourage growth together.<br />Regular script reading sessions and workshops with industry experts to hone your skills.',
        },
        benefits: {
          title: 'What Will You Gain by Joining Us?',
          description:
            'A stage to showcase yourself;<br />A group of humorous and interesting friends;<br />The sense of achievement in turning ideas into laughter;<br />Even opportunities to perform commercially and become a professional comedian!',
        },
        howToJoin: {
          title: 'How to Join Us?',
          contact: 'Contact us: <a>youshow.nz@gmail.com</a>',
          info: 'We regularly host newcomer orientation sessions and open mics. Everyone passionate about comedy is welcome to join!',
        },
        footer:
          'Youshow Comedy Club looks forward to turning life’s moments into stage laughter with you!',
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
        note: '*按照名字首字母顺序排列',
        annie: {
          title: 'Annie',
          subtitle: '脱口秀演员',
          description:
            '2023 年新西兰 Raw 单口喜剧大赛十强选手，2023 新西兰喜剧协会年度最佳新人提名，2024 年度最佳笑话提名，2024 喜剧联盟年度新星奖。视角独特，梗新颖有力，尤为擅长职场和移民话题。演出场次超过百场，中英文双语，切换自如。',
        },
        bazi: {
          title: '巴子老师',
          subtitle: '脱口秀新星/生活小观察家',
          description:
            '毒舌的背后却有一副更冷漠的灵魂。善于刁钻直给，立志做牛马的嘴替。从无到有的脱口秀经验，拥有各种不同场地的演出经验，坚信努力能换来汗水，勤奋换来大饼，熊的外表下是钢铁一般的意志。',
        },
        charlotte: {
          title: 'Charlotte',
          subtitle: '热爱玩弄语言的代码民工',
          description:
            '人丑话又多，自称卡西莫说。之前看了巴子老师的演出，受了启发从此走向了脱口秀这条路。爱每一个可爱的人，创飞每个离谱的事。',
        },
        laohu: {
          title: '老虎',
          subtitle: '脱口秀新星',
          description:
            '用幽默与夸张的语言来表达日常琐事。出生在奥克兰，在中国长大，最 abc 的中国人，最中国人的 abc。受 Kevin Hart 无厘头又好笑的表演风格影响，开始写脱口秀段子。舞台上放飞自我，给观众们带来最劲爆的段子。观众的笑声是最大的认可，也是动力之泉。期待“虎式幽默”带到全球各地。',
        },
        qixue: {
          title: '齐雪',
          subtitle: '脱口秀新星',
          description:
            '天生的段子手，以诙谐幽默的方式演绎家庭，生活，职场发生的啼笑皆非的故事。在她的故事里，每一个角色都是真实且独一无二的灵魂，正如她自己所期待的那样，鲜活的表达自己生命的灵魂。她独特鲜明的个性尝试打破社会对性别，职业，自我的束缚。',
        },
        summer: {
          title: 'Summer',
          subtitle: '脱口秀演员',
          description:
            '评委推荐奖”（第三名）& 决赛选手 - 2022 Raw Comedy Quest, 提名 - 最佳新人 - 2022 新西兰喜剧协会奖, 提名 - 最佳笑话 - 2023 新西兰喜剧协会奖。 第一次参加开放麦就赢得了一份披萨，产生了脱口秀可以当饭吃的幻觉。之后，就走上了在脱口秀上事无巨细分享鸡毛蒜皮的不归路。',
        },
        vincent: {
          title: 'Vincent',
          subtitle: '讲笑话的法务会计专家',
          description:
            '从爱给老师捧哏开始，到工作中善于将财务报告转化为笑点。文化差异和职场趣事，是创作的灵感源泉。受 George Carlin 启发，对脱口秀充满热情。加入 You Show 俱乐部，开启舞台生涯，将会计职场女性与直男的互动冲突，以诙谐段子呈现，深受观众喜爱。',
        },
        wanning: {
          title: '婉宁',
          subtitle: '会逗大家笑的心理咨询师/舞动治疗师',
          description:
            '用肢体与心灵共舞，用舞台与观众对话。通过细腻动作和生动表演赋予观点生命力，用身体语言和幽默打破情感隔阂，让观点更具温度与张力。以活力展现生活荒诞，用表演传递情感深意，在笑声中拉近与观众的距离，让脱口秀成为“看见”观点的艺术。',
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
      about_us: {
        description1:
          '是新西兰首家运营中文脱口秀项目的华人脱口秀俱乐部，成立于 2022 年。尽管成立时间不长，但我们已经成功举办了超过 50 场大大小小的演出。除中文节目之外，我们还运营英文脱口秀，以支持广泛的亚裔演员及观众群体，并迅速在新西兰的喜剧界树立了独特的品牌形象和广泛的知名度。',
        description2:
          '我们的主理人是新西兰喜剧协会的董事之一，具备丰富的行业经验和广泛的人脉资源。这不仅为我们的节目质量提供了保障，也使我们能够在新西兰的喜剧行业中拥有重要的地位和影响力。',
      },
      introduction: {
        title1: '段子是如何诞生的？',
        description1:
          '很多人可能会误解，认为脱口秀演员应该经常更新段子。但实际上，段子创作需要经过反复打磨和测试。',
        subtitle1: '以下是一个完整商演段子的诞生过程：',
        steps: [
          '演员从日常生活中提取素材，写下初步的段子内容。',
          '将新段子拿到开放麦场合演出，通过观众的现场反应评估效果。',
          '保留观众反应良好的部分，删减或修改不够精彩的内容，再次在开放麦中测试。',
          '经过多次测试和调整，最终打磨出一个成熟的段子，可以用于商业演出。',
        ],
        description2:
          '脱口秀是一门要求原创的艺术，因此对于演员来说，内容创作是最大的难关。一个优秀段子的诞生可能需要演员投入数月时间，经历十几场开放麦来反复改进，但正是这种坚持，造就了让你捧腹大笑的喜剧内容。',
        title2: '关于脱口秀',
        description3:
          '脱口秀,原名单口喜剧(stand-up comedy),是一种通过幽默语言表达个人观察和观点的艺术形式,通常以单人表演为主,借助简约的舞台设备（如麦克风和灯光）进行呈现。表演者通过对生活、社会及个人经历的深刻思考,用风趣的语言将其表达出来,引发观众共鸣和笑声。',
        subtitle2: '脱口秀的演出形式',
        description4:
          '根据表演规模和性质的不同，脱口秀通常分为以下三种演出形式：',
        formats: [
          {
            title: '1. 开放麦(Open Mic)',
            description:
              '开放麦是脱口秀演员练习和试验新段子的地方。老演员会在开放麦试验和打磨新段子，同时也会有新演员的登台。可以说，开放麦是某种意义上的“盲盒”演出。',
          },
          {
            title: '2. 商演拼盘(Commercial Shows)',
            description:
              '商演拼盘是由多位脱口秀演员联合演出的形式,每位演员表演10～15分钟左右。拼盘演出风格多样,可以让观众一次性体验不同演员的喜剧风格。',
          },
          {
            title: '3. 专场/主打秀',
            description:
              '专场是一位演员独立完成的个人演出,通常时长为60分钟左右,内容围绕一个核心主题展开。主打秀则是更短时长的表演,约45分钟左右,但同样需要经过充分的创作与打磨。这种形式要求演员具备深厚的创作能力和舞台表现力。',
          },
        ],
      },
      performanceNotice: {
        title: '观演须知',
        subtitle:
          '为了确保每位观众和演员都能享受一场愉快的脱口秀体验，请注意以下事项：',
        rules: [
          {
            image: '/images/tomato_wine.png',
            alt: '酒水图标',
            text: '吧台将在演出前<span>30分钟</span>以及中场休息时提供酒水售卖服务，演出期间将<span>关闭吧台</span>以免影响观演体验。',
          },
          {
            image: '/images/tomato_accompany.png',
            alt: '陪同图标',
            text: '部分演出建议<span>16岁</span>以上观众观看，未成年人需家长陪同。',
          },
          {
            image: '/images/tomato_no_recording.png',
            alt: '禁止录像图标',
            text: '演出期间<span>禁止</span>录音、录像或现场直播， 但欢迎拍照留念，请<span>关闭闪光灯</span>以免影响他人。',
          },
          {
            image: '/images/tomato_mute.png',
            alt: '静音图标',
            text: '为了避免干扰表演，请将手机调至<span>静音</span>或<span>振动</span>模式。',
          },
        ],
        remarks: [
          '演出票非普通商品，购票后<span>不支持</span>退款，改期，敬请谅解。',
          '演出开场前<span>半小时</span>开始检票，请提前到场，按座位号入座。',
          '<span>专场</span>演出<span>不设</span>中场休息，<span>开放麦</span>演出期间有<span>十分钟</span>的中场休息。',
          '请<span>尊重</span>演员的表演，不随意打断，放松心情，尽情享受快乐。',
        ],
      },
      rentalDetail: {
        title: '场地租赁',
        address: {
          title: '地址',
          name: 'Am2Pm',
          location: '7 Corinthian Drive, Albany, Auckland 0632',
        },
        details:
          '我们俱乐部同样也适合举办各种类型的室内活动，例如生日派对，公司活动，节日派对，私人聚会等。 我们提供<span>灵活多样</span>的空间布置和专业的现场支持，是您理想的活动场地选择。',
        whyUsTitle: '为什么选择我们？',
        whyUs:
          '我们可以根据活动需求灵活调整座位、灯光和舞台设置。高品质音响、灯光系统等专业设备、酒水吧<span>一应俱全</span>，为您的活动提供保障。 场地位于“北岸华人宇宙中心”，<span>交通便捷</span>，停车位充足，周边配套设施完善。我们团队会协助您安排活动细节，让您全程无忧。',
        contact: {
          title: '联系我们',
          info: '想了解更多场地信息或预订，请联系：',
        },
      },
      recruitment: {
        title: '新人招募',
        introduction:
          '你是否对脱口秀充满热情<br />你是否也曾想站在舞台上，用自己的语言和幽默感染观众、传递快乐？<br />现在，<span>Youshow</span> 脱口秀俱乐部为每一位有梦想的你敞开大门，下一个“脱口秀大王”就是你！',
        whatWeNeed: {
          title: '我们需要怎样的你?',
          description:
            '对生活充满观察和思考，喜欢分享自己的故事和观点；<br />不怕尝试新事物，愿意面对舞台挑战；<br />无需经验，只需热爱脱口秀，敢于迈出第一步。',
        },
        growth: {
          title: '新人如何成长?',
          description:
            '开放麦——这是每位脱口秀新演员的起点。<br />无论你是初次尝试还是锻炼新段子，开放麦为你提供了宝贵的实战机会。<br />我们有一群志同道合的伙伴，与你分享经验、互相鼓励，一起成长。<br />定期组织读稿会，联合国内大咖进行表演技巧的培训，帮助你不断提升。',
        },
        benefits: {
          title: '加入我们，你能收获什么？',
          description:
            '一个展示自我的舞台；<br />一群幽默且有趣的朋友；<br />将你的想法化为笑声的成就感；<br />甚至还有机会参与商演，成为一名真正的脱口秀演员！',
        },
        howToJoin: {
          title: '如何加入我们？',
          contact: '联系我们: <a>youshow.nz@gmail.com</a>',
          info: '定期举办新人说明会和开放麦，欢迎每一位热爱喜剧的朋友报名！',
        },
        footer:
          'Youshow 脱口秀俱乐部期待与你一起，把生活中的点滴变成舞台上的笑声！',
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
