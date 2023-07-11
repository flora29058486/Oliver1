
import { useEffect, useState } from "react";
import CommandPanel from "./CommandPanel/CommandPanel";
import Context from "./Context";
import StaticTexts from "./utils/StaticTexts";

import CurrentJsp from "./CurrentJsp/CurrentJsp";

// import JspObjPanel from "./JspObjPanel/JspObjPanel";

function App() {

  const [mode, setMode] = useState(null);
  // const [mode, setMode] = useState("Text");

  const [jsp, setJsp] = useState("");
  const [jspObjs, setJspObjs] = useState([]);

  const changeMode = (mode) => {
    switch (mode) {
      case "Text":
        setMode("Text");
        break;
      case "NormalPicture":
        setMode("NormalPicture");
        break;
      case "IndexUlConnentArticleID":
        setMode("IndexUlConnentArticleID");
        break;
      case "FAQs":
        setMode("FAQs");
        break;
      case "TitlePicture":
        setMode("TitlePicture");
        break;
      case "H2Orange":
        setMode("H2Orange");
        break;
      case "H2FakeH3":
        setMode("H2FakeH3");
        break;
      case "ToolInBodyInstallAppLink":
        setMode("ToolInBodyInstallAppLink");
        break;
      case "ButtonMobileDownloadButton":
        setMode("ButtonMobileDownloadButton");
        break;
      case "MobileButtonWithoutLogo":
        setMode("MobileButtonWithoutLogo");
        break;
      case "VideoBanner":
        setMode("VideoBanner");
        break;
      default:
        break;
    }
  };

  
  const singleJsp = (v) => {
    var ret = "";
    switch (v.mode) {
      case "Text":
        ret += `<p>${v.text}</p>\n`;
        break;
        
      case "NormalPicture":
        ret += `<picture>\n`;
        ret += `\t<source srcset="${v.srcset}" type="image/webp">\n`;
        ret += `\t<img itemprop="image" alt="${v.alt}" src="${v.src}" title="${v.title}" loading="lazy" class="${v.size}" width="${v.width}" height="${v.height}">\n`;
        ret += `</picture>\n`;
        break;
          
      case "IndexUlConnentArticleID":
        ret += `<ul class="index">\n`;
        if (v.liList) v.liList.map((v, i) => {
          ret += `\t<li><a href="${v.id}" onclick="$('html, body').animate({ scrollTop: $('${v.id}').offset().top-120 }); return false;">${v.title}</a></li>\n`;
        })
        ret += `</ul>\n`;
        break;
      
      case "FAQs":
        ret += `<div class="schema-faq-code" itemscope="" itemtype="https://schema.org/FAQPage">\n`;
        ret += `\t<h2 id="" class="title-h2 orange" itemprop="name"></h2>\n`
        if (v.liList) v.liList.map((v, i) => {
          ret += `\t<div itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question" class="faq-question">\n`;
          ret += `\t\t<h3 itemprop="name" class="accordion">${i+1}. ${v.id}</h3>\n`
          ret += `\t\t<div itemscope="" itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" class="panel">\n`;
          ret += `\t\t\t<div itemprop="text" class="faq-a">\n\n\n`
          ret += `\t\t\t</div>\n`
          ret += `\t\t</div>\n`
          ret += `\t</div>\n`
        })
        ret += `</div>\n`;
        ret += `<script defer src="/stat/blog/resource/module/video&faq.js"></script>\n`;
        break;
      
      case "TitlePicture":
        ret += `<picture>\n`;
        ret += `\t<source media="(min-width: 550px)" srcset="${v.srcset1}" type="image/webp">\n`;
        ret += `\t<source media="(max-width: 550px)" srcset="${v.srcset2}" type="image/webp" width="${v.width}" height="${v.height}">\n`;
        ret += `\t<source media="(min-width: 550px)" srcset="${v.srcset3}" type="image/jpeg">\n`;
        ret += `\t<source media="(max-width: 550px)" srcset="${v.srcset4}" type="image/jpeg" width="${v.width}" height="${v.height}">\n`;
        ret += `\t<img src="${v.src}" alt="${v.alt}" loading="eager" width="1000" height="333">\n`;
        ret += `</picture>\n`;
        break;
      case "H2Orange":
        if (v.id !== "a01") {
          ret += `<div class="divider"></div>\n`
        }
        ret += `<h2 class="title-h2 orange" id="${v.id}">${v.title}</h2>\n\n\n`;
        break;
      case "H2FakeH3":
        ret += `<h2 class="fake-h3">${v.title}</h2>\n`;
        break;
      case "ToolInBodyInstallAppLink":
        ret += `<a source="In-Body Image" href="\${(os == 'Android') || (os=='Windows') ? 'https://play.google.com/store/apps/details?id=com.cyberlink.photodirector&referrer=utm_source%3Dclblog' : 'https://photodirector.page.link/Unk8'}" onclick="GoogleAnalyticsEventTracking('Mobile_Blog_article_body_image_\${device}', 'Click', ' Mobile_FreeDownload_PhotoDirector_\${os}');" target="_blank" title="PhotoDirector App | Creative Photo Editing for Mobile">\n`;
        ret += `\t<picture>\n`;
        ret += `\t\t<source srcset="${v.srcset}" type="image/webp">\n`;
        ret += `\t\t<img itemprop="image" alt="${v.alt}" src="${v.src}" title="${v.title}" loading="lazy" class="mobile-wide" width="350" height="490">\n`;
        ret += `\t</picture>\n`;
        ret += `</a>\n`;
        break;
      case "ButtonMobileDownloadButton":
        ret += `<jsp:include page="/stat/blog/resource/module/cta-responsive-download-master.jsp">\n`;
        ret += `\t<jsp:param name="buttonProductId" value="211" />\n`;
        ret += `\t<jsp:param name="template" value="Mobile" />\n`;
        ret += `\t<jsp:param name="CustomText" value="${v.text}" />\n`;
        ret += `\t<jsp:param name="CustomSlogan" value="${v.slogan}" />\n`;
        ret += `</jsp:include>\n`;
        break;
      case "MobileButtonWithoutLogo":
        ret += `<jsp:include page="/stat/blog/resource/module/cta-responsive-download-master.jsp">\n`;
        ret += `\t<jsp:param name="buttonProductId" value="211" />\n`;
        ret += `\t<jsp:param name="template" value="DownloadButton" />\n`;
        ret += `\t<jsp:param name="CustomText" value="${v.text}" />\n`;
        ret += `</jsp:include>\n`;
        break;
      case "VideoBanner":
        ret += `<div id="mobile-only">\n`;
        ret += `\t<video width="550" height="309" playsinline loop muted autoplay>\n`;
        ret += `\t\t<source src="./img/${v.smallwebm}.webm" type="video/webm">\n`;
        ret += `\t\t<source src="./img/${v.smallmp4}.mp4" type="video/mp4">\n`;
        ret += `\tYour browser does not support the video tag.\n`;
        ret += `\t</video>\n`;
        ret += `</div>\n`;
        ret += `<div id="desktop-only">\n`;
        ret += `\t<video width="1200" height="333" playsinline loop muted autoplay>\n`;
        ret += `\t\t<source src="./img/${v.bigwebm}.webm" type="video/webm">\n`;
        ret += `\t\t<source src="./img/${v.bigmp4}.mp4" type="video/mp4">\n`;
        ret += `\tYour browser does not support the video tag.\n`;
        ret += `\t</video>\n`;
        ret += `</div>\n`
        break;
      default:
        break;
    }
    navigator.clipboard.writeText(ret).then(() => {
      console.log("Clipped")
    }, () => {
      console.log("clipboard fail")
    });
    return ret;
  }
        
  const createJsp = () => {
    var tmpJsp = "";
    tmpJsp += StaticTexts.Initialize;
    jspObjs.map((v, i) => {
      tmpJsp += singleJsp(v);
      tmpJsp += `\n\n`;
    })
    setJsp(tmpJsp);
  };
  
  const addJspObj = (jspObj) => {
    setJspObjs([
      ...jspObjs,
      jspObj,
    ])
  };
  // useEffect(() => {
  //   console.log('jsp: \n', jsp);
  // }, [jsp]);
  
  return (
    <div style={{display: "flex"}}>
      <div>  
        <Context.Provider
          value={{
            mode: mode,
            changeMode: changeMode,
            addJspObj: addJspObj,
            createJsp: createJsp,
          }}
        >
          <CommandPanel/>
        </Context.Provider>
      </div>
      <div>

        <CurrentJsp jsp={jsp} setJsp={setJsp}/>
      </div>
      {/* <div>
        <JspObjPanel jspObjs={jspObjs} setJspObjs={setJspObjs}/>
      </div> */}
    </div>
  );
}

export default App;