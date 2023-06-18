import React, { useEffect, useState } from "react";
import AttributeTable from "./AttributeTable";

const TextPanel = (props) => {
	const [text, setText] = useState("");

	const [attrs, setAttrs] = useState([

	]);

	useEffect(() => {
		props.setJspObj({
			mode: "Text",
			type: "p",
			attrs: attrs,
			text: text,
		})
	}, [JSON.stringify(attrs), text])

	return (
		<div>
			<AttributeTable attrs={attrs} setAttrs={setAttrs}/>
			<textarea
				value={text}
				onChange={(e) => {
					setText(e.target.value);
				}}
			/>
		</div>
	)
}

export default TextPanel;