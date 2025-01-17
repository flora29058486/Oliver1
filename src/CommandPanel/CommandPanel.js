import React, { useContext, useEffect, useState } from "react";
import Context from "../Context";
import Text from "./Components/Text";
import H2 from "./Components/H2";
import NormalPicture from "./Components/NormalPicture";
import IndexUlConnentArticleID from "./Components/IndexUlConnentArticleID";
import TitlePicture from "./Components/TitlePicture";
import H2Orange from "./Components/H2Orange";
import H2FakeH3 from "./Components/H2FakeH3";
import ButtonMobileDownloadButton from "./Components/ButtonMobileDownloadButton";
import VideoBanner from "./Components/VideoBanner";
import "./CommandPanel.css"
import MobileButtonWithoutLogo from "./Components/MobileButtonWithoutLogo";
import FAQs from "./Components/FAQs";
import GALink from "./Components/GALink";
// import RenderImage from "../image/renderImage";

const ModeButton = (props) => {
	const {
		changeMode,
		mode,
	} = useContext(Context);

	return (
		<button className="CommandPanelModeButton"
			value={props.value}
			onClick={(e) => {
				changeMode(e.target.value);
				props.cleanJspObj();
			}}
			style={mode === props.value? {backgroundColor: "rgb(216, 183, 142)"}:{}}
		>
			{props.value}
		</button>
	)
}

const CommandPanel = () => {
	const {
		mode,
		addJspObj,
		createJsp,
	} = useContext(Context)
	
	const [jspObj, setJspObj] = useState({});
	const [created, setCreated] = useState(false);

	const componentList = ["TitlePicture", "IndexUlConnentArticleID", "FAQs", "H2Orange", "H2FakeH3" , "VideoBanner", "NormalPicture", "Text", "ButtonMobileDownloadButton", "MobileButtonWithoutLogo", "GALink"];

	
	useEffect(() => {
		console.log('jspObj: ', jspObj)
	}, [jspObj])

	var modePanel;

	switch (mode) {
		case "Text":
			modePanel = <Text jspObj={jspObj} setJspObj={setJspObj}/>;
			break;
		case "NormalPicture":
			modePanel = <NormalPicture jspObj={jspObj} setJspObj={setJspObj}/>;
			break;
		case "IndexUlConnentArticleID":
			modePanel = <IndexUlConnentArticleID jspObj={jspObj} setJspObj={setJspObj}/>;
			break;
		case "FAQs":
			modePanel = <FAQs jspObj={jspObj} setJspObj={setJspObj}/>;
			break;
		case "TitlePicture":
			modePanel = <TitlePicture jspObj={jspObj} setJspObj={setJspObj}/>;
			break;
		case "H2Orange":
			modePanel = <H2Orange jspObj={jspObj} setJspObj={setJspObj}/>;
			break;
		case "H2FakeH3":
			modePanel = <H2FakeH3 jspObj={jspObj} setJspObj={setJspObj}/>;
			break;
		case "ButtonMobileDownloadButton":
			modePanel = <ButtonMobileDownloadButton jspObj={jspObj} setJspObj={setJspObj}/>;
			break;
		case "VideoBanner":
			modePanel = <VideoBanner jspObj={jspObj} setJspObj={setJspObj}/>;
			break;
		case "MobileButtonWithoutLogo":
			modePanel = <MobileButtonWithoutLogo jspObj={jspObj} setJspObj={setJspObj}/>;
			break;
		case "GALink":
			modePanel = <GALink jspObj={jspObj} setJspObj={setJspObj}/>;
			break;
		default:
			break;
	}
	// const modeButtons = componentList.map((v, i) => {
	// 	console.log(v, i)
	// 	return (
	// 		<div>
	// 			<RenderImage value={v} />
	// 			<ModeButton key={i} value={v} cleanJspObj={() => setJspObj({})}/>
	// 		</div>
	// 	)
	// })

	const modeButtons = componentList.map((v, i) => {
		return <ModeButton key={i} value={v} cleanJspObj={() => setJspObj({})}/>
	})

	
	return (
		<div className="CommandPanel">
			<div className="CommandPanelModeButtons">
				{modeButtons}
			</div>
			<div className="CommandPanelModePanel">
				{modePanel}
			</div>
			<div className="CommandPanelCreateButtons">
				<div>
					<button
						className="CommandPanelCreateButton"
						onClick={(e) => {
							addJspObj(jspObj);
							setCreated(true);
							setTimeout(() => {
								setCreated(false);
							}, 1000)
						}}
					>
						Create
					</button>
					{created && <p>created</p>}
				</div>

				<button
					className="CommandPanelCreateButton"
					onClick={(e) => {
						console.log("Creating...");
						createJsp();
					}}
				>
					Create JSP
				</button>
			</div>
		</div>
	)
}

export default CommandPanel;