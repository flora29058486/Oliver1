import { useEffect, useState } from "react";

const FAQs = (props) => {

	const [title, setTitle] = useState("FAQs");
	const [id, setId] = useState();
    const [liList, setLiList] = useState([
		{
			'title': "",
		}
	])
    
	useEffect(() => {
		props.setJspObj({
			mode: "FAQs",
			title: title,
			id: id,
		});
	}, [title, id])

    const liListJSX = liList.map((v, i) => {
		return (
			<div key={i}>
				<p>Question </p>				
				<input
					value={v.id}
					onChange={(e) => {
						var tmpLiList = liList;
						tmpLiList[i].id = e.target.value;
						setLiList(tmpLiList)
					}}
				/>
				<p>Answer </p>				
				<input
					value={v.title}
					onChange={(e) => {
						var tmpLiList = liList;
						tmpLiList[i].title = e.target.value;
						setLiList(tmpLiList)
					}}
				/>
			</div>
		)
	})

    setTimeout(() => {
		props.setJspObj({
			mode: "FAQs",
			liList: liList,
		});
	}, 10) // bad code

	return (
		<div>
			{liListJSX}
			<button
				className="AddRow"
				onClick={() => {
					var tmpLiList = liList;
					tmpLiList.push({
						"id": "",
						'title': "",
					});
					setLiList(tmpLiList);
				}}
			>
				Add row
			</button>
		</div>
	)
}

export default FAQs;
