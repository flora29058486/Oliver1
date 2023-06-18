import React, { useContext, useEffect, useState } from "react";
import Context from "../Context";
import TextPanel from "./TextPanel";
import H2 from "./H2";
import "./CommandPanel.css"

const ModeButton = (props) => {
	const {
		changeMode,
	} = useContext(Context);
	return (
		<div>
			<button
				value={props.value}
				onClick={(e) => {
					changeMode(e.target.value);
					props.cleanJspObj();
				}}
			>
				{props.value}
			</button>
		</div>
	)
}

const CommandPanel = () => {
	const {
		mode,
		addJspObj,
		createJsp,
	} = useContext(Context)

	const [jspObj, setJspObj] = useState({});
	const componentList = ["Text", "H2"];
	const modeButtons = componentList.map((v, i) => {
		return <ModeButton key={i} value={v} cleanJspObj={() => setJspObj({})}/>
	})

	var modePanel;
	switch (mode) {
		case "Text":
			modePanel = <TextPanel jspObj={jspObj} setJspObj={setJspObj}/>;
			break;
		case "H2":
			modePanel = <H2 jspObj={jspObj} setJspObj={setJspObj}/>;
			break;
	}

	useEffect(() => {
		console.log('jspObj: ', jspObj)
	}, [jspObj])
	
	return (
		<div className="CommandPanel">
			{modeButtons}
			{modePanel}
			
			<button
				onClick={(e) => {
					addJspObj(jspObj);
				}}
			>
				Create
			</button>

			<button
				onClick={(e) => {
					console.log("Creating...");
					createJsp();
				}}
			>
				Create JSP
			</button>
		</div>
	)
}

export default CommandPanel;