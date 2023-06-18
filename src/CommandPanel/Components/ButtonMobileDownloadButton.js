import { useEffect } from "react";

const ButtonMobileDownloadButton = (props) => {
	useEffect(() => {
		props.setJspObj({
			mode: "ButtonMobileDownloadButton",
		});
	}, [])
	return (
		<div>
			<p>MobileDownloadButton</p>
		</div>
	);
}

export default ButtonMobileDownloadButton;