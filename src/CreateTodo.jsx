import React from "react";
import styles from "./Todo.module.css";

function CreateTodo({ handleAddItem }) {
  const [value, setValue] = React.useState("");
  const inputRef = React.useRef();

  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    handleAddItem(value);
    setValue("");
  }
  return (
    <>
      <form className={styles.addTask}>
        <label className={styles.newTask} htmlFor="new-task">
          New task:
        </label>
        <input
          type="text"
          id="new-task"
          ref={inputRef}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button className={styles.addBtn} onClick={handleSubmit}>
          Add
        </button>
      </form>
    </>
  );
}

export default CreateTodo;
