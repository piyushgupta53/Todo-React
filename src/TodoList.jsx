import React from "react";
import styles from "./Todo.module.css";

function TodoList({ todos, setTodos }) {
  return (
    <>
      {todos.length === 0 ? (
        <p className={styles.info}>🤌 All caught up. What's next?</p>
      ) : (
        <ol className={styles.taskList}>
          {todos.map(({ id, value, isCompleted }) => (
            <li key={id} className={styles.task}>
              <button
                className={`${styles.eachTask} ${
                  isCompleted ? styles.completed : undefined
                }  `}
                onClick={() => {
                  setTodos(
                    todos.map((todo) => {
                      if (todo.id !== id) {
                        return todo;
                      }

                      return {
                        ...todo,
                        isCompleted: !todo.isCompleted,
                      };
                    })
                  );
                }}
              >
                {value}
              </button>
              <button
                className={styles.removeBtn}
                onClick={() => {
                  setTodos(
                    todos.filter((todo) => {
                      return todo.id !== id;
                    })
                  );
                }}
              >
                X
              </button>
            </li>
          ))}
        </ol>
      )}
    </>
  );
}

export default TodoList;
