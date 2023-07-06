import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./taskCard.css";
import { Task } from "./taskType";
//filtrare in base all'indice e cambiare il parametro all'interno dell'oggetto in sè
interface TaskCardProps {
  tasks: Task[];
//   todocount: number;
}

const TaskCard = ({ tasks }: TaskCardProps) => {
  const [visible, setVisible] = useState(true);

  const changeColor = (priority: string): string | undefined => {
    if (priority === "Medium") {
      return "yellow";
    } else if (priority === "High") {
      return "red";
    } else return undefined;
  };

  const handleClick = useCallback(
    (index: number) => {
      const updatedTasks = [...tasks];
      updatedTasks[index].isDone = true;
      setVisible(false);
    },
    [tasks]
  );
  useEffect(() => {
    if (visible === false) {
      setVisible(true);
    }
  }, [visible]);

  const todoCount = useMemo(() => {
    return tasks.filter((task) => !task.isDone).length;
  }, [tasks, visible]);

  const doneCount = useMemo(() => {
    return tasks.filter((task) => task.isDone).length;
  }, [tasks, todoCount]);

  return (
    <div>
  <div className="h1">Tasks to complete: {doneCount}/{tasks.length}</div>
    <div className="list-wrapper">
      <div className="lists"> 
        <div className="h1">To Do ({todoCount})</div>
        <div className="card-container">
          {tasks.map((task, index) =>
            task.isDone === false ? (
              <div
                key={index}
                className="card-wrapper mb-5 mt-5 d-flex flex-column"
              >
                <div className="container mt-1 mb-1">
                  <div className="title-priority">
                    <div className="title-font">{task.title}</div>
                    <div className="line-box">
                      <div
                        className="line"
                        style={{ backgroundColor: changeColor(task.priority) }}
                      ></div>
                    </div>
                  </div>
                  <div className="description-box mt-2">{task.description}</div>
                  <div className="d-flex flex-row">
                    <div className="author-box">di: {task.author}</div>

                    <div className="button-box">
                      <button
                        type="button"
                        className="btn done-btn btn-secondary"
                        onClick={() => handleClick(index)}
                      >
                        Done
                      </button>
                    </div>
                    <div>{task.isDone}</div>
                  </div>
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
      <div className="lists">
        <div className="h1">Done ({doneCount})</div>
        <div className="card-container">
          {tasks.map((task, index) =>
            task.isDone !== false ? (
              <div
                key={index}
                className="card-wrapper mb-5 mt-5 d-flex flex-column"
              >
                <div className="container mt-1 mb-1">
                  <div className="title-priority">
                    <div className="title-font">{task.title}</div>
                    <div className="line-box">
                      <div
                        className="line"
                        style={{ backgroundColor: "green" }}
                      ></div>
                    </div>
                  </div>
                  <div className="description-box">{task.description}</div>
                  <div className="d-flex flex-row">
                    <div className="author-box">di: {task.author}</div>
                  </div>
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default TaskCard;
