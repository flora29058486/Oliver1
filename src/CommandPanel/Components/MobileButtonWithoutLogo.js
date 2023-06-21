import { useEffect, useState } from "react";

const MobileButtonWithoutLogo = (props) => {
	const [text, setText] = useState("Free Download");

	useEffect(() => {
		props.setJspObj({
			mode: "MobileButtonWithoutLogo",
			text: text,
		});
	}, [text])
	
	return (
		<div>
			<p>MobileDownloadButton</p>
			<p>text</p>
			<input
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
		</div>
	);
}

export default MobileButtonWithoutLogo;