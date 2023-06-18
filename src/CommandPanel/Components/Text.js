import React, { useEffect, useState } from "react";
import AttributeTable from "../AttributeTable";

const Text = (props) => {
	const [text, setText] = useState("");

	setTimeout(() => {
		props.setJspObj({
			mode: "Text",
			type: "p",
			text: text,
		});

	}, 400) // bad code

	return (
		<div>
			{/* <AttributeTable attrs={attrs} setAttrs={setAttrs} setChanged={setChanged}/> */}
			<p>Text</p>
			<textarea
				value={text}
				onChange={(e) => {
					setText(e.target.value);
				}}
			/>
		</div>
	)
}

export default Text;