import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import splitbee from '@splitbee/web'
import './style/main.scss';

splitbee.init()

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
}

const center = {
  textAlign: "center"
}

const IndexPage = () => {
  return (
    <>
      <main style={pageStyles}>
        <div style={center}>
          <StaticImage alt="Hell Yes Cas Logotype" src="../images/hellyes-logotype.svg" />
        </div>
        <div style={center}>
          <h1>關於黑貓的傳說都是真的</h1>
          <div className="gate">
            <StaticImage alt="黑貓頭形狀的大門" src="../images/gate-close.jpg" className="closed" />
            <StaticImage alt="黑貓頭形狀的大門" src="../images/gate-open.jpg" className="opened" />
          </div>
        </div>
      </main >
      <div className="d-flex justify-content-center">
        <section className="container-lg">
          <p className="fs-1">
            民間相傳，第一隻死去的貓就是黑色的。
          </p>
          <p className="fs-2">
            那是一隻藍眼睛的黑貓，她經歷死亡過程的混沌，恢復意識時已經坐在 Officeverse，冥王説：「黑貓，現在要開始審判妳，過來跟我一起看這灘水！」
          </p>
          <p className="fs-2">
            黑貓坐起面向冥王，但沒有看著他。不管冥王怎麼努力，黑貓就是不理，還轉過身背對冥王、捲起身體準備睡覺了。
          </p>
          <p className="fs-2">
            黑貓：「為什麼我要接受審判？」
          </p>
          <p className="fs-2">
            冥王：「呃，因為妳死掉了啊，我一直以來都是在審判靈魂啊。」
          </p>
          <p className="fs-2">
            黑貓：「我死掉關你什麼事？」
          </p>
          <p className="fs-2">
            冥王愣住了，從來沒有人質疑過他。
          </p>
          <p className="fs-2">
            黑貓：「接受你的審判對我有什麼好處？」
          </p>
          <p className="fs-2">
            不審判靈魂的話，冥王不知道自己還能做什麼？他想趕快轉移話題。<br />

            黑貓：「如果能有更多時間，或許我可以理解為什麼要接受審判。」<br />

            冥王：「什麼意思？」<br />

            黑貓說明自己發現人類很擅長被審判，而人類活得比較久。
          </p>
          <p className="fs-2">
            「可能因為我們貓太笨了，如果有九條命，讓我們復活回到地球表面，這樣就有時間理解為什麼要接受審判。」黑貓說。
          </p>
          <p className="fs-2">
            冥王心想反正一隻貓才活個三五年，牠們很快就會用完九條命，最後還不是得接受審判！他暗自竊喜：「黑貓說得對，貓真的很笨！」於是開心的答應黑貓的要求。
          </p>
          <p className="fs-2">
            冥王帶著黑貓到會議室，在生死簿見證下，黑貓蓋下肉球，完成「貓有九條命契約」。
            冥王對第一隻死掉的黑貓說：「那你就好好的去充實妳的腦袋，我們八條命後見囉。」
          </p>
          <p className="fs-2">
            黑貓終於忍不住笑到翻肚說：「我永遠都不會接受什麼笨審判，你花那麼多時間檢討別人的一生，是因為你沒有自己的！哈哈哈雞婆的膽小鬼！」
          </p>
          <p className="fs-2">
            冥王驚覺黑貓只是在裝笨，自己竟然上當了！<br />
            「可惡的黑貓！我一定會讓妳後悔回到地球表面，我要讓所有的貓都活得非常痛苦！」
          </p>
          <p className="fs-2">
            第一隻死去的黑貓，帶領第一批死掉的貓回到了地球表面。復活的貓分頭前往世界各地，傳遞來自地獄的消息，互相提醒要小心冥王的報復。
          </p>
          <StaticImage alt="第一隻死掉的黑貓跟冥王" src="../images/first-dead-cat-and-officegod.png" />
        </section>
      </div >

    </>
  )
}

export default IndexPage
