import React, { useEffect } from "react";
import TaskSingle from "components/TaskLists/components/taskSingle";
import { fetchTasks } from "../../actions/getTaskListActions";
import { connect } from "react-redux";

const TasksList = ({
  dispatch,
  editTaskSucces,
  loading,
  taskList,
  hasErrors,
}) => {
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch, editTaskSucces]);

  return (
    <div>
      {loading && (
        <div className="d-flex justify-content-center mt-2">
          <div className="spinner-border text-dark" role="status"></div>
        </div>
      )}
      {taskList && taskList.map((el) => <TaskSingle key={el.id} {...el} />)}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.tasksList.loading,
  taskList: state.tasksList.tasks,
  hasErrors: state.tasksList.hasErrors,
  editTaskSucces: state.editTask.success,
});

export default connect(mapStateToProps)(TasksList);
