
// import AttributeInput from "./AttributeInput";

import { useEffect, useState } from "react"

const AttributeInput = (props) => {

	const [attributeName, setAttributeName] = useState(props.name || "");
	const [attributeVal, setAttributeVal] = useState(props.val || "");

	// useEffect(() => {
	// 	props.setVal(attributeName, attributeVal);
	// }, [attributeName, attributeVal])

	return (
		<tr>
			<td>
				<input 
					value={attributeName}
					onChange={(e) => {
						setAttributeName(e.target.value)
						props.setVal(e.target.value, attributeVal);
					}}
				/>
			</td>
			<td>
				<input 
					value={attributeVal}
					onChange={(e) => {
						setAttributeVal(e.target.value)
						props.setVal(attributeName, e.target.value);
					}}
				/>
			</td>
		</tr>
	)
}


const AttributeTable = (props) => {
	const attributeInputs = props.attrs.map((v, i) => {
		return (
			<AttributeInput
				key={i}
				name={v.name}
				val={v.content}
				setVal={(n, v) => {
					var tmpAttr = props.attrs[i];
					var tmpAttrs = props.attrs;
					tmpAttr.name = n;
					tmpAttr.val = v;
					tmpAttrs[i] = tmpAttr;
					props.setAttrs(tmpAttrs);
					props.setChanged(true);
				}}
			/>
		)
	})
	const addAttr = () => {
		props.setAttrs([
			...props.attrs,
			{
				"name": "",
				"val": "",
			}
		])
	}

	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>attr. name</th>
						<th>attr. content</th>
					</tr>
				</thead>
				<tbody>
					{attributeInputs}
				</tbody>
			</table>
			<div>
				<button
					onClick={(e) => {
						addAttr();
					}}
				>
					Add Attribute!
				</button>
			</div>
		</div>
	)
}

export default AttributeTable;