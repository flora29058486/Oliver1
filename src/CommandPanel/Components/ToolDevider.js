import { useEffect } from "react";

const ToolDevider = (props) => {
	useEffect(() => {
		props.setJspObj({
			mode: "ToolDevider",
		});
	}, [])
	return (
		<div>
			<p>ToolDevider</p>
		</div>
	);
}

export default ToolDevider;