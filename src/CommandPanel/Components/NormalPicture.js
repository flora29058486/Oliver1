import { useEffect, useState } from "react";
import AttributeTable from "../AttributeTable";

const NormalPicture = (props) => {
	const [srcset, setSrcset] = useState("img/img_0.webp");
	const [alt, setAlt] = useState("");
	const [src, setSrc] = useState("img/img_0.jpg");
	const [title, setTitle] = useState("PhotoDirector App - Best AI Editing App");
	const [width, setWidth] = useState("");
	const [height, setHeight] = useState("");
	const [size, setSize] = useState("mobile-ui");
	const [anchor, setAnchor] = useState(true);

	useEffect(() => {
		props.setJspObj({
			mode: "NormalPicture",
			type: "NormalPicture",
			srcset: srcset,
			alt: alt,
			src: src,
			title: title,
			width: width,
			height: height,
			size: size,
			anchor: anchor
		});
	}, [srcset, alt, src, title, width, height, size, anchor]);



	return (
		<div>
			<p>srcset</p>
			<input
				value={srcset}
				onChange={(e) => setSrcset(e.target.value)}
			/>
			<p>src</p>
			<input
				value={src}
				onChange={(e) => setSrc(e.target.value)}
			/>
			<p>alt</p>
			<textarea
				value={alt}
				onChange={(e) => setAlt(e.target.value)}
			/>
			<p>title</p>
			<textarea
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<p>width</p>
			<input
				value={width}
				onChange={(e) => setWidth(e.target.value)}
			/>
			<p>height</p>
			<input
				value={height}
				onChange={(e) => setHeight(e.target.value)}
			/>
			<p>size</p>
			<button
				className="AddRow"
				onClick={() => {
					setSize("mobile-ui");
				}}
			>
				mobile-ui
			</button>
			<button
				className="AddRow"
				onClick={() => {
					setSize("mobile-wide");
				}}
			>
				mobile-wide
			</button>
			<p>In-Body Link</p>
			<button
				className="AddRow"
				onClick={() => {
					setAnchor(true);
				}}
			>
				Yes
			</button>
			<button
				className="AddRow"
				onClick={() => {
					setAnchor(false);
				}}
			>
				No
			</button>
		</div>
	)
}

export default NormalPicture;
