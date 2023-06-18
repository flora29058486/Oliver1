import { useEffect, useState } from "react";
import AttributeTable from "./AttributeTable";

const H2 = (props) => {

	const [attrs, setAttrs] = useState([
		{
			"name": "id",
			"val": "",
		},
	]);
	const [text, setText] = useState("");
	useEffect(() => {
		console.log('JSON.stringify(attrs): ', JSON.stringify(attrs))
		props.setJspObj({
			mode: "H2",
			type: "h2",
			attrs: JSON.stringify(attrs),
			text: text,
		});
	}, [text, JSON.stringify(attrs)])



	return (
		<div>
			<AttributeTable attrs={attrs} setAttrs={setAttrs}/>
			<div>
				<p>title</p>
				<textarea
					value={text}
					onChange={(e) => {
						setText(e.target.value);
					}}
				/>
			</div>
			<button
				onClick={() => {
					console.log('attrs: ', attrs)
					props.setJspObj({
						mode: "H2",
						type: "h2",
						attrs: JSON.stringify(attrs),
						text: text,
					});
				}}
				
			>
				Show attrs
			</button>
		</div>
	)
}

export default H2;