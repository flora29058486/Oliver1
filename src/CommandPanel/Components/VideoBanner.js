import { useEffect, useState} from "react";

const VideoBanner = (props) => {
	const [smallwebm, setSmallwebm] = useState("phd Removal 550x309");
	const [smallmp4, setSmallmp4] = useState("phd Removal 550x309");
	const [bigwebm, setBigwebm] = useState("phd Removal 1200x333");
	const [bigmp4, setBigmp4] = useState("phd Removal 1200x333");


	useEffect(() => {
		props.setJspObj({
			mode: "VideoBanner",
			type: "VideoBanner",
			smallwebm: smallwebm,
			smallmp4: smallmp4,
			bigwebm: bigwebm,
			bigmp4: bigmp4
		});
	}, [smallwebm, smallmp4, bigwebm, bigmp4]);

	return (
		<div>
			<p>smallwebm</p>
			<input
				value={smallwebm}
				onChange={(e) => setSmallwebm(e.target.value)}
			/>
			<p>smallmp4</p>
			<input
				value={smallmp4}
				onChange={(e) => setSmallmp4(e.target.value)}
			/>
			<p>bigwebm</p>
			<input
				value={bigwebm}
				onChange={(e) => setBigwebm(e.target.value)}
			/>
			<p>bigmp4</p>
			<input
				value={bigmp4}
				onChange={(e) => setBigmp4(e.target.value)}
			/>
		</div>
	);
}

export default VideoBanner;
