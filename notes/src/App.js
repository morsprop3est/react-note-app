import { NotesList } from "./components/NotesList/NotesList";
import styles from "./App.scss";
import React from "react";
import { nanoid } from "nanoid";
import { Search } from "./components/Search/Search";

const App = () => {
  const [notes, setNotes] = React.useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "15/04/2021",
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "16/04/2021",
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "17/04/2021",
    },
  ]);

  const [searchText, setSearchText] = React.useState("");

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="App">
      <Search handleSearchNote={setSearchText} />
      <NotesList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText),
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
};

export default App;
