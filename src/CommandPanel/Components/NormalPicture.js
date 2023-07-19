import { useEffect, useState } from "react";
import AttributeTable from "../AttributeTable";

const NormalPicture = (props) => {
	const [filename, setFilename] = useState("img_0");
	const [filetype, setFiletype] = useState("jpg");
	const [alt, setAlt] = useState("");
	const [title, setTitle] = useState("PhotoDirector App - Best AI Editing App");
	const [width, setWidth] = useState("");
	const [height, setHeight] = useState("");
	const [size, setSize] = useState("mobile-ui");
	const [anchor, setAnchor] = useState(true);

	useEffect(() => {
		props.setJspObj({
			mode: "NormalPicture",
			type: "NormalPicture",
			filename: filename,
			filetype: filetype,
			alt: alt,
			title: title,
			width: width,
			height: height,
			size: size,
			anchor: anchor
		});
	}, [filename,filetype, alt, title, width, height, size, anchor]);



	return (
		<div>
			<p>Filename</p>
			<input
				value={filename}
				onChange={(e) => setFilename(e.target.value)}
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
			<button
				className="AddRow"
				onClick={() => {
					setSize("small-logo");
				}}
			>
				small-logo
			</button>
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
			
			<p>Filetype</p>
			<button
				className="AddRow"
				onClick={() => {
					setFiletype(".jpg");
				}}
			>
				.jpg
			</button>
			<button
				className="AddRow"
				onClick={() => {
					setFiletype(".gif");
				}}
			>
				.gif
			</button>
			<button
				className="AddRow"
				onClick={() => {
					setFiletype(".png");
				}}
			>
				.png
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
