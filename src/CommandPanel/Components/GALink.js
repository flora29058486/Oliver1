import { useEffect, useState, useSyncExternalStore } from "react";

const GALink = (props) => {

  const [link, setLink] = useState("");
  const [ret_out, setRet_out] = useState("");

	useEffect(() => {
		props.setJspObj({
			mode: "GALink",
			type: "GALink",
      link: link,
      ret_out: ret_out
		});

    switch(link) {
      case "PhD_IOS_Store":
        setRet_out(`<a href="https://photodirector.page.link/TC6c" onclick="GoogleAnalyticsEventTracking('Mobile_Blog_article_body_\${os}_\${device}', 'Click', 'Mobile_Text_FreeDownload_AppStore_PhotoDirector_\${os}')"; target="_blank" title="PhotoDirector App | Creative Photo Editing for Mobile" target="_blank" rel="noopener">`);
        break;
      case "PhD_Google_Play":
        setRet_out(`<a href="https://play.google.com/store/apps/details?id=com.cyberlink.photodirector&referrer=utm_source%3Dclblog" style="cursor: pointer;" target="_blank" rel="noopener" onclick="GoogleAnalyticsEventTracking('Mobile_Blog_article_body_\${os}_\${device}', 'Click', 'Mobile_Text_FreeDownload_GooglePlay_PhotoDirector_\${os}');"title="PhotoDirector App | Creative Photo Editing for Mobile">`);
        break;
      case "PhD_Both":
        setRet_out(`<a href="\${(os == 'Android') || (os=='Windows') ? 'https://play.google.com/store/apps/details?id=com.cyberlink.photodirector&referrer=utm_source%3Dclblog' : 'https://photodirector.page.link/Unk8'}" style="cursor: pointer;" rel="noopener" target="_blank" title="PhotoDirector 365 - Turn Photos Into Art" onclick="GoogleAnalyticsEventTracking('Mobile_Blog_article_body_\${device}', 'Click', 'Mobile_Text_FreeDownload_PhotoDirector_\${os}' );">`);
        break;
      case "PDR_IOS_Store":
        setRet_out(`<a href="https://powerdirectorios.page.link/BH8a" onclick="GoogleAnalyticsEventTracking('Mobile_Blog_article_body_\${os}_\${device}', 'Click', 'Mobile_Text_FreeDownload_AppStore_PowerDirector_\${os}');" target="_blank" title="PowerDirector App | Cinematic Style Editing at Your Fingertips" rel="noopener">`);
        break;
      case "PDR_Google_Play":
        setRet_out(`<a href="https://play.google.com/store/apps/details?id=com.cyberlink.powerdirector.DRA140225_01&referrer=utm_source%3Dclblog_pdr%26utm_medium%3Dclblog_pdr_mobilearticle%26anid%3Dadmob" onclick="GoogleAnalyticsEventTracking('Mobile_Blog_article_body_\${os}_\${device}', 'Click', 'Mobile_Text_FreeDownload_GooglePlay_PowerDirector_\${os}');" title="PowerDirector 365 - Professional Video Editing Tools, Designed for all Creators" target="_blank" rel="noopener">`);
        console.log("TWW");
        break;
      case "PDR_Both":
        setRet_out(`<a href="\${(os == 'Android') || (os=='Windows') ? 'https://play.google.com/store/apps/details?id=com.cyberlink.powerdirector.DRA140225_01&referrer=utm_source%3Dclblog_pdr%26utm_medium%3Dclblog_pdr_mobilearticle%26anid%3Dadmob' : 'https://powerdirectorios.page.link/Ho3Z'}" onclick="GoogleAnalyticsEventTracking('Mobile_Blog_article_body_Mobile', 'Click', 'Mobile_Button_FreeDownload_PowerDirector_\${os}');" target="_blank" rel="noopener" title="PowerDirector App | Cinematic Style Editing at Your Fingertips">`);
        break;
      case "":
        setRet_out("");
        break;
      default:
        break;
    }

	}, [link]);



	return (
		<div>
			<p>PhD</p>
			<button
				className="AddRow"
				onClick={() => {
					setLink("PhD_IOS_Store");
				}}
			>
				App Store
			</button>
      <button
				className="AddRow"
				onClick={() => {
					setLink("PhD_Google_Play");
				}}
			>
				Google Play
			</button>
      <button
				className="AddRow"
				onClick={() => {
					setLink("PhD_Both");
				}}
			>
				PhD_Both
			</button>
      <p>PDR</p>
      <button
				className="AddRow"
				onClick={() => {
					setLink("PDR_IOS_Store");
				}}
			>
				App Store
			</button>
      <button
				className="AddRow"
				onClick={() => {
					setLink("PDR_Google_Play");
				}}
			>
				Google Play
			</button>
      <button
				className="AddRow"
				onClick={() => {
					setLink("PDR_Both");
				}}
			>
				PDR_Both
			</button>
		</div>
	)
}

export default GALink;