import { useEffect, useState } from "react";
import AttributeTable from "../AttributeTable";

const H2Orange = (props) => {

	const [title, setTitle] = useState("PhotoDirector: The Best App to Edit Your Summer Photos");
	const [id, setId] = useState("a0");
	useEffect(() => {
		props.setJspObj({
			mode: "H2Orange",
			type: "h2",
			title: title,
			id: id,
		});
	}, [title, id])

	return (
		<div>
			<p>id</p>
			<input
				value={id}
				onChange={(e) => setId(e.target.value)}
			/>
			<p>title</p>
			<textarea
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
		</div>
	)
}

export default H2Orange;