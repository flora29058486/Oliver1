import { useEffect, useState } from "react";
import AttributeTable from "../AttributeTable";

const NormalPicture = (props) => {
	const [srcset, setSrcset] = useState("img/img_02.webp")
	const [alt, setAlt] = useState("Summer Food")
	const [src, setSrc] = useState("img/img_02.jpg")
	const [title, setTitle] = useState("PhotoDirector App - Best AI Editing App")
	const [width, setWidth] = useState("330")
	const [height, setHeight] = useState("550")

	useEffect(() => {
		props.setJspObj({
			mode: "NormalPicture",
			type: "NormalPicture",
			srcset: srcset,
			alt: alt,
			src: src,
			title: title,
			width: width,
			height: height
		});
	}, [srcset, alt, src, title, width, height]);



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
		</div>
	)
}

export default NormalPicture;
// import { useEffect, useState } from "react";
// import AttributeTable from "./AttributeTable";

// const Picture = (props) => {

// 	const [attrs1, setAttrs1] = useState([
// 		{
// 			"name": "srcset",
// 			"val": "img/img_02.webp",
// 		},
// 	]);
// 	const [attrs2, setAttrs2] = useState([
// 		{
// 			"name": "alt",
// 			"val": "Summer Food",
// 		},
// 		{
// 			"name": "src",
// 			"val": "img/img_02.jpg",
// 		},
// 		{
// 			"name": "title",
// 			"val": "PhotoDirector App - Best AI Editing App",
// 		},
// 	]);
// 	const [changed, setChanged] = useState(false);

// 	setTimeout(() => {
// 		if (changed) props.setJspObj({
// 			mode: "Picture",
// 			type: "Picture",
// 			attrs1: attrs1,
// 			attrs2: attrs2,
// 		});
// 	}, 400) // bad code


// 	return (
// 		<div>
// 			<p>source Attr</p>
// 			<AttributeTable attrs={attrs1} setAttrs={setAttrs1} setChanged={setChanged}/>
// 			<p>img Attr</p>
// 			<AttributeTable attrs={attrs2} setAttrs={setAttrs2} setChanged={setChanged}/>
// 		</div>
// 	)
// }

// export default Picture;