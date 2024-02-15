import { useState } from "react";

export default function Player({ inititalName, symbol }) {
	const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(inititalName);


	function handleEditClick() {
		setIsEditing(editing => !editing );
	}
  function handleSaveClick(event) {
    setPlayerName(event.target.value);
  }
	let editablePlayerName = <span className="player-name">{playerName}</span>;
	let btnCaption = "Edit";
  
	if (isEditing) {
		btnCaption = "Save";
		editablePlayerName = (
			<input
				type="text"
				value={playerName}
				required
        onChange={handleSaveClick}
			/>
		);
	}
	return (
		<li>
			<span className="player">
				{editablePlayerName}
				<span className="player-symbol">{symbol}</span>
			</span>
			<button onClick={handleEditClick}>{btnCaption}</button>
		</li>
	);
}
