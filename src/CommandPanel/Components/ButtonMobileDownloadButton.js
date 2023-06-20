import { useEffect, useState } from "react";

const ButtonMobileDownloadButton = (props) => {
	const [text, setText] = useState("Free Download");
	const [slogan, setSlogan] = useState("Effortless Photo Editing");

	useEffect(() => {
		props.setJspObj({
			mode: "ButtonMobileDownloadButton",
			text: text,
			slogan: slogan
		});
	}, [text, slogan])
	
	return (
		<div>
			<p>MobileDownloadButton</p>
			<p>text</p>
			<input
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<p>slogan</p>
			<input
				value={slogan}
				onChange={(e) => setSlogan(e.target.value)}
			/>
		</div>
	);
}

export default ButtonMobileDownloadButton;