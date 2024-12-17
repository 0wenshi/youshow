import React from 'react';

function Introduction() {
  return (
    <div id="root">
      <div className="bg-transparent p-7 font-sans flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 space-y-4 flex flex-col items-center my-5">
          <div>
            <img
              src="/images/about_standup_comedy_1.jpg"
              alt="Top image"
              className="w-[300px] h-[300px] object-cover rounded-[35px]"
            ></img>
          </div>
          <div className="w-[300px] text-left">
            <h2 className="text-xl font-bold mb-4">段子是如何诞生的？</h2>
            <p className="leading-relaxed">
              很多人可能会误解，认为脱口秀演员应该经常更新段子。但实际上，段子创作需要经过反复打磨和测试。
            </p>
            <p className="mt-4 leading-relaxed">
              <strong>以下是一个完整商演段子的诞生过程：</strong>
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>演员从日常生活中提取素材，写下初步的段子内容。</li>
              <li>将新段子拿到开放麦场合演出，通过观众的现场反应评估效果。</li>
              <li>
                保留观众反应良好的部分，删减或修改不够精彩的内容，再次在开放麦中测试。
              </li>
              <li>
                经过多次测试和调整，最终打磨出一个成熟的段子，可以用于商业演出。
              </li>
            </ul>
            <p className="mt-4 leading-relaxed">
              脱口秀是一门要求原创的艺术，因此对于演员来说，内容创作是最大的难关。一个优秀段子的诞生可能需要演员投入数月时间，经历十几场开放麦来反复改进，但正是这种坚持，造就了让你捧腹大笑的喜剧内容。
            </p>
          </div>
          <div>
            <img
              src="/images/about_standup_comedy_3.jpg"
              alt="Bottom image"
              className="w-[300px] h-[200px] object-cover rounded-[35px]"
            ></img>
          </div>
        </div>
        <div className="lg:w-1/2 space-y-4 flex flex-col items-center my-5">
          <div className="w-[300px]">
            <h2 className="text-2xl font-bold mb-4">关于脱口秀</h2>
            <p className="leading-relaxed">
              脱口秀,原名单口喜剧(stand-up
              comedy),是一种通过幽默语言表达个人观察和观点的艺术形式,通常以单人表演为主,借助简约的舞台设备（如麦克风和灯光）进行呈现。表演者通过对生活、社会及个人经历的深刻思考,用风趣的语言将其表达出来,引发观众共鸣和笑声。
            </p>
          </div>
          <div>
            <img
              src="/images/about_standup_comedy_2.jpg"
              alt="Side image"
              className="w-[300px] h-[200px] object-cover rounded-[35px]"
            ></img>
          </div>
          <div className="w-[300px]">
            <h2 className="text-xl font-semibold mb-4">脱口秀的演出形式</h2>
            <p className="leading-relaxed">
              根据表演规模和性质的不同，脱口秀通常分为以下三种演出形式：
            </p>
            <ul className="list-none ml-0 mt-4 space-y-4">
              <li>
                <p className="font-semibold">1. 开放麦(Open Mic)</p>
                <p className="leading-relaxed">
                  开放麦是脱口秀演员练习和试验新段子的地方。老演员会在开放麦试验和打磨新段子，同时也会有新演员的登台。可以说，开放麦是某种意义上的“盲盒”演出。
                </p>
              </li>
              <li>
                <p className="font-semibold">2. 商演拼盘(Commercial Shows)</p>
                <p className="leading-relaxed">
                  商演拼盘是由多位脱口秀演员联合演出的形式,每位演员表演10～15分钟左右。拼盘演出风格多样,可以让观众一次性体验不同演员的喜剧风格。
                </p>
              </li>
              <li>
                <p className="font-semibold">3. 专场/主打秀</p>
                <p className="leading-relaxed">
                  专场是一位演员独立完成的个人演出,通常时长为60分钟左右,内容围绕一个核心主题展开。主打秀则是更短时长的表演,约45分钟左右,但同样需要经过充分的创作与打磨。这种形式要求演员具备深厚的创作能力和舞台表现力。
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <footer className="h-14"></footer>
    </div>
  );
}

export default Introduction;
