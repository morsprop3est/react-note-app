import styles from "./AddNote.module.scss";
import React from "react";

export const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = React.useState("");
  const characterLimit = 200;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };

  return (
    <div className={styles.note}>
      <textarea
        cols="8"
        rows="10"
        placeholder="Type to add a note..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className={styles.footer}>
        <small>{characterLimit - noteText.length} Remaining</small>
        <button className={styles.save_button} onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};
