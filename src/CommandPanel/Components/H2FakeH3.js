import { useEffect, useState } from "react";
import AttributeTable from "../AttributeTable";

const H2FakeH3 = (props) => {

	const [title, setTitle] = useState("Summer Picture #1: Summer Food");
	useEffect(() => {
		props.setJspObj({
			mode: "H2FakeH3",
			type: "h2",
			title: title,
		});
	}, [title])

	return (
		<div>
			<p>title</p>
			<textarea
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
		</div>
	)
}

export default H2FakeH3;