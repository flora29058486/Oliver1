import { useEffect, useState } from "react";

const H2FakeH3 = (props) => {

	const [title, setTitle] = useState("Summer Picture #1: Summer Food");
	const [id, setID] = useState("")
	useEffect(() => {
		props.setJspObj({
			mode: "H2FakeH3",
			type: "h2",
			title: title,
			id: id
		});
	}, [title, id])

	return (
		<div>
			<p>id</p>
			<input
				value={id}
				onChange={(e) => setID(e.target.value)}
			/>
			<p>title</p>
			<textarea
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
		</div>
	)
}

export default H2FakeH3;