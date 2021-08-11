import React, { useState } from "react";
import tick from "assets/img/tick.png";
import { editTaskAction } from "../../../actions/getTaskListActions";
import { connect } from "react-redux";

const TaskSingle = ({ dispatch, task, is_completed, id }) => {
  const [isComplete] = useState(is_completed);
  const changeStatusOfTask = () => {
    let taskStatus = 0;
    if (isComplete === 0) {
      taskStatus = 1;
    }
    dispatch(editTaskAction({ id, task, taskStatus }));
  };

  return (
    <div className="singleTaskContainer">
      <div className="singleTaskContainer__checkboxSection  ml-3 mr-5">
        <div
          className="singleTaskContainer__checkbox"
          onClick={() => changeStatusOfTask()}
        >
          {isComplete ? (
            <img
              src={tick}
              alt="tick"
              className="singleTaskContainer__checkbox__tick"
            />
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="d-flex align-items-center">
        <p className={isComplete ? "crossedOut" : ""}>{task}</p>
      </div>
    </div>
  );
};

export default connect()(TaskSingle);
