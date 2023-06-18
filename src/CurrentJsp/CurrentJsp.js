

const CurrentJsp = (props) => {

	return (
		<div>
			<p>CurrentJsp: </p>
			<textarea
				className="CurrentJspTextArea"
				value={props.jsp}
				onChange={(e) => props.setJsp(e.target.value)}
				spellCheck="false"
			/>
		</div>
	)
}

export default CurrentJsp;