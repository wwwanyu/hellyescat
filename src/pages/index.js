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
      <div className="d-flex flex-column justify-content-center">
        <section className="container-lg mb-5">
          <h1 className="fw-bold">黑貓跳棺材，死人變殭屍</h1>
          <span className="fs-2">
            <p className="my-5">
              黑貓跟女巫被吃巫群眾追著，她們逃到公園爬到樹上，四周安靜了下來。<br />她們在樹上休息，女巫：「那些人也要抓你是因為他們聽說黑貓跳過棺材，死人就會變成殭屍。」黑貓翻黃眼覺得不耐煩。
            </p>
            <p className="my-5">
              「要是真的就好了，我就整天跳棺材，超好玩的！」<br />
              「那他們為什麼要抓你？」黑貓問。
            </p>
            <p className="my-5">
              突然這棵樹劇烈搖晃，是里長伯帶領著吃巫群眾在鋸樹！女巫跟黑貓跳下樹全力狂奔，女巫對著黑貓大喊：「我知道該怎麼擺脫他們了，跟著我！」黑貓回應了響亮的一聲：「喵！」。
            </p>
            <div className="text-center mb-5">
              <StaticImage alt="吃巫群眾追著女巫跟黃眼黑貓" src="../images/hunting.png" /><br />
            </div>
            <p className="my-5">
              她們跑到殯儀館，停在一副棺材前，女巫轉身面向吃巫群眾，這時氣場逆轉，女巫跟黑貓竟然跑到殯儀館停在一具棺材前面！看得出來吃巫者是很膽小的，跟在外圍的早就開溜了，帶頭的里長伯眼也覺得毛毛的，好想回家，但是有支持者跟著，這樣就回家太丟臉了，真希望自己是乖乖在家裡看政論節目。</p>
            <p className="my-5">
              黑貓壓低上半身，抬高屁股輕輕的扭動，準備跳躍的動作引發吃巫者第二批逃難潮，只剩下不到十個吃巫仔了。
            </p>
            <p className="my-5">
              吃巫仔逃跑同時，黑貓輕盈跳過棺材，但什麼事都沒發生。<br />
              黑貓回頭再跳一次，棺材還是沒有動靜。
            </p>
            <p className="my-5">
              吃巫群眾開始嘲笑鼓譟。黑貓又跳到棺材蓋上，走了幾步聞一聞，用爪子撥了幾下，看起來有點無奈，乾脆坐在棺材蓋上。
            </p>
            <p className="my-5">
              黑貓：「現在怎麼辦啦！」<br />
              女巫：「該不會是空的棺材 ... 試試看跳別的？」
            </p>
            <p className="my-5">
              吃巫群眾佔回上風，他們試著再次包圍女巫跟黑貓。
            </p>
            <p className="my-5">
              突然棺材蓋子被推動了！
            </p>
            <p className="my-5">
              里長伯發出淒厲的叫聲逃跑了，黑貓被人類淒厲的叫聲嚇到，耳朵緊緊貼著後腦勺，模糊黑影像閃電瞬間消失。
            </p>
            <p className="my-5">
              女巫也是第一次遇到這種狀況，出於本能朝著吃巫群眾的反方向逃跑。
            </p>
            <p className="my-5">
              四周恢復平靜。<br />
              殭屍緩慢爬出棺材，嘴裡念念有詞：<br />
              「Hello hell world … hell … world, hello? Hello, hell world ... 」
            </p>
          </span>
        </section>
        <div role="hr" className="text-center mb-5">
          <StaticImage src="../images/bone.png" /><br />
          <StaticImage src="../images/bone.png" /><br />
          <StaticImage src="../images/bone.png" />
        </div>
        <section className="container-lg">
          <h1 className="fw-bold">貓有九條命</h1>
          <p className="fs-2 my-4 my-sm-5">
            民間相傳，第一隻死去的貓就是黑色的。
          </p>
          <p className="fs-2 my-4 my-sm-5">
            那是一隻藍眼睛的黑貓，她經歷死亡過程的混沌，恢復意識時已經坐在 Officeverse，冥王説：「黑貓，現在要開始審判妳，過來跟我一起看這灘水！」
          </p>
          <p className="fs-2 my-4 my-sm-5">
            黑貓坐起面向冥王，但沒有看著他。不管冥王怎麼努力，黑貓就是不理，還轉過身背對冥王、捲起身體準備睡覺了。
          </p>
          <p className="fs-2 my-4 my-sm-5">
            黑貓：「為什麼我要接受審判？」<br />
            冥王：「呃，因為妳死掉了啊，我一直以來都是在審判靈魂啊。」<br />
            黑貓：「我死掉關你什麼事？」<br />
            冥王愣住了，從來沒有人質疑過他。<br />
            黑貓：「接受你的審判對我有什麼好處？」
          </p>
          <p className="fs-2 my-4 my-sm-5">
            不審判靈魂的話，冥王不知道自己還能做什麼？他想趕快轉移話題。<br />

            黑貓：「如果能有更多時間，或許我可以理解為什麼要接受審判。」<br />

            冥王：「什麼意思？」<br />

            黑貓說明自己發現人類很擅長被審判，而人類活得比較久。
          </p>
          <p className="fs-2 my-4 my-sm-5">
            「可能因為我們貓太笨了，如果有九條命，讓我們復活回到地球表面，這樣就有時間理解為什麼要接受審判。」黑貓說。
          </p>
          <p className="fs-2 my-4 my-sm-5">
            冥王心想反正一隻貓才活個三五年，牠們很快就會用完九條命，最後還不是得接受審判！他暗自竊喜：「黑貓說得對，貓真的很笨！」於是開心的答應黑貓的要求。
          </p>
          <p className="fs-2 my-4 my-sm-5">
            冥王帶著黑貓到會議室，在生死簿見證下，黑貓蓋下肉球，完成「貓有九條命契約」。<br />
            冥王對第一隻死掉的黑貓說：「那你就好好的去充實妳的腦袋，我們八條命後見囉。」
          </p>
          <p className="fs-2 my-4 my-sm-5">
            黑貓終於忍不住笑到翻肚說：「我永遠都不會接受什麼笨審判，你花那麼多時間檢討別人的一生，是因為你沒有自己的！哈哈哈雞婆的膽小鬼！」
          </p>
          <p className="fs-2 my-4 my-sm-5">
            冥王驚覺黑貓只是在裝笨，自己竟然上當了！<br />
            「可惡的黑貓！我一定會讓妳後悔回到地球表面，我要讓所有的貓都活得非常痛苦！」
          </p>
          <p className="fs-2 my-4 my-sm-5">
            第一隻死去的黑貓，帶領第一批死掉的貓回到了地球表面。復活的貓分頭前往世界各地，傳遞來自地獄的消息，互相提醒要小心冥王的報復。
          </p>
          <div className="text-center mb-5">
            <StaticImage alt="第一隻死掉的黑貓跟冥王" src="../images/first-dead-cat-and-officegod.png" />
          </div>
        </section>
      </div >

    </>
  )
}

export default IndexPage
