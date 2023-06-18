import { useEffect, useState } from "react";

const IndexUlConnentArticleID = (props) => {
	const [liList, setLiList] = useState([
		{
			'id': "#a01",
			'title': "PhotoDirector: The Best App to Edit Your Summer Photos",
		}
	])

	const liListJSX = liList.map((v, i) => {
		return (
			<div key={i}>
				<p>id: </p>				
				<input
					value={v.id}
					onChange={(e) => {
						var tmpLiList = liList;
						tmpLiList[i].id = e.target.value;
						setLiList(tmpLiList)
					}}
				/>
				<p>title: </p>				
				<textarea
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
			mode: "IndexUlConnentArticleID",
			type: "IndexUlConnentArticleID",
			liList: liList,
		});
	}, 10) // bad code

	// useEffect(() => {
	// 	props.setJspObj({
	// 		mode: "IndexUlConnentArticleID",
	// 		type: "IndexUlConnentArticleID",
	// 		liList: liList,
	// 	});
	// }, [liList])

	return (
		<div>
			{liListJSX}
			<button
				className="AddRow"
				onClick={() => {
					var tmpLiList = liList;
					tmpLiList.push({
						"id": `#a0${tmpLiList.length + 1}`,
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

export default IndexUlConnentArticleID;