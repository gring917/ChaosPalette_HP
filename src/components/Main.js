import React from 'react';
import Logo from ".././img/About_illust.png";
import Logo2 from ".././img/Home Link_logo.jpg";
import Logo3 from ".././img/News_thumbnail.PNG";
import Logo4 from ".././img/Home_thmb.jpg";
import Logo5 from ".././img/Home_thmb_Goto.png";
import Logo6 from ".././img/Home_thmb_Sanada.png";
import Logo7 from ".././img/Home_thmb_Tachibana.png";
import Logo8 from ".././img/Home_thmb_Nagami.png";
import Logo9 from ".././img/Home_News_thmb.png";
import Logo10 from ".././img/Members_Goto.png";
import Logo11 from ".././img/Members_Sanada.png";
import Logo12 from ".././img/Members_Tachibana.png";
import Logo13 from ".././img/Members_Nagami.png";
import Logo14 from ".././img/yajirusi_left.png";
import Logo15 from ".././img/yajirusi_right.png";

class Main extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isAbout: true,
      isNews: false,
      isMembers: false,
      isContact: false,
      isHome: false,
      isGoto: false,
      isSanada: false,
      isTachibana: false,
      isNagami: false
  };
}

handleClickAbout(){
  this.setState({isAbout: true});
  this.setState({isNews: false});
  this.setState({isMembers: false});
  this.setState({isContact: false});
  this.setState({isHome: false});
  this.setState({isGoto: false})
  this.setState({isSanada: false})
  this.setState({isTachibana: false})
  this.setState({isNagami: false})
}

handleClickNews(){
  this.setState({isAbout: false});
  this.setState({isNews: true});
  this.setState({isMembers: false});
  this.setState({isContact: false});
  this.setState({isHome: false});
  this.setState({isGoto: false})
  this.setState({isSanada: false})
  this.setState({isTachibana: false})
  this.setState({isNagami: false})
}

handleClickMembers(){
  this.setState({isAbout: false});
  this.setState({isNews: false});
  this.setState({isMembers: true});
  this.setState({isContact: false});
  this.setState({isHome: false});
  this.setState({isGoto: true})
  this.setState({isSanada: false})
  this.setState({isTachibana: false})
  this.setState({isNagami: false})
}

handleClickGoto(){
  this.setState({isAbout: false});
  this.setState({isNews: false});
  this.setState({isMembers: true});
  this.setState({isContact: false});
  this.setState({isHome: false});
  this.setState({isGoto: true})
  this.setState({isSanada: false})
  this.setState({isTachibana: false})
  this.setState({isNagami: false})
}

handleClickSanada(){
  this.setState({isAbout: false});
  this.setState({isNews: false});
  this.setState({isMembers: true});
  this.setState({isContact: false});
  this.setState({isHome: false});
  this.setState({isGoto: false})
  this.setState({isSanada: true})
  this.setState({isTachibana: false})
  this.setState({isNagami: false})
}

handleClickTachibana(){
  this.setState({isAbout: false});
  this.setState({isNews: false});
  this.setState({isMembers: true});
  this.setState({isContact: false});
  this.setState({isHome: false});
  this.setState({isGoto: false})
  this.setState({isSanada: false})
  this.setState({isTachibana: true})
  this.setState({isNagami: false})
}

handleClickNagami(){
  this.setState({isAbout: false});
  this.setState({isNews: false});
  this.setState({isMembers: true});
  this.setState({isContact: false});
  this.setState({isHome: false});
  this.setState({isGoto: false})
  this.setState({isSanada: false})
  this.setState({isTachibana: false})
  this.setState({isNagami: true})
}

handleClickContact(){
  this.setState({isAbout: false});
  this.setState({isNews: false});
  this.setState({isMembers: false});
  this.setState({isContact: true});
  this.setState({isHome: false});
  this.setState({isGoto: false})
  this.setState({isSanada: false})
  this.setState({isTachibana: false})
  this.setState({isNagami: false})
}

handleClickHome(){
  this.setState({isAbout: false});
  this.setState({isNews: false});
  this.setState({isMembers: false});
  this.setState({isContact: false});
  this.setState({isHome: true});
  this.setState({isGoto: false})
  this.setState({isSanada: false})
  this.setState({isTachibana: false})
  this.setState({isNagami: false})
}

