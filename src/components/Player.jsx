import { useState } from "react";

export default function Player({ name, symbol }) {
	const [isEditing, setIsEditing] = useState(false);

	function handleEditClick() {
		setIsEditing(!isEditing);
	}
	let playerName = <span className="player-name">{name}</span>;
	let btnCaption = "Edit";
	if (isEditing) {
		btnCaption = "Save";
		playerName = (
			<input
				type="text"
				value={name}
				required
			/>
		);
	}
	return (
		<li>
			<span className="player">
				{playerName}
				<span className="player-symbol">{symbol}</span>
			</span>
			<button onClick={handleEditClick}>{btnCaption}</button>
		</li>
	);
}
