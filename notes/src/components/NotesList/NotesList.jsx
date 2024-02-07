import styles from "./NotesList.module.scss";
import { Note } from "../Note/Note";
import { AddNote } from "../AddNote/AddNote";

export const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className={styles.list}>
      {notes.map((note) => (
        <Note
          id={note.id}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};
