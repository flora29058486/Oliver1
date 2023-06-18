import { useEffect, useState } from "react";
import AttributeTable from "../AttributeTable";

const H2 = (props) => {

	const [attrs, setAttrs] = useState([
		{
			"name": "id",
			"val": "",
		},
	]);
	const [text, setText] = useState("");
	const [changed, setChanged] = useState(false);
	// useEffect(() => {
	// 	console.log('JSON.stringify(attrs): ', JSON.stringify(attrs))
	// 	props.setJspObj({
	// 		mode: "H2",
	// 		type: "h2",
	// 		attrs: JSON.stringify(attrs),
	// 		text: text,
	// 	});
	// }, [text, attrs, JSON.stringify(attrs)])

	setTimeout(() => {
		if (changed) props.setJspObj({
			mode: "H2",
			type: "h2",
			attrs: attrs,
			text: text,
		});
	}, 400) // bad code


	return (
		<div>
			<AttributeTable attrs={attrs} setAttrs={setAttrs} setChanged={setChanged}/>
			<div>
				<p>title</p>
				<textarea
					value={text}
					onChange={(e) => {
						setText(e.target.value);
					}}
					
				/>
			</div>
		</div>
	)
}

export default H2;