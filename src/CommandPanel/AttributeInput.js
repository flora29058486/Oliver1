import { useEffect, useState } from "react"


const AttributeInput = (props) => {

	const [attributeName, setAttributeName] = useState(props.name || "");
	const [attributeVal, setAttributeVal] = useState(props.val || "");

	useEffect(() => {
		props.setVal(attributeName, attributeVal);
	}, [attributeName, attributeVal])

	return (
		<tr>
			<td>
				<input 
					value={attributeName}
					onChange={(e) => setAttributeName(e.target.value)}
				/>
			</td>
			<td>
				<input 
					value={attributeVal}
					onChange={(e) => setAttributeVal(e.target.value)}
				/>
			</td>
		</tr>
	)
}

export default AttributeInput;