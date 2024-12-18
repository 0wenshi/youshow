import React from 'react';

function RecruitmentDetail() {
  return (
    <div className="font-sans text-black p-6 flex flex-col items-center">
      <div className="text-center font-bold text-2xl mb-8">新人招募</div>
      <div className="space-y-8 text-center w-4/5 text-sm">
        <section>
          <p>
            你是否对脱口秀充满热情
            <br />
            你是否也曾想站在舞台上，用自己的语言和幽默感染观众、传递快乐？
            <br />
            现在，
            <span className="text-red-500 font-bold"> Youshow </span>
            脱口秀俱乐部为每一位有梦想的你敞开大门，下一个“脱口秀大王”就是你！
          </p>
        </section>
        <section>
          <div className="font-bold">我们需要怎样的你?</div>
          <p>
            对生活充满观察和思考，喜欢分享自己的故事和观点；
            <br />
            不怕尝试新事物，愿意面对舞台挑战；
            <br />
            无需经验，只需热爱脱口秀，敢于迈出第一步。
          </p>
        </section>
        <section>
          <div className="font-bold">新人如何成长?</div>
          <p>
            开放麦——这是每位脱口秀新演员的起点。
            无论你是初次尝试还是锻炼新段子，开放麦为你提供了宝贵的实战机会。
            <br />
            我们有一群志同道合的伙伴，与你分享经验、互相鼓励，一起成长。
            <br />
            定期组织读稿会，联合国内大咖进行表演技巧的培训，帮助你不断提升。
          </p>
        </section>
        <section>
          <div className="font-bold">加入我们，你能收获什么？</div>
          <p>
            一个展示自我的舞台；
            <br />
            一群幽默且有趣的朋友；
            <br />
            将你的想法化为笑声的成就感；
            <br />
            甚至还有机会参与商演，成为一名真正的脱口秀演员！
          </p>
        </section>
        <section>
          <div className="font-bold">如何加入我们？</div>
          <p>
            联系我们:{' '}
            <a
              href="mailto:youshow.nz@gmail.com"
              className="text-blue-500 underline"
            >
              youshow.nz@gmail.com
            </a>
          </p>
          <p>定期举办新人说明会和开放麦，欢迎每一位热爱喜剧的朋友报名！</p>
        </section>
      </div>
      <div className="text-center mt-8 font-bold text-sm">
        Youshow 脱口秀俱乐部期待与你一起，把生活中的点滴变成舞台上的笑声！
      </div>
    </div>
  );
}

export default RecruitmentDetail;
