import styles from "./Note.module.scss";
import { MdDeleteForever } from "react-icons/md";

export const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className={styles.note}>
      <span>{text}</span>
      <div className={styles.footer}>
        <small>{date}</small>
        <MdDeleteForever
          onClick={() => handleDeleteNote(id)}
          classname={styles.delete_icon}
          size="1.3em"
        />
      </div>
    </div>
  );
};
