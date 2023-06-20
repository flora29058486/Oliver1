import { useEffect, useState } from "react";

const TitlePicture = (props) => {
	const [srcset1, setSrcset1] = useState("img/top_1000x333.webp");
	const [srcset2, setSrcset2] = useState("img/top_550x309.webp");
	const [srcset3, setSrcset3] = useState("img/top_1000x333.jpg");
	const [srcset4, setSrcset4] = useState("img/top_550x309.jpg");
	const [src, setSrc] = useState("img/top_1000x333.jpg");
	const [alt, setAlt] = useState("");
	const [width, setWidth] = useState("550");
	const [height, setHeight] = useState("309");


	useEffect(() => {
		props.setJspObj({
			mode: "TitlePicture",
			type: "Picture",
			srcset1: srcset1,
			srcset2: srcset2,
			srcset3: srcset3,
			srcset4: srcset4,
			src: src,
			alt: alt,
			width: width,
			height: height
		});
	}, [srcset1, srcset2, srcset3, srcset4, alt, src, width, height]);

	// setTimeout(() => {
	// 	props.setJspObj({
	// 		mode: "Picture",
	// 		type: "Picture",
	// 		attrs1: attrs1,
	// 		attrs2: attrs2,
	// 	});
	// }, 400) // bad code


	return (
		<div>
			<p>srcset1</p>
			<input
				value={srcset1}
				onChange={(e) => setSrcset1(e.target.value)}
			/>
			<p>srcset2</p>
			<input
				value={srcset2}
				onChange={(e) => setSrcset2(e.target.value)}
			/>
			<p>srcset3</p>
			<input
				value={srcset3}
				onChange={(e) => setSrcset3(e.target.value)}
			/>
			<p>srcset4</p>
			<input
				value={srcset4}
				onChange={(e) => setSrcset4(e.target.value)}
			/>
			<p>src</p>
			<input
				value={src}
				onChange={(e) => setSrc(e.target.value)}
			/>
			<p>alt</p>
			<input
				value={alt}
				onChange={(e) => setAlt(e.target.value)}
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

export default TitlePicture;