render() {
    let Contents;
    let Char;
   if(this.state.isAbout){
      Contents=(
      <div className="Contens_About">
        <h1 className="Contents_text">About</h1>
        <img className="logo" src={Logo} alt="Logo" />
        <h4>活動記録</h4>
        <h3>2021年/09月/30日 活動準備開始</h3>
      </div>
   );
  }

  if(this.state.isNews){
    Contents=(
<div className="Contents_News">
 <h1 className="Contents_text">News</h1>
 <h1 className="news_text">活動準備開始🎨</h1>
 <div className="thumbnail"><img className="logo" src={Logo} alt="Logo" /></div>
 <h4 className="article">4人のメンバーによって構成されるYouTuberグループ"かおすぱれっと"が本日10月1日より結成に向けた準備を開始しました。3月上旬ごろに正式な結成発表することを目標に様々な情報を発信していきます。</h4>
 <h1 className="news_text">公式twitter開設🎨</h1>
 <div className="thumbnail"><img className="logo3" src={Logo3} alt="Logo" /></div>
 <h4 className="article">"かおすぱれっと"の公式Twitterが開設されました。メンバーの紹介や今後のスケジュール、準備進行の進捗具合などの情報をお届けします。是非、公式Twitter・メンバーそれぞれのTwitterのフォローをよろしくお願いします。</h4>
</div>
   );
  }

if(this.state.isMembers){
    Contents=(
 <div className="Contents_Members">
   <h1 className="Contents_text">Members</h1>
   <tr className="char_logo_top">
    <td className="Home_Goto"><img onClick={()=>this.handleClickGoto()} className="logo5" src={Logo5} alt="Logo"/></td>
    <td className="Home_Sanada"><img onClick={()=>this.handleClickSanada()} className="logo6" src={Logo6} alt="Logo"/></td>
    <td className="Home_Tachibana"><img onClick={()=>this.handleClickTachibana()} className="logo7" src={Logo7} alt="Logo"/></td>
    <td className="Home_Nagami"><img onClick={()=>this.handleClickNagami()} className="logo8" src={Logo8} alt="Logo" /></td>
   </tr>
   <h3 className="Members_text">ある日異世界に転生させられてしまった4人。現実とはかけ離れた近未来的世界で戦士として生き残り4人は無事この世界に戻ってくることができた。生還した4人は異世界での愛銃と共にネットで活動を始める。</h3>
 </div>
 )
}

if(this.state.isGoto){
  Char=(
<div className="members_Changes">
 <div className="member_prof">
  <h2 className="Prof">Profile</h2>
  <h2 className="prof_name">五戸アキ　(エンジニア)</h2>
  <h3 className="prof_text">かおすぱれっとの活動の広告塔。一丁の散弾銃を携えて他のメンバーとの連携によって敵を翻弄した、一人の元戦士。司令塔と前線を突っ走るメンバーとのパイプ役で調和と連携の要。公式サイトの運営などをしながらチーム全体を支えるエンジニアとして信頼されている。好きな物はペン回しと昼寝。朝が弱くて二度寝常習犯。</h3>
 </div>
   <img onClick={()=>this.handleClickNagami()} className="yajirusi" src={Logo14} alt="Logo" />
   <img className="member_choose" src={Logo10} alt="Logo" />
   <img onClick={()=>this.handleClickSanada()} className="yajirusi" src={Logo15} alt="Logo" />
</div>
 )
}

if(this.state.isSanada){
  Char=(
<div className="members_Changes">
 <div className="member_prof">
  <h2 className="Prof">Profile</h2>
  <h2 className="prof_name">真田幸成 &nbsp; &nbsp; &nbsp; (絵師)</h2>
  <h3 className="prof_text">かおすぱれっとの大黒柱。一丁の銃剣を振りかざして敵を薙ぎ払った、一人の元戦士。圧倒的な猪突猛進さと見切り発車で敵陣を翻弄する。一人でいるときはクールな印象を受けるが、メンバーの4人が揃ってスイッチが入ればこれでもかと騒ぎ合う男。好きな物はコーラとラノベ。転生前に夢だったイラストレーターになるべく日々奮闘している。</h3>
 </div>
   <img onClick={()=>this.handleClickGoto()} className="yajirusi" src={Logo14} alt="Logo" />
   <img className="member_choose" src={Logo11} alt="Logo" />
   <img onClick={()=>this.handleClickTachibana()} className="yajirusi" src={Logo15} alt="Logo" />
</div>
 )
}

if(this.state.isTachibana){
  Char=(
<div className="members_Changes">
 <div className="member_prof">
 <h2 className="Prof">Profile</h2>
 <h2 className="prof_name">立花ケヱタ &nbsp; (歌い手)</h2>
 <h3 className="prof_text">かおすぱれっとのリーダー。一丁の狙撃銃を頼りに異世界の荒野を駆けた一人の元戦士。戦闘時はパーティーの統率を取って後方から支援したり、前方に突っ込んできて格闘で暴れたりする。他のメンバーをまとめる役を担うが、普段は声がでかくて騒がしい変態。 歌とラノベと可愛い女の子が好き。最近キムチにハマっている。</h3>
 </div>
   <img onClick={()=>this.handleClickSanada()} className="yajirusi" src={Logo14} alt="Logo" />
   <img className="member_choose" src={Logo12} alt="Logo" />
   <img onClick={()=>this.handleClickNagami()} className="yajirusi" src={Logo15} alt="Logo" />
</div>
 )
}

if(this.state.isNagami){
  Char=(
<div className="members_Changes">
 <div className="member_prof">
  <h2 className="Prof">Profile</h2>
  <h2 className="prof_name">永見こうき &nbsp; (配信者)</h2>
  <h3 className="prof_text">かおすぱれっとで一番のお調子者。二丁拳銃を使い、次々と敵を殲滅した、一人の元戦士。持ち前のマイペースさで一人突っ走る様子には他のメンバーも時折困惑するほどだ。4人の中では最も意欲的に配信活動などをしており、活発に動いている。好きな物はFPSゲームとアニメ。日本の文化をどんどん世界に広めたいと思っている。</h3>
 </div>
   <img onClick={()=>this.handleClickTachibana()} className="yajirusi" src={Logo14} alt="Logo" />
   <img className="member_choose" src={Logo13} alt="Logo" />
   <img onClick={()=>this.handleClickGoto()} className="yajirusi" src={Logo15} alt="Logo" />
</div>
 )
}

  if(this.state.isContact){
      Contents=(
    <div className="Contents_Contact">
     <h1 className="Contents_text">Contact</h1>
     <h2 className="Contact_adress">ChaosPalette@gmail.com</h2>
     <h3 className="Contact_text">お手数ですかメールアドレスはこちらですので、こちらに送っていただけると幸いです。</h3>
     <h3 className="Contact_text">こちらのサイトで使われている素材は全てメンバーの手によって作られたものです。</h3>
    </div>
      )
    }

if(this.state.isHome){
  Contents=(
<div className="Contents_Home">
  <h1 className="Contents_text">Home</h1>
  <img className="Home_thmb" src={Logo4} alt="Logo" />
  <h1 className="Home_contents">About</h1>
 <div onClick={()=>this.handleClickAbout()} className="Home_about">
  <h2 className="Home_about_text2">"かおすぱれっと"とは</h2>
  <h3 className="Home_about_text3">4人のメンバーによって構成されるYouTuberグループ"かおすぱれっと"</h3>
  <h2 className="Home_about_text2">歴史</h2>
  <h3 className="Home_about_text3">・2021年/09月/30日 活動準備開始</h3>
 </div>
 <h1 className="Home_contents">News</h1>
 <div className="Home_News">
  <img onClick={()=>this.handleClickNews()} className="Home_News_image" src={Logo9} alt="Logo" />
 </div>
 <h1 className="Home_contents">Members</h1>
 <table className="Home_members">
  <tr>
   <td className="Home_Goto"><img onClick={()=>this.handleClickGoto()} className="logo5" src={Logo5} alt="Logo"/></td>
   <td className="Home_Sanada"><img onClick={()=>this.handleClickSanada()} className="logo6" src={Logo6} alt="Logo"/></td>
   <td className="Home_Tachibana"><img onClick={()=>this.handleClickTachibana()} className="logo7" src={Logo7} alt="Logo"/></td>
   <td className="Home_Nagami"><img onClick={()=>this.handleClickNagami()} className="logo8" src={Logo8} alt="Logo" /></td>
  </tr>
  <td className="Home_members_text">五戸アキ</td>
  <td className="Home_members_text">真田幸成</td>
  <td className="Home_members_text">立花ケヱタ</td>
  <td className="Home_members_text">永見こうき</td>
 </table>
 <h1 className="Home_contents_Contact">Contact</h1>
 <h2 onClick={()=>this.handleClickContact()} className="Home_Contact" >要望・コラボ依頼・応援メッセージ等ありましたらこちらのフォームへ</h2>
</div>
  )
}

    return(
     <div className='main'>
     <div className="header_button">
       <img onClick={()=>this.handleClickHome()} className="logo2" src={Logo2} alt="Logo2" />
       <button onClick={()=>this.handleClickAbout()} className="button1" name="" type="submit" value="About">About</button>
       <button onClick={()=>this.handleClickNews()} className="button2" type="submit" value="News">News</button>
       <button onClick={()=>this.handleClickMembers()}  className="button3" type="submit" value="Members">Members</button>
       <button onClick={()=>this.handleClickContact()} className="button4" type="submit" value="Contact">Contact</button>
     </div>
     {Contents}
     {Char}
     </div>
    );
  }
}

export default Main;
