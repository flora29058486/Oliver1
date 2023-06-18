import { useEffect, useState } from "react";

const ToolInBodyInstallAppLink = (props) => {

	const [srcset, setSrcset] = useState("img/img_12.webp")
	const [alt, setAlt] = useState("Woman using a body reshaping tool and applying photo enhancements")
	const [src, setSrc] = useState("img/img_12.gif")
	const [title, setTitle] = useState("PhotoDirector App - Best AI Editing App")
	useEffect(() => {
		props.setJspObj({
			mode: "ToolInBodyInstallAppLink",
			type: "a",
			title: title,
			// id: id,
		});
	}, [title])


	return (
		<div>
			<p>srcset</p>
			<input
				value={srcset}
				onChange={(e) => setSrcset(e.target.value)}
			/>
			<p>alt</p>
			<textarea
				value={alt}
				onChange={(e) => setAlt(e.target.value)}
			/>
			<p>src</p>
			<input
				value={src}
				onChange={(e) => setSrc(e.target.value)}
			/>
			<p>title</p>
			<textarea
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
		</div>
	)
}

export default ToolInBodyInstallAppLink